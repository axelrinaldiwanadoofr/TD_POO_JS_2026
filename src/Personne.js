
export class Personne // Le mot export précise que la classe Personne est exportée
{
    constructor() // Constructeur par défaut (sans argument)
    {
        // Ajoute et initialise l'attribut nom
        this.nom = "" ;

        this.prenom = "" ;
        this.age = 0 ;
    }

    affiche()
    {
        console.log( "nom: " + this.nom
            + "\nprenom: " + this.prenom 
            + "\nage:" + this.age ) ;
    }
}