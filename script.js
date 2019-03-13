const body = document.getElementsByTagName("body");

const container = document.getElementsByTagName("section");

const divs = document.getElementsByTagName("div");

function illustrate(){
	console.log("illustrating");

	for(let i=0; i<container.length; i++){
		(function(i) {
			setTimeout(
				function(){container[i].classList.add("showme")}, i*400);
		})(i);
	};

	function fillJar(){
		for(let i=0; i<divs.length; i++){
			(function(i) {
				setTimeout(function(){divs[i].classList.add("showme")}, i*200);
			})(i);
		};
	};

	setTimeout(fillJar, 1800);
};

body.onload = illustrate();




