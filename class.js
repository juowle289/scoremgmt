$(document).ready(function() {
    $('.add-class-button').click(function() {
        $('#add-class-form').toggleClass('d-none');
    });

    $('#classForm').submit(function(event) {
        event.preventDefault(); 

        var className = $('#className').val();
        var classStudents = $('#classStudents').val();
        var gvcn = $('#gvcn').val();
        var gvbm = $('#gvbm').val();
        var bcsl = $('#bcsl').val();
        var imageFile = $('#imageUpload').prop('files')[0]; // Lấy file hình ảnh

        var newCard = `<div class="card">
            <div class="card-header">
                <h3>${className}</h3>
                <p>${classStudents} Học sinh</p>
            </div>
            <div class="card-body">
                <img src="${imageFile ? URL.createObjectURL(imageFile) : 'placeholder.jpg'}" alt="Class Image">
            </div>
            <div class="card-footer">
                <div class="item">
                    <span>${gvcn}</span>
                    <span>GVCN</span>
                </div>
                <div class="item">
                    <span>${gvbm}</span>
                    <span>GVBM</span>
                </div>
                <div class="item">
                    <span>${bcsl}</span>
                    <span>BCSL</span>
                </div>
            </div>
        </div>`;

        // Thêm thẻ card mới vào danh sách lớp
        $('.container-fluid').append(newCard);

        // Reset form và ẩn form sau khi thêm lớp thành công
        $('#classForm')[0].reset();
        $('#add-class-form').addClass('d-none');
    });

    // Xử lý tìm kiếm lớp theo tên
    $('.search-bar input').keyup(function() {
        var searchText = $(this).val().toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
        $('.card').each(function() {
            var cardText = $(this).find('.card-header h3').text().toLowerCase(); // Lấy tiêu đề của thẻ card và chuyển thành chữ thường
            if (cardText.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
