pragma solidity 0.5.0;

import "./UpgradeStorage.sol";

contract Contract_Partie is UpgradeStorage {

    //fonction definition d'un partie 
    function definition_partie(string memory nom_societe, 
                                string memory forme_juridique, 
                                uint256 capital,
                                string memory registre_commerce,
                                string memory siret,
                                string memory adresse_siege) public{
				
    	// verification que l'émetteur soit bien le vendeur ou l'acheteur
    	require(vendeur.partie == msg.sender || acheteur.partie == msg.sender);
	// verification que les partie n'est pas déjà était validés
	require(valide_partie == false);

	// Identifiction de l'achteur ou du vendeur.
        Partie storage p = vendeur;
        if (acheteur.partie == msg.sender){
            p = acheteur;
    	}

	//Insertion des données dans la structure.
    	p.valide = false;
    	p.nom_societe	   =	nom_societe;
    	p.forme_juridique     = 	forme_juridique;
    	p.capital             =	capital;
    	p.registre_commerce   =	registre_commerce;
        p.siret               =	siret;
        p.adresse_siege       =	adresse_siege;

        if(msg.sender == vendeur.partie){
    	    vendeur = p;
        }
        else{
            acheteur = p;
        }

	//réinitialise à false toutes les validations car on vient d'effectuer une modification dans l'une des strcuture
        vendeur.valide = false;
        acheteur.valide = false;
    }

    //definition representant
    function definition_representant(string memory representant_nom,
                                string memory representant_prenom,
                                string memory representant_titre) public{
    			         
    	require(vendeur.partie == msg.sender || acheteur.partie == msg.sender);

        Partie storage p = vendeur;
        if (acheteur.partie == msg.sender){
            p = acheteur;
    	}
    	p.valide = false;
    	p.representant_nom      = representant_nom;
    	p.representant_prenom   = representant_prenom;
    	p.representant_titre    = representant_titre;

        if(msg.sender == vendeur.partie){
    	    vendeur = p;
    	}
        else{
    	    acheteur = p;
        }
        vendeur.valide = false;
        acheteur.valide = false;
    }

    //Validationd du partie
    
    function validation_partie() public {
        require(vendeur.partie == msg.sender || acheteur.partie == msg.sender);
        if(vendeur.partie == msg.sender){
            vendeur.valide = true;
        }
        if(acheteur.partie == msg.sender){
                acheteur.valide = true;
        }
	//Si les deux parties ont validé cette étapes est terminé Valide_partie = true et ne pourra plus être modifié.
	// valide_materiel = false est peut donc maintennant être modifié.
        if(acheteur.valide == true && vendeur.valide == true){
            valide_partie = true;
            valide_materiel = false;
        }
    }
    
    
}