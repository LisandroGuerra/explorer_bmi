import { Modal } from "./modal.js"
import { AlertError } from "./alert-box.js"


const form = document.querySelector("form")
const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")


form.onsubmit = event => {
    event.preventDefault()

    const weight = weightInput.value
    const height = heightInput.value

    const showAlertBox = notNumber(weight) || notNumber(height)

    if (showAlertBox) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = bmi(weight, height)
    const msg = `Your BMI is ${result}`

    Modal.message.innerText = msg
    Modal.open()
}


function notNumber(value) {
    return (isNaN(value) || value == "")
}


function bmi(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
