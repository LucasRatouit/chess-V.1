const verifBlackList = (cases: string[]) => {
    console.log("Test black cases list !");
    const list =  cases.map((e, index) => ({e, index}))
    .filter(({ e }) => /black/.test(e))
    .map(({ index }) => index);
    return list;
}

export default verifBlackList;
