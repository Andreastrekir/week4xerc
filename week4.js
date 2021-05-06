//Exercise 1
let navBar = document.querySelector('#navBar')
.id = "socialNetworkNavigation"


let newLi = document.createElement(`li`)
let textNode = document.createTextNode("Logout")

newLi.appendChild(textNode)
console.log("Logout")
document.querySelector('#socialNetworkNavigation>ul').append(newLi)

//----------------------------------------------------------------------------->



//Exercise 3 
let elem = document.getElementById('elem');

	elem.style.background = 'lightblue';
	document.getElementById("elem").style.fontSize = "x-large";
    elem.classList.remove("hola1");
    document.getElementById("Hola2").style.borderStyle = "dotted ";
   
//------------------------------------------------------------------------------>




















