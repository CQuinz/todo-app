var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

//Create Delete Button
function createDeleteButton(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener("click", function(){
		var deleteElement = this.parentElement;
		deleteElement.parentElement.removeChild(deleteElement);
	});
	li.appendChild(button);
}




function createEditButton(li, span){
	var editButton = document.createElement("button");
	editButton.appendChild(document.createTextNode("Edit"));
	editButton.addEventListener("click", function(){

		var textElement = span.textContent;
		// var textStripped =textElement.substring(0,textElement.length - 10);
		// console.log(textStripped);

		//Adding modal to window
		var modalBg =	document.querySelector(".modal-bg");
		modalBg.classList.add("block");
		var updateInput = document.querySelector("#updateInput");
		updateInput.value = textElement;

		//Add event listenr to update button
		var updateButton = document.getElementById("update");
		updateButton.addEventListener("click", function(){
			
			var updatedText = updateInput.value;
			
			span.textContent = updatedText;
			modalBg.classList.remove("block");
		});


	});
	li.appendChild(editButton);
}

function createListElement() {
	var li = document.createElement("li");
	//Create span tag and add textnode with input value, then append to li
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	console.log(span.textContent);

	//li.appendChild(document.createTextNode(input.value));

	//Create button element
	createDeleteButton(li);
	createEditButton(li, span);
	//////////////////////////
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


var liArray = document.querySelectorAll("li");

for(var i =0; i<liArray.length; i++){
	liArray[i].addEventListener("click", function (){
		this.classList.toggle("done");
	});
	// console.log(liArray[i]);
}