// Promise

let value = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello!")
    }, 4000)
})

console.log(value)

setTimeout(() => {
    console.log(value)
}, 5000)


// Fetch API-

// 1.
var response = fetch('https://jsonplaceholder.typicode.com/users')
console.log(data)

setTimeout(() => {
    console.log(response)
    const data = response.json()
    console.log(response)
}, 2000)


// 2.
var response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    let parsedData = res.json()
    console.log(parsedData)
    return(parsedData)
}).then(actual_data => {
    console.log(actual_data)
})


// 3.
var response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json()
}).then(actual_data => {
    console.log(actual_data)
})