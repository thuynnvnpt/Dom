var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// thay doi gia tri sibling class attributes
prevItem.className = 'complete';
nextItem.clasName = 'cool';