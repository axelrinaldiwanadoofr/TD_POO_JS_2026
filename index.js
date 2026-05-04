import {Personne} from "./src/Personne.js" ;


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

let p2 = new Personne( "MARTIN", "Paul", new Date( 2000, 2, 10 ) ) ;

p2.setDateNaissance( 22, 3, 2008 ) ;

// Recupère le formulaire
let frm = document.getElementsByClassName( "FrmPersonne")[0] ;

// Récupère les champs du formulaire
let inNom = frm.getElementsByClassName( "nom" )[0] ;
let inPrenom = frm.getElementsByClassName( "prenom" )[0] ;
let inDateNaissance = frm.getElementsByClassName( "dateNaissance" )[0] ;

// Met à jour les champs
inNom.value = p2.nom ;
inPrenom.value = p2.prenom ;
inDateNaissance.value = p2.dateNaissance.toLocaleDateString("us-US") ;



