pragma solidity 0.5.0;

import "./UpgradeStorage.sol";

contract Contract_Garanties is UpgradeStorage{   
    function definition_garanties(bool pas_de_garanties,bool cession_garanties, bool garanties_vendeur,string memory dure) public{
        require(vendeur.partie == msg.sender);
        require(valide_livraison);
        require(valide_garanties ==  false);
        if((pas_de_garanties && !cession_garanties && !garanties_vendeur) ||
           (!pas_de_garanties && cession_garanties && !garanties_vendeur) ||
           (!pas_de_garanties && !cession_garanties && garanties_vendeur)){
            garanties.pas_de_garanties = pas_de_garanties;
            garanties.cession_garanties = cession_garanties;
            garanties.garanties_vendeur = garanties_vendeur;
            garanties.dure = dure;
        }
    }
    
    function validation_garanties() public{
        require(acheteur.partie == msg.sender);
        valide_garanties = true;
        valide_etat_bien = false;
    }
}