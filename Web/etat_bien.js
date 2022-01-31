const d_etat_bien = document.querySelector('.Send_etat_bien');
const affiche_etat_bien = document.querySelector('.Afficher_etat_bien');
const valide_etat_bien = document.querySelector('.Valide_etat_bien');
const q_valide_etat_bien = document.querySelector('.Q_Valide_etat_bien');

var etat = document.getElementById("etat");


d_etat_bien.addEventListener('click', () => {
    envoi_etat_bien()
});
affiche_etat_bien.addEventListener('click', () => {

    affich_etat_bien()
});
q_valide_etat_bien.addEventListener('click', () => {

    Qq_Valide_etat_bien();
});
valide_etat_bien.addEventListener('click', () => {
    Valide_etat_bien();
});

function envoi_etat_bien() {
    getAccount();
    $("#txEtat_bien").text("Description Etat matériel en cours d'envoi ...");
    VM2.methods.definiton_etat(etat.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txEtat_bien").text("Description Etat matériel envoyé avec succès!");

	    affich_garanties();
        })
        .on("error", function(error) {
	    $("#txEtat_bien").text(error);
        });
    
    
}
function affich_etat_bien() {
    getAccount();
    $("#DefEtat_bien").empty();
    VM.methods.Etat_bien_lire().call({ from: account }).then((result) => {
	$("#DefEtat_bien").text(result);
    }).catch(function(err){
        console.log('err...\n'+err);
    });   
}


function Valide_etat_bien(){
    getAccount();
    $("#Validation_etat_bien").text("Envoi validation état matériel ...");
    VM2.methods.validation_etat()
	.send({ from: account })
	.on("receipt", function(receipt) {
	    Qq_Valide_etat_bien();
	})
	.on("error", function(error) {
	    $("#Validation_etat_bien").text(error);
	});   
}


function Qq_Valide_etat_bien(){
    getAccount();

    VM.methods.Etat_bien_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_etat_bien").text("L'état du matériel est validé");
	}
	else{
	    $("#Validation_etat_bien").text("L'état du matériel n'est pas validé");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });
}

