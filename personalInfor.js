$(document).ready(function() {
    const $editButton = $('#editProfileBtn');
    const $saveButton = $('#saveProfileBtn');
    const $editable = $('[data-editable]');
    const $details = $('.details');
    const $buttons = $('.buttons');
    const $blurOverlay = $('#blurOverlay');

    $editButton.on('click', function() {
        $editable.prop('readonly', false);
        $details.addClass('highlight');
        $buttons.addClass('highlight');
        $blurOverlay.show();
    });

    $saveButton.on('click', function() {
        $editable.prop('readonly', true);
        $details.removeClass('highlight');
        $buttons.removeClass('highlight');
        $blurOverlay.hide();

        showNotify('Đã lưu profile');
    });
});

function showNotify(mess) {
    const $reminderBox = $('#reminder');
    const $reminder = $('<div>').addClass('reminder').text(mess);
    $reminderBox.append($reminder);

    setTimeout(function() {
        $reminder.addClass('show');
    }, 100);

    setTimeout(function() {
        $reminder.removeClass('show');
        setTimeout(function() {
            $reminder.remove();
        }, 555);
    }, 3000);
}