pragma solidity 0.5.0;

import "./UpgradeStorage.sol";

contract Contract_litige_signature is UpgradeStorage { 
  
    
    function definition_litige_signature(string memory nom_tribunal,
    				     string memory ville_signature,
    				     string memory date_signature) public{
    
    	require(vendeur.partie == msg.sender || acheteur.partie == msg.sender);
    	require(valide_etat_bien == true);
    	require(valide_litige_signature == false);
        
    	litige_signature.signature_vendeur = false;
    	litige_signature.signature_acheteur = false;
    	litige_signature.nom_tribunal = nom_tribunal;
    	litige_signature.ville_signature = ville_signature;
    	litige_signature.date_signature = date_signature;
    }
    

    function validation_litige_signature() public{
    	require(vendeur.partie == msg.sender || acheteur.partie == msg.sender);
    	 if(vendeur.partie == msg.sender)
    	    litige_signature.signature_vendeur = true;
    	 if(acheteur.partie == msg.sender)
    	    litige_signature.signature_acheteur = true;
    	 if(litige_signature.signature_vendeur == true && litige_signature.signature_acheteur == true){
    	    valide_litige_signature = true;
    	    contratValide = true;
    	 }
    }
    
}