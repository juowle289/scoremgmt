$(document).ready(function () {
    // TODO: Biểu đồ
    const ctx = $('#scoresChart')[0].getContext('2d');
    const scoresChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'],
            datasets: [
                {
                    label: ' Điểm 6',
                    data: [256, 278, 312, 298, 289, 307, 270, 299, 310, 290, 305, 296],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1.1,
                    pointBackgroundColor: 'rgba(75, 192, 192, 0.9)',
                    tension: .3
                },
                {
                    label: ' Điểm 7',
                    data: [312, 340, 289, 310, 328, 315, 290, 325, 289, 312, 300, 330],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1.1,
                    pointBackgroundColor: 'rgba(153, 102, 255, 0.9)',
                    tension: .3
                },
                {
                    label: ' Điểm 8',
                    data: [402, 385, 420, 398, 410, 385, 430, 370, 420, 385, 400, 375],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1.1,
                    pointBackgroundColor: 'rgba(255, 159, 64, 0.9)',
                    tension: .3
                },
                {
                    label: ' Điểm 9',
                    data: [380, 360, 350, 370, 330, 340, 360, 380, 350, 360, 365, 370],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1.1,
                    pointBackgroundColor: 'rgba(255, 99, 132, 0.9)',
                    tension: .3
                },
                {
                    label: ' Điểm 10',
                    data: [300, 287, 279, 274, 293, 303, 300, 276, 281, 303, 280, 279],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1.1,
                    pointBackgroundColor: 'rgba(54, 162, 235, 0.9)',
                    tension: .3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tháng',
                        color: '#ccc'
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Số học sinh',
                        color: '#ccc'
                    },
                    min: 0,
                    max: 666,
                    ticks: {
                        stepSize: 5
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + ' học sinh';
                        }
                    }
                }
            }
        }
    });

    // TODO: Kỳ thi
    $('.notify').on('click', function () {
        var examItem = $(this).closest('.exam-item');
        var iconBook = examItem.find('#icon-book');
        var iconCheck = examItem.find('#icon-check');
        var span = examItem.find('.exam-item div p i');
        var btnNotify = examItem.find('.notify');

        if (examItem.hasClass('active')) {
            examItem.removeClass('active');
            examItem.css({
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "#1E293B"
            });

            btnNotify.css({
                color: '#1E293B',
                borderColor: "#D5DBE2"
            }).text("");
            addIconSend($(this));
            alert("Việc này sẽ thu hồi lại thông báo!");

            span.css('color', '#1E293B');

            iconBook.show();
            iconCheck.hide();

            showNotify("Đã thu hồi thông báo!");
            
        } else {
            examItem.addClass('active');
            examItem.css({
                backgroundColor: "#f1fcf4",
                color: "#55d385",
                transition: "80ms ease"
            });

            btnNotify.css({
                backgroundColor: "#fff",
                color: "#55d385",
                borderColor: "#55d385",
                transition: "150ms"
            }).text("");
            addIconUndo($(this));
            alert("Việc này sẽ công khai sự kiện này trên toàn trường?");

            span.css('color', "#55d385");

            iconBook.hide().css('transition', '150ms');
            iconCheck.show().css('color', "#2eb964");
            
            showNotify("Đã thông báo lên trường");
        }
    });

    // TODO: Thông báo
    function showNotify(mess) {
        var reminderBox = $('#reminder');
        var reminder = $('<div class="reminder"></div>').text(mess);
        reminderBox.append(reminder);

        setTimeout(function () {
            reminder.addClass('show');
        }, 100);

        setTimeout(function () {
            reminder.removeClass('show');
            setTimeout(function () {
                reminder.remove();
            }, 555);
        }, 3000);
    }

    function addIconUndo(button) {
        var existingIcon = button.find('.fa-undo');
        if (!existingIcon.length) {
            var icon = $('<i class="fa-solid fa-undo"></i>');
            button.append(icon);
        }
    }

    function addIconSend(button) {
        var extIcon = button.find('.fa-paper-plane');
        if (!extIcon.length) {
            var icon = $('<i class="fas fa-paper-plane"></i>');
            button.append(icon);
        }
    }
});
