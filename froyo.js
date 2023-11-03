// Prompt the user for list of froyo flavors separated by commas.
const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,strawberry,coffee,coffee"
);

// Test to ensure that the input into the prompt prints correctly to console.
// console.log(userInputString);

// Split the string of strings into an array of strings.
const froyoArray = userInputString.split(",");

// Test to ensure that the prompt input is split into an array of strings.
console.log(froyoArray);

// Use a loop to iterate through the array of flavors.
// Take the array of flavors and put it into an object that can be used to keep count of how many orders there are for each flavor.
// Outputs to the console a table showing how many times each flavor is ordered.
const froyoCounts = {};

for (const froyo of froyoArray) {
    if (froyo in froyoCounts) {
        froyoCounts[froyo]++;
    } else {
        froyoCounts[froyo] = 1;
    }
};

console.table(froyoCounts);