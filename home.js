$(document).ready(function(){
    $('#collapse').on('change', function(){
        var $aside = $('#sidebar');
        var $btn = $('#collapse-label i');
        var $logoSidebar = $('#sidebar .head i');
        var $fcnH3 = $('.function h3');
        var $fcnA = $('.function a');

        if($(this).is(':checked')){
            $aside.css({
                width: '5em',
                height: 'auto',
                transition: '350ms'
            });

            $btn.css({
                transition: '350ms',
                transform: 'rotate(-180deg)',
                marginLeft: '-6em'
            });

            $logoSidebar.hide();
            $fcnH3.hide();
            $fcnA.css('width', '2.5em');
        }else {
            $aside.css({
                width: '18em',
                transition: '350ms',
            });

            $btn.css({
                transform: 'rotate(0deg)',
                marginLeft: '0em'
            });

            $logoSidebar.show();
            $fcnH3.show();
            $fcnA.css('width', '100%');
        }
    })
})