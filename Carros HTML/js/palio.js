function verificaPreco(botao)
{
    switch (botao){
        case '2017':
            document.getElementById("mostraPreco").innerHTML = "Palio 2017 custa: R$29.840,00";
            break;
        case '2018':
            document.getElementById("mostraPreco").innerHTML = "Palio 2018 custa: R$32.227,00";
            break;
        case '2019':
            document.getElementById("mostraPreco").innerHTML = "Palio 2019 custa: R$33.195,00";
            break;
        case '2020':
            document.getElementById("mostraPreco").innerHTML = "Palio 2020 custa: R$39.401,00";
            break;
        default:   
            //     não tem como dar erro :)
    }
}