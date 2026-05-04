
import {Personne} from "./Personne.js" ;

export class FrmPersonne
{
    constructor( styleClass )
    {
        this.styleClass = styleClass ;

        // Création d'un écouteur de click sur le bouton OK
        // Recupère le formulaire
        let frm = document.getElementsByClassName( this.styleClass )[0] ;

        // Récupère les champs du formulaire
        let btnOk = frm.getElementsByClassName( "BtnOK" )[0] ;
        btnOk.addEventListener( "click", function()
        {
            alert( "click sur OK") ;
        }) ;

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
        inDateNaissance.value = "" + 
            p.dateNaissance.getFullYear() 
            + "-" + p.dateNaissance.getMonth() 
            + "-" + p.dateNaissance.getDate() ;
    }

    updateModele( p )
    {
        // Recupère le formulaire
        let frm = document.getElementsByClassName( this.styleClass )[0] ;

        // Récupère les champs du formulaire
        let inNom = frm.getElementsByClassName( "nom" )[0] ;
        let inPrenom = frm.getElementsByClassName( "prenom" )[0] ;
        let inDateNaissance = frm.getElementsByClassName( "dateNaissance" )[0] ;

        // Met à jour les propriétés de la personne à partir
        // des champs du formulaire
        p.nom = inNom.value ;
        p.prenom = inPrenom.value ;
        p.indDateNaissance = inDateNaissance.value ;
    }
}