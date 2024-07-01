$(document).ready(function(){
    $("#changeToText").click(function(){
        $("#textToChange").text("EL texto fue cambiado!");
    });

    $("#togglePhoto").click(function (){
        $("#photoToToggle").toggle();
    });
});