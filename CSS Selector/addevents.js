//need this to store the element that was clicked on
//content.js and other content scripts can access this variable
var clickedElement;
document.addEventListener('contextmenu', function(e) {
    clickedElement = e.target;
    return true;
}, false);
