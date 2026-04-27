import {Personne} from "./src/Personne.js" ;


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

let p2 = new Personne( "MARTIN", "Paul", new Date( 2000, 2, 10 ) ) ;


p2.setDateNaissance( 22, 3, 2008 ) ;

p2.affiche() ;

let dn = p2.dateNaissance ;

p2.dateNaissance = new Date(2007, 15, 15) ;


// Test la problématique du point c du cahier des charges
p2.setDateNaissance( 3, 10, 2022 );
console.log( p2.dateNaissanceToString() );
let d = p2.dateNaissance ;
d.setDate( 6 ) ;
console.log( p2.dateNaissanceToString() );

//Test le calcul de l'age en années
console.log( "age de p2: " + p2.age + " ans" ) ;

