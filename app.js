// This : points to window object => parent object right now it is window that we're seeing (chrome's window.
console.log(this.alert("Hi!"))

//Create an object and add properties and methods to object.
let manufacturer = "Ferrari"

let car = {
    name: "C-Class",
    manufacturer: "Mercedes",
    print: function () {
        console.log(this)
        let manufacturer = "BMW"
        console.log(manufacturer)
    }
}

car.print()

console.log(car)
console.log(typeof car)

console.log(car.name)
console.log(car.manufacturer)
console.log(car)


//Q) How can methods access object properties then?
let car = {
    name: "C-Class",
    manufacturer: "Mercedes",
    print: function () {
        console.log(this)
        console.log(car.manufacturer, car.name)
        console.log(this.name + " was manufactured by " + this.manufacturer)
        console.log(`${this.name}  was created by ${this.manufacturer}`)
        
    }
}

car.print()


// 'this' keyword doesn't work with object's arrow function-
let car = {
    name: "C-Class",
    manufacturer: "Mercedes",
    print: () => {
        console.log(this)
        //console.log(car.manufacturer, car.name)
        //console.log(this.name + " was manufactured by " + this.manufacturer)
        console.log(car.name + " was created by " + car.manufacturer)
        
    }
}

car.print()


// Object Methods-
//Q) What is 'Object' object here? - a global object and created object are subset of this Object.
console.log(car)


console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.hasOwnProperty('name'))



