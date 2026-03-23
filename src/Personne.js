
export class Personne // Le mot export précise que la classe Personne est exportée
{
    
    constructor( nom="", prenom="", age=0) // Constructeur par défaut (sans argument)
    {
        // Ajoute et initialise l'attribut nom

        if (age< 0) {
            console.log("l'âge doit être positif");
            this._age = 0;
        }else{
            this._age = age ;
        }

        this.nom = nom ;
        this.prenom = prenom ;
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

    setAge( age )
    {
        if( age >= 0 ) this._age = age ;
    }

    // Ajout d'un getter pour l'age qui renvoie 
    // la valeur de l'attrinut _age
    get age()
    {
        return this._age ;
    }

    // Ajout d'un setter pour l'age qui permet de mettre
    // à jour de façon contrôlée l'attribut _age
    set age( valeur )
    {
        this.setAge( valeur ) ;
    }
}