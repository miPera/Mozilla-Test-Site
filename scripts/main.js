//get reference to image on index page
var myImage = document.querySelector('img');

//function that changes image when image is clicked
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src','images/firefox-icon2.png');
	} else {
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

//get references to button and header
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//function that sets username
function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

//Set localstorage username
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//create on-click event handler
myButton.onclick = function() {
  setUserName();
}