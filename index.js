/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const factorMeter = 3.281
const factorLiter = 0.264
const factorKilo = 2.204
const valueEl = document.getElementById("value-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    if(isNaN(valueEl.value)) {
        prompt("input must be a number!")
    }else {
        lengthEl.textContent = `${valueEl.value} meters = ${meterToFeet(valueEl.value)} feet | 
            ${valueEl.value} feet = ${feetToMeter(valueEl.value)} meters`

        volumeEl.textContent = `${valueEl.value} liters = ${literToGallon(valueEl.value)} gallons | 
            ${valueEl.value} gallons = ${gallonToLiter(valueEl.value)} liters`
        
        massEl.textContent = `${valueEl.value} kilos = ${kiloToPound(valueEl.value)} pounds | 
            ${valueEl.value} pounds = ${poundToKilo(valueEl.value)} kilos`
    }
})

function meterToFeet(value) {
    return (value * factorMeter).toFixed(3)
}

function feetToMeter(value) {
    return (value / factorMeter).toFixed(3)
}

function literToGallon(value) {
    return (value * factorLiter).toFixed(3)
}

function gallonToLiter(value) {
    return (value / factorLiter).toFixed(3)
}

function kiloToPound(value) {
    return (value * factorKilo).toFixed(3)
}

function poundToKilo(value) {
    return (value / factorKilo).toFixed(3)
}