
export class Personne // Le mot export précise que la classe Personne est exportée
{
    
    constructor( nom="", prenom="", jour = 0, mois = 0, annee = 0 ) // Constructeur par défaut (sans argument)
    {
        // Ajoute et initialise les attributs
        this._nom = "" ;
        this._prenom = "" ;
        this._dateNaissance = new Date() ;

        // On met à jour les attribut à partir des arguments
        this.nom = nom ;
        this.prenom = prenom ;

        // Met à jour la date de naissance si les trois arguments jour, mois, annee 
        // sont renseignés
        if( jour > 0 && mois > 0 && annee > 0 )
            this.setDateNaissance( jour, mois, annee ) ;
    }

    affiche()
    {
        console.log( "nom: " + this.nom
            + "\nprenom: " + this.prenom 
            + "\nage:" + this._age ) ;
    }

    // Redéfinition de la méthode toString de la classe mère Object
    toString()
    {
        return "nom: " + this.nom
            + " prenom: " + this.prenom 
            + " age: " + this._age ;
    }

    setDateNaissance( jour, mois, annee )
    {
        let jj = [31,28,31,30,31,30,31,31,30,31,30,31] ;
        if( annee % 4 == 0 ) jj = [31,29,31,30,31,30,31,31,30,31,30,31] ; // année bissectile

        if( annee < 0 ) throw "L'année " + annee + " ne peut pas être négative."  ;
        if( mois < 1 || mois > 12 ) throw "Le mois " + mois + " doit être compris entre 1 et 12."  ;
        if( jour < 1 || jour > jj[mois-1] ) throw "Le jour " + jour + " doit être compris entre 1 et " + jj[mois] + "."  ;

        this._dateNaissance = new Date( annee, mois-1, jour-1 ) ;
    }

    // Ajout d'un getter pour la date de naissance qui renvoie 
    // la valeur de l'attrinut _dateNaissance
    get dateNaissance()
    {
        return new Date(this._dateNaissance) ;
    }

    // Ajout d'un setter pour la date de naissance qui permet de mettre
    // à jour de façon contrôlée l'attribut _dateNaissance
    set dateNaissance( d )
    {
        this.setDateNaissance( d.getDate(), d.getMonth(), d.getFullYear() ) ;
    }

    dateNaissanceToString()
    {
        let j = this._dateNaissance.getDate() ;
        if( j < 10 ) j = "0" + j ; // Ajoute un 0 pour avoir 2 chiffres

        let m = this._dateNaissance.getMonth() ;
        if( m < 10 ) m = "0" + m ; // Ajoute un 0 pour avoir 2 chiffres

        return "" + j + "/" + m + "/" + this._dateNaissance.getFullYear() ;
    }

    get nom()
    {
        return this._nom ;
    }

    set nom( valeur )
    {
        this._nom = valeur.toUpperCase()  ;
    }

    set prenom (valeur)
    {
        this._prenom = valeur.substring(0,1).toUpperCase() 
        + valeur.substring(1).toLowerCase();
    }

    get prenom()
    {
        return this._prenom;
    }

    get age()
    {
        let d = new Date() ;
        let t1 = d.toTemporalInstant().epochMilliseconds ; // temps en ms
        let t2 = this._dateNaissance.toTemporalInstant().epochMilliseconds ; // temps en ms
        return (t1 - t2)/(365*24*3600000) ;
    }
}   
