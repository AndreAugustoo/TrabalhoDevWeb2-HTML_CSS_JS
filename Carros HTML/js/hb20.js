function verificaPreco(botao)
{
    switch (botao){
        case '2017':
            document.getElementById("mostraPreco").innerHTML = "HB20 2017 custa: R$30.996,00‎";
            break;
        case '2018':
            document.getElementById("mostraPreco").innerHTML = "HB20 2018 custa: R$31.374,00";
            break;
        case '2019':
            document.getElementById("mostraPreco").innerHTML = "HB20 2019 custa: R$44.490,00‎";
            break;
        case '2020':
            document.getElementById("mostraPreco").innerHTML = "HB20 2020 custa: R$46.490,00";
            break;
        default:   
            //     não tem como dar erro :)
    }
}