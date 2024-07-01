$(document).ready(function () {
    let display = $("#display");
    let currentValue = "";

    $(".btn").click(function () {

        let value = $(this).data("value");

        if (value === "C") {
            currentValue = "";
        } else if (value === "=") {
            try {
                currentValue = eval(currentValue); ///5+6
            } catch {
                currentValue = "ERROR";
            }
        } else {
            currentValue += value;
        }

        display.val(currentValue);
    });

});