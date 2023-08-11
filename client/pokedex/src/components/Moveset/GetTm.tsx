import bug from "./tms/bug-tm.png";
import dark from "./tms/dark-tm.png";
import dragon from "./tms/dragon-tm.png";
import electric from "./tms/electric-tm.png";
import fairy from "./tms/fairy-tm.png";
import fighting from "./tms/fighting-tm.png";
import fire from "./tms/fire-tm.png";
import flying from "./tms/flying-tm.png";
import ghost from "./tms/ghost-tm.png";
import grass from "./tms/grass-tm.png";
import ground from "./tms/ground-tm.png";
import ice from "./tms/ice-tm.png";
import normal from "./tms/normal-tm.png";
import poison from "./tms/poison-tm.png";
import psychic from "./tms/psychic-tm.png";
import rock from "./tms/rock-tm.png";
import steel from "./tms/steel-tm.png";
import water from "./tms/water-tm.png";

const ImageDictionary = [
    {type: "Bug", image: bug},
    {type: "Dark", image: dark},
    {type: "Dragon", image: dragon},
    {type: "Electric", image: electric},
    {type: "Fairy", image: fairy},
    {type: "Fighting", image: fighting},
    {type: "Fire", image: fire},
    {type: "Flying", image: flying},
    {type: "Ghost", image: ghost},
    {type: "Grass", image: grass},
    {type: "Ground", image: ground},
    {type: "Ice", image: ice},
    {type: "Normal", image: normal},
    {type: "Poison", image: poison},
    {type: "Psychic", image: psychic},
    {type: "Rock", image: rock},
    {type: "Steel", image: steel},
    {type: "Water", image: water}
]

export function GetTm(type: string) {
    const image = ImageDictionary.find(img => img.type === type);
    return image ? image.image : normal;
}

export default GetTm;