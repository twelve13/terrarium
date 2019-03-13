const body = document.getElementsByTagName("body");

const container = document.getElementsByTagName("section");

const divs = document.getElementsByTagName("div");

function illustrate(){
	console.log("illustrating");
	
	for(let i=0; i<container.length; i++){
		setTimeout(function(){container[i].classList.add("showme")}, i*400);
	};

	function fillJar(){
		for(let i=0; i<divs.length; i++){
			setTimeout(function(){divs[i].classList.add("showme")}, i*200);
		};
	};

	setTimeout(fillJar, 1800);
};

body.onload = illustrate();




