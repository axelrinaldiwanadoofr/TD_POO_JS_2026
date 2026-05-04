import {Personne} from "./src/Personne.js" ;
import { FrmPersonne } from "./src/FrmPersonne.js";


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

let p2 = new Personne( "MARTIN", "Paul", new Date( 2000, 2, 10 ) ) ;

p2.setDateNaissance( 22, 3, 2008 ) ;

let frm1 = new FrmPersonne( "FrmPersonne", 0) ;
frm1.updateForm( p2 ) ;

let p3 = new Personne( "DUPOND", "Lise", new Date( 2000, 2, 10 ) ) ;

let frm2 = new FrmPersonne( "FrmPersonne", 1) ;
frm2.updateForm( p3 ) ;

