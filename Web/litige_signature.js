const d_litige_signature = document.querySelector('.Send_litige_signature');
const affiche_litige_signature = document.querySelector('.Afficher_litige_signature');
const valide_litige_signature= document.querySelector('.Valide_litige_signature');
const q_valide_litige_signature = document.querySelector('.Q_Valide_litige_signature');

var nom_tribunal = document.getElementById("nom_tribunal");
var ville_signature = document.getElementById("ville_signature");
var date_signature = document.getElementById("date_signature");

d_litige_signature.addEventListener('click', () => {
    envoi_litige_signature()
});
affiche_litige_signature.addEventListener('click', () => {

    affich_litige_signature()
});
q_valide_litige_signature.addEventListener('click', () => {

    Qq_Valide_litige_signature();
});
valide_litige_signature.addEventListener('click', () => {
    Valide_litige_signature();
});

function envoi_litige_signature() {
    getAccount();
    $("#txLitige_signature").text("Information signature  en cours d'envoi ...");
    VM2.methods.definition_litige_signature(nom_tribunal.value,ville_signature.value,date_signature.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txLitige_signature").text("Information signature envoyé avec succès!");

	    affich_litige_signature();
        })
        .on("error", function(error) {
	    $("#txLitige_signature").text(error);
        });
    
    
}

function affich_litige_signature() {
    getAccount();
    $("#DefLitige_signature").empty();
    VM.methods.Litige_signature_lire().call({ from: account }).then((result) => {
	$("#DefLitige_signature").append(" <div class='Litige_signature'> \
              <ul> \
<li>Signature : "+result[0]+"</li> \
                <li>Nom du tribunal : "+result[1]+"</li> \
                <li>Ville de signature : "+result[2]+"</li> \
<li>Date de signature : "+result[3]+"</li> \
              </ul>\
 </div> ");
    }).catch(function(err){
        console.log('err...\n'+err);
    });   
}

function Valide_litige_signature(){
    getAccount();
    $("#Validation_Litige_signature").text("Envoi validation litige_signature ...");
    VM2.methods.validation_litige_signature()
	.send({ from: account })
	.on("receipt", function(receipt) {
	    Qq_Valide_litige_signature();
	})
	.on("error", function(error) {
	    $("#Validation_Litige_signature").text(error);
	});   
}


function Qq_Valide_litige_signature(){
    getAccount();

    VM.methods.Litige_signature_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_Litige_signature").text("Contrat signé et donc valide");
	}
	else{
	    $("#Validation_Litige_signature").text("Contrat non signé ");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });
}
