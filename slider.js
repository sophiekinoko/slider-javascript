var slider;


var slides = [
	{image: "img/1.jpg", legend:"avatar 1"},
	{image: "img/2.jpg", legend:"avatar 2"},
	{image: "img/3.jpg", legend:"avatar 3"},
	{image: "img/4.jpg", legend:"avatar 4"},
	{image: "img/5.jpg", legend:"avatar 5"},
	{image: "img/6.jpg", legend:"avatar 6"},
]


function refreshSlider() {
	// remplacer l'attribut src par l'image correspondant à l'index

		var maTrans = document.querySelector ("img");
		maTrans.classList.add("hidden"); // je cache l'image

		

		setTimeout(function() {
			var maTrans = document.querySelector ("img");
			maTrans.classList.remove("hidden");
			maTrans.src = slides[slider.current].image;//recupère l'adresse de l'image courante
		}, 500);
		
}

function sliderNext() {

		slider.current ++; // le n° d'image change

		if (slider.current >= slides.length) {
			slider.current = 0; // si on arrive au bout du tableau on repart à zéro
		};

		refreshSlider(); // et on raffraichi
}

function sliderPrev() {

	slider.current --; // le n° d'image change

	if (slider.current < 0) {
		slider.current = slides.length-1; // si on arrive à zéro on revient à la longueur du tableau (de l'indice, donc -1)
	};

	refreshSlider(); // et on raffraichi
}

function random() {
	slider.current = getRandomInteger(0,slides.length-1);
	refreshSlider();
}

function start() {
	slider.timer = setInterval(sliderNext, 1000);
}

function stop() {
	clearInterval(slider.timer);
	
}

function toggle() {
	if (slider.timer == null) {
		start();
		var titre = document.getElementById("btToggle");
		titre.innerHTML="STOP";
	}

	else {
		stop();
		slider.timer =  null;
		var titre = document.getElementById("btToggle");
		titre.innerHTML="START";
	}
}

function randomStart() {
	random();
	start();
}