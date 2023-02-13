export const AlertError = {
    alertBox: document.querySelector(".alert-box"),
    open() {
        AlertError.alertBox.classList.add("open")
    },
    close() {
        AlertError.alertBox.classList.remove("open")
    }
}
