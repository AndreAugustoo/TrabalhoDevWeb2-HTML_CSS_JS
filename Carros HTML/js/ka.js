function verificaPreco(botao)
{
    switch (botao){
        case '2017':
            document.getElementById("mostraPreco").innerHTML = "Ford Ka 2017 custa: R$29.332,00";
            break;
        case '2018':
            document.getElementById("mostraPreco").innerHTML = "Ford Ka 2018 custa: R$31.267,00";
            break;
        case '2019':
            document.getElementById("mostraPreco").innerHTML = "Ford Ka 2019 custa: R$35.555,00";
            break;
        case '2020':
            document.getElementById("mostraPreco").innerHTML = "Ford Ka 2020 custa: R$45.590,00";
            break;
        default:   
            //     não tem como dar erro :)
    }
}