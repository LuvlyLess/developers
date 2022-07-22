// error function using console.log method
function Add_numbers_5() {
    var Z = 10;
    console.log(15 + Z);
}

function Add_numbers_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

// scope function Global

var X = 5;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();


//Scope function local

function Pluss_numbers_1() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}

function Plus_numbers_2() {
    document.write(Y + 100);
}

Plus_numbers_1();
Plus_numbers_2();





// if statement starts here

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you Today?";
    }
}

function Legal_Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time < 0) {
        Reply = "it is morning time!";
    }
    else if(Time > 12 == Time < 18) {
        Reply = "It is afternoon. ";
    }
    else {
        Reply = "it is evening time. ";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}





