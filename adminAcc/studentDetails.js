function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}
function getStudentDetails() {
    const student = JSON.parse(localStorage.getItem('currentStudent'));
    if (student) {
        document.getElementById('studentId').value = student.id;
        document.getElementById('studentName').value = student.name;
        document.getElementById('studentDOB').value = formatDate(student.dob);
        document.getElementById('studentClass').value = student.class;
        document.getElementById('studentAddress').value = student.address;
        document.getElementById('studentPhone').value = student.phone;
        document.getElementById('studentEmail').value = student.email;
    }
}

function saveStudentDetails() {
    const student = {
        id: document.getElementById('studentId').value,
        name: document.getElementById('studentName').value,
        dob: formatDate(document.getElementById('studentDOB').value),
        class: document.getElementById('studentClass').value,
        address: document.getElementById('studentAddress').value,
        phone: document.getElementById('studentPhone').value,
        email: document.getElementById('studentEmail').value
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    const index = students.findIndex(s => s.id === student.id);

    if (index !== -1) {
        students[index] = student;
    } else {
        students.push(student);
    }

    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('currentStudent', JSON.stringify(student));

    window.location.href = 'studentList.html';
}

document.getElementById('saveBtn').addEventListener('click', saveStudentDetails);

window.onload = getStudentDetails;