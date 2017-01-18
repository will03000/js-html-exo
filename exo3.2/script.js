function change(couleur) {
	var couleur = couleur.replace('color', '');
	alert(couleur);
	document.getElementById('texte').style.color = couleur ;
}