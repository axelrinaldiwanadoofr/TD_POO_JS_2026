import {Personne} from "./src/Personne.js" ;


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

let p2 = new Personne( "MARTIN", "Paul" ) ;

p2.setDateNaissance( 22, 3, 2008 ) ;

p2.affiche() ;

let dn = p2.dateNaissance ;

p2.dateNaissance = new Date(2007, 3, 15) ;

console.log( p2.age ) ; // Affiche 20 si la personne est née entre le 30/03/2006 et le 31/03/2005 

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

let p4 = new Personne( "Rinaldi", "axel", 20 ) ;
p4.affiche() ;

p4.age = -10 ;
p4.affiche() ;






