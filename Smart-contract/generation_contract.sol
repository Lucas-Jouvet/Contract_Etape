pragma solidity 0.5.0;

import "./UpgradeStorage.sol";


//Contrat permettant d'intégrer toutes les fonctions du contract
contract geneContrat is UpgradeStorage {
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    event CommitMessage(string message);
    event FunctionUpdate(bytes4 indexed functionId, address indexed oldDelegate, address indexed newDelegate, string functionSignature);

    //Fonction du contract à appeler prenant en paramètre tous les adresses des étapes du contrat en paramètre. 
    function init_fonc(address apartie,address amateriel,address avente,address alivraison,address agaranties,address aetat_bien,address asignature) public {
        contractOwner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
       
	        
        bytes memory signature = "definition_partie(string,string,uint256,string,string,string)";
        bytes4 funcId = bytes4(keccak256(signature));
        delegates[funcId] = apartie;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), apartie, string(signature));
        emit CommitMessage("Added ERC1538 definition_partiefunction at contract creation");
        
        signature = "definition_representant(string,string,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = apartie;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), apartie, string(signature));
        emit CommitMessage("Added ERC1538 definition_representant function at contract creation");
        
        signature = "validation_partie()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = apartie;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), apartie, string(signature));
        emit CommitMessage("Added ERC1538 validation_partie() function at contract creation");
        
        //Materiel
        signature = "definiton_materiel(string,string,string,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = amateriel;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), amateriel, string(signature));
        emit CommitMessage("Added ERC1538 validation_partie() function at contract creation");

        
        signature = "acheteur_ok_materiel()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = amateriel;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), amateriel, string(signature));
        emit CommitMessage("Added ERC1538 acheteur_ok_materiel() function at contract creation");
    
        //Vente 
        signature = "definition_vente_vendeur(string,string,string,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = avente;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), avente, string(signature));
        emit CommitMessage("Added ERC1538 definition_vente_vendeur(string,string,string,string) function at contract creation");
        
        signature = "definition_vente_acheteur(bool,bool,bool,string,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = avente;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), avente, string(signature));
        emit CommitMessage("Added ERC1538 definition_vente_acheteur(bool,bool,bool,string,string) function at contract creation");
        
        signature = "validatation_termes_vente()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = avente;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), avente, string(signature));
        emit CommitMessage("Added ERC1538 Vente_validatation() function at contract creation");
        
        //Etat_bien_definiton
        signature = "definiton_etat(string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = aetat_bien;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), aetat_bien, string(signature));
        emit CommitMessage("Added ERC1538 definiton_etat(string) function at contract creation");
        
        signature = "validation_etat()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = aetat_bien;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), aetat_bien, string(signature));
        emit CommitMessage("Added ERC1538 validation_etat() function at contract creation");
        
        //Livraison
        signature = "definition_livraison(bool,bool,bool,string,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = alivraison;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), alivraison, string(signature));
        emit CommitMessage("Added ERC1538 definition_livraison(bool,bool,bool,string,string) function at contract creation");
        
        signature = "validation_livraison()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = alivraison;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), alivraison, string(signature));
        emit CommitMessage("Added ERC1538 livraison_valide() function at contract creation");
        
        //Garanties   
        
        signature = "definition_garanties(bool,bool,bool,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = agaranties;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), agaranties, string(signature));
        emit CommitMessage("Added ERC1538 definition_garanties(bool,bool,bool,string) function at contract creation");
        
        signature = "validation_garanties()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = agaranties;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), agaranties, string(signature));
        emit CommitMessage("Added ERC1538 validation_garanties() function at contract creation");
        
        //Litige_signature_
        signature = "definition_litige_signature(string,string,string)";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = asignature;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), asignature, string(signature));
        emit CommitMessage("Added ERC1538 definition_litige_signature(string,string,string) function at contract creation");
 
        signature = "validation_litige_signature()";
        funcId = bytes4(keccak256(signature));
        delegates[funcId] = asignature;
        funcSignatures.push(signature);
        funcSignatureToIndex[signature] = funcSignatures.length;
        emit FunctionUpdate(funcId, address(0), asignature, string(signature));
        emit CommitMessage("Added ERC1538 Litige_signature_valide() function at contract creation");
    }   
}