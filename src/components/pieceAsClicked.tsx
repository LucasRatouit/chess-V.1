import { SetStateAction } from "react";
import { chessPlace, chessColor } from "./casesColor";

const pieceAsClicked = (
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
        const index = checkCases(x, y, id)
        let pieceNextColor = ""
        if (index !== -1 && index < cases.length) {
            const pieceNext = cases[checkCases(x, y, id)].match(/\/([^/]+)\.png/)
            if (pieceNext !== null) {
                pieceNextColor = pieceNext[1].split("-")[0]
            }
            if (cases[checkCases(x, y, id)] === "" || pieceNextColor === "black") {
                listColors[checkCases(x, y, id)] = "bg-green-500"
            }
        }
    }
    const checkCasesWhile = (x: number, y: number, id: string, listColors: string[]) => {
        let xx = x
        let yy = y
        const index = checkCases(xx, yy, id)
        let pieceNextColor = ""
        let blackPiece = false
        if (index !== -1 && index < cases.length) {
            const pieceNext = cases[checkCases(xx, yy, id)].match(/\/([^/]+)\.png/)
            if (pieceNext !== null) {
                pieceNextColor = pieceNext[1].split("-")[0]
            }
            while (cases[checkCases(xx, yy, id)] === "" && blackPiece === false || pieceNextColor === "black" && blackPiece === false) {
                if (cases[checkCases(xx, yy, id)] === "" || pieceNextColor === "black") {
                    listColors[checkCases(xx, yy, id)] = "bg-green-500"
                    if (pieceNextColor === "black") {
                        blackPiece = true
                    }
                }
                xx = xx + x;
                yy = yy + y;
                const index = checkCases(xx, yy, id)
                if (index !== -1 && index < cases.length) {
                    const pieceNext = cases[checkCases(xx, yy, id)].match(/\/([^/]+)\.png/)
                    if (pieceNext !== null) {
                        pieceNextColor = pieceNext[1].split("-")[0]
                    }
                }
            }
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
                const listColors = [...chessColor]
                if (res === "white-sbire") {
                    // console.log("sbire");
                    let index = checkCases(1, 0, id)
                    if (index !== -1 && index < cases.length) {
                        if (cases[checkCases(1, 0, id)] === "") {
                            const idSplited = id.split("-");
                            listColors[checkCases(1, 0, id)] = "bg-green-500"
                            if (cases[checkCases(2, 0, id)] === "" && idSplited[0] === "2") {
                                listColors[checkCases(2, 0, id)] = "bg-green-500"
                            }
                        }
                    }
                    //
                    index = checkCases(1, 1, id)
                    let pieceNextColor = ""
                    if (index !== -1 && index < cases.length) {
                        const pieceNext = cases[checkCases(1, 1, id)].match(/\/([^/]+)\.png/)
                        if (pieceNext !== null) {
                            pieceNextColor = pieceNext[1].split("-")[0]
                        }
                        if (pieceNextColor === "black") {
                            listColors[checkCases(1, 1, id)] = "bg-green-500"
                        }
                    }
                    //
                    index = checkCases(1, -1, id)
                    pieceNextColor = ""
                    if (index !== -1 && index < cases.length) {
                        const pieceNext = cases[checkCases(1, -1, id)].match(/\/([^/]+)\.png/)
                        if (pieceNext !== null) {
                            pieceNextColor = pieceNext[1].split("-")[0]
                        }
                        if (pieceNextColor === "black") {
                            listColors[checkCases(1, -1, id)] = "bg-green-500"
                        }
                    }
                } else if (res === "white-tower") {
                    // console.log("tower");
                    checkCasesWhile(1, 0, id, listColors);
                    checkCasesWhile(0, 1, id, listColors);
                    checkCasesWhile(-1, 0, id, listColors);
                    checkCasesWhile(0, -1, id, listColors);
                } else if (res === "white-horse") {
                    // console.log("horse");
                    checkCasesBasic(2, 1, id, listColors);
                    checkCasesBasic(2, -1, id, listColors);
                    checkCasesBasic(1, 2, id, listColors);
                    checkCasesBasic(1, -2, id, listColors);
                    checkCasesBasic(-1, 2, id, listColors);
                    checkCasesBasic(-1, -2, id, listColors);
                    checkCasesBasic(-2, 1, id, listColors);
                    checkCasesBasic(-2, -1, id, listColors);
                } else if (res === "white-crazy") {
                    // console.log("crazy");
                    checkCasesWhile(1, 1, id, listColors)
                    checkCasesWhile(-1, -1, id, listColors)
                    checkCasesWhile(1, -1, id, listColors)
                    checkCasesWhile(-1, 1, id, listColors)
                } else if (res === "white-queen") {
                    // console.log("queen");
                    checkCasesWhile(1, 1, id, listColors)
                    checkCasesWhile(-1, -1, id, listColors)
                    checkCasesWhile(1, -1, id, listColors)
                    checkCasesWhile(-1, 1, id, listColors)
                    checkCasesWhile(1, 0, id, listColors)
                    checkCasesWhile(0, 1, id, listColors)
                    checkCasesWhile(-1, 0, id, listColors)
                    checkCasesWhile(0, -1, id, listColors)
                } else if (res === "white-king") {
                    // console.log("king");
                    checkCasesBasic(1, 1, id, listColors);
                    checkCasesBasic(-1, -1, id, listColors);
                    checkCasesBasic(1, 0, id, listColors);
                    checkCasesBasic(0, 1, id, listColors);
                    checkCasesBasic(-1, 1, id, listColors);
                    checkCasesBasic(1, -1, id, listColors);
                    checkCasesBasic(-1, 0, id, listColors);
                    checkCasesBasic(0, -1, id, listColors);
                }
                setBgColor(listColors);
            }
        }
    }
}

export default pieceAsClicked;
