const prompt = require('prompt-sync')()

const word = prompt('Enter a word -> ')
console.log(word.toLowerCase())

// negative indexing works just like python
const sentence = 'Please give me Rs 1000'
console.log(sentence.slice(-4))

// strings are immutable
console.log(word[3])
word[3] = 'x'
console.log(word)