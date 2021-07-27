function verificaPreco(botao)
{
    switch (botao){
        case '2017':
            document.getElementById("mostraPreco").innerHTML = "Gol 2017 custa: R$19.550,00";
            break;
        case '2018':
            document.getElementById("mostraPreco").innerHTML = "Gol 2018 custa: R$23.267,00";
            break;
        case '2019':
            document.getElementById("mostraPreco").innerHTML = "Gol 2019 custa: R$24.125,00";
            break;
        case '2020':
            document.getElementById("mostraPreco").innerHTML = "Gol 2020 custa: R$29.481,00";
            break;
        default:   
            //     não tem como dar erro :)
    }
}