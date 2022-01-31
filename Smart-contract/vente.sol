pragma solidity 0.5.0;

import "./UpgradeStorage.sol";
contract Contract_Vente is UpgradeStorage {

    function definition_vente_vendeur(string memory prix_ht,
                                       string memory prix_tva,
    				                   string memory virement_num_compte,
    				                   string memory virement_nom_banc) public{
    	 require(vendeur.partie == msg.sender);
    	 require(valide_materiel);
    	 require(valide_vente == false);

    	 vente.prix_ht = prix_ht;
    	 vente.prix_tva = prix_tva;
    
    	 vente.virement_num_compte = virement_num_compte;
    	 vente.virement_nom_banc   = virement_nom_banc;

    	 vente.acheteur_valide = false;
    	 vente.vendeur_valide = false;
    }
    function definition_vente_acheteur(bool virement,
    				    bool cheque,
    				    bool espece,
    				    string memory cheque_numero,
    				    string memory virement_date_de_paiment) public{
    	require(acheteur.partie == msg.sender);
    	require(valide_materiel);
        require(valide_vente == false);
        
    	if(virement
    	   && !cheque
    	   && !espece){
    
    	     vente.virement = true;
    	     vente.cheque = false;
    	     vente.espece = false;
    	     vente.virement_date_de_paiment = virement_date_de_paiment;
    	}
    	else if (cheque
    		  && !espece
    		  && !virement){
    
    		    vente.virement = false;
    		    vente.cheque = true;
    		    vente.espece = false;
    		    vente.cheque_numero = cheque_numero;
    	}
    	else if(espece
    	         && !cheque
    		 && !virement){
    
    		   vente.virement = false;
    		   vente.cheque = false;
    		   vente.espece = true;
    	}
    	vente.acheteur_valide = false;
    	vente.vendeur_valide = false;
    	     
    }
    
    function validatation_termes_vente() public {
    	 require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
    	 if (acheteur.partie == msg.sender)
    	    vente.acheteur_valide = true;
    	 else
    	    vente.vendeur_valide = true;
    	 if(vente.vendeur_valide && vente.acheteur_valide){
    	    valide_vente = true;
    	    valide_livraison = false;
    	 }
    }
}