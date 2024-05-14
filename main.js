function conferir() {

    let campo = document.getElementById("campo1").value;
    
    if (campo == "" || campo == null){
        alert("O campo está vázio! Digite Edna, Vania ou Nininha.")
    }
    
    else if (campo == "Edna" || campo == "edna"){
        alert("Gente boa! Uma mulher trabalhadora.");
    } else if (campo == "Nininha" || campo == "nininha"){
        alert("Uma quenga ome, nega de Jefferson e mãe de um boiolinha que mora em Maceió…");
    } else if (campo == "Vania" || campo == "vania"){
        alert("Boa da peste! Jeffão dá uns trato nela quando vai nos Correios…");
    } else {
        alert("Digite Edna, Vania ou Nininha!")
    }
    
    
    }
    