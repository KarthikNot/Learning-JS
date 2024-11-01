const prompt =  require('prompt-sync')()

const number = Number.parseInt(prompt('Enter the number -> '))

console.log(number % 2 == 0 && number % 3 == 0 ? 'divisible' : 'not divisible')
console.log(number % 2 == 0 || number % 3 == 0 ? 'divisible by either' : 'not divisible by neither')

const age = Number.parseInt(prompt('Enter your Age -> '))

console.log(age >= 18 ? 'you can Drive' : 'you cannot Drive')