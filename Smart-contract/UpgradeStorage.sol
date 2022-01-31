pragma solidity 0.5.0;

contract UpgradeStorage {
    //owner of the contract
    address internal contractOwner;

    // maps functions to the delegate contracts that execute the functions
    // funcId => delegate contract
    mapping(bytes4 => address) internal delegates;

    // array of function signatures supported by the contract
    bytes[] internal funcSignatures;

    // maps each function signature to its position in the funcSignatures array.
    // signature => index+1
    mapping(bytes => uint256) internal funcSignatureToIndex;
    
    //Variable permettant le fonctionnement du contrat et les données du contrat
    
    struct Partie{
        bool valide;
        address partie;
        string nom_societe;
        string forme_juridique;
        uint capital;
        string registre_commerce;
        string siret;
        string adresse_siege;
        string representant_nom;
        string representant_prenom;
        string representant_titre;
    }
    
    bool valide_partie;
    Partie acheteur;
    Partie vendeur;
    
    struct Materiel{
        string marque;
        string numero_de_serie;
        string description;
        string description_objet_supp;
        bool declaration_vendeur;
    }
    
    bool valide_materiel;
    Materiel materiel;
    
    struct Vente{
        bool acheteur_valide;
        bool vendeur_valide;
    
        string prix_ht;
        string prix_tva;
        bool virement;
        bool espece;
        bool cheque;
        string cheque_numero;
        string virement_date_de_paiment;
        string virement_num_compte;
        string virement_nom_banc;
           
    }
    
    bool valide_vente;
    Vente vente;
    
    struct Livraison{
        bool retire_vendeur;
        bool livre_vendeur;
        bool livre_frais_acheteur;
        string adresse;
        string date_livraison;
    }

    bool valide_livraison;
    Livraison livraison;
    
    struct Garanties{
        bool pas_de_garanties;
        bool cession_garanties;
        bool garanties_vendeur;
        string dure;
    }
    
    bool valide_garanties;
    Garanties garanties;
    
    struct Etat_Bien{
        bool acheteur_valide;
        bool vendeur_valide;
        string etat;
    }
    
       
    bool valide_etat_bien;
    Etat_Bien etat_bien;
    
      struct Litige_signature{
        string nom_tribunal;
        string ville_signature;
        string date_signature;
        bool signature_vendeur;
        bool signature_acheteur;
    }
    
    bool valide_litige_signature;
    Litige_signature litige_signature;
    
    bool contratValide;

}