const prompt = require('prompt-sync')()

const age = (prompt('Enter the age of the person -> '))
console.log(typeof age);

// these are not strict comparisons
console.log(age >= 20 && age <= 30 ? 'True' : 'False')


// switch case demo
// switch case does strict comparisons (=== and !==)
switch(age){
    case 10: console.log('below 10 years'); break;
    case 20: console.log('below 20 years'); break;
    case 30: console.log('below 30 years'); break;
    case 40: console.log('below 40 years'); break;
    default: console.log('get out!')
}

