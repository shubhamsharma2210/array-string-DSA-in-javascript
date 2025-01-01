const findLongestString = (sentece) => {
    let words = sentece.split(' ')
    console.log(words)
    let longestWord = words.reduce((longest, currWord) => {
        return currWord.length > longest.length ? currWord : longest
    }, "")
    return longestWord
}

const sentece = "hello my nameaaaaaaaaaaaa is shubhaaaaaaama"
console.log(findLongestString(sentece))