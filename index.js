import {Personne} from "./src/Personne.js" ;
import { FrmPersonne } from "./src/FrmPersonne.js";


// Création d'un objet de type Personne
let p = new Personne() ;

p.affiche() ;

let p2 = new Personne( "MARTIN", "Paul", new Date( 2000, 2, 10 ) ) ;

p2.setDateNaissance( 22, 3, 2008 ) ;

let frm = new FrmPersonne( "FrmPersonne") ;
frm.updateForm( p2 ) ;


