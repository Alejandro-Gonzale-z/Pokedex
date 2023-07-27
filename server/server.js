const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const session = require("express-session");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'css')));
dotenv.config();

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

mongoose.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_host}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const PokedexSchema = {
    name: {
        type: String,
        required: true
    },    
    PokedexId:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }, 
    elementalType: {
        type: [String],
        required: true
    },
    strength: {
        type: [String],
        required: true
    },
    weakness: {
        type: [String],
        required: true
    },
    mainPicture: {
        type: String,
        required: true
    },
    moveset: [
        {
            levelLearned:{
                type: Number,
                required: true
        },
            moveName: {
                type: String,
                required: true
        },
        }
    ],
    evolutionChain: [
        {
        pokemon: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pokedex'
        },
        method: String
        }
    ]
}

const Pokedex = mongoose.model("Pokedex", PokedexSchema, "Pokedex");

function authenticated(username, password) {
    const usernameHidden = process.env.login_username;
    const passwordHidden = process.env.login_password;

    if (username ===usernameHidden && password === passwordHidden){
        return true;
    } else{
        return false;
    }
}

function createMoveset(moveNameInput, levelLearnedInput){
    let moveset = [];
    const nameArray = moveNameInput.split(',').map((name)=>name.trim());
    const levelArray = levelLearnedInput.split(',').map((level)=>Number(level.trim()));

    if (nameArray.length === levelArray.length) {
        const dataLength = nameArray.length;
        for (let i=0; i < dataLength; i++){
            let move = {
                levelLearned: levelArray[i],
                moveName: nameArray[i]
            };
            console.log(move);
            moveset.push(move);
        }
        return moveset;
    } else{
        console.log("Moveset paremeters are not of equal length");
        return null;
    }
}

// API route
app.get("/api", function (req,res){
    Pokedex.find()
    .then((pokedexData)=> {
        res.json(pokedexData);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({error: "An error occured while fetching pokedex data"})
    })
})

app.get("/pokemon/:name", function (req,res){
    Pokedex.findOne({name:req.params.name})
    .then((pokedexData)=> {
        res.json(pokedexData);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({error: "An error occured while fetching pokedex data"})
    })
})

// HTML serving routes
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/login.html");
})

app.get("/input", function(req,res){
    if (req.session.authenticated){
        res.sendFile(__dirname + "/input.html");
    } else {
        res.redirect('/login');
    }
})

//  html to mongodb logic 
app.post("/input", function(req, res){
    const moveset = createMoveset(req.body.moveName, req.body.levelLearned);
    if (moveset === null){
        res.status(400).send("Moveset parameters are not of equal length, Retry");
        return;
    }
    
    let newPokedex = new Pokedex({
        name: req.body.name ,
        PokedexId: req.body.PokedexId ,
        weight: req.body.weight,
        height: req.body.height,
        description: req.body.description , 
        elementalType: req.body.elementalType ? req.body.elementalType.split(" "): [] ,
        strength: req.body.strength ? req.body.strength.split(" "): [] ,
        weakness: req.body.weakness ? req.body.weakness.split(" "): [] ,
        mainPicture: req.body.mainPicture ,
        moveset: moveset,
        evolutionChain: []
    });
    newPokedex.save() 
        .then(Pokemon => {
            console.log("Saved:", Pokemon.name);
            res.redirect("/input");
        })
        .catch(error =>{
            console.log(error);
            res.status(500).send("An error occured while saving pokedex entry");
        })
    });

// allowing admin to add to mongodb
app.post("/login", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    if (authenticated(username,password)) {
        req.session.authenticated = true;
        res.redirect("/input");
    } else{
        res.redirect('/login');
        //res.status(401).send("Invalid Credentials");
    }

})

// starts server     
app.listen(5000, ()=>{
    console.log("Server is running on 5000");
})

