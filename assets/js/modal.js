const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".pokemon")
const closeModalBtn = document.querySelector(".close")

const openModal = function () {
    modal.classList.remove("hidden")
}

const closeModal = function () {
    modal.classList.add("hidden")
}

openModalBtn.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)