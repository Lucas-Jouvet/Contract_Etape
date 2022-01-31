const d_Vendeur_Vente = document.querySelector('.Send_Vente_Vendeur');
const d_Vendeur_Acheteur = document.querySelector('.Send_Vente_Acheteur');

const affiche_vente = document.querySelector('.Afficher_Vente');
const valide_vente = document.querySelector('.Valide_vente');
const q_valide_vente = document.querySelector('.Q_Valide_vente');

var prix_ht = document.getElementById("prix_ht");
var prix_tva = document.getElementById("prix_tva");
var virement_num_compte = document.getElementById("virement_num_compte");
var virement_nom_banc = document.getElementById("virement_nom_banc");

var type = document.getElementById("type");
var cheque_numero = document.getElementById("cheque_numero");
var virement_date_de_paiment = document.getElementById("virement_date_de_paiment");



d_Vendeur_Vente.addEventListener('click', () => {
    envoi_vente_vendeur();
});
d_Vendeur_Acheteur.addEventListener('click', () => {
    envoi_vente_acheteur();
});

affiche_vente.addEventListener('click', () => {

    affich_vente()
});
q_valide_vente.addEventListener('click', () => {

    Qq_Valide_vente();
});
valide_vente.addEventListener('click', () => {
    Valide_vente();
});

function envoi_vente_vendeur() {
    getAccount();
    $("#txVente").text("Type de paiement en cours d'envoi ...");
    VM.methods.definition_vente_vendeur(prix_ht.value,prix_tva.value,virement_num_compte.value,virement_nom_banc.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txVente").text("Type de paiement vendeur anvoyé avec succès!");

	    affich_vente();
        })
        .on("error", function(error) {
	    $("#txVente").text(error);
        });
    
    
}

function envoi_vente_acheteur() {
    getAccount();
    $("#txVente").text("Moyen de paiement en cours d'envoi ...");
    var cheque = false;
    var espece = false;
    var virement = false;
    if(type.value == "cheque"){
	cheque = true;
    }
    else if(type.value == "espece"){
	espece = true;
    }
    else if(type.value ==  "virement"){
	virement = true;
    }
    else{
	console.log("erreur parse moyen de paiement : " +type.value);
    }
    VM.methods.definition_vente_acheteur(virement,cheque,espece,cheque_numero.value,virement_date_de_paiment.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txVente").text("Termes vente acheteur anvoyé avec succès!");

	    affich_vente();
        })
        .on("error", function(error) {
	    $("#txVente").text(error);
        });
    
    
}

function affich_vente() {
    getAccount();
    $("#DefVente").empty();
    VM.methods.Vente_lire().call({ from: account }).then((result) => {
	if(result[0] == "virement"){
	    $("#DefVente").append(" <div class='DefVente'> \
              <ul> \
                <li>Type de paiement : virement</li> \
                <li>Prix hors taxe: "+result[1]+"</li> \
                <li>Prix tva : "+result[2]+"</li> \
                <li>Date de virement : "+result[4]+"</li> \
<li>Numéro de compte : "+result[5]+"</li> \
<li>Nom de la banque : "+result[6]+"</li> \
              </ul>\
 </div> ");
	}
	if(result[0] == "cheque"){
	    $("#DefVente").append(" <div class='DefVente'> \
              <ul> \
<li>Type paiment : Chèque</li> \
<li>Prix hors taxe: "+result[1]+"</li> \
<li>Prix tva : "+result[2]+"</li> \
<li>Numéro de chèque : "+result[3]+"</li> \
</ul>\
 </div> ");
	}
	if(result[0] == "espece"){
	    $("#DefVente").append(" <div class='DefVente'> \
              <ul> \
<li>Type paiement : espèces</li> \
<li>Prix hors taxe: "+result[1]+"</li> \
<li>Prix tva : "+result[2]+"</li> \
</ul>\
 </div> ");
	}
    }).catch(function(err){
        console.log('err...\n'+err);
    });   
}

function Valide_vente(){
    getAccount();
    $("#Validation_Vente").text("Envoi validation type de paiement ...");
    VM.methods.validatation_termes_vente()
        .send({ from: account })
	.on("receipt", function(receipt) {
	    Qq_Valide_vente();
        })
        .on("error", function(error) {
	    $("#Validation_Vente").text(error);
        });
}

function   Qq_Valide_vente(){
    getAccount();
    VM.methods.Vente_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_Vente").text("Le type de paiement est validé");
	}
	else{
	    $("#Validation_Vente").text("Le type de paiement n'est pas validé");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });

}




