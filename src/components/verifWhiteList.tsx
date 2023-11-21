const verifWhiteList = (cases: string[]) => {
    console.log("Test white cases list !");
    const list =  cases.map((e, index) => ({e, index}))
    .filter(({ e }) => /white/.test(e))
    .map(({ index }) => index);
    return list;
}

export default verifWhiteList;
