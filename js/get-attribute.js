var firsItem = document.getElementById('one');
if (firsItem.hasAttribute('class')){
    var attr = firsItem.getAttribute('class');
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The fist item has a class name: ' + attr +'</p>';
}