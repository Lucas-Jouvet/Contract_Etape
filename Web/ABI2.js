var VMABI2 = [
    {
	"constant": false,
	"inputs": [],
	"name": "validation_livraison",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "retire_vendeur",
		"type": "bool"
	    },
	    {
		"name": "livre_vendeur",
		"type": "bool"
	    },
	    {
		"name": "livre_frais_acheteur",
		"type": "bool"
	    },
	    {
		"name": "adresse",
		"type": "string"
	    },
	    {
		"name": "date_livraison",
		"type": "string"
	    }
	],
	"name": "definition_livraison",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },

    {
	"constant": false,
	"inputs": [],
	"name": "validation_garanties",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "pas_de_garanties",
		"type": "bool"
	    },
	    {
		"name": "cession_garanties",
		"type": "bool"
	    },
	    {
		"name": "garanties_vendeur",
		"type": "bool"
	    },
	    {
		"name": "dure",
		"type": "string"
	    }
	],
	"name": "definition_garanties",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "etat",
		"type": "string"
	    }
	],
	"name": "definiton_etat",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "validation_etat",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "validation_litige_signature",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "nom_tribunal",
		"type": "string"
	    },
	    {
		"name": "ville_signature",
		"type": "string"
	    },
	    {
		"name": "date_signature",
		"type": "string"
	    }
	],
	"name": "definition_litige_signature",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "apartie",
		"type": "address"
	    },
	    {
		"name": "amateriel",
		"type": "address"
	    },
	    {
		"name": "avente",
		"type": "address"
	    },
	    {
		"name": "alivraison",
		"type": "address"
	    },
	    {
		"name": "agaranties",
		"type": "address"
	    },
	    {
		"name": "aetat_bien",
		"type": "address"
	    },
	    {
		"name": "asignature",
		"type": "address"
	    }
	],
	"name": "init_fonc",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
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
    }
]
