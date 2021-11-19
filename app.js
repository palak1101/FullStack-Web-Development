//console.log(React, ReactDOM)

const container = document.getElementById('app')
//console.log(container)


//1. To create multiple children of main div pass an array[].

const content = React.createElement('ul', {}, [
    React.createElement('li', {}, `Item-1`),
    React.createElement('li', {}, `Item-2`),
    React.createElement('ul', {}, [
        React.createElement('li', {}, "content-A"),
        React.createElement('li', {}, "content-B"),
        React.createElement('li', {}, "content-C"),
        React.createElement('li', {}, "content-D"),
    ])
])


ReactDOM.render(content, container)