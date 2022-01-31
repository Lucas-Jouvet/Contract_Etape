pragma solidity 0.5.0;

contract fonction_Send {
    function gene(address apartie, address amateriel, address avente, address alivraison, address agaranties, address aetat_bien, address asignature) public pure returns (bytes memory){
        return abi.encodeWithSignature("init_fonc(address,address,address,address,address,address,address)",apartie,amateriel,avente,alivraison,agaranties,aetat_bien,asignature);
    }
    function updateContract(address _delegate, string memory _functionSignatures, string memory commitMessage) public pure returns (bytes memory){
        return abi.encodeWithSignature("updateContract(address,string,string)",_delegate, _functionSignatures, commitMessage);
    }
    function Partie_add_parties(address partie_acheteur, address partie_vendeur) public pure returns (bytes memory) {
        return abi.encodeWithSignature("add_parties(address, address)",partie_acheteur,partie_vendeur);
    }
    function Partie_definition(string memory nom_societe, 
                                string memory forme_juridique, 
                                uint256 capital,
                                string memory registre_commerce,
                                string memory siret,
                                string memory adresse_siege) public pure returns (bytes memory){
        return abi.encodeWithSignature("definition_partie(string,string,uint256,string,string,string)",nom_societe,forme_juridique,capital,registre_commerce,siret,adresse_siege);
    }
    function Partie_def_reprentant(string memory representant_nom,
                                string memory representant_prenom,
                                string memory representant_titre) public pure returns (bytes memory) {
        return abi.encodeWithSignature("definition_representant(string,string,string)",representant_nom, representant_prenom, representant_titre);
    }
    
    function Partie_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("lire_partie()");
    }
    
    function Partie_validation() public pure returns (bytes memory) { 
       return abi.encodeWithSignature("validation_partie()");
    }

    // Materiel :
    function Materiel_definiton( string memory marque,
    			     string memory numero_de_serie,
    			     string memory description,
    			     string memory description_objet_supplementaire) public pure returns (bytes memory){
    	return abi.encodeWithSignature("definiton_materiel(string,string,string,string)",marque, numero_de_serie, description, description_objet_supplementaire);
    }
    
    function Materiel_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("lire_materiel()");
    }
   
    function Materiel_validation_acheteur() public pure returns (bytes memory){
        return abi.encodeWithSignature("acheteur_ok_materiel()");
    }
    
    //Vente 
    function Vente_definition_vendeur(string memory prix_ht,
                                       string memory prix_tva,
    				                   string memory virement_num_compte,
    				                   string memory virement_nom_banc) public pure returns (bytes memory){
    	return abi.encodeWithSignature("definition_vente_vendeur(string,string,string,string)",prix_ht, prix_tva, virement_num_compte, virement_nom_banc);
    }
    
    function Vente_definition_acheteur(bool virement,
    				    bool cheque,
    				    bool espece,
    				    string memory cheque_numero,
    				    string memory virement_date_de_paiment) public pure returns (bytes memory){
    	return abi.encodeWithSignature("definition_vente_acheteur(bool,bool,bool,string,string)",virement, cheque, espece, cheque_numero,virement_date_de_paiment); 
    }                                   
    
    function Vente_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("lire_vente()");
    }
   
    function Vente_validatation() public pure returns (bytes memory){
        return abi.encodeWithSignature("validatation_termes_vente()");
    }
    
    
    //Etat_bien_definiton
    function Etat_bien_definiton( string memory etat) public pure returns (bytes memory){
        return abi.encodeWithSignature("definiton_etat(string)",etat);
    }
    
    function Etat_bien_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("lire_etat()");
    }
    
   
    
    function Etat_bien_validation() public pure returns (bytes memory){
        return abi.encodeWithSignature("validation_etat()");
    }
    
    
    //Livraison
    function Livraison_definition(bool retire_vendeur,
    			    bool livre_vendeur,
    			    bool livre_frais_acheteur,
    			    string memory adresse,
    			    string memory date_livraison) public pure returns (bytes memory){
    	return abi.encodeWithSignature("definition_livraison(bool,bool,bool,string,string)",retire_vendeur,livre_vendeur,livre_frais_acheteur,adresse,date_livraison);
    }

    function Livraison_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("lire_livraison()");
    }
    
    
    function Livraison_validation() public pure returns (bytes memory){
        return abi.encodeWithSignature("validation_livraison()");
    }
    
    //Garanties   
    function Garanties_definition(bool pas_de_garanties,bool cession_garanties, bool garanties_vendeur,string memory dure) public pure returns (bytes memory){
        return abi.encodeWithSignature("definition_garanties(bool,bool,bool,string)",pas_de_garanties,cession_garanties,garanties_vendeur,dure);
    }
    
    function Garanties_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("lire_garanties()");
    }
    
    
    function Garanties_validation() public pure returns (bytes memory){
        return abi.encodeWithSignature("validation_garanties()");
    }
    
    
    //Litige_signature_
    function Litige_signature_definition(string memory nom_tribunal,
    				     string memory ville_signature,
    				     string memory date_signature) public pure returns (bytes memory){
        return abi.encodeWithSignature("definition_litige_signature(string,string,string)",nom_tribunal,ville_signature,date_signature);
    }
    
    function Litige_signature_lu() public pure returns (bytes memory){
        return abi.encodeWithSignature("consult_litige_signature()");
    }
    
    function Litige_signature_validation() public pure returns (bytes memory){
        return abi.encodeWithSignature("validation_litige_signature()");
    }
}