const body = document.getElementsByTagName("body");

const container = document.getElementsByTagName("section");

const divs = document.getElementsByTagName("div");

function illustrate(){
	console.log("illustrating");

	for(let i=0; i<container.length; i++){
		console.log(container[i]);
		function(){container[i].classList.add("showme")}
	};

	function fillJar(){
		for(let i=0; i<divs.length; i++){
			console.log(divs[i].classList);
			function(){divs[i].classList.add("showme")}
		};
	};

	setTimeout(fillJar, 1800);
};

body.onload = illustrate();




