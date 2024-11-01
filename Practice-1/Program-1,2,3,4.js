let myname = 'Karthik'
console.log(myname)

myname += 123
console.log(myname)

console.log(typeof myname)

const details = {
    name : 'karthik',
    dob : "1-1-2001",
    clg : 'ngit'
}

// cannot be done (assignment to a constant variable)
// details = 123 

console.log(details)

details['success'] = true
console.log(details)
