import wordBank from './word-bank.txt';

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

//a set is a data structure like an array, but you can't repeat values and there are no indices
//also faster to check through for inclusion
export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArray = result.split("\n");
        todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)]
        wordSet = new Set(wordArray);
    });

    return { wordSet, todaysWord };
}