import {Personne} from "./src/Personne.js" ;


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

// Initialise ses attributs
p.nom = "MARTIN" ;
p.prenom = "Paul" ;
p.age = 20 ;

// Affiche le contenu de la personne référencée p
p.affiche() ;



