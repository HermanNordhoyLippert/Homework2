
/* When page is done loading */
window.onload = populateSelectOptions;

function populateSelectOptions() {
    var list = [
        "Kilobit",
        "Megabit",
        "Gigabit",
        "Terabit",
        "Petabit",
        "Byte",
        "Kilobyte",
        "Megabyte",
        "Gigabyte",
        "Terabyte",
        "Petabyte"
    ]
    var s = document.getElementById("unitOptions");
    //Creat options with list of bittypes.
    for(var i = 0; i < list.length; i++) {
        var o = document.createElement("option");
        o.text = list[i];
        s.add(o);
    }
    //jQuery Eventlistener
    $("#btn").on("click", checkForWrongInput);
}

//Checks the input
function checkForWrongInput() {
    var input = $("#input").val();
    var selectedValue = $("#unitOptions").children("option:selected").val();

    if(isNaN(input)) {
        $("#output").val("Insert a NUMBER").css("color", "rgba(255, 0, 0, 0.5");
    }
    else if(selectedValue === "Units") {
        $("#output").val("Choose a selection").css("color", "rgba(255, 0, 0, 0.5");
    }
    else if(input == "") {
        $("#output").val("Insert a number").css("color", "rgba(255, 0, 0, 0.5");
    }
    else {
        //Changes to font color back to black
        $("#output").val("").css("color", "rgba(0,0,0, 0.75");
        //Does the calculaton
        calc(input);
    }
}

//Does the actual calculation
function calc(input) {
    var output = $("#output").val();
    var selectedValue = $("#unitOptions").children("option:selected").val();
    var temp = 0;
    //Bits
    if(selectedValue === "Kilobit") {
        temp = input / powerOf(2);
        $("#output").val(temp);
    }
    if(selectedValue === "Megabit") {
        temp = input / powerOf(5);
        $("#output").val(temp.toExponential());
    }
    if(selectedValue === "Gigabit") {
        temp = input / powerOf(8);
        $("#output").val(temp.toExponential());
    }
    if(selectedValue === "Terabit") {
        temp = input / powerOf(11);
        $("#output").val(temp.toExponential());
    }
    if(selectedValue === "Petabit") {
        temp = input / powerOf(14);
        $("#output").val(temp.toExponential());
    }
    //Bytes
    if(selectedValue === "Byte") {
        temp = input / 8;
        $("#output").val(temp);
    }
    if(selectedValue === "Kilobyte") {
        temp = (input / powerOf(2)) / 8;
        $("#output").val(temp);
    }
    if(selectedValue === "Megabyte") {
        temp = (input / powerOf(5)) / 8;
        $("#output").val(temp);
    }
    if(selectedValue === "Gigabyte") {
        temp = (input / powerOf(8)) / 8;
        $("#output").val(temp);
    }
    if(selectedValue === "Terabyte") {
        temp = (input / powerOf(11)) / 8;
        $("#output").val(temp);
    }
    if(selectedValue === "Petabyte") {
        temp = (input / powerOf(14)) / 8;
        $("#output").val(temp);
    }
}

//Self made powerof calculation
function powerOf(amount) {
    var result = 10;
    for(var i = 1; i <= amount; i++) {
        result += "0"
    }
    return result;
}
