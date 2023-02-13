import { AlertError } from "./alert-box.js"
import { notNumber, bmiCalcule, displayResultMessage } from "./utils.js"


const form = document.querySelector("form")
const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")


form.onsubmit = event => {
    event.preventDefault()

    const weight = weightInput.value
    const height = heightInput.value

    const weightOrHeightNotNumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightNotNumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = bmiCalcule(weight, height)

    displayResultMessage(result)
}
