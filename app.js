// let and var both are variables, gets reassigned.
let a = 5
var b = 89

console.log(a, b)

a = 12
b=23
console.log(a, b)


// Difference between let and var?
//let = local scope & var = global scope
if(true){
    var Name = "Star"
    console.log(Name)
}

console.log(Name)



if(true){
    let Name = "Star"
    console.log(Name)
}

console.log(Name)


// example-2
for(let i=0; i<10; i++){
    console.log("loop ran")
}

console.log(i)


// example-3 (Scopes can be nested)
if(true){
    var Name = "Light"
    if(true){
        console.log(Name)
    }
}

// -> You can access parent scope within child but not vice-versa.
if(true){
    console.log(Name)
    if(true){
        var Name = "Light"
    }
}


// example- 4
// In case of function it is different - there is only local scope whether you use - var, let or const.

const print = () => {
    var Name = "Ferrari"
    return Name
}

print()
console.log(Name)


//-> Nested scope in function works.
const print = () =>{
    var Name = "Moon"
    if (true){
        console.log(Name)
    }

    return Name
}

print()



