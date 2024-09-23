function navigate(route){
    window.location = route;
}

async function insertDataUser(){

    let data = {
        nome: document.getElementById("nomeUser").value,
        email: document.getElementById("emailUser").value
    }

    const respone = await fetch("url", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const dataResponse = await respone.json();

    if(dataResponse){
        console.log("Nome e Email enviados com sucesso!");
    }else{
        console.log("Não foi possivel envar os dados!");
    }

}