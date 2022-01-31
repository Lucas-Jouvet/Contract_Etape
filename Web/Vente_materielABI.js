var VMABI = [
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"name": "previousOwner",
		"type": "address"
	    },
	    {
		"indexed": true,
		"name": "newOwner",
		"type": "address"
	    }
	],
	"name": "OwnershipTransferred",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": false,
		"name": "message",
		"type": "string"
	    }
	],
	"name": "CommitMessage",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [
	    {
		"indexed": true,
		"name": "functionId",
		"type": "bytes4"
	    },
	    {
		"indexed": true,
		"name": "oldDelegate",
		"type": "address"
	    },
	    {
		"indexed": true,
		"name": "newDelegate",
		"type": "address"
	    },
	    {
		"indexed": false,
		"name": "functionSignature",
		"type": "string"
	    }
	],
	"name": "FunctionUpdate",
	"type": "event"
    },
    {
	"inputs": [
	    {
		"name": "_erc1538Delegate",
		"type": "address"
	    },
	    {
		"name": "adresse_acheteur",
		"type": "address"
	    },
	    {
		"name": "adresse_vendeur",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
    },
    {
	"payable": true,
	"stateMutability": "payable",
	"type": "fallback"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Contract_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Etat_bien_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Etat_bien_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Garanties_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Garanties_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "length_funSignature",
	"outputs": [
	    {
		"name": "",
		"type": "uint256"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Litige_signature_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Litige_signature_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Livraison_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Livraison_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Materiel_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Materiel_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Partie_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_acheteur",
	"outputs": [
	    {
		"name": "nom_societe",
		"type": "string"
	    },
	    {
		"name": "forme_juridique",
		"type": "string"
	    },
	    {
		"name": "capital",
		"type": "uint256"
	    },
	    {
		"name": "registre_commerce",
		"type": "string"
	    },
	    {
		"name": "siret",
		"type": "string"
	    },
	    {
		"name": "adresse_siege",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_acheteur_representant",
	"outputs": [
	    {
		"name": "representant_nom",
		"type": "string"
	    },
	    {
		"name": "representant_prenom",
		"type": "string"
	    },
	    {
		"name": "representant_titre",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_vendeur",
	"outputs": [
	    {
		"name": "nom_societe",
		"type": "string"
	    },
	    {
		"name": "forme_juridique",
		"type": "string"
	    },
	    {
		"name": "capital",
		"type": "uint256"
	    },
	    {
		"name": "registre_commerce",
		"type": "string"
	    },
	    {
		"name": "siret",
		"type": "string"
	    },
	    {
		"name": "adresse_siege",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_vendeur_representant",
	"outputs": [
	    {
		"name": "representant_nom",
		"type": "string"
	    },
	    {
		"name": "representant_prenom",
		"type": "string"
	    },
	    {
		"name": "representant_titre",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Vente_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Vente_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },

    {
	"constant": false,
	"inputs": [],
	"name": "lire_partie",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "validation_partie",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "partie_acheteur",
		"type": "address"
	    },
	    {
		"name": "partie_vendeur",
		"type": "address"
	    }
	],
	"name": "add_parties",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "representant_nom",
		"type": "string"
	    },
	    {
		"name": "representant_prenom",
		"type": "string"
	    },
	    {
		"name": "representant_titre",
		"type": "string"
	    }
	],
	"name": "definition_representant",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "nom_societe",
		"type": "string"
	    },
	    {
		"name": "forme_juridique",
		"type": "string"
	    },
	    {
		"name": "capital",
		"type": "uint256"
	    },
	    {
		"name": "registre_commerce",
		"type": "string"
	    },
	    {
		"name": "siret",
		"type": "string"
	    },
	    {
		"name": "adresse_siege",
		"type": "string"
	    }
	],
	"name": "definition_partie",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "marque",
		"type": "string"
	    },
	    {
		"name": "numero_de_serie",
		"type": "string"
	    },
	    {
		"name": "description",
		"type": "string"
	    },
	    {
		"name": "description_objet_supplementaire",
		"type": "string"
	    }
	],
	"name": "definiton_materiel",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "lire_materiel",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "acheteur_ok_materiel",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "validatation_termes_vente",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "virement",
		"type": "bool"
	    },
	    {
		"name": "cheque",
		"type": "bool"
	    },
	    {
		"name": "espece",
		"type": "bool"
	    },
	    {
		"name": "cheque_numero",
		"type": "string"
	    },
	    {
		"name": "virement_date_de_paiment",
		"type": "string"
	    }
	],
	"name": "definition_vente_acheteur",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "lire_vente",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "prix_ht",
		"type": "string"
	    },
	    {
		"name": "prix_tva",
		"type": "string"
	    },
	    {
		"name": "virement_num_compte",
		"type": "string"
	    },
	    {
		"name": "virement_nom_banc",
		"type": "string"
	    }
	],
	"name": "definition_vente_vendeur",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    }
]
