import axios from "axios";
import {useState} from "react";
import Moves from "../../MovesInterface";

interface movesetData{
    movesetData: Moves[];
}

const Moveset: React.FC<movesetData> = ({movesetData}) => {
    return(
        <div>
            {/* must map moveset data  */}
            <p></p>
        </div>
    )
}

export default Moveset;