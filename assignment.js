// Q1
// The 'ages' array, logged
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('Ages: ' + ages);


// Q1a
function subAges() {
    // finds the last and first inputs in the array, subtracts the first from the last.
    return ages[ages.length-1] - ages[0];
}
console.log('Q1a: ' + subAges());
// expected output: 90


// Q1b
// adding 47 to the end, and 7 to the start of the array.
ages.push(47);
ages.unshift(7);

console.log(ages);
console.log('Q1b: ' + subAges());
// expected output: 40

// Q1c expected output: 28.4
var totalAges = 0
for (let i = 0; i <= ages.length; i++){
    if (i < ages.length){
        totalAges += ages[i];
    }
}
// using template literals to make things a bit easier
console.log(`Q1c: The average age of the array is ${totalAges / ages.length}`);

// Extra Credit (not really, just wanna do more testing)
// Expected output: 30
ages.push(29, 12, 65);

var totalAges = 0
for (let i = 0; i < ages.length; i++){
    if (i < ages.length){
        totalAges += ages[i];
    }
}

console.log(`The average age of the array is ${totalAges / ages.length}`);


// Q2: Electric Boogaloo
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Names: " + names);

// Q2a Expected output: 3.833_
// Essentially the same as previous loop, only we need the length of each input rather than the input itself.
var totalChar = 0
for (let i = 0; i < names.length; i++){
    if (i < names.length){
        totalChar += names[i].length;
    }
}
console.log(`Q2a: The average number of letters per name is is ${totalChar / names.length}`);

// Q2b 
// creates a blank string variable
var concatString = "Q2b: ";
for (let i = 0; i < names.length; i++){
    //adds each name to string variable, with a space afterwards
    concatString += (names[i] + ' ');    
}
console.log(concatString);


// Q3 
console.log(`You can access the last element of any array by using "arrayName[arrayName.length - 1]"`)
// Q4
console.log(`You can access the FIRST element of any array by using "arrayName[0]`)

// Q5 
// Blank array for nameLengths
var nameLengths = []
for (let i = 0; i < names.length; i++){
    // for each iteration, it pushes the length of the selected name to the nameLengths array. 
    nameLengths.push(names[i].length);
}
console.log('Q5: Name Lengths: ' + nameLengths);

// Q6
// Similar to previous loops, instead of averages we only need the sum of all elements. 
var sumOfLengths = 0
for (let i = 0; i < nameLengths.length; i++){
    sumOfLengths += nameLengths[i];
}
console.log('Q6: Sum of lengths: ' + sumOfLengths);

// Q7
function concatWord(word, n) {
    // Blank string using let (only exists in this function)
    let concat = '';
    // Will iterate n number of times, based on the user input
    for (let i = 0; i < n; i++){
        concat += (word);
    }
    // Prints the variable, with all words included :)
    console.log(concat);
} 
concatWord('Hello', 3);
concatWord('Java', 7);

// Q8 
function fullName(firstName, lastName){
    // Using template literals to make things look a wee bit more polished
    console.log(`${firstName} ${lastName}`);
}
fullName('Michael', 'Palmer');
fullName('John', 'Cena');

// Q9 
// Arrays! less than, equal to, and greater than 100 in sum respectively. 
const numarr1 = [5, 8, 9, 17];
const numarr2 = [25, 25, 25, 25];
const numarr3 = [7, 24, 46, 60];

function sumCheck(arr) {
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++){
        arraySum += arr[i];
    }
    if (arraySum <= 100) {
        return false;
    } else {
        return true;
    }
}
console.log(sumCheck(numarr1));
console.log(sumCheck(numarr2));
console.log(sumCheck(numarr3));

// Q10
function calcArrayAverage(arr) {
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++){
        arraySum += arr[i];
    }
    return arraySum / arr.length;
}

console.log(calcArrayAverage(numarr1));
console.log(calcArrayAverage(numarr2));
console.log(calcArrayAverage(numarr3));

// Q11
function compareAverage(arr1, arr2){
    // getting the averages by calling a previous function 
    let av1 = calcArrayAverage(arr1);
    let av2 = calcArrayAverage(arr2);

    if (av1 > av2){
        return true;
    } else {
        return false;
    }
}

console.log(compareAverage(numarr1, numarr2)); //returns false
console.log(compareAverage(numarr3, numarr2)); //returns true

// Q12 
function willBuyDrink(isHotOutside, moneyInPocket){
    // will only return true if both variables are true!
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 11)); // both are true, will return true
console.log(willBuyDrink(true, 5)); // only isHotOutside is true, returns false
console.log(willBuyDrink(false, 20)); //only moneyInPocket is true, returns false

// Q13
/* For my function, I will be creating one that concatenates the name and age of a person into a full sentence from two arrays. 
I.E. "Bob is 49 years old." However, in these two examples, one array will always have one more variable than the other. 
The function will be able to handle any undefined variables. */

// Example arrays of names and ages
const workNames = ['Billy', 'John', 'Samantha', 'Julia', 'Gordon'];
const workAges = [36, 51, 27, 21];

const workNames2 = ['Joseph', 'Ron', 'Katie']
const workAges2 = [23, 46, 38, 70]


function nameAndAges(names, ages){
    //This checks to see if either the name or age array is longer. The longer of the two (if applicable) will be used for the number of loop iterations. 
    if (names.length > ages.length){
        var checkLength = names.length;
    } else {
        var checkLength = ages.length;
    }
    
    for (let i = 0; i < checkLength; i++){
        // checks if any age inputs are undefined. If so, prints the message to console.
        if (ages[i] === undefined){
            console.log(`We don't know how old ${names[i]} is.`);
        // checks if any name inputs are undefined. If so, prints the message to console.
        } else if (names[i] === undefined){
            console.log(`We have an age (${ages[i]}), but not a name for this person.`);
        // Prints the name and age of the person!
        } else {
            console.log(`${names[i]} is ${ages[i]} years old.`)
        }
    }
}


nameAndAges(workNames, workAges);
nameAndAges(workNames2, workAges2);