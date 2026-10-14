// 1. var - 10 Questions

// Q1: Create a var variable called name and initialize it with your name. Print it.
var name = "Rohith";
console.log(name);
// Output: Rohith

// Q2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;
console.log(age);
// Output: 30

// Q3. Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";
console.log(city);
// Output: Bangalore

// Q4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
var salary = 35000;
console.log(salary);
// Output: 35000

// Q5. Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var course = "HTML";
course="CSS";
var course = "JavaScript";
console.log(course);
// Output: JavaScript

// Q6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";
console.log(department);
// Output: CSE

// Q7. Create a var variable called mark with 50, reassign it to 75, and print it.
var mark = 50;
mark = 75;
console.log(mark);
// Output: 75

// Q8. Create a var variable called company and redeclare it with another company name.
var company = "Google";
var company = "Stackly";
console.log(company);
// Output: Stackly

// Q9. Create a var variable without assigning a value, then initialize it later and print it.
var designation;
designation = "Python Full Stack Developer";
console.log(designation);
// Output: Python Full Stack Developer

// Q10. Create one var variable and change its value three times. Print the final value.
var color = "Red";
color = "Blue";
color = "Green";
color = "Yellow";
console.log(color);
// Output: Yellow


// ----------2. let - 10 Questions---------------

// Q11. Create a let variable called age and initialize it with your age. Print it.
let age2 = 25;
console.log(age2);
// Output: 25

// Q12. Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let salary2 = 30000;
salary2 = 40000;
console.log(salary2);
// Output: 40000

// Q13. Create a let variable called name, assign your name, then change it to another name.
let Name = "Rohith";
Name = "Rohith Kumar";
console.log(Name);
// Output: Rohith Kumar

// Q14. Create a let variable called department and change its value from "ECE" to "CSE".
let department2 = "ECE";
department2 = "CSE";
console.log(department2);
// Output: CSE

// Q15. Create a let variable called mark, initialize it with 60, then reassign it to 90.
let mark2 = 60;
mark2 = 90;
console.log(mark2);
// Output: 90

// Q16. Declare a let variable without initialization. Later assign a value and print it.
let designation2;
designation2 = "Python Full Stack Developer";
console.log(designation2);
// Output: Python Full Stack Developer

// Q17. Try to redeclare the same let variable. Observe what happens.
let testAge = 25;
console.log(testAge);
// Output: 25

// Redeclaring the same let variable causes a SyntaxError.
// Uncomment the next line to test the error.
// let testAge = 30;

// Q18. Create a let variable called city and reassign it two times. Print the final value.
let city2 = "Chennai";
city2 = "Vijayawada";
city2 = "Hyderabad";
console.log(city2);
// Output: Hyderabad

// Q19. Create three different let variables and print all three.
let studentName = "Rohith";
let studentAge = 25;
let studentCity = "Hyderabad";

console.log(studentName);
console.log(studentAge);
console.log(studentCity);
// Output:
// Rohith
// 25
// Hyderabad

// Q20. Create a let variable, initialize it, reassign it, and try to redeclare it.
let salary3 = 30000;
salary3 = 40000;
console.log(salary3);
// Output: 40000

// Redeclaring the same let variable causes a SyntaxError.
// Uncomment the next line to test the error.
// let salary3 = 50000;

// ---3. const - 8 Questions-------

// Q21. Create a const variable called age with value 25 and print it.
const a = 25;
console.log(a);
// Output: 25

// Q22. Create a const variable called salary with value 50000 and print it.
const Salary = 50000;
console.log(Salary);
// Output: 50000


// Q23. Create a const variable called company with "Stackly" and print it.
const Company = "Stackly";
console.log(Company);
// Output: Stackly


// Q24. Try to reassign a const variable with another value. Observe the result.
const ag = 25;
//ag = 30;
console.log(ag);
//output : 25

//Q25.Try to redeclare a const variable. Observe the result.
const com = "Google";
//const com = "Wipro";
console.log(com);
//output: Google

// Q26. Create a const variable called college and initialize it with your college name.
const college = "SRM University AP";
console.log(college);
// Output: SRM University AP


// Q27. Create three const variables for name, age, and department. Print them.
const Constname = "Rohith";
const Age = 25;
const Department = "ECE";

console.log(Constname);
console.log(Age);
console.log(Department);
// Output:
// Rohith
// 25
// ECE

// -------------4. Printing Statements - 7 Questions---------

// Q29. Print your name using console.log().
console.log("Rohith");
// Output: Rohith

// Q30. Create a variable containing your age and print it using console.log().
let printAge = 25;
console.log(printAge);
// Output: 25

// Q31. Print the number 100 using console.log().
console.log(100);
// Output: 100

// Q32. Create three variables and print their values using console.log().
let printName = "Rohith";
let printCity = "Hyderabad";
let printDepartment = "ECE";

console.log(printName);
console.log(printCity);
console.log(printDepartment);
// Output:
// Rohith
// Hyderabad
// ECE

// Q33. Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello JavaScript";
console.log(message);
// Output: Hello JavaScript

// Q34. Create a variable, print its value, change its value, and print it again.
let printColor = "Red";
console.log(printColor);
// Output: Red

printColor = "Blue";
console.log(printColor);
// Output: Blue

// Q35. Print your name, age, and qualification using three separate console.log() statements.
console.log("Rohith");
console.log(25);
console.log("B.Tech in ECE");
// Output:
// Rohith
// 25
// B.Tech in ECE

// ------------5. alert() - 5 Questions--------

// Q36. Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");
// Output: A popup displays "Welcome to JavaScript"

// Q37. Create a variable called username and display it using alert().
let alertUsername = "Rohith";
alert(alertUsername);
// Output: A popup displays "Rohith"

// Q38. Create a variable called userAge and display it using alert().
let userAge = 25;
alert(userAge);
// Output: A popup displays 25

// Q39. Create a variable containing "Welcome Naveen" and show it in a popup.
let welcomeMessage = "Welcome Naveen";
alert(welcomeMessage);
// Output: A popup displays "Welcome Naveen"


// Q40. Create a variable containing your qualification and display it using alert().
let qualification = "B.Tech in ECE";
alert(qualification);
// Output: A popup displays "B.Tech in ECE"

// -----6. prompt() - 5 Questions-------

// Q41. Ask the user "What is your name?" using prompt() and print the answer in the console.
let promptName = prompt("What is your name?");
console.log(promptName);
// Output: The name entered by the user appears in the console.

// Q42. Ask the user "How old are you?" using prompt() and display the answer using alert().
let promptAge = prompt("How old are you?");
alert(promptAge);
// Output: A popup displays the age entered by the user.

// Q43. Ask the user for their qualification and print the answer in the console.
let qua = prompt("What is your qualification?");
console.log(qua);
// Output: Prints the qualification entered by the user in the console.


// Q44. Ask the user for their name and show the entered name in a popup.
let na = prompt("What is your name?");
alert(na);
// Output: A popup displays the name entered by the user.


// Q45. Ask the user for their age and print the entered age in the console.
let c = prompt("How old are you?");
console.log(c);
// Output: Prints the age entered by the user in the console.

// 7. ------confirm() & document.writeln() - 3 Questions--------

// Q46. Create a confirmation box asking "Do you know programming?".
let programmingAnswer = confirm("Do you know programming?");
console.log(programmingAnswer);
// Output: true if OK is clicked, false if Cancel is clicked.

// Q47. Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
let batchMessage = "Welcome to Batch 41";
document.writeln(batchMessage);
// Output: Welcome to Batch 41 appears on the webpage.

// Q48. Ask the user "Do you want to continue?" using confirm().
let continueAnswer = confirm("Do you want to continue?");
console.log(continueAnswer);
// Output: true if OK is clicked, false if Cancel is clicked.

// 8.---- Console Methods - 2 Questions-----

// Q49. Use console.log(), console.warn(), and console.error() to display three different messages.
console.log("This is a normal message.");
console.warn("This is a warning message.");
console.error("This is an error message.");
// Output: A normal message, a warning, and an error appear in the browser console

// Q50. Use console.log(), console.warn(), console.error(), and console.clear().
console.log("This is a normal message.");
console.warn("This is a warning message.");
console.error("This is an error message.");
console.clear();
// Output: The console is cleared after the previous messages are displayed.