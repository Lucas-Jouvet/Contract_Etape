pragma solidity 0.5.0;

import "./UpgradeStorage.sol";

contract Vente_materiel_V5 is UpgradeStorage {
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    event CommitMessage(string message);
    event FunctionUpdate(bytes4 indexed functionId, address indexed oldDelegate, address indexed newDelegate, string functionSignature);

    constructor(address adresse_acheteur, address adresse_vendeur) public {
        contractOwner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender); // Génération de l'évenement permettant de signaler qui est le propriétaire du contrat
        address _erc1538Delegate = 0x25c33d962B43Ed8494f505D4175813ab580311dB; // Adresse du contract 
        //Adding ERC1538 updateContract function
        bytes memory signature = "updateContract(address,string,string)";
        bytes4 funcId = bytes4(keccak256(signature));
        delegates[funcId] = _erc1538Delegate;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), _erc1538Delegate, string(signature));
        emit CommitMessage("Added ERC1538 updateContract function at contract creation");
        
        signature = "init_fonc(address,address,address,address,address,address,address)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = 0x44F740796a221f265CD175929A84dc0077e70068;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0),0x44F740796a221f265CD175929A84dc0077e70068, string(signature));
        emit CommitMessage("Added ERC1538 updateContract function at contract creation");

	//défintion de l'acheteur et du vendeur (adresse Ethereum de chacun des deux parties)
        acheteur.partie = adresse_acheteur;
        vendeur.partie = adresse_vendeur;

	// initialisation des variables permettant de faire la validation par étape.
	// Une fois une étape à true elle ne peut plus être modifié.
	// C'est pourquoi seul la première variable est à false. Une fois la première étape terminé la variable suivante passe à true et l'actuelle à false.
	// Il n'est plus possible de revenir en arrière.
        valide_partie = false;
        valide_materiel = true;
        valide_vente = true;
        valide_livraison = true;
        valide_garanties = true;
        valide_etat_bien = true;
        valide_litige_signature = true;

	//initialisation à false de la variable permettant de connaitre la validité du contract  
        contratValide = false;
    }

    // fonction fallback permettant de faire les dellegatecall aux fonctions.
    // La fonction update est aussi appelé grace à cette fonction.
    function() external payable { 
        address delegate = delegates[msg.sig];
        require(delegate != address(0), "Function does not exist.");
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize)
            let result := delegatecall(gas, delegate, ptr, calldatasize, 0, 0)
            let size := returndatasize
            returndatacopy(ptr, 0, size)
            switch result
            case 0 {revert(ptr, size)}
            default {return (ptr, size)}
        }
    }
    
    //Lecture nombre fonction :
    function length_funSignature() public view returns (uint256){
        return funcSignatures.length;
    }
    
    //Lecture info :
    
    function read_acheteur() public view returns (string memory nom_societe, 
                                string memory forme_juridique, 
                                uint256 capital, 
                                string memory registre_commerce, 
                                string memory siret, 
                                string memory adresse_siege){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return (acheteur.nom_societe, acheteur.forme_juridique, acheteur.capital, acheteur.registre_commerce, acheteur.siret, acheteur.adresse_siege);                                
    }
    function read_acheteur_representant() public view returns (string memory representant_nom,
                                string memory representant_prenom,
                                string memory representant_titre){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return (acheteur.representant_nom, acheteur.representant_prenom, acheteur.representant_titre);                                
    }
    function read_vendeur() public view returns (string memory nom_societe, 
                                string memory forme_juridique, 
                                uint256 capital, 
                                string memory registre_commerce, 
                                string memory siret, 
                                string memory adresse_siege){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return (vendeur.nom_societe, vendeur.forme_juridique, vendeur.capital, vendeur.registre_commerce, vendeur.siret, vendeur.adresse_siege);                                
    }
    function read_vendeur_representant() public view returns (string memory representant_nom,
                                string memory representant_prenom,
                                string memory representant_titre){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return (vendeur.representant_nom, vendeur.representant_prenom, vendeur.representant_titre); 
    }
    
        
    function Partie_valide() public view returns(bool){
        return valide_partie;
    }
    
    function Materiel_lire() public view returns (string memory,string memory,string memory,string memory){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return (materiel.marque,materiel.numero_de_serie,materiel.description,materiel.description_objet_supp);
    }
    
    function Materiel_valide() public view returns(bool){
        require (acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return valide_materiel;
    }
    
    function Vente_lire() public view returns (string memory,string memory,string memory,string memory,string memory,string memory,string memory){
        require (acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        if(vente.virement)
    	    return ("virement",vente.prix_ht,vente.prix_tva,"",vente.virement_date_de_paiment,vente.virement_num_compte,vente.virement_nom_banc);
    	 else if(vente.cheque){
    	     return ("cheque",vente.prix_ht,vente.prix_tva,vente.cheque_numero,"","","");
    	 }
    	 else if(vente.espece){
    	     return ("espece",vente.prix_ht,vente.prix_tva,"","","","");
    	 }
    }
    
    function Vente_valide() public view returns(bool){
        require(acheteur.partie ==msg.sender || vendeur.partie == msg.sender);
        return(valide_vente);
    }
     function Etat_bien_lire() public view returns (string memory){
        require(acheteur.partie ==msg.sender || vendeur.partie == msg.sender);
        return etat_bien.etat;
    }
    
    function Etat_bien_valide() public view returns(bool){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return valide_etat_bien;
    }
    function Livraison_lire() public view returns (string memory,string memory,string memory){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        if(livraison.retire_vendeur)
    	    return ("retirer chez le vendeur",livraison.adresse,livraison.date_livraison);
        else if(livraison.livre_vendeur)
    	    return ("livrer par le vendeur",livraison.adresse,livraison.date_livraison);
        else if(livraison.livre_frais_acheteur)
    	    return("livraison aux frais de l'acheteur",livraison.adresse,livraison.date_livraison);
    }
    function Livraison_valide() public view returns(bool){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return valide_livraison;
    }
    
    function Garanties_lire() public view returns(string memory,string memory){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        if(garanties.pas_de_garanties)
            return ("pas de garanties", "0");
        if(garanties.cession_garanties)
            return("cession de garanties", garanties.dure);
        if(garanties.garanties_vendeur)
            return("garanties_vendeur", garanties.dure);
    }
    
    function Garanties_valide() public view returns(bool){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return valide_garanties;
    }
    
    function Litige_signature_lire() public view returns (string memory,string memory,string memory,string memory){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
    	if(litige_signature.signature_vendeur && litige_signature.signature_acheteur)
    	    return("signer par le vendeur et l'acheteur", litige_signature.nom_tribunal,litige_signature.ville_signature,litige_signature.date_signature);
    	else if(litige_signature.signature_acheteur)
    	    return("signer que par l'acheteur", litige_signature.nom_tribunal,litige_signature.ville_signature,litige_signature.date_signature);
    	else if(litige_signature.signature_vendeur)
    	    return("signer que par le vendeur", litige_signature.nom_tribunal,litige_signature.ville_signature,litige_signature.date_signature);
    	else
    	    return("aucune signature", litige_signature.nom_tribunal,litige_signature.ville_signature,litige_signature.date_signature);
    }
    
    function Litige_signature_valide() public view returns(bool){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return valide_litige_signature;
    }
    
    function Contract_valide() public view returns(bool){
        require(acheteur.partie == msg.sender || vendeur.partie == msg.sender);
        return contratValide;
    }
    
}