




// Tenary Function
function voteFunction() {
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age < 18) ? " you are to young to vote ":" You are eligiable ";
    document.getElementById("vote").innerHTML = canVote + " to vote ";
}


// Nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count(); //displays results
    function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
    }
}

// Keywords and constructors

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Black And White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;
}