/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/



/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married');
    } else{
        console.log(firstName + ' will hopefully marry soon :)');
    }
var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married');
    } else{
        console.log(firstName + ' will hopefully marry soon :)');
    }

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn){
   console.log('Mark\' BMI is higher than John\'s.'); 
}else{
    console.log('John\' BMI is higher than Marks\'s');
}
*/
//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/*
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
           }
else if (age >= 20 && age <30){
    console.log(firstName + ' is young man.')
}
else {
               console.log(firstName + ' is a man.');
           }
  */

/*
var firstName = 'John';
var age = 14;

age >= 18 ? console.log (firstName + ' drinks beer.'):console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'instructor';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teacher kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' driver an uber in lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' design beautiful website');
        break;
    default:
        console.log(firstName + ' does something else.')        
}

age = 50
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age <30:
        console.log(firstName + ' is young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/*
var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has NOT been define');
}

if (height == '23'){
    console.log('The == operator does type coercaion!');
}
*/

var johnScore1,johnScore2,johnScore3,johnAverage;

johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;

johnAverage = (johnScore1 + johnScore2 + johnScore3)/3;

console.log(johnAverage);

var mikeScore1,mikeScore2,mikeScore3,mikeAverage;

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;

mikeAverage = (mikeScore1+mikeScore2+mikeScore3)/3;
console.log(mikeAverage);

var maryScore1,maryScore2,maryScore3,maryAverage;

maryScore1 = 97;
maryScore2 = 134;
maryScore3 = 105;

maryAverage = (maryScore1+maryScore2+maryScore3)/3;
console.log(maryAverage);


if (johnAverage > mikeAverage && johnAverage >maryAverage){
    console.log('Team John is the winner');}
else if (mikeAverage > johnAverage && mikeAverage > maryAverage){
    console.log('Team Mike is the winner');}
else if (maryAverage > johnAverage && maryAverage > mikeAverage){
    console.log('Team Mary is the winner');}
    else{
        console.log('Team John, Mike and Mary draw');
    }














