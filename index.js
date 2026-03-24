import {Personne} from "./src/Personne.js" ;


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

let p2 = new Personne( "MARTIN", "Paul", 21 ) ;

p2.affiche() ;

console.log( "p2: " + p2 ) ;

let p3 = new Personne( "MEYER", "Philippe", -18 ) ;
console.log( "p3: " + p3 ) ;

p3.setAge( -18 ) ;
console.log( "p3: " + p3 ) ;

p3.setAge( 18 ) ;
console.log( "p3: " + p3 ) ;

p3.age = -150 ;
console.log( "p3: " + p3 ) ;
console.log( p3 ) ;

p3.age = 50 ;
console.log( "p3: " + p3 ) ;
console.log( p3 ) ;

console.log( p3.age ) ;

p3.nom = "meyer" ;
p3.prenom = "MARCEL" ;
console.log( "p3: " + p3 ) ;

let s = "hdsgSDSddd" ;
console.log( s ) ;
console.log( s.toUpperCase() ) ;




