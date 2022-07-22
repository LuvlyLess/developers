// working with While Loops

function count_To_Ten() {
    var Digit ="";
    var T = 1;
    while (T < 11) {
        Digit += "<br>" + T;
        T++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// string length property example and Let example
function stringlength() {
    let text = "Mississippi";
    let length = text.length;
    document.getElementById("string_length_property").innerHTML = length;
}

// for loop examples

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute",];
    var Content = "";
    var I;
    function for_Loop() {
        for (I = 0; I < Instruments.length; I++) {
            Content += Instruments [I] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

    // Array Example
    function  array_Function() {
        const cars = ["Honda", " Chevy", " Dodge", " Ford", " Jeep", " Tesla", " BMW"];
        document.getElementById("Array").innerHTML = cars;
    }
// this is my constant example
    function constant_Function() {
        const Musical_Instrument =  { type:"gutiar", brand:"Fender", color:"black"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$900";
        document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
    }
// this is my return example
function my_Function() {
    return Math.PI;
}
    document.getElementById("return_Function").innerHTML = my_Function();


    // this is my object let example
let dog = {
    breed: "Pitbull",
    color: " Brindle ",
    size: " medium ",
    age: " two ",
    description : function() {
        return "The Dog is a " + this.breed + this.color + this.size + this.age;
    }
};
document.getElementById("Dog_Object").innerHTML = dog.description();


// here is my Break statement example
function break_example() {
let text = "";
for (let Q = 0; Q < 10; Q++) {
  if (Q === 3) { break; }
  text += "The number is " + Q + "<br>";
};
document.getElementById("break_statement").innerHTML = text;
}


// continue statement example
function continue_example() {
let text = "";
for (let Z = 0; Z < 10; Z++) {
  if (Z === 3) { continue; }
  text += "The number is " + Z + "<br>";
}
document.getElementById("Continue_example").innerHTML = text;
}