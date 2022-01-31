var account;
var Vente_Materiel_address;
const new_contract = document.querySelector('.new_contract');
const go = document.querySelector('.go');

var add = document.getElementById("add");
var na = document.getElementById("na");
var nv = document.getElementById("nv");

function startApp() {
    //var Vente_Materiel_address = "0xc5b914A6C202a06A0300ed3A2323c124C04Ec7e5";
    //var Vente_Materiel_address = "0x96698482EfC6570ab5CD653e21914B58071F3d8A";
    Vente_Materiel_address = "0x6c674915487e23E373569205550be188B979f171";
    VM = new web3js.eth.Contract(VMABI, Vente_Materiel_address);
    VM2 = new web3js.eth.Contract(VMABI2, Vente_Materiel_address);
    getAccount();
    console.log("compte : "+account);
}

new_contract.addEventListener('click', () => {
    new_Contract();
});

go.addEventListener('click', () => {
    VM = new web3js.eth.Contract(VMABI, add.value);
    VM2 = new web3js.eth.Contract(VMABI2, add.value);
});
async function new_Contract(){
    getAccount();

    accounts = await ethereum.enable();
    add.value = "Déploiement en cours";
    const deployedContract = await new web3js.eth.Contract(abiv5)
	  .deploy({
	      data: compile,
	      arguments: [na.value, nv.value]
	  })
	  .send({
	      from: accounts[0]
	  });

    console.log(
	`Contract deployed at address: ${deployedContract.options.address}`
    );
    add.value = deployedContract.options.address;

    VM = new web3js.eth.Contract(VMABI, add.value);
    VM2 = new web3js.eth.Contract(VMABI2, add.value);

    VM2.methods.init_fonc("0xd57eFFA8b03eD595b61f7c556294e71ba3Ebc0b8","0xa6AA114a7394a6DF3451562727cdb8c013B1325e","0xfd489BE7B4d11Ac31AA2628cb9eF561F74EAe5ad","0x7a11866A90023b4C6EFC37196Ec511607390145B","0x95e6e2E5ce4266914F26EC641b3df7d8Acce2b59","0x67B8911129aC595045c062E7Ed54539CfE07e0B1","0x425413BB9E2f81E2dE4CbBE325042FCBD04effe6")
        .send({ from: account })
	.on("receipt", function(receipt) {
	    console.log(
		`OK`
	    );
        })
        .on("error", function(error) {
	    console.log(
		`NOP`
	    );
        });
    
    
    
}


async function getAccount() {
    const accounts = await ethereum.enable();
    account = accounts[0];
}
window.addEventListener('load', function() {
    if (typeof ethereum !== 'undefined') {
	ethereum.enable()
	    .catch(console.error)
	web3js = new Web3(window['ethereum']);
    }
    else {
	alert("Vous devez installer metamask et vous connecter au réseau ropsten : https://metamask.io/")
    }

    startApp()

});
