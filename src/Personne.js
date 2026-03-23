
export class Personne // Le mot export précise que la classe Personne est exportée
{
    
    constructor( nom="", prenom="", age=0) // Constructeur par défaut (sans argument)
    {
        // Ajoute et initialise l'attribut nom

        if (age< 0) {
            console.log("l'âge doit être positif");
            this.age = 0;
        }else{
            this.age = age ;
        }
        
        this.nom = nom ;
        this.prenom = prenom ;
    }

    affiche()
    {
        console.log( "nom: " + this.nom
            + "\nprenom: " + this.prenom 
            + "\nage:" + this.age ) ;
    }

    // Redéfinition de la méthode toString de la classe mère Object
    toString()
    {
        return "nom: " + this.nom
            + " prenom: " + this.prenom 
            + " age: " + this.age ;
    }
}