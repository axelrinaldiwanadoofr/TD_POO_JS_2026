
import {Personne} from "./Personne.js"

export class Employe extends Personne
{
    constructor( nom, prenom, jour, mois,
        annee, entreprise, poste ) 
    {
        // Appel du constructeur de la classe mère 
        // Personne
        super( nom, prenom, jour, mois, annee ) ;

        // Cree et initialise les 2 attributs suplémentaires
        this._entreprise = entreprise ;
        this._poste = poste ;
    }

    get poste()
    { 
        return this._poste ;
    }

    set poste( valeur )
    {
        this._poste = valeur ;
    }

    get entreprise()
    { 
        return this._entreprise ;
    }

    set entreprise( valeur )
    {
        this._entreprise = valeur ;
    }

    // On redéfini la méthode toString
    toString()
    {
        let s = super.toString() ;
        s += " entreprise: " + this.entreprise ;
        s += " poste: " + this.poste ;
        return s ;
    }

}