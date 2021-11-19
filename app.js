console.log(React, ReactDOM)

const container = document.getElementById('app')

console.log(container)

//const heading = React.createElement('h2', {}, 'This is a heading')

const content = React.createElement('div', {}, [

    React.createElement('h1', {}, `I'm a heading`),
    React.createElement('p', {}, `I'm paragraph 1`),

]
)

ReactDOM.render(content, container)