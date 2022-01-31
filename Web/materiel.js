const d_materiel = document.querySelector('.Send_Materiel');
const affiche_materiel = document.querySelector('.Afficher_Materiel');
const valide_materiel = document.querySelector('.Valide_materiel');
const q_valide_materiel = document.querySelector('.Q_Valide_materiel');

var marque = document.getElementById("marque");
var numero_de_serie = document.getElementById("numero_de_serie");
var description = document.getElementById("description");
var objet_supp = document.getElementById("description_objet_supplementaire");


d_materiel.addEventListener('click', () => {
    envoi_materiel()
});
affiche_materiel.addEventListener('click', () => {

    affich_materiel()
});
q_valide_materiel.addEventListener('click', () => {

    Qq_Valide_materiel();
});
valide_materiel.addEventListener('click', () => {
    Valide_materiel();
});

function envoi_materiel() {
    getAccount();
    $("#txMateriel").text("Caractéristiques en cours d'envoi ...");
    VM.methods.definiton_materiel(marque.value,numero_de_serie.value,description.value,objet_supp.value)
        .send({ from: account })
	.on("receipt", function(receipt) {
	    $("#txMateriel").text("Caractéristiques anvoyé avec succès!");

	    affich_materiel();
        })
        .on("error", function(error) {
	    $("#txMateriel").text(error);
        });
    
    
}

function affich_materiel() {
    getAccount();
    $("#DefMateriel").empty();
    VM.methods.Materiel_lire().call({ from: account }).then((result) => {
	$("#DefMateriel").append(" <div class='DefMateriel'> \
              <ul> \
                <li>Marque : "+result[0]+"</li> \
                <li>Numero de série : "+result[1]+"</li> \
                <li>Description matériel : "+result[2]+"</li> \
                <li>Description de matériel supplémentaire : "+result[3]+"</li> \
              </ul>\
 </div> "
				);
    }).catch(function(err){
        console.log('err...\n'+err);
    });   
}

function Valide_materiel(){
    getAccount();
    $("#Validation_Materiel").text("Envoi validation materiel ...");
    VM.methods.acheteur_ok_materiel()
	.send({ from: account })
	.on("receipt", function(receipt) {
	    Qq_Valide_materiel();
	})
	.on("error", function(error) {
	    $("#Validation_Materiel").text(error);
	});   
}

function Qq_Valide_materiel(){
    getAccount();

    VM.methods.Materiel_valide().call({ from: account }).then((result) => {
	if(result == true){
	    $("#Validation_Materiel").text("Les caractéristiques sont validées");
	}
	else{
	    $("#Validation_Materiel").text("Les caractéristiques ne sont pas validées");
	}
    }).catch(function(err){
	console.log('err...\n'+err);
    });
}
