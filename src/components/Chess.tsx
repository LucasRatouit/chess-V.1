import { useState } from "react";

// const chess =  ["8-1","8-2","8-3","8-4","8-5","8-6","8-7","8-8",
//                 "7-1","7-2","7-3","7-4","7-5","7-6","7-7","7-8",
//                 "6-1","6-2","6-3","6-4","6-5","6-6","6-7","6-8",
//                 "5-1","5-2","5-3","5-4","5-5","5-6","5-7","5-8",
//                 "4-1","4-2","4-3","4-4","4-5","4-6","4-7","4-8",
//                 "3-1","3-2","3-3","3-4","3-5","3-6","3-7","3-8",
//                 "2-1","2-2","2-3","2-4","2-5","2-6","2-7","2-8",
//                 "1-1","1-2","1-3","1-4","1-5","1-6","1-7","1-8",
//             ];

function Chess() {
    const [cases, setCases] = useState(Array(64).fill(""));

    const casesColor = (index: number) => {
        if (index%2 === 1 && index < 8) {
            return "bg-black"
        } else if (index%2 === 0 && index >= 8 && index < 16) {
            return "bg-black"
        } else if (index%2 === 1 && index >= 16 && index < 24) {
            return "bg-black"
        } else if (index%2 === 0 && index >= 24 && index < 32) {
            return "bg-black"
        } else if (index%2 === 1 && index >= 32 && index < 40) {
            return "bg-black"
        } else if (index%2 === 0 && index >= 40 && index < 48) {
            return "bg-black"
        } else if (index%2 === 1 && index >= 48 && index < 56) {
            return "bg-black"
        } else if (index%2 === 0 && index >= 56 && index < 64) {
            return "bg-black"
        }
    }

    const startGame = () => {
        let arr = [...cases].fill("./black-sbire.png", 8, 15+1)
        arr = [...arr].fill("./black-tower.png", 0, 7+1)
        arr = [...arr].fill("./black-horse.png", 1, 6+1)
        arr = [...arr].fill("./black-crazy.png", 2, 5+1)
        arr = [...arr].fill("./black-queen.png", 3, 3+1)
        arr = [...arr].fill("./black-king.png", 4, 4+1)
        arr = [...arr].fill("./white-sbire.png", 48, 55+1)
        arr = [...arr].fill("./white-tower.png", 56, 63+1)
        arr = [...arr].fill("./white-horse.png", 57, 62+1)
        arr = [...arr].fill("./white-crazy.png", 58, 61+1)
        arr = [...arr].fill("./white-queen.png", 59, 59+1)
        arr = [...arr].fill("./white-king.png", 60, 60+1)
        setCases(arr)
    }

    function caseAsClicked(index: number) {
        console.log(index);
    }

    return (
       <div className="flex flex-col gap-y-6 justify-center place-items-center h-full">
            <button className="hover:bg-black hover:text-white px-4 py-2 rounded-full" onClick={startGame}>START THE CHESS</button>
            <div className="relative grid grid-cols-8">
                {cases.map((value, index) => (
                    <p key={index} className={`hover:bg-red-200 flex justify-center place-items-center ${casesColor(index)} border-2 border-spacing-10 border-black w-20 h-20`} onClick={() => caseAsClicked(index)}>
                        <img src={value} alt={value[index]} />
                    </p>
                ))}
            </div>
       </div> 
    )
}

export default Chess;
