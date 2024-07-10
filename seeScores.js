$(document).ready(function() {
    $("#semester1").click(function() {
        $("#scores-semester1").show();
        $("#scores-semester2").hide();
    });

    $("#semester2").click(function() {
        $("#scores-semester2").show();
        $("#scores-semester1").hide();
    });
});
