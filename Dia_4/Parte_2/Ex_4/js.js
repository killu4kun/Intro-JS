function highestWord(word) {
    let highestWord = word[0];
    for (const key in word) {
        if (highestWord.length < word[key].length) {
            highestWord = word[key];
        }
    }
    return highestWord;
}

console.log(highestWord(["José","Lucas","Nádia","Fernanda","Cairo","Joana"]));