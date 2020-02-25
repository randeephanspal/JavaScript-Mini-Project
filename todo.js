// Add <h1> tag after 'My ToDo' in index.html
// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);


var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

// Add Items in Todo
function addItem(){
    var input = document.getElementById('input')
    console.log(input)
    var item = input.value;
    console.log(item)
    var textnode = document.createTextNode(item)
    console.log(textnode)

    if (item === ''){
        return false;
    }else{
        // create li
        li = document.createElement('li');

        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // create label
        var label = document.createElement('label');

        // add these elements on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value=''
    }

}

// Remove Done
function removeItem(){
    // console.log('Remove Button')
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        // console.log(element)
        while( li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
        
    }
}

// Remove All
var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItem);

function removeAllItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        while(li[index]){
            ul.removeChild(li[index])
        }
    }
}