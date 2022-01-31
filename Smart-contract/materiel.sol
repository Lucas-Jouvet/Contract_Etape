pragma solidity 0.5.0;

import "./UpgradeStorage.sol";

contract Contract_Materiel is UpgradeStorage {

    //definition du materiel à vendre
    function definiton_materiel( string memory marque,
    			     string memory numero_de_serie,
    			     string memory description,
    			     string memory description_objet_supplementaire) public{
    	 //Seul le vendeur peut modifier
    	 require(vendeur.partie == msg.sender);
	 //Verification que l'étape précédente à bien eu lieu
    	 require(valide_partie == true);
	 //Verification qu'il est possible de modifier la partie matériel
    	 require(valide_materiel == false);

    	 //Insertion des informations dans la structure
    	 materiel.marque	  	 = marque;
    	 materiel.numero_de_serie 	 = numero_de_serie;
    	 materiel.description	  	 = description;
    	 materiel.description_objet_supp = description_objet_supplementaire;
    }

    //Validation de l'étape
    function acheteur_ok_materiel() public{
    	 // Seul l'acheteur peut valider l'étape
    	 require(acheteur.partie == msg.sender);
	 //Fin de l'étape materiel
    	 valide_materiel = true;
	 //L'étape vente est accessible
    	 valide_vente = false;
    }
    
    
}