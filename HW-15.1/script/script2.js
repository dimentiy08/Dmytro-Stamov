const formEl = document.getElementById("save-user-form");
const usersTableEl = document.getElementById("users-table");
const userDetailsEl = document.getElementById("user-details");


// Use localStorage if it's not empty
const users = JSON.parse(localStorage.getItem("users")) || [];


renderUsers();


/**
 * Save user to localStorage
 */
function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}


/**
 * Render users in the table
 */
function renderUsers() {
    usersTableEl.tBodies[0].innerHTML = "";
    users.forEach((user, index) => {
        const tableRow = usersTableEl.tBodies[0].insertRow();
        tableRow.insertCell().innerHTML = index;
        tableRow.insertCell().innerHTML = user.name;
        tableRow.insertCell().innerHTML = user.tel;
        tableRow.insertCell().innerHTML = user.age;


        const buttonsCell = tableRow.insertCell();


        buttonsCell.classList.add("d-flex", "justify-content-between");
        const buttonView = document.createElement("button");
        buttonView.textContent = "View";
        buttonView.classList.add("btn", "btn-primary", "view-user");
        buttonView.setAttribute("data-user-id", index);
        buttonsCell.appendChild(buttonView);


        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        buttonEdit.classList.add("btn", "btn-warning", "edit-user");
        buttonEdit.setAttribute("data-user-id", index);
        buttonsCell.appendChild(buttonEdit);


        const buttonDel = document.createElement("button");
        buttonDel.textContent = "Delete";
        buttonDel.classList.add("btn", "btn-danger", "del-user");
        buttonDel.setAttribute("data-user-id", index);
        buttonsCell.appendChild(buttonDel);
    });
}


/**
 * View user info on the page
 * @param {*} id user id
 */
function viewUser(id) {
    const user = users[id];
    userDetailsEl.innerHTML = `
        <ul class="list-group d-inline-block">
            <li class="list-group-item"><b>Name:</b> ${user.name}</li>
            <li class="list-group-item"><b>Tel:</b> ${user.tel}</li>
            <li class="list-group-item"><b>Age:</b> ${user.age}</li>
        </ul>
    `;
}


/**
 * Delete user from users array
 * @param {*} id user id
 */
function delUser(id) {
    const ok = confirm("Do you really want to del user?");
    if (ok) {
        console.log("del");
        // del user form the users array
        users.splice(id, 1);
        // update the localStorage with the new users
        saveUsers();
        // update the table of users on the page
        renderUsers();
    }
}


/**
 * Edit user in the form
 * @param {*} id user id
 */
function editUser(id) {
    const user = users[id];
    editUserId = id;


    document.getElementById("name").value = user.name;
    document.getElementById("tel").value = user.tel;
    document.getElementById("age").value = user.age;
    document.getElementById("edit-user-id").value = id;
}


// Listen Submit on the table
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const age = document.getElementById("age").value;
    const editUserId = document.getElementById("edit-user-id").value;


    if (name && tel && age) {
        if (editUserId) {
            users[editUserId] = { name, tel, age };
        } else {
            users.push({ name, tel, age });
        }
        saveUsers();
        renderUsers();
        formEl.reset();
    }
});


// Listen click on the users table
usersTableEl.addEventListener("click", function (e) {
    const userId = e.target.getAttribute("data-user-id");


    if (e.target.classList.contains("view-user")) {
        viewUser(userId);
    } else if (e.target.classList.contains("edit-user")) {
        editUser(userId);
    } else if (e.target.classList.contains("del-user")) {
        delUser(userId);
    }
});