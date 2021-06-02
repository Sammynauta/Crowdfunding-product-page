function openMenu () {
    const $menuMobile = document.querySelector('#mobile');
    $menuMobile.classList.toggle("active");
}

function openModal () {
    const modal = document.querySelector(".modal-container");

    modal.classList.add("active");
}

function closeModal () {
    const modal = document.querySelector(".modal-container");

    modal.classList.remove("active");
}