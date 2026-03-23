
class Personne
{
    constructor()
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