export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    bmiMsg: document.querySelector(".bmi span"),
    categoryMsg: document.querySelector(".category span"),
    closeBtn: document.querySelector(".close"),
    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    }
}

Modal.closeBtn.onclick = () => Modal.close()

window.addEventListener("keydown", 
    event => {if (event.key === "Escape")Modal.close()})
