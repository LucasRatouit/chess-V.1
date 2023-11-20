import { SetStateAction } from "react";
import { chessPlace, chessColor } from "./casesColor";
import randomMove from "./randomMove";

const caseAsClicked = (
    index: number,
    cases: string[],
    setCases: React.Dispatch<SetStateAction<string[]>>,
    setBgColor: React.Dispatch<React.SetStateAction<string[]>>,
    pieceSelect: string,
    setPieceSelect: React.Dispatch<SetStateAction<string>>,
    idSelect: string,
    setIdSelect: React.Dispatch<SetStateAction<string>>
    ) => {

    //

    const element = document.getElementById(chessPlace[index]);
    if (element) {
        const className = element?.className
        const regex: RegExpMatchArray | null = className?.match(/\s+bg-(\S+)/);
        
        if (regex && regex[1] === "green-500") {
            setBgColor([...chessColor]);
            setPieceSelect("");
            setIdSelect("");
            const copyCases: string[] = [...cases];
            copyCases[index] = `./${pieceSelect}.png`;
            copyCases[chessPlace.indexOf(idSelect)] = '';
            setCases(copyCases);
            setTimeout(() => {
                randomMove(copyCases, setCases);
            }, 500);
        }
    }
}

export default caseAsClicked;
