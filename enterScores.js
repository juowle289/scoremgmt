function showForm() {
    document.getElementById("studentForm").style.display = "block";
}

function addStudent() {
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const birthDate = document.getElementById("birthDate").value;
    const studentClass = document.getElementById("class").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = studentId;
    cell3.innerHTML = studentName;
    cell4.innerHTML = birthDate;
    cell5.innerHTML = studentClass;
    cell6.innerHTML = address;
    cell7.innerHTML = phone;
    cell8.innerHTML = email;
    cell9.innerHTML = `<button onclick="deleteStudent(this)">Xóa</button>`;

    document.getElementById("studentForm").reset();
}

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function showForm() {
    document.getElementById("studentForm").style.display = "block";
}



function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function addStudent() {
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const math = document.getElementById("math").value;
    const physics = document.getElementById("physics").value;
    const chemistry = document.getElementById("chemistry").value;
    const biology = document.getElementById("biology").value;
    const history = document.getElementById("history").value;
    const geography = document.getElementById("geography").value;
    const civics = document.getElementById("civics").value;
    const english = document.getElementById("english").value;
    const literature = document.getElementById("literature").value;

    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    const cell10 = newRow.insertCell(9);
    const cell11 = newRow.insertCell(10);
    const cell12 = newRow.insertCell(11);
    const cell13 = newRow.insertCell(12);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = studentId;
    cell3.innerHTML = studentName;
    cell4.innerHTML = math;
    cell5.innerHTML = physics;
    cell6.innerHTML = chemistry;
    cell7.innerHTML = biology;
    cell8.innerHTML = history;
    cell9.innerHTML = geography;
    cell10.innerHTML = civics;
    cell11.innerHTML = english;
    cell12.innerHTML = literature;
    cell13.innerHTML = `<button onclick="deleteStudent(this)">Xóa</button>`;

    document.getElementById("studentForm").reset();
}

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
document.getElementById("addScoreBtn").addEventListener("click", function() {
    const formContainer = document.getElementById("scoreFormContainer");
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
});

function addStudent() {
    const studentId = document.getElementById("studentId").value;
    const studentName = document.getElementById("studentName").value;
    const math = document.getElementById("math").value;
    const physics = document.getElementById("physics").value;
    const chemistry = document.getElementById("chemistry").value;
    const biology = document.getElementById("biology").value;
    const history = document.getElementById("history").value;
    const geography = document.getElementById("geography").value;
    const civics = document.getElementById("civics").value;
    const english = document.getElementById("english").value;
    const literature = document.getElementById("literature").value;

    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    const cell10 = newRow.insertCell(9);
    const cell11 = newRow.insertCell(10);
    const cell12 = newRow.insertCell(11);
    const cell13 = newRow.insertCell(12);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = studentId;
    cell3.innerHTML = studentName;
    cell4.innerHTML = math;
    cell5.innerHTML = physics;
    cell6.innerHTML = chemistry;
    cell7.innerHTML = biology;
    cell8.innerHTML = history;
    cell9.innerHTML = geography;
    cell10.innerHTML = civics;
    cell11.innerHTML = english;
    cell12.innerHTML = literature;
    cell13.innerHTML = `<button onclick="deleteStudent(this)">Xóa</button>`;

    document.getElementById("studentForm").reset();
    document.getElementById("scoreFormContainer").style.display = "none";
}

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
