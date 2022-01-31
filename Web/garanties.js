const d_garanties = document.querySelector('.Send_garanties');
const affiche_garanties = document.querySelector('.Afficher_garanties');
const valide_garanties = document.querySelector('.Valide_garanties');
const q_valide_garanties = document.querySelector('.Q_Valide_garanties');

var typeg = document.getElementById("typeg");
var dure = document.getElementById("dure");


d_garanties.addEventListener('click', () => {
    envoi_garanties()
});
affiche_garanties.addEventListener('click', () => {

    affich_garanties()
});
q_valide_garanties.addEventListener('click', () => {

    Qq_Valide_garanties();
});
valide_garanties.addEventListener('click', () => {
    Valide_garanties();
});


function envoi_garanties() {
    getAccount();
    $("#txGaranties").text("Modalités garantie en cours d'envoi ...");
    var pas_de_garanties = false;
    var cession_garanties = false;
    var garanties_vendeur = false;
    if(typeg.value == "pas_de_garanties"){
	pas_de_garanties = true;
    }
    else if(typeg.value == "cession_garanties"){
	cession_garanties = true;
    }
    else if(typeg.value ==  "garanties_vendeur"){
	garanties_vendeur = true;
    }
    else{
	console.log("erreur parse Modalité garanties : " +typeg.value);
    }         
    VM2.methods.definition_garanties(pas_de_garanties,cession_garanties,garanties_vendeur,dure.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txGaranties").text("Modalité garantie anvoyé avec succès!");

	    affich_garanties();
        })
        .on("error", function(error) {
	    $("#txGaranties").text(error);
        });
    
    
}

function affich_garanties() {
    getAccount();
    $("#DefGaranties").empty();
    VM.methods.Garanties_lire().call({ from: account }).then((result) => {
	$("#DefGaranties").append(" <div class='DefGaranties'> \
              <ul> \
                <li>type de garantie : "+result[0]+"</li> \
                <li>durée : "+result[1]+"</li> \
              </ul>\
 </div> ");
    }).catch(function(err){
        console.log('err...\n'+err);
    });   
}

function Valide_garanties(){
    getAccount();
    $("#Validation_garanties").text("Envoi validation garantie ...");
    VM2.methods.validation_garanties()
	.send({ from: account })
	.on("receipt", function(receipt) {
	    Qq_Valide_Garanties();
	})
	.on("error", function(error) {
	    $("#Validation_Garanties").text(error);
	});   
}


function Qq_Valide_garanties(){
    getAccount();

    VM.methods.Garanties_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_Garanties").text("Les modalités de garantie sont validées");
	}
	else{
	    $("#Validation_Garanties").text("Les modalités de garantie ne sont pas validées");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });
}
