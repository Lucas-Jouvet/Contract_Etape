pragma solidity 0.5.0;

import "./UpgradeStorage.sol";
contract Contract_Livraison is UpgradeStorage{ 
    function definition_livraison(bool retire_vendeur,
    			    bool livre_vendeur,
    			    bool livre_frais_acheteur,
    			    string memory adresse,
    			    string memory date_livraison) public{
        require(vendeur.partie == msg.sender);
        require(valide_vente);
        require(valide_livraison == false);
          
          if((retire_vendeur && !livre_vendeur && !livre_frais_acheteur) ||
          	 (!retire_vendeur && livre_vendeur && !livre_frais_acheteur) ||
    	 (!retire_vendeur && !livre_vendeur && livre_frais_acheteur)){
    	 		  
    	 	livraison.retire_vendeur = retire_vendeur;
    		livraison.livre_vendeur = livre_vendeur;
    		livraison.livre_frais_acheteur = livre_frais_acheteur;
    		livraison.adresse = adresse;
    		livraison.date_livraison = date_livraison;
          }
         
    }

    function validation_livraison() public{
    	 require(acheteur.partie == msg.sender);
    	 valide_livraison = true;
    	 valide_garanties = false;
    	 
    }

}