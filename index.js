let form = document.querySelector("form");
let searchUser = document.querySelector("#search");
let table = document.querySelector("table");
let tbody = document.querySelector("tbody");
let p = document.querySelector(".textContent");
let html = ``;

// Get ID for Users
let getID = () => {
    return Math.random().toString(10).substr(2, 6);
};

// Users Data
let users = [{
        id: getID(),
        name: "Lakshya",
        email: "lakshya@test.com",
        address: "ABC Street, Mumbai",
        date: dateFns.format(Date.now(), "MMMM DD, YYYY"),
    },
    {
        id: getID(),
        name: "John",
        email: "john@test.com",
        address: "Street No. 1, Delhi",
        date: dateFns.format(Date.now(), "MMMM DD, YYYY"),
    },
    {
        id: getID(),
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: "Apt. 556, Gwenborough",
        date: dateFns.format(Date.now(), "MMMM DD, YYYY"),
    },
    {
        id: getID(),
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        address: "Suite 879, Wisokyburgh",
        date: dateFns.format(Date.now(), "MMMM DD, YYYY"),
    },
    {
        id: getID(),
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        address: "Douglas Extension, McKenziehaven",
        date: dateFns.format(Date.now(), "MMMM DD, YYYY"),
    },
];


// Loop through each user
users.forEach((user) => {
    html += `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>
        <td>${user.date}</td>
    </tr>
`;
});

// Show all users in table when page loads
tbody.innerHTML = html;

// Listen Keyup event on input search field
searchUser.addEventListener("keyup", (e) => {
    let searchText = e.target.value;
    let rows = table.tBodies[0].rows;
    let count = 0;

    // Check if searched text is not empty
    if (searchText) {
        // Convert rows(HTML Collection) to Array and loop through each row
        Array.from(rows).forEach((row) => {
            // Check if ID or Name is matched
            if (
                row.cells[0].innerHTML.includes(searchText) ||
                row.cells[1].innerHTML.includes(searchText)
            ) {
                // Increment Count and display row
                count += 1;
                row.style.display = "table-row";
            } else {
                // Hide row
                row.style.display = "none";
            }
        });
        // Check Count
        if (count === 0) {
            p.innerHTML = `No User(s) found`;
        } else {
            p.innerHTML = `Found Users: ${count}`;
        }
    } else {
        // Show all users if search text is null
        p.innerHTML = "";
        tbody.innerHTML = html;
    }
});