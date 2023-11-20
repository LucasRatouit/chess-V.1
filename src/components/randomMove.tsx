import { SetStateAction } from "react";
import { chessPlace } from "./casesColor";

const randomMove = (
    cases: string[],
    setCases: React.Dispatch<SetStateAction<string[]>>,
    notMovePossibleCount = 0
    ) => {
    
    //
    
    const checkCases = (x: number, y: number, id: string) => {
        const [vertical, horizontal] = id.split("-");
        const updatedVertical = (+vertical + x).toString();
        const updatedHorizontal = (+horizontal + y).toString();
        const updatedId = `${updatedVertical}-${updatedHorizontal}`;
        return chessPlace.indexOf(updatedId);
    }
    const checkCasesBasic = (x: number, y: number, id: string) => {
        const index = checkCases(x, y, id)
        let pieceNextColor = ""
        if (index !== -1 && index < cases.length) {
            const pieceNext = cases[checkCases(x, y, id)].match(/\/([^/]+)\.png/)
            if (pieceNext !== null) {
                pieceNextColor = pieceNext[1].split("-")[0]
            }
            if (cases[checkCases(x, y, id)] === "" || pieceNextColor === "white") {
                if (pieceNextColor === "white") {
                    availableAttacks.push(chessPlace[checkCases(x, y, id)]);
                } else {
                    availableCases.push(chessPlace[checkCases(x, y, id)]);
                }
            }
        }
    }
    const checkCasesWhile = (x: number, y: number, id: string) => {
        let xx = x
        let yy = y
        const index = checkCases(xx, yy, id)
        let pieceNextColor = ""
        let whitePiece = false
        if (index !== -1 && index < cases.length) {
            const pieceNext = cases[checkCases(xx, yy, id)].match(/\/([^/]+)\.png/)
            if (pieceNext !== null) {
                pieceNextColor = pieceNext[1].split("-")[0]
            }
            while (cases[checkCases(xx, yy, id)] === "" && whitePiece === false || pieceNextColor === "white" && whitePiece === false) {
                if (cases[checkCases(xx, yy, id)] === "" || pieceNextColor === "white") {
                    if (pieceNextColor === "white") {
                        whitePiece = true;
                        availableAttacks.push(chessPlace[checkCases(xx, yy, id)]);
                    } else {
                        availableCases.push(chessPlace[checkCases(xx, yy, id)]);
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
    
    const blackList =  cases.map((e, index) => ({e, index}))
    .filter(({ e }) => /black/.test(e))
    .map(({ index }) => index);
    if (!blackList.length) {
        console.log("échec et mat");
        return;
    }
    const randomIndex = Math.floor(Math.random() * blackList.length);
    const caseValue = cases[blackList[randomIndex]];
    const index = blackList[randomIndex];
    const id = chessPlace[index];
    const regex = caseValue.match(/\/([^/]+)\.png/)
    const availableCases: string[] = [];
    const availableAttacks: string[] = [];
    
    //
    
    if (regex) {
        if (regex[1] === "black-sbire") {
            // console.log("sbire");
            let index = checkCases(-1, 0, id)
            if (index !== -1 && index < cases.length) {
                if (cases[checkCases(-1, 0, id)] === "") {
                    const idSplited = id.split("-");
                    availableCases.push(chessPlace[checkCases(-1, 0, id)]);
                    if (cases[checkCases(-2, 0, id)] === "" && idSplited[0] === "7") {
                        availableCases.push(chessPlace[checkCases(-2, 0, id)]);
                    }
                }
            }
            //
            index = checkCases(-1, 1, id)
            let pieceNextColor = ""
            if (index !== -1 && index < cases.length) {
                const pieceNext = cases[checkCases(-1, 1, id)].match(/\/([^/]+)\.png/)
                if (pieceNext !== null) {
                    pieceNextColor = pieceNext[1].split("-")[0]
                }
                if (pieceNextColor === "white") {
                    availableAttacks.push(chessPlace[checkCases(-1, 1, id)]);
                }
            }
            //
            index = checkCases(-1, -1, id)
            pieceNextColor = ""
            if (index !== -1 && index < cases.length) {
                const pieceNext = cases[checkCases(-1, -1, id)].match(/\/([^/]+)\.png/)
                if (pieceNext !== null) {
                    pieceNextColor = pieceNext[1].split("-")[0]
                }
                if (pieceNextColor === "white") {
                    availableAttacks.push(chessPlace[checkCases(-1, -1, id)]);
                }
            }
        } else if (regex[1] === "black-tower") {
            // console.log("tower");
            checkCasesWhile(1, 0, id);
            checkCasesWhile(0, 1, id);
            checkCasesWhile(-1, 0, id);
            checkCasesWhile(0, -1, id);
        } else if (regex[1] === "black-horse") {
            // console.log("horse");
            checkCasesBasic(2, 1, id);
            checkCasesBasic(2, -1, id);
            checkCasesBasic(1, 2, id);
            checkCasesBasic(1, -2, id);
            checkCasesBasic(-1, 2, id);
            checkCasesBasic(-1, -2, id);
            checkCasesBasic(-2, 1, id);
            checkCasesBasic(-2, -1, id);
        } else if (regex[1] === "black-crazy") {
            // console.log("crazy");
            checkCasesWhile(1, 1, id)
            checkCasesWhile(-1, -1, id)
            checkCasesWhile(1, -1, id)
            checkCasesWhile(-1, 1, id)
        } else if (regex[1] === "black-queen") {
            // console.log("queen");
            checkCasesWhile(1, 1, id)
            checkCasesWhile(-1, -1, id)
            checkCasesWhile(1, -1, id)
            checkCasesWhile(-1, 1, id)
            checkCasesWhile(1, 0, id)
            checkCasesWhile(0, 1, id)
            checkCasesWhile(-1, 0, id)
            checkCasesWhile(0, -1, id)
        } else if (regex[1] === "black-king") {
            // console.log("king");
            checkCasesBasic(1, 1, id);
            checkCasesBasic(-1, -1, id);
            checkCasesBasic(1, 0, id);
            checkCasesBasic(0, 1, id);
            checkCasesBasic(-1, 1, id);
            checkCasesBasic(1, -1, id);
            checkCasesBasic(-1, 0, id);
            checkCasesBasic(0, -1, id);
        }
        if (availableCases.length || availableAttacks.length) {
            const copyCases = [...cases];
            if (availableAttacks.length) {
                // console.log("Attack is ready !");
                const randomAttack = Math.floor(Math.random() * availableAttacks.length);
                copyCases[chessPlace.indexOf(availableAttacks[randomAttack])] = regex[0];
            } else {
                // console.log("Attack is not ready !");
                const randomMove = Math.floor(Math.random() * availableCases.length);
                copyCases[chessPlace.indexOf(availableCases[randomMove])] = regex[0];
            }
            copyCases[index] = '';
            setCases(copyCases);
        } else if (notMovePossibleCount >= 64) {
            // console.log("Don't move possible: échec et mat");
        } else {
            // console.log("Don't move possible: repeat function");
            randomMove(cases, setCases, notMovePossibleCount + 1);
        }
    }
}

export default randomMove;
