// Création d'un objet vide en JS

let a = new Object() ;

// Ajout de l'attribut nom à l'objet référencé par a
a.nom = "DUPOND" ;
//Ajoute de l'attribut prénom
a.prenom="Kenisha";

// ajout d'un age
a.age = 54;

// On affiche le nom de la personne
function affichePersonne(p){
    console.log( "nom: " + p.nom + " \nprenom: " + p.prenom + " \nage: " + p.age) ;
}

// appel de la fonction à partir de l'objet a
affichePersonne(a);


