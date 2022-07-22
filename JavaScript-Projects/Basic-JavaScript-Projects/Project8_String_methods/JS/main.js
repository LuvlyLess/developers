// this is my concatnate function

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// This is my Slice method function

function slice_Method() {
    var Sentence = "All work and no play makes Leslie exausted";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}


// all Caps Function
function ALLCAPS() {
    const text = "Hello Humans!";
    const result = text.toUpperCase();
    document.getElementById("CAPITAL").innerHTML = result;
}


// Search function
function search() {
    const text = "I'm Blue, aba de, aba Die";
    const position = text.search("Blue");
    document.getElementById("aba").innerHTML = position;
}


// This is my number method function
function string_Method() {
    var X = 4269;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// this is my toPercision method
function percision_Method() {
    var X = 12938.30129876112;
    document.getElementById("Percision").innerHTML = X.toPrecision(10);
}

// the toFix method converts a number to a string

function toFix_Method() {
    const num = 5.56789;
    const n = num.toFixed(2);
    document.getElementById("fixed_Method").innerHTML = n;
}

function valueOf_Method() {
    const text = "Hello World!";
    const result = text.valueOf();
    document.getElementById("valueOf").innerHTML = result;
}