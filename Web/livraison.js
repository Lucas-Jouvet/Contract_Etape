const d_livraison = document.querySelector('.Send_livraison');
const affiche_livraison = document.querySelector('.Afficher_Livraison');
const valide_livraison = document.querySelector('.Valide_livraison');
const q_valide_livraison= document.querySelector('.Q_Valide_livraison');

var ou = document.getElementById("ou");
var adresse = document.getElementById("adresse");
var date_livraison = document.getElementById("date_livraison");


d_livraison.addEventListener('click', () => {
    envoi_livraison()
});
affiche_livraison.addEventListener('click', () => {

    affich_livraison()
});
q_valide_livraison.addEventListener('click', () => {

    Qq_Valide_livraison();
});
valide_livraison.addEventListener('click', () => {
    Valide_livraison();
});


function envoi_livraison() {
    getAccount();
    $("#txLivraison").text("Modalités de livraison en cours d'envoi ...");
    var retire_vendeur = false;
    var livre_vendeur = false;
    var livre_frais_acheteur = false;
    if(ou.value == "retire_vendeur"){
	retire_vendeur = true;
    }
    else if(ou.value == "livre_vendeur"){
	livre_vendeur = true;
    }
    else if(ou.value ==  "livre_frais_acheteur"){
	livre_frais_acheteur = true;
    }
    else{
	console.log("erreur parse Modalité livraison : " +ou.value);
    }         
    VM2.methods.definition_livraison(retire_vendeur,livre_vendeur,livre_frais_acheteur,adresse.value,date_livraison.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txLivraison").text("Modalité livraison anvoyé avec succès!");

	    affich_livraison();
        })
        .on("error", function(error) {
	    $("#txLivraison").text(error);
        });
    
    
}
function affich_livraison() {
    getAccount();
    $("#DefLivraison").empty();
    VM.methods.Livraison_lire().call({ from: account }).then((result) => {
	$("#DefLivraison").append(" <div class='DefLivraison'> \
              <ul> \
                <li>Type de livraison : "+result[0]+"</li> \
                <li>Adresse : "+result[1]+"</li> \
                <li>Date : "+result[2]+"</li> \
              </ul>\
 </div> ");
    }).catch(function(err){
        console.log('err...\n'+err);
    });   
}

function Valide_livraison(){
    getAccount();
    $("#Validation_livraison").text("Envoi validation livraison ...");
    VM2.methods.validation_livraison()
	.send({ from: account })
	.on("receipt", function(receipt) {
	    Qq_Valide_livraison();
	})
	.on("error", function(error) {
	    $("#Validation_livraison").text(error);
	});   
}


function Qq_Valide_livraison(){
    getAccount();

    VM.methods.Livraison_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_Livraison").text("Les modalités de livaison sont validées");
	}
	else{
	    $("#Validation_Livraison").text("Les modalités de livaison ne sont pas validées");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });
}
