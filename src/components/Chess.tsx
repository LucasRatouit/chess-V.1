import { useState } from "react";
import { chessPlace } from "./casesColor";
import { chessColor } from "./casesColor";
import { startGame } from "./startGame";
import { pieceAsClicked } from "./pieceAsClicked";
import { caseAsClicked } from "./caseAsClicked";

function Chess() {
    const [cases, setCases] = useState<string[]>(Array(64).fill(""));
    const [bgColor, setBgColor] = useState<string[]>(chessColor);
    // const [selectStatut, setSelectStatut] = useState<boolean>(false);
    const [pieceSelect, setPieceSelect] = useState<string>("");
    const [idSelect, setIdSelect] = useState("");

    return (
       <div className="flex flex-col gap-y-6 justify-center place-items-center h-full">
            <button className="hover:bg-black hover:text-white px-4 py-2 rounded-full" onClick={() => startGame(cases, setCases)}>START THE CHESS</button>
            <div className="relative grid grid-cols-8 border-8 border-spacing-10 border-amber-800">
                {cases.map((value, index) => (
                    <p key={index} id={chessPlace[index]} className={`hover:bg-red-200 flex justify-center place-items-center ${bgColor[index]} w-20 h-20`} onClick={() => caseAsClicked(index, cases, setCases, setBgColor, pieceSelect, setPieceSelect, idSelect)}>
                        <img src={value} alt="" onClick={(e) => pieceAsClicked(e, cases, setBgColor, setPieceSelect, idSelect, setIdSelect)}/>
                    </p>
                ))}
                <p className="absolute top-0 -left-10">X-x</p>
                <p className="absolute -bottom-10 right-0">x-X</p>
            </div>
       </div> 
    )
}

export default Chess;
