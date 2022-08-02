var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent:' + showTextcontent + '</p>';
    msg += '<p>innerText: '+ showInnerTex + '</p>';
    var el = document.getElementById('scriptResults');
    el.innerHTML = msg;
    firstItem.textContent= 'sourdough bread';