import { SetStateAction } from "react";
import { chessPlace, chessColor } from "./casesColor";

export const pieceAsClicked = (
    e: React.MouseEvent<HTMLImageElement>,
    cases: string[],
    setBgColor: React.Dispatch<SetStateAction<string[]>>,
    setPieceSelect: React.Dispatch<SetStateAction<string>>,
    idSelect: string,
    setIdSelect: React.Dispatch<SetStateAction<string>>
    ) => {

    //

    const checkCases = (x: number, y: number, id: string) => {
        const [vertical, horizontal] = id.split("-");
        const updatedVertical = (+vertical + x).toString();
        const updatedHorizontal = (+horizontal + y).toString();
        const updatedId = `${updatedVertical}-${updatedHorizontal}`;
        return chessPlace.indexOf(updatedId);
    }
    const checkCasesBasic = (x: number, y: number, id: string, listColors: string[]) => {
        if (cases[checkCases(x, y, id)] === "" && cases[checkCases(x, y, id)] !== undefined) {
            listColors[checkCases(x, y, id)] = "bg-green-500"
        }
    }
    const checkCasesWhile = (x: number, y: number, id: string, listColors: string[]) => {
        let xx = x
        let yy = y
        while (cases[checkCases(xx, yy, id)] === "" && cases[checkCases(xx, yy, id)] !== undefined) {
            if (cases[checkCases(xx, yy, id)] === "") {
                listColors[checkCases(xx, yy, id)] = "bg-green-500"
            }
            xx=xx+x;
            yy=yy+y;
        }
    }

    //

    const id = e.currentTarget.parentElement?.id;
    if (id) {
        const src = e.currentTarget.src ;
        const regex: RegExpMatchArray | null = src.match(/\/([^/]+)\.png/)
        if (regex) {
            const res: string = regex[1]; // récup le nom de la pièce
            setPieceSelect(res);
            setIdSelect(id);
            if (id === idSelect) {
                setBgColor([...chessColor])
                console.log('same ID')
                setIdSelect("")
            } else {
                if (res === "white-sbire") {
                    // console.log("sbire");
                    const listColors = [...chessColor]
                    checkCasesBasic(1, 0, id, listColors)
                    setBgColor(listColors)
                }
                if (res === "white-tower") {
                    // console.log("tower");
                    const listColors = [...chessColor];
                    checkCasesWhile(1, 0, id, listColors);
                    checkCasesWhile(0, 1, id, listColors);
                    checkCasesWhile(-1, 0, id, listColors);
                    checkCasesWhile(0, -1, id, listColors);
                    setBgColor(listColors);
                }
                if (res === "white-horse") {
                    // console.log("horse");
                    const listColors = [...chessColor]
                    checkCasesBasic(2, 1, id, listColors);
                    checkCasesBasic(2, -1, id, listColors);
                    checkCasesBasic(1, 2, id, listColors);
                    checkCasesBasic(1, -2, id, listColors);
                    checkCasesBasic(-1, 2, id, listColors);
                    checkCasesBasic(-1, -2, id, listColors);
                    checkCasesBasic(-2, 1, id, listColors);
                    checkCasesBasic(-2, -1, id, listColors);
                    setBgColor(listColors)
                }
                if (res === "white-crazy") {
                    // console.log("crazy");
                    const listColors = [...chessColor]
                    checkCasesWhile(1, 1, id, listColors)
                    checkCasesWhile(-1, -1, id, listColors)
                    checkCasesWhile(1, -1, id, listColors)
                    checkCasesWhile(-1, 1, id, listColors)
                    setBgColor(listColors)
                }
                if (res === "white-queen") {
                    // console.log("queen");
                    const listColors = [...chessColor]
                    checkCasesWhile(1, 1, id, listColors)
                    checkCasesWhile(-1, -1, id, listColors)
                    checkCasesWhile(1, -1, id, listColors)
                    checkCasesWhile(-1, 1, id, listColors)
                    checkCasesWhile(1, 0, id, listColors)
                    checkCasesWhile(0, 1, id, listColors)
                    checkCasesWhile(-1, 0, id, listColors)
                    checkCasesWhile(0, -1, id, listColors)
                    setBgColor(listColors);
                }
                if (res === "white-king") {
                    console.log("king");
                    const listColors = [...chessColor]
                    checkCasesBasic(1, 1, id, listColors);
                    checkCasesBasic(-1, -1, id, listColors);
                    checkCasesBasic(1, 0, id, listColors);
                    checkCasesBasic(0, 1, id, listColors);
                    checkCasesBasic(-1, 1, id, listColors);
                    checkCasesBasic(1, -1, id, listColors);
                    checkCasesBasic(-1, 0, id, listColors);
                    checkCasesBasic(0, -1, id, listColors);
                    setBgColor(listColors);
                }
            }
        }
    }
}