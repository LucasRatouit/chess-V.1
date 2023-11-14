export const chessPlace =  ["8-1","8-2","8-3","8-4","8-5","8-6","8-7","8-8",
                "7-1","7-2","7-3","7-4","7-5","7-6","7-7","7-8",
                "6-1","6-2","6-3","6-4","6-5","6-6","6-7","6-8",
                "5-1","5-2","5-3","5-4","5-5","5-6","5-7","5-8",
                "4-1","4-2","4-3","4-4","4-5","4-6","4-7","4-8",
                "3-1","3-2","3-3","3-4","3-5","3-6","3-7","3-8",
                "2-1","2-2","2-3","2-4","2-5","2-6","2-7","2-8",
                "1-1","1-2","1-3","1-4","1-5","1-6","1-7","1-8",
                ];

// export let chessPlace: number[][] = [];
// for (let i = 0; i < 8; i++) {
//     const ids: number[][] = [];
//     for (let x = 0; x < 8; x++) {
//         const id: number[] = [];
//         id.push(Math.abs(i - 8));
//         id.push(x+1);
//         ids.push(id)
//     }
//     chessPlace = chessPlace.concat(ids)
// }

export const chessColor: string[] = [];
for (let i = 0; i < 4; i++) {
    const x: string = "bg-zinc-300";
    const y: string = "bg-zinc-500";
    for (let w: number = 0; w < 8; w++) {
        chessColor.push(w % 2 === 0 ? x : y);
    }
    for (let z: number = 0; z < 8; z++) {
        chessColor.push(z % 2 === 1 ? x : y);
    }
}