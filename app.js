// console.log(Hello, World)

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// this is my function that sums two numbers
const sum =(a,b) => {
    return a+b
}
// just a console log for ourselves.
console.log(sum(14,9))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

module.exports ={ sum, fromEuroToDollar };