function myfunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
}

let outputValue;
if (formatSelected === 0) {
  outputValue = inputValue;
}
const firstName = "nancy";
const firstLetter = firstName[0].toUpperCase();
const restLetter = firstName.substring(1);
const newName = firstLetter + restLetter;
console.log(newName);

const fullName = "hardeep singh mehra";
const onlyfirstname = fullName.substring(0, inputValue.indexOf(" "));
console.log(onlyfirstname);

const length = substring(0, inputValue.indexOf(" ")).length;
console.log(length);

const middleName = fullName.substring(inputValue.indexOf(" ") + 1, inputValue.lastindexOf(" "));
console.log(middleName);
// ///////////////////////////////////////////////////

inputValue.endsWith(".jpg") || inputValue.endsWith(".png");
outputValue = "image file";

outputValue = "*".repeat(inputValue.length);

outputValue = inputValue.substring(0, 2) + inputValue.substring(2, 3).toUpperCase() + inputValue.substring(3);

outputValue = inputValue.substring(0, 1).toUpperCase();
for (let i = 1; i < inputValue.length; i++) {
  previousChar = inputValue[i - 1];
  if (previousChar === " " || previousChar === "-") {
    currentChar = inputValue[i].toUpperCase();
  } else {
    currentChar = inputValue[i];
  }
  outputValue = currentChar;
}
// const formatSelected = parseInt(formatSelector.options[formatSelector.selectedIndex].value);
