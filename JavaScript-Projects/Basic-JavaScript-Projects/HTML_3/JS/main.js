function displayType(character) {
    var characterType = character.getAttribute("data-character_Type");
    alert(characterType + " is in the " + character.innerHTML + " universe"); 
}