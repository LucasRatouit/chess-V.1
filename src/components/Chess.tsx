import { useState } from "react";
import { chessPlace } from "./casesColor";
import { chessColor } from "./casesColor";
import startGame from "./startGame";
import pieceAsClicked from "./pieceAsClicked";
import caseAsClicked from "./caseAsClicked";

function Chess() {
    const [cases, setCases] = useState<string[]>(Array(64).fill(""));
    const [bgColor, setBgColor] = useState<string[]>(chessColor);
    const [pieceSelect, setPieceSelect] = useState<string>("");
    const [idSelect, setIdSelect] = useState<string>("");
    const [turnToEnemy, setTurnToEnemy] = useState<boolean>(false);
    const [info, setInfo] = useState<string>("It's the first version !")

    return (
        <div className="flex flex-col gap-y-5 justify-center place-items-center h-full">
            <div className="flex flex-row">
                <img className={`w-8 spinAnim ${turnToEnemy ? "visible" : "hidden"}`} src="./load.svg" alt="loading svg" />
                <button className="hover:bg-black hover:text-white px-4 py-2 font-medium rounded-full" onClick={() => startGame(cases, setCases, setInfo)}>START THE CHESS</button>
                <img className={`w-8 spinAnim ${turnToEnemy ? "visible" : "hidden"}`} src="./load.svg" alt="loading svg" />
            </div>
            <div className="relative grid grid-cols-8 border-8 border-spacing-10 border-amber-800">
                {cases.map((value, index) => (
                    <p key={index} id={chessPlace[index]} className={`hover:bg-red-200 flex justify-center place-items-center ${bgColor[index]} w-20 h-20`} onClick={() => caseAsClicked(index, cases, setCases, setBgColor, pieceSelect, setPieceSelect, idSelect, setIdSelect, setTurnToEnemy, setInfo)}>
                        <img src={value} alt="" onClick={(e) => pieceAsClicked(e, cases, setBgColor, setPieceSelect, idSelect, setIdSelect)}/>
                    </p>
                ))}
            </div>
            <p className="bg-black text-white px-6 py-1 text-lg font-semibold">{info}</p>
        </div> 
    )
}

export default Chess;
