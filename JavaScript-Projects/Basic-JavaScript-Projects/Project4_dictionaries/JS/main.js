function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Grey",
        Breed: "Pitbull",
        Age: 2,
        Sound: "Bark"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}// This is my dictionary function


function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Grey",
        Breed: "Pitbull",
        Age: 2,
        Sound: "Bark"
    }
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
} // this is my deletion of my function showing undefined