const sAcheteurPartie = document.querySelector('.Send_Acheteur_partie');
const affiche_partie = document.querySelector('.Affiche_partie');
const valide_parties = document.querySelector('.Valide_parties');
const q_valide_parties = document.querySelector('.Q_Valide_parties');

var nom_societe = document.getElementById("ANS");
var forme_juridique = document.getElementById("AFJ");
var capital = document.getElementById("AC");
var registre_commerce = document.getElementById("ARC");
var siret = document.getElementById("AS");
var adresse_siege = document.getElementById("AAS");

q_valide_parties.addEventListener('click', () => {

    Q_Valide_Parties()
});
affiche_partie.addEventListener('click', () => {
    affiche_Partie();
});
sAcheteurPartie.addEventListener('click', () => {
    send_pAcheteur();
});
valide_parties.addEventListener('click', () => {
    Valide_Parties();
});

function send_pAcheteur() {
    getAccount();
    $("#txStatus").text("Envoi informations du partie en cours ...");
    var c = capital.value;
    //hexa = web3js.utils.toHex(capital.value * 1);
    VM.methods.definition_partie(nom_societe.value,forme_juridique.value,c,registre_commerce.value,siret.value,adresse_siege.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txStatus").text("Partie envoyé avec succès!");

	    affiche_Partie();
        })
        .on("error", function(error) {
	    $("#txStatus").text(error);
        });
    
    
}

function affiche_Partie() {
    getAccount();
    $("#DefAcheteur").empty();
    VM.methods.read_acheteur().call({ from: account }).then((result) => {
	$("#DefAcheteur").append("<div class='DefAcheteur'> <h3>Acheteur</h3>\
              <ul> \
                <li>Nom de société: "+result.nom_societe+"</li> \
                <li>Forme juridique: "+result.forme_juridique+"</li> \
                <li>Dapital: "+result.capital+"</li> \
                <li>Registre de commerce: "+result.registre_commerce+"</li> \
                <li>Siret: "+result.siret+"</li> \
                <li>Adresse siege: "+result.adresse_siege+"</li> \
              </ul>");
    }).catch(function(err){
        console.log('err...\n'+err);
    });

    VM.methods.read_vendeur().call({ from: account }).then((result) => {
	$("#DefAcheteur").append("<h3>Vendeur</h3><ul> \
                <li>Nom de société: "+result.nom_societe+"</li> \
                <li>Forme juridique: "+result.forme_juridique+"</li> \
                <li>Capital: "+result.capital+"</li> \
                <li>Registre de commerce: "+result.registre_commerce+"</li> \
                <li>Siret: "+result.siret+"</li> \
                <li>Adresse siege: "+result.adresse_siege+"</li> \
              </ul> \
            </div> ");
    }).catch(function(err){
        console.log('err...\n'+err);
    });
    
}
function Valide_Parties(){
    getAccount();
    $("#Validation_Parties").text("Envoi validation en cours ...");
    
    VM.methods.validation_partie()
	.send({ from: account })
	.on("receipt", function(receipt) {
	    Q_Valide_Parties();
	})
	.on("error", function(error) {
	    $("#Validation_Parties").text(error);
	});

    
}
function Q_Valide_Parties(){
    getAccount();

    VM.methods.Partie_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_Parties").text("Les parties sont validés par tout le monde");
	}
	else{
	    $("#Validation_Parties").text("Les parties ne sont pas encore validés par tout le monde");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });

}
