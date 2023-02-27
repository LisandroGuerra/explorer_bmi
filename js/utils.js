import { Modal } from "./modal.js"


function notNumber(value) {
    return (isNaN(value) || value == "")
}


function bmiCalcule(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


function bmiCategorize(result) {

    let category = "Not categorized"

    if (result < 18.5) {
        category = "Underweight"
    }else if (result >= 18.5 && result < 25){
        category = "Healthy Weight"
    }else if (result >= 25 && result < 30){
        category = "Overweight"
    }else{
        category = "Obesity"
    }

    return category
}


function displayResultMessage(result, category) {
    const bmiMsg = `Your BMI is ${result}`
    const categoryMsg = `Category range: ${category}`

    Modal.bmiMsg.innerText = bmiMsg
    Modal.categoryMsg.innerText = categoryMsg

    Modal.open()
}

export {notNumber, bmiCalcule, bmiCategorize, displayResultMessage}