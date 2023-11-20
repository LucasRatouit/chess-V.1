const startGame = (cases: string[], setCases: React.Dispatch<string[]>) => {
    const arr = [...cases];
    arr.fill("", 0, 63+1);
    arr.fill("./black-sbire.png", 8, 15+1);
    arr.fill("./black-tower.png", 0, 7+1);
    arr.fill("./black-horse.png", 1, 6+1);
    arr.fill("./black-crazy.png", 2, 5+1);
    arr[3] = "./black-queen.png";
    arr[4] = "./black-king.png";
    arr.fill("./white-sbire.png", 48, 55+1);
    arr.fill("./white-tower.png", 56, 63+1);
    arr.fill("./white-horse.png", 57, 62+1);
    arr.fill("./white-crazy.png", 58, 61+1);
    arr[59] = "./white-queen.png";
    arr[60] = "./white-king.png";
    setCases(arr);
}

export default startGame;
