function getRandomInteger(min, max) { 
	var random = Math.random();
	var result = random * (max - min + 1) + min;
	return Math.floor(result);
}
// on crée une fonction pour renvoyer un chiffre aléatoire avec un min et un max en paramètres


//////////////////////////////////////////////////////////////////////////


function requestInteger(message, min, max)  {

	var integer;

	do {
		integer = parseInt(prompt(message + min + " et " + max + " :"))
	}
	while (integer < min || integer > max || isNaN(integer));
	return integer;
}
// affiche un prompt avec un message et deux valeur, min et max, en paramètres


//////////////////////////////////////////////////////////////////////////


function showImage(source) {
	document.write("<img src= img/"+source+">")
}
// affiche une image sur la page avec la source en paramètre


//////////////////////////////////////////////////////////////////////////

