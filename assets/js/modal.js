const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".pokemon")
const closeModalBtn = document.querySelector(".close")
const modalName = document.querySelector(".poke-name")

const openModal = function () {
    modal.classList.remove("hidden")
    modalName.innerHTML = `${pokemon.type}`

}

const closeModal = function () {
    modal.classList.add("hidden")
}

openModalBtn.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)