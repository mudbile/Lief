//climb out of the dom, adding to the css selector array as it goes
var selectorArray = [];
var parent = clickedElement;
do {
    str = parent.nodeName.toLowerCase();
    //add id
    if (parent.id){
        str += '#' + parent.id;
        //selectorArray.push(str);
        //break;
    //failing that...
    } else {
		//... add a class if one and only one is present
		var builder = "";
		if (parent.className){
			builder = "." + parent.className.split(" ").join(".");
		} else if (parent.hasAttribute("rel") && !parent.getAttribute("rel").includes(" ")){
			builder = '[rel="' + parent.getAttribute("rel") + '"]';
		}
		if (builder != ""){
			str += builder;
		}
    }  
    selectorArray.push(str);
    
    parent = parent.parentNode; 
    
} while (parent != document.body);

//output result to the user
var selector = selectorArray.reverse().join(" ");
prompt("Here is your CSS selector.\nIt might work.", selector);
