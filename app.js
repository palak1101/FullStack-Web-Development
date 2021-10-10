// Async & Await-


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach((user) => {
//             console.log(user)
//         })
//     })

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    console.log(data)
}

fetchData()


// const response = await fetch('https://jsonplaceholder.typicode.com/users')

// const data = await response.json()

// console.log(data)