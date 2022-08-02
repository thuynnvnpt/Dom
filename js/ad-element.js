var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');
newEl.appendChild(newText);
var possition = document.getElementsByTagName('ul')[0];
possition.appendChild(newEl);