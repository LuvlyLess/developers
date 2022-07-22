
document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
} // this function uses typeof and returns nan

// here im Displaying both infinity and negative infinity 
document.write(2E310);
document.write(-3E310);

// math operators return less than and greater than
document.write(10>2);
document.write(10<2);

// these are console logs
console.log(2+2);
console.log(10>5);

// type coercion attempts 
document.write("10" + 5);
document.write(10 == 10);
document.write(3 == 11);

// this is where i try double equal signs
X = 10;
Y = 10;
document.write(X===Y);

Z = 82;
W = "82";
document.write(Z===W);


// these are my locial operators
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);


function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = ! (5 > 10);
}