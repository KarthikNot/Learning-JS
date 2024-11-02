const marks = {
    harry : 98,
    rohan : 70,
    aakash : 9
}

console.log(Object.keys(marks))
console.log(Object.keys(marks).length)
console.log(Object.values(marks))

for(let i = 0; i<=Object.keys(marks).length - 1; i++)
    console.log(marks[Object.keys(marks)[i]])

for(studentname in marks){
    console.log(marks[studentname])
}