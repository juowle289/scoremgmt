$(document).ready(function() {
    const $IdInput = $('#studentId');
    const $NameInput = $('#studentName');
    const $DOBInput = $('#studentDOB');
    const $ClassInput = $('#studentClass');
    const $AddressInput = $('#studentAddress');
    const $PhoneInput = $('#studentPhone');
    const $EmailInput = $('#studentEmail');

    const $addStudentBtn = $('#addStudentBtn');
    const $searchInputs = $('.searchInput');
    const $classSelect = $('.classSelect');
    const $studentTableBody = $('#studentTable tbody');

    let students = [];
    let originalStudents = [];

    function FormLocalStorage() {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            students = JSON.parse(storedStudents);
            originalStudents = [...students]; // Sao chép sang originalStudents
        } else {
            addDefaultStudents();
        }
    }

    function saveStudents() {
        localStorage.setItem('students', JSON.stringify(students));
    }

    function addDefaultStudents() {
        students = [
            { stt: '1', id: '1771020193', name: 'Lê Tiến Được', dob: '28/09/2005', class: '12A1', address: 'Hà Nội', phone: '0325278009', email: 'letienduoc5@gmail.com' },
            { stt: '2', id: '1771020123', name: 'Nguyễn Kiêm Phú', dob: '03/12/2005', class: '12A2', address: 'Hải Phòng', phone: '0324585647', email: 'nguyenkiemphu5@gmail.com' },
            { stt: '3', id: '1771020144', name: 'Lê Tiến Việt', dob: '14/04/2005', class: '12A3', address: 'Hưng Yên', phone: '0345477142', email: 'letienviet5@gmail.com' },
            { stt: '4', id: '1771020310', name: 'Phạm Hữu Nam', dob: '10/03/2005', class: '12A4', address: 'Khánh Hoà', phone: '0335756985', email: 'phamhuunam5@gmail.com' },
            { stt: '5', id: '1771020504', name: 'Nguyễn Thanh Thảo', dob: '04/05/2005', class: '12A5', address: 'Bắc Giang', phone: '0313364554', email: 'nguyenthanhthao5@gmail.com' },
            { stt: '6', id: '1771020112', name: 'Nguyễn Phương Thảo', dob: '11/02/2005', class: '12A6', address: 'Trà Vinh', phone: '0387954688', email: 'nguyenphuongthao5@gmail.com' },
            { stt: '7', id: '1771020226', name: 'Lê Trịnh Tiến Thành', dob: '22/06/2005', class: '12A7', address: 'Phú Thọ', phone: '0365884124', email: 'letrinhtienthanh5@gmail.com' },
            { stt: '8', id: '1771020219', name: 'Phạm Đình Quyền', dob: '21/09/2005', class: '12A8', address: 'Bắc Giang', phone: '0398951427', email: 'phamdinhquyen5@gmail.com' },
            { stt: '9', id: '1771020413', name: 'Đoàn Mai Lan', dob: '22/10/2005', class: '12A9', address: 'Mù Cang Chải', phone: '0311457369', email: 'doanmailan5@gmail.com' }
        ];
        saveStudents();
        originalStudents = [...students];
    }

    // Bảng thông tin học sinh
    function renderStudents() {
        $studentTableBody.empty();
        students.forEach((student, index) => {
            const $tr = $(`
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.dob}</td>
                    <td>${student.class}</td>
                    <td>${student.address}</td>
                    <td>${student.phone}</td>
                    <td>${student.email}</td>
                    <td>
                        <button class="deleteBtn" data-id="${student.id}"><i style="color: #f50021;" class="fa-solid fa-user-slash"></i></button>
                        <button class="detailsBtn" data-id="${student.id}"><i style="color: #8c8c8c;" class="fa-solid fa-eye"></i></button>
                    </td>
                </tr>
            `);
            $studentTableBody.append($tr);
        });

        // Xử lý sự kiện nút xoá
        $studentTableBody.on('click', '.deleteBtn', function() {
            const id = $(this).data('id');
            students = students.filter(student => student.id !== id);
            saveStudents();
            renderStudents();
        });

        // Xử lý sự kiện nút xem
        $studentTableBody.on('click', '.detailsBtn', function() {
            const id = $(this).data('id');
            const student = students.find(student => student.id === id);
            localStorage.setItem('currentStudent', JSON.stringify(student));
            window.location.href = '/adminAcc/studentDetails.html';
        });
    }

    // Xử lý sự kiện nút thêm sinh viên
    $addStudentBtn.on('click', function() {
        const id = $IdInput.val();
        const name = $NameInput.val();
        const dob = $DOBInput.val().split('-').reverse().join('/');
        const classs = $ClassInput.val();
        const address = $AddressInput.val();
        const phone = $PhoneInput.val();
        const email = $EmailInput.val();

        if (!id || !name || !dob || !classs || !address || !phone || !email) {
            alert('Vui lòng điền đầy đủ thông tin sinh viên!');
            return;
        }

        const student = { id, name, dob, class: classs, address, phone, email };

        students.push(student);
        saveStudents();
        renderStudents();

        $IdInput.val('');
        $NameInput.val('');
        $DOBInput.val('');
        $ClassInput.val('');
        $AddressInput.val('');
        $PhoneInput.val('');
        $EmailInput.val('');
    });

    FormLocalStorage();
    renderStudents();

    // Xử lý sự kiện tìm kiếm
    $searchInputs.on('input', function() {
        filterStudents();
    });

    // Xử lý sự kiện lọc theo lớp
    $classSelect.on('change', function() {
        filterStudents();
    });

    function filterStudents() {
        const searchText = $searchInputs.toArray().map(input => $(input).val().toLowerCase().trim());
        const selectedClass = $classSelect.val();

        // Khôi phục lại students từ originalStudents
        students = [...originalStudents];

        students = students.filter(student => {
            const matchText = searchText.every(text => {
                return Object.values(student).some(value => typeof value === 'string' && value.toLowerCase().includes(text));
            });

            const matchClass = selectedClass ? student.class === selectedClass : true;

            return matchText && matchClass;
        });

        renderStudents();

        if (students.length === 0) {
            $studentTableBody.html('<tr><td colspan="9">Không có kết quả tìm kiếm</td></tr>');
        }
    }

    // Xử lý sự kiện nút In
    $('#printBtn').on('click', function() {
        const printContents = $('#studentTable')[0].outerHTML;
        const originContents = document.body.innerHTML;

        $('body').html(`
            <title>Danh sách học sinh</title>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: .1em solid #ddd;
                    padding: .6em;
                }
                th {
                    padding-top: 1em;
                    padding-bottom: 1em;
                    text-align: left;
                    background-color: #171b27;
                    color: #fff;
                }
            </style>
        
            <body>
                ${printContents}
            </body>
        `);

        window.print();
        $('body').html(originContents);
    });

    // Xử lý sự kiện nút Plus
    $('#add').on('click', function() {
        $('#controls').toggle();
    });
});
