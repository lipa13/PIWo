'use strict';

const newListBtn = document.querySelector(".new-list-btn");

/*  === MODALE === */
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const addListModal = document.querySelector(".add-list-modal");
const cancelBtn = addListModal.querySelectorAll(".cancel-btn");
const newListTitle = addListModal.querySelector(".new-list-title");

// Otwórz modal z dodaniem listy po kliknięciu "New List"
newListBtn.addEventListener("click", () =>
{
    newListTitle.value = "";
    overlay.classList.remove("hidden");
    addListModal.classList.remove("hidden");
});

// Zamknij modal po kliknięciu "Cancel"
cancelBtn.forEach(btn =>
    btn.addEventListener("click", (e) =>
    {
        e.preventDefault();
        overlay.classList.add("hidden");
        modals.forEach(modal => modal.classList.add("hidden"));
    })
);