$(document).ready(function(){
  
  $("#teacher1").on('click', function(){
    $("#describe-teacher1").show();
    $("#describe-teacher2").hide();
  });

  $("#teacher2").on('click', function(){
    $("#describe-teacher2").show();
    $("#describe-teacher1").hide();
  });

  // Tìm giáo viên
  $(".search-bar").on("input", function() {
    var searchTerm = $(this).val().toLowerCase();
    $(".left-side table tbody tr").each(function() {
      var teacherName = $(this).find("td:eq(1)").text().toLowerCase();
      if (teacherName.indexOf(searchTerm)!== -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Nút hiện form add teacher
  $("#addTeacher").on('click', function() {
    $("#form-add-teacher").toggle();
  });

  const addTeacherBtn = $('#add-btn-in-form');
  const teacherList = $('#teacher-list');
  const formAddTeacher = $('#form-add-teacher');
  const imageUpload = $('#imageUpload');

  addTeacherBtn.on('click', function() {
    const teacherName = $('#teacherName').val();
    const teacherId = $('#teacherID').val();
    const teacherNickName = $('#nickName').val();
    const phoneNumber = $('#phoneNumber').val();
    const dateBirth = $('#dateBirth').val();
    const email = $('#email').val();
    const address = $('#address').val();
    const subject = $('#subject').val();
    const homeroom = $('#homeroom').val();
    const workYear = $('#workYear').val();
    const gender = $('#gender').val();

    const reader = new FileReader();
    const file = imageUpload[0].files[0];
    reader.readAsDataURL(file);

    reader.onload = function(e) {
      const imgUrl = e.target.result;

      const newRow = $('<tr>');
      newRow.html(`
        <td>
          <div class="teacher-profile">
            <img src="${imgUrl}" class="teacher-profile"><span>${teacherNickName}</span>
          </div>
        </td>
        <td>${teacherName}</td>
        <td>${teacherId}</td>
        <td>${workYear}</td>
      `);
      newRow.on('click', function() {
        displayTeacherInfo({
          imgUrl,
          teacherName,
          teacherId,
          phoneNumber,
          dateBirth,
          email,
          address,
          subject,
          homeroom,
          workYear,
          gender,
        });
      });
      teacherList.append(newRow);

      formAddTeacher.hide();
    };
  });

  const displayTeacherInfo = function(teacher) {
    const rightSide = $('.right-side');
    rightSide.html(`
      <div class="right-side w-100 p-0" style="border: none;">
        <h2>Thông tin giáo viên</h2>
        <div class="teacher-profile">
          <img src="${teacher.imgUrl}">
          <span>${teacher.teacherName}</span>
        </div>
        <p>ID giáo viên: ${teacher.teacherId}</p>
        <h4>Thông tin cơ bản</h4>
        
        <div class="teacher-info">
          <table>
            <tbody>
              <tr>
                <td>Môn học</td>
                <td>:</td>
                <td>${teacher.subject}</td>
              </tr>
              <tr>
                <td>Chủ nhiệm lớp</td>
                <td>:</td>
                <td>${teacher.homeroom}</td>
              </tr>
              <tr>
                <td>Giới Tính</td>
                <td>:</td>
                <td>${teacher.gender}</td>
              </tr>
              <tr>
                <td>Số điện thoại</td>
                <td>:</td>
                <td>${teacher.phoneNumber}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>${teacher.email}</td>
              </tr>
              <tr>
                <td>Ngày sinh</td>
                <td>:</td>
                <td>${teacher.dateBirth}</td>
              </tr>
              <tr>
                <td>Địa Chỉ</td>
                <td>:</td>
                <td>${teacher.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `);
  };

});