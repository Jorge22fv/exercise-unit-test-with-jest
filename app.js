const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    let complet = Math.floor(valueInPound);
    return complet;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }