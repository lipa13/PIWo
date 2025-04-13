'use strict';

/* === GŁÓWNE OKNO ===  */
const newListBtn = document.querySelector(".new-list-btn");
const headerButtons = document.querySelector(".header-buttons");
const mainContent = document.querySelector(".main-content");

let lastDeletedRow = null;
let lastDeletedBody = null;

function undoRowDelete()
{
    if(lastDeletedRow && lastDeletedBody)
    {
        lastDeletedBody.appendChild(lastDeletedRow);
        lastDeletedRow = null;
        lastDeletedBody = null;
    }
}

document.addEventListener("keydown", (e) =>
{
    if((e.ctrlKey || e.metaKey) && e.key === "z")
    {
        undoRowDelete();
    }
});

/*  === LISTA ===  */
const listTemplate = document.querySelector(".list-template");

function toggleTaskDone(taskBtn, isDone)
{
    const row = taskBtn.closest(".list-body-row");
    const dateBox = row.querySelector(".done-date");

    if(isDone)
    {
        taskBtn.classList.add("done-task");

        // Dodanie daty wykonania
        const now = new Date();
        dateBox.textContent = `✔ ${now.toLocaleDateString()} ${now.toLocaleTimeString([],
            { hour: '2-digit', minute: '2-digit' })}`;
        dateBox.classList.remove("hidden");

    }
    else
    {
        taskBtn.classList.remove("done-task");

        dateBox.textContent = "";
        dateBox.classList.add("hidden");
    }
}

document.addEventListener("click", (e) =>
    {
        // 1. Kliknięcie nagłówka listy (do zwijania/rozwijania)
        if(e.target.closest(".list-header"))
        {
            const header = e.target.closest(".list-header");
            const container = header.closest(".list-container");
            const listContentContainer = container.querySelector(".list-not-toggled-container");
            const arrow = container.querySelector(".toggle-list");

            if(listContentContainer)
            {
                listContentContainer.classList.toggle("hidden");
                arrow.textContent = listContentContainer.classList.contains("hidden") ? "▼" : "▲";
            }

            return;
        }

        // 2. Kliknięcie przycisku "Add"
        if(e.target.classList.contains("add-task-btn"))
        {
            e.preventDefault();

            const container = e.target.closest(".list-container");

            const taskInput = container.querySelector(".task-title");
            const taskListBody = container.querySelector(".task-list-body");
            const taskTemplate = document.querySelector(".task-row-template");

            const taskName = taskInput.value.trim();
            if(!taskName) return;

            const taskClone = taskTemplate.content.cloneNode(true);
            taskClone.querySelector(".task-btn").textContent = taskName;

            taskListBody.appendChild(taskClone);
            taskInput.value = "";
        }

        // 3. Oznaczanie zadania jako wykonane
        // Checkboxem
        if(e.target.matches('.done-label input[type="checkbox"]'))
        {
            const checkbox = e.target;
            const row = checkbox.closest(".list-body-row");
            const taskBtn = row.querySelector(".task-btn");

            toggleTaskDone(taskBtn, checkbox.checked);
        }
        // Poprzez kliknięcie danego zadania
        if (e.target.classList.contains("task-btn"))
        {
            const taskBtn = e.target;
            const row = taskBtn.closest(".list-body-row");
            const checkbox = row.querySelector('.done-label input[type="checkbox"]');

            checkbox.checked = !checkbox.checked; // przełącz stan
            toggleTaskDone(taskBtn, checkbox.checked);
        }

        // 4. Kliknięcie przycisku usuń
        if(e.target.classList.contains("delete-task"))
        {
            const row = e.target.closest(".list-body-row");
            const tbody = row?.parentElement;
            const taskText = row.querySelector(".task-btn")?.textContent.trim();

            if(row && taskText)
            {
                rowToDelete = row;
                rowToDeleteBody = tbody;
                modalText.textContent = `Are you sure you want to delete the task: "${taskText}"?`;
                deleteModal.classList.remove("hidden");
                overlay.classList.remove("hidden");
            }
        }
    }
);

/*  === MODALE === */
const overlay = document.querySelector(".overlay");
const modals = document.querySelectorAll(".modal");
const addListModal = document.querySelector(".add-list-modal");
const cancelBtn = document.querySelectorAll(".cancel-btn");
const newListTitle = addListModal.querySelector(".new-list-title");
const confirmBtn = addListModal.querySelector(".confirm-btn");

let rowToDelete = null;
let rowToDeleteBody = null;
const deleteModal = document.querySelector(".delete-modal");
const modalText = deleteModal.querySelector(".modal-text");
const confirmDeleteBtn = deleteModal.querySelector(".confirm-btn");


confirmDeleteBtn.addEventListener("click", () =>
{
    if(rowToDelete && rowToDeleteBody)
    {
        lastDeletedRow = rowToDelete;
        lastDeletedBody = rowToDeleteBody;
        rowToDelete.remove();
    }

    rowToDelete = null;
    rowToDeleteBody = null;
    deleteModal.classList.add("hidden");
    overlay.classList.add("hidden");
});

// Otwórz modal z dodaniem listy po kliknięciu "New List"
newListBtn.addEventListener("click", (e) =>
    {
        newListTitle.value = "";
        overlay.classList.remove("hidden");
        addListModal.classList.remove("hidden");
    }
);

confirmBtn.addEventListener("click", (e) =>
    {
        e.preventDefault();

        const listName = newListTitle.value.trim();
        if(!listName) return;

        // 1. Dodanie separatora (jeśli jeszcze nie istnieje)
        if(!headerButtons.querySelector(".v-separator"))
        {
            const separator = document.createElement("div");
            separator.classList.add("v-separator");
            headerButtons.appendChild(separator);
        }

        // 2. Utworzenie ID listy
        const listId = `list-${listName.toLowerCase().replace(/\s+/g, "-")}`;

        // 3. Dodanie przycisku jako hiperlink do listy
        const newListBtn = document.createElement("a");
        newListBtn.classList.add("btn", "list-btn");
        newListBtn.href = `#${listId}`;
        newListBtn.textContent = listName;
        headerButtons.appendChild(newListBtn);

        // 4. Skopiowanie template i dodanie do main-content
        const listClone = listTemplate.content.cloneNode(true);
        const container = listClone.querySelector(".list-container");
        container.id = listId;
        container.querySelector(".list-title").textContent = listName;
        mainContent.appendChild(listClone);

        // 5. Zamknięcie okienka
        overlay.classList.add("hidden");
        modals.forEach(modal => modal.classList.add("hidden"));
    }
)

// Zamknij modal po kliknięciu "Cancel"
cancelBtn.forEach(btn =>
    btn.addEventListener("click", (e) =>
    {
        e.preventDefault();
        overlay.classList.add("hidden");
        modals.forEach(modal => modal.classList.add("hidden"));

        if(e.target.classList.contains("delete-modal"))
        {
            rowToDelete = null;
            rowToDeleteBody = null;
        }
    })
);
