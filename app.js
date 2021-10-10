const button = document.querySelector('button')
const input = document.querySelector('input')
const parent = document.querySelector('div.grid')


// To get any item's receipe-

const getData = async (item) => {
    console.log(item)
    const url =  `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    const recipies = data.hits
    //console.log(recipies)
    recipies.forEach((item) => {
        //console.log(item)
        //console.log(item.recipe.label)
        const {recipe} = item
        //console.log(recipe)
        const {label, image, source, calories} = recipe
        //console.log(label, image, source, calories)

        const template = `
                        <img class="card__image" src="${image}" />
                        <div class="card__data">
                            <div class="card__info">
                                <h2>${label}</h2>
                                <p>From: ${source}</p>
                            </div>
                            <h3 class="Calories:">${calories.toFixed(2)}</h3>
                            <button class="card__add">+</button>
                        </div>
                    `
        const newCard = document.createElement('article')
        newCard.setAttribute('class', 'card')
        newCard.setAttribute('style', 'margin-bottom:60px')
        newCard.innerHTML = template
        parent.appendChild(newCard)

    })
}


// Add eventListener to the button-
button.addEventListener('click', (e) => {
    getData(input.value)
})

