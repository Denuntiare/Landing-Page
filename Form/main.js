// Firebase
document.getElementById("submit").addEventListener("submit", inputValues);

const form_database = {};
let subscriber_id = false;

function handleSubmit() {
    event.preventDefault();
}

function inputValues() {
    const nome = document.getElementById("user").value;
    const email_address = document.getElementById("email").value;

    console.log(nome, email_address);
    new_subscriber(nome, email_address);
}

function new_subscriber(nome, email_address) {
    const subscriber_data = {
        Nome: nome,
        Email: email_address,
        Data: firebase.database.ServerValue.TIMESTAMP,
    };
	if (!subscriber_id) {
		subscriber_id = firebase.database().ref().child('Assinantes').push().key;
    }
	let updates = {};
    updates['/Assinantes/' + subscriber_id] = subscriber_data;
    
    let subscriber_ref = firebase.database().ref();
    
	subscriber_ref.update(updates)
		.then(function(){
            console.log("deu certo");
            alert('Enviado com sucesso!')
            history.back();
            return { success: true, message: 'Create Success!' };
		})
		.catch(function(error){
            console.log("deu errado");
			return { success: false, message: `Creation failed: ${error.message}` };
        });
}

form_database.new = new_subscriber;