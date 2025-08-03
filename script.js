// Question 1
var arr=[];

// Question 2
var studentNames = new Array();

// Question 3
var fruits = ["apple", "banana", "mango"];

// Question 4
var marks = [85, 90, 78, 92];

// Question 5
var answers = [true, false, true, true];

// Question 6
var mixedArray = ["Bilal", 25, true, "Student"];

// Question 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// Question 8

var students = ["Michael", "John", "Tony"];

var scores = [320, 230, 480];

var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    console.log(`Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage}%`);
}

// Question 9

var colors = ["red", "green", "blue"];
console.log("Initial colors: " + colors);


var colorStart = prompt("write a color do you want to print first:");
colors.unshift(colorStart);
console.log("After adding color to beginning: " + colors);


var colorEnd = prompt("write a color do you want to print end:");
colors.push(colorEnd);
console.log("After adding color to end: " + colors);


colors.unshift("yellow", "pink");
console.log("After adding two colors to beginning: " + colors);


colors.shift();
console.log("After deleting first color: " + colors);


colors.pop();
console.log("After deleting last color: " + colors);


var indexToAdd = prompt("which index do you want to add color? ( write a Number )");
var newColor = prompt("which color do you want to add?");
indexToAdd = parseInt(indexToAdd);
colors.splice(indexToAdd, 0, newColor);
console.log("After adding color at index " + indexToAdd + ": " + colors);


var indexToDelete = prompt("Which index do I need to select to remove colors? (Number likho)");
var howMany = prompt("how many colors you want to delete?");
indexToDelete = parseInt(indexToDelete);
howMany = parseInt(howMany);
colors.splice(indexToDelete, howMany);
console.log("After deleting colors: " + colors);

var colors = ["red", "green", "blue", "yellow", "pink", "orange"];


var indexToRemove = prompt("Enter the position/index to start removing colors:");
indexToRemove = parseInt(indexToRemove);


var numberToRemove = prompt("Enter the number of colors to remove:");
numberToRemove = parseInt(numberToRemove);


if(indexToRemove >= 0 && indexToRemove < colors.length && numberToRemove > 0){
    colors.splice(indexToRemove, numberToRemove);
    document.write("Updated colors array: " + colors.join(", "));
} else {
    document.write("Invalid input for index or number of colors to remove.");
}


// Question 10
var scores = [320, 230, 480, 120];

console.log("Scores of Students : " + scores);

scores.sort(function(a, b) {
    return a - b;
});

console.log("Ordered Scores of Students : " + scores);

// Question 11
// Cities array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy first 3 cities to selectedCities
var selectedCities = cities.slice(2, 4);

console.log("Cities list:");
console.log(cities.join(","));

console.log("Selected cities list:");
console.log(selectedCities.join(","));

// Question 12
// Array
var arr=["this","is","my","cat"+"<br>"+"<br>"];
console.log(arr);

var arr=["this is my cat"];
console.log(arr);

// Question 13

var queue = [];


queue.push("Apple");   
queue.push("Banana"); 
queue.push("Mango");   

var firstItem = queue.shift(); 
console.log(firstItem);       

var secondItem = queue.shift(); 
console.log(secondItem);        

console.log(queue);             

// Question 14
// Step 1: Empty array banayen
var arr = [];

arr.push(10);  
arr.push(20);  
arr.push(30);  

for(var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// Question 15
    var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    document.write("<select>");

    for(var i = 0; i < phoneManufacturers.length; i++) {
        document.write("<option>" + phoneManufacturers[i] + "</option>");
    }
    document.write("</select>");

