export const startGame = (cases: string[], setCases: React.Dispatch<string[]>) => {
    const arr = [...cases]
    arr.fill("./black-sbire.png", 8, 15+1)
    arr.fill("./black-tower.png", 0, 7+1)
    arr.fill("./black-horse.png", 1, 6+1)
    arr.fill("./black-crazy.png", 2, 5+1)
    arr.fill("./black-queen.png", 3, 3+1)
    arr.fill("./black-king.png", 4, 4+1)
    arr.fill("./white-sbire.png", 48, 55+1)
    arr.fill("./white-tower.png", 56, 63+1)
    arr.fill("./white-horse.png", 57, 62+1)
    arr.fill("./white-crazy.png", 58, 61+1)
    arr.fill("./white-queen.png", 59, 59+1)
    arr.fill("./white-king.png", 60, 60+1)
    setCases(arr)
}