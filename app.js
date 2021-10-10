const button = document.querySelector('button')
const input = document.querySelector('input')

// const getData = async () => {
//     const url = 'https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza'

//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// Add eventListener to the button-
// button.addEventListener('click', () => {
//     getData()
// })


const getData = async (item) => {
    console.log(item)
    const url =  `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.hits)
}


// Add eventListener to the button-
button.addEventListener('click', (e) => {
    getData(input.value)
})

