function verificaPreco(botao)
{
    switch (botao){
        case '2017':
            document.getElementById("mostraPreco").innerHTML = "Onix 2017 custa: R$35.500,00";
            break;
        case '2018':
            document.getElementById("mostraPreco").innerHTML = "Onix 2018 custa: R$41.690,00";
            break;
        case '2019':
            document.getElementById("mostraPreco").innerHTML = "Onix 2019 custa: R$48.900,00";
            break;
        case '2020':
            document.getElementById("mostraPreco").innerHTML = "Onix 2020 custa: R$67.250,00";
            break;
        default:   
            //     não tem como dar erro :)
    }
}