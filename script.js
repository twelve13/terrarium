const divs = document.getElementsByTagName("DIV");

const button = document.getElementById("button");

function show() {
	console.log("clicked")
	for(let i=0; i<divs.length; i++){
		setTimeout(function(){divs[i].classList.add("showme")}, i*200);
	}
}

button.addEventListener("click", show)