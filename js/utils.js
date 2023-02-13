import { Modal } from "./modal.js"


function notNumber(value) {
    return (isNaN(value) || value == "")
}


function bmiCalcule(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


function displayResultMessage(result) {
    const msg = `Your BMI is ${result}`

    Modal.message.innerText = msg
    Modal.open()
}

export {notNumber, bmiCalcule, displayResultMessage}