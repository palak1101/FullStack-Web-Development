var body = document.querySelector('body')

var heading = document.getElementById('heading')
heading.innerHTML = "I was changed by JS"
console.log(heading)


heading.style = "color:red; font-size:3rem"


heading.classList.add("four")
heading.classList.remove('one')
console.log(heading.classList)


body.classList.add('dark')

