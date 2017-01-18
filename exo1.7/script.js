var phrase;

age = prompt("Quel est votre age ?");
sexe = prompt("De quel sexe etes vous ?")
nationalite = prompt("Quel nationalite etes vous ?");
if(sexe == "un homme" || sexe == "une femme"){

	phrase = "Vous estes une filles";
}else{
	phrase = "Vous etes un garçon";
}

}else{
	alert("erreur\nMerci de repondre par :\nun homme\une femme");
}
if (isNaN(age)) {
	alert("erreur\nMerci de mettre un nombre");
}else{
	if (age>=18) {
		phrase = phrase + "majeur(e)";
		phrase = phrase + "mineur(e)";
	}
}
phrase = phrase + nationalite;
alert(phrase);