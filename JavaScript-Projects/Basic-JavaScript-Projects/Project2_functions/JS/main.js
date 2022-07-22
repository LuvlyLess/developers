
function works() {
    var str = "this text ";
    str += " is green ";
    var result = str.fontcolor("green");
    document.getElementById("green_text").innerHTML = result;
}

function popup() {
    var str = "this text ";
    str += " is blue ";
    var result = str.fontcolor("blue");
    document.getElementById("blue_text").innerHTML = result;
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition;
}

