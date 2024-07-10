$(document).ready(function() {
    const translations = {
        en: {
            abc: 'SETTING',
            fontSizeLabel: 'Font Size:',
            languageLabel: 'Language:',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode',
            enableNotifications: 'Enable Notifications',
            disableNotifications: 'Disable Notifications'
        },
        vi: {
            abc: 'CÀI ĐẶT',
            fontSizeLabel: 'Cỡ chữ:',
            languageLabel: 'Ngôn ngữ:',
            darkMode: 'Chế độ tối',
            lightMode: 'Chế độ sáng',
            enableNotifications: 'Bật thông báo',
            disableNotifications: 'Tắt thông báo'
        }
    };

    function updateTranslations(language) {
        $('#abc').text(translations[language].abc);
        $('#font-size-label').text(translations[language].fontSizeLabel);
        $('#language-label').text(translations[language].languageLabel);
        $('.custom-control-label[for="theme-toggle"]').text(
            $('#theme-toggle').is(':checked') ? translations[language].lightMode : translations[language].darkMode
        );
        $('.custom-control-label[for="notifications-toggle"]').text(
            $('#notifications-toggle').is(':checked') ? translations[language].disableNotifications : translations[language].enableNotifications
        );
    }

    $('#font-size').on('input', function() {
        $('body').css('font-size', $(this).val() + 'px');
    });

    $('#language').on('change', function() {
        const selectedLanguage = $(this).val();
        updateTranslations(selectedLanguage);
    });

    $('#theme-toggle').on('change', function() {
        const isDarkMode = $(this).is(':checked');
        $('body').toggleClass('dark-mode', isDarkMode);
        const selectedLanguage = $('#language').val();
        $('.custom-control-label[for="theme-toggle"]').text(isDarkMode ? translations[selectedLanguage].lightMode : translations[selectedLanguage].darkMode);
    });

    $('#notifications-toggle').on('change', function() {
        const notificationsEnabled = $(this).is(':checked');
        const selectedLanguage = $('#language').val();
        alert(notificationsEnabled ? translations[selectedLanguage].enableNotifications : translations[selectedLanguage].disableNotifications);
        $('.custom-control-label[for="notifications-toggle"]').text(notificationsEnabled ? translations[selectedLanguage].disableNotifications : translations[selectedLanguage].enableNotifications);
    });

    updateTranslations($('#language').val());
});
