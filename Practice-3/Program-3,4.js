const prompt = require('prompt-sync')()

const num = 69

while(1){
    let number = Number.parseInt(prompt('Enter a number -> '))
    if (number === num) break
    console.log('Try Again!!!');
}
console.log('Success!!!');

const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e) / 5
}

console.log(mean(1,2,3,4,5));
