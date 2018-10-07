// Manier 1
const productList = []; //define een array met []
productList [0] = 'Tandenborstel';
productList [1] = 'Deoderant';
productList [2] = 'Bakmeel';
productList [3] = 'Wortels';
productList [4] = 'Tandenborstel';
productList [5] = 'Krop sla';
productList [6] = 'Maggi';
productList [7] = 'Croky Ships';
productList [8] = 'WC papier';
productList [9] = 'Shampoo';

//Manier 2
const productLists = [
'Tandenborstel',
'Deoderant',
'Bakmeel',
'Wortels',
'Tandenborstel',
'Krop sla',
'Maggi',
'Croky Ships',
'WC papier',
'Shampoo',
]
console.log(productLists); //Print de tabel in Console



productList.push('gehakt'); // Voegt een element toe als laatste waarde van de Array
productList.pop(); //verwijdert de laatste waarde van de Array.

console.table(productList); // Print de tabel in console
console.log(productList[7]); //Print de tekst van Array index 7

productList.forEach(function (element, index, myArray){
    console.log(`element: ${element}`) // print de element uit. (de string in dit geval)
    console.log(`index: ${index}`)     // print de index uit.
    console.log(`myArray: ${myArray}`) // print de hele array uit
}); 


for (let index = 0; index < productList.length; index++) { // for loop die alle array elementen uitprint
    let element = productList[index];
        console.log(`op ${index} staat element: ${element}`); // print de string: "op []"
    
}

let newProductlist = productList.map(function(element, index, myArray){ //Veranderd alle Elements van de Array: productList naar Uppercase
    let newElement = element.toUpperCase();
    return newElement;
});
console.table(newProductlist)

//Manier 1
const newestProductList = productList.map(function(element, index){ // opdracht dia 12 met de.map functie
    let NewestElement = `product ${index + 1}: ${element}`
    return NewestElement

})
console.table(newestProductList)

//Manier 2
let NewProductListArray = [];// Opdracht dia 12 met de for functie

for (let index = 0; index < productList.length; index++) {
    const element = `Products ${index + 1}: ${productList[index]}`
    NewProductListArray.push(element);
}
console.table(NewProductListArray)

const productPrices = [
    2.10,
    4.99, 
    5.60, 
    0.40, 
    5.44, 
    7.33, 
    2.33, 
    2.49, 
    2.15
];

const totalSum = function(anArray){
    let totalSum = 0;
    for (let index = 0; index < anArray.length; index++) {
        totalSum = totalSum + anArray[index];
        // index 0: 0 --> 0 + 2.10
        // index 1: 2.10 --> 2.10 + 4.99
        // index 2: 7.09 --> 7.99 + 5.60
        // N
        // 32.79
        
    }
    return totalSum
}
console.log(totalSum(productPrices));

const average = function(anArray){
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
};

console.log(average(productPrices))







