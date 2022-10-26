function celciusToFarenheit(celcius){

let farenheit = (celcius * 9/5) + 32
return farenheit
}


console.log(celciusToFarenheit(15))

function farenheitToCelcius (farenheit){
  let  celcius = (farenheit - 32) * 5/9
  return celcius
}

console.log(farenheitToCelcius(59))