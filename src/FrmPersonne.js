
import {Personne} from "./Personne.js" ;

export class FrmPersonne
{
    constructor( styleClass, indexFormulaire=0 )
    {
        this.styleClass = styleClass ;
        this.indexFormulaire = indexFormulaire ;
        this.modele = null ;

        // Création d'un écouteur de click sur le bouton OK
        // Recupère le formulaire
        let frm = document.getElementsByClassName( this.styleClass )[this.indexFormulaire] ;

        // Récupère les champs du formulaire
        let btnOk = frm.getElementsByClassName( "BtnOK" )[0] ;
        btnOk.addEventListener( "click", () =>
        {
            if( this.modele != null )
            {
                this.updateModele( this.modele ) ;
                console.log( "personne: " + this.modele ) ;
            }
        }) ;

    }

    updateForm( p )
    {
        // On stocke la référence du modèle
        this.modele = p ;

        // Recupère le formulaire
        let frm = document.getElementsByClassName( this.styleClass )[this.indexFormulaire] ;

        // Récupère les champs du formulaire
        let inNom = frm.getElementsByClassName( "nom" )[0] ;
        let inPrenom = frm.getElementsByClassName( "prenom" )[0] ;
        let inDateNaissance = frm.getElementsByClassName( "dateNaissance" )[0] ;

        // Met à jour les champs
        inNom.value = p.nom ;
        inPrenom.value = p.prenom ;
        let m = p.dateNaissance.getMonth() ;
        if( m<10 ) m = "0" + m ;
        inDateNaissance.value = "" + 
            p.dateNaissance.getFullYear() 
            + "-" + m 
            + "-" + p.dateNaissance.getDate() ;

        return frm ;
    }

    updateModele( p )
    {
        // Recupère le formulaire
        let frm = document.getElementsByClassName( this.styleClass )[this.indexFormulaire] ;

        // Récupère les champs du formulaire
        let inNom = frm.getElementsByClassName( "nom" )[0] ;
        let inPrenom = frm.getElementsByClassName( "prenom" )[0] ;
        let inDateNaissance = frm.getElementsByClassName( "dateNaissance" )[0] ;

        // Met à jour les propriétés de la personne à partir
        // des champs du formulaire
        p.nom = inNom.value ;
        p.prenom = inPrenom.value ;
        p.indDateNaissance = inDateNaissance.value ;

        return frm ;
    }
}