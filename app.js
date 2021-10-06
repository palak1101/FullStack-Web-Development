//How to add textNode to list dynamicaaly when array is created manually and automatically

var list = document.querySelector('ul')
//console.log(list)


var arr = ["Go to park", "cook oatmeal", "Eat"]

arr.push("Complete the assignment")
arr.push("Sleep")

for(var i=0; i<arr.length; i++){
    //console.log(arr[i])
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
    element.appendChild(textNode)
    list.appendChild(element)
}