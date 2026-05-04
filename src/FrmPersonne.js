
import {Personne} from "Personne.js" ;

export class FrmPersonne
{
    constructor( styleClass )
    {
        this.styleClass = styleClass ;
    }

    updateForm( p )
    {
        // Recupère le formulaire
        let frm = document.getElementsByClassName( this.styleClass )[0] ;

        // Récupère les champs du formulaire
        let inNom = frm.getElementsByClassName( "nom" )[0] ;
        let inPrenom = frm.getElementsByClassName( "prenom" )[0] ;
        let inDateNaissance = frm.getElementsByClassName( "dateNaissance" )[0] ;

        // Met à jour les champs
        inNom.value = p.nom ;
        inPrenom.value = p.prenom ;
        inDateNaissance.value = p.dateNaissance.toLocaleDateString("us-US") ;
    }
}