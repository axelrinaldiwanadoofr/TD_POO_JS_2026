
import { FrmPersonne } from "./src/FrmPersonne.js";
import { Employe } from "./src/Employe.js";

export class FrmEmploye extends FrmPersonne
{
    constructor( styleClass, indexFormulaire )
    {
        super( styleClass, indexFormulaire ) ;
    }

    updateForm( e )
    {
        let frm = super.updateForm( e ) ;

        let inEntreprise = frm.getElementsByClassName( "entreprise")[0] ;
        let inPoste = frm.getElementsByClassName( "poste")[0] ;

        inEntreprise.value = e.entreprise ;
        inPoste.value = e.poste ;

        return frm ;
    }
    updateModele( e )
    {
        let frm = super.updateModele( e ) ;

        let inEntreprise = frm.getElementsByClassName( "entreprise")[0] ;
        let inPoste = frm.getElementsByClassName( "poste")[0] ;

        e.entreprise = inEntreprise.value ;
        e.poste = inPoste.value ;

        return frm ;
    }

}