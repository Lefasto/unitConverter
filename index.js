/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const factorLength = 3.281
const factorVolume = 0.264
const factorMass = 2.204
const valueEl = document.getElementById("value-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {

    const length = convert(valueEl.value, factorLength, "meters", "feet")
    const volume = convert(valueEl.value, factorVolume, "liters", "gallons")
    const mass = convert(valueEl.value, factorMass, "kilos", "pounds")

    lengthEl.textContent = `${length.forwardText} | ${length.backwardText}`
    volumeEl.textContent = `${volume.forwardText} | ${volume.backwardText}`
    massEl.textContent = `${mass.forwardText} | ${mass.backwardText}`
})

function convert(value, factor, fromUnit, toUnit) {

    const num = Number(value)

    const forward = (value * factor).toFixed(3)
    const backward = (value / factor).toFixed(3)

    return {
        forwardText: `${num} ${fromUnit} = ${forward} ${toUnit}`,
        backwardText: `${num} ${toUnit} = ${backward} ${fromUnit}`
    }

}