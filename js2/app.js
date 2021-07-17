// =============== Chapter 21-25 ================

// Q1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName

// document.write(fullName);


// Q2

// var phone = prompt("Enter Your Mobile Model");
// document.write("My Favorite Phone Is: " + phone + "<br>Length of string: " + phone.length);


// Q3

// var findLetter = "Pakistani";
// document.write("String: Pakistani " + "<br>Index of 'n': " + findLetter.indexOf('n'))


// Q4

// var Lastindex = "Hello World";
// document.write("String: Hello World " + "<br>Last Index of 'l': " + Lastindex.lastIndexOf('l'))


// Q5

// var index = "Pakistani";
// document.write("String: Pakistani " + "<br>Character at index 3: " + index.charAt(3))


// Q6

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName); 

// document.write(fullName);


// Q7

// var text = ("Hyderabad");

// var newText = text.replace("Hyder", "Islam");

// document.write("City: " + "Hyderabad" + "<br>After replacement: " + newText);


// Q8

// var message = ("“Ali and Sami are best friends. They play cricket and football together.”;");

// var newText = message.replaceAll("and", "&");

// document.write(newText);


// Q9

// var str = ("472")
// document.write("Value: " + Number(str) + "<br>Type: string" + "<br>Value: 472" + "<br>Type: number  ")


// Q10

// var userInput = prompt("Enter text")
// document.write("User input: " + userInput + " <br>Upper case: " + userInput.toUpperCase())


// Q11

// var userInput = prompt("Enter text")
// document.write("User input: " + userInput + " <br>Title case: " + userInput.slice(0,1).toUpperCase() + userInput.slice(1,).toLowerCase())


// Q12

// var num = +prompt("Write any numbers") ;
// var newNum = num.toString();
// document.write("Number: " + num + "<br>Result: " + newNum.replace("." , ""));


// Q13

// var UserName = prompt('Enter your Name');
// var UserNameSplit = UserName.split('');
// ASCIIkeys = [];
// for (var i = 0; i < UserNameSplit.length; i++) {
//     ASCIIkeys.push(UserNameSplit[i].charCodeAt(0));

//     if (ASCIIkeys[i] == 44 || ASCIIkeys[i] == 46 || ASCIIkeys[i] == 33 || ASCIIkeys[i] == 64) {
//         alert('Please enter a valid username');
//     }
// }


// Q14

// items = ["cake", "apple pie", "cookie", "chips", "patties"]

// user_input = prompt("Welcome to ABC bakery ! What do you want to order Sir/Mam'm").toLowerCase();

// if (items.indexOf(user_input) !== -1) {
//     document.write(user_input + " is <b>available</b> at index " + items.indexOf(user_input) + " in our bakery ")
// } else {
//     document.write("We are sorry . " + user_input + "  is <b>not  available</b> in out bakery ")

// }


// Q15

// var user = prompt("Enter password")
// var str = "123456789";

// if (str.match(user[0]) && user.length !== 6) {

//     document.write("Sorry Its not Starts with Letter / Password Must be along 6 Character ")
// } else {

//     document.write("Please enter a valid Passowrd")
// }


// Q16

// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {

//     document.write(university[i] + "<br>")

// }


// Q17

// user = prompt("Enter a string : ")
// for (var i = 0; i < user.length; i++) {

//     LasChar = user.slice(user.length - 1)
// }
// document.write("User input is : " + user + "<br>")
// document.write("Last Character of input : " + LasChar)



// =============== chapter 26-30 ==================

// Q1

// var userNum = +prompt("Enter numbers");
// document.write("number: " + userNum + "<br>round of value: " + Math.round(userNum) + "<br>floor value: " + Math.floor(userNum) + "<br>ceil value: " + Math.ceil(userNum));


// Q2

// var userNum = +prompt("Enter numbers");
// document.write("number: " + -Math.abs(userNum) + "<br>round of value: " + Math.round(-Math.abs(userNum)) + "<br>floor value: " + Math.floor(-Math.abs(userNum)) + "<br>ceil value: " + Math.ceil(-Math.abs(userNum)));


// Q3

// var absolute = +prompt("Enter numbers")
// document.write("The absolute value of " + absolute + " is " + Math.abs(absolute))


// Q4

// var randomNum = Math.random();
// var dice = (Math.ceil(randomNum * 6)); 
// document.write("Random dice value: " + dice)


// Q5

// var randomNum = Math.random();
// var toss = (Math.ceil(randomNum * 2));  
// if (toss == 2){
//     document.write("2<br>random coin value: Head");
// }else{
//     document.write("1<br>random coin value: Tail");
// } 


// Q6

// var randomNum = Math.random();
// var dice = (Math.ceil(randomNum * 100)); 
// document.write("Random number between 1 and 100: " + dice)


// Q7

// user = prompt("Enter your Weight in kilograms")

// if (user === "50kgs") {

//     a1 = user.replace("kgs", " Kilograms")
//     document.write("The weight of user is " + a1)

// } else if (user === "50kg") {

//     a2 = user.replace("kg", " Kilograms")
//     document.write("The weight of user is " + a2)

// } else if (parseInt(user) === 50) {

//     document.write("The weight of user is " + (user) + " Kilograms ")

// } else if (parseFloat(user) === 50.2) {

//     document.write("The weight of user is " + (user) + " Kilograms ")

// }


// Q8

// var user = +prompt();
// var secret = (Math.ceil(Math.random() * 10));
// if (user == secret) {
//     alert("Congratulation");
// } else {
//     alert("Not Matched");
// }



//================== chapter 31-34 =================

// Q1

// var d = new Date();
// document.write(d)


// Q2

// var d = new Date()
// CurrentMonth = d.getMonth();
// month = ["January", "Febrary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"]
// var currentMonth = month[d.getMonth()];
// document.write("Current Month : " + currentMonth)


// Q3

// var d = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var theDay = d.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is " + nameOfToday)


// Q4

// var d = new Date()
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var theDay = d.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday == "Sat" || nameOfToday == "Sun") {
//     document.write("Its Fun day ")
// } else {
//     document.write("No Fun Day ! beacuse today is  " + nameOfToday)
// }


// Q5

// var d = new Date()
// var theDay = d.getDate();
// var d = new Date();
// if (theDay <= 16) {
//     document.write("First fifteen  days of the month")

// } else {
//     document.write("Last Days of the month")

// }


// Q6

// var d = new Date()
// var now = new Date();
// document.write("Current Date: " + now + "<br>");
// var d = new Date();
// var m = d.getMilliseconds();
// var mm = d.getMinutes();
// document.write("Elapsed milliseconds since January 1, 1970: " + m + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + mm);


// Q7

// var d = new Date();
// var Time = d.getHours();

// if (Time >= 12) {
//     alert("It's PM")
// } else {

//     alert("It's AM")


// }


// Q8

// var d = new Date();
// var LaterDate = new Date();
// LaterDate.setFullYear(2020, 11, 31, 12, 0, 0, 0);
// document.write("Later Date : " + LaterDate)


// Q9

// var NowDate = new Date();

// var LaterDate = new Date(2015, 5, 18);

// Passed = NowDate.getTime() - LaterDate.getTime()

// PassedDays = Passed / (1000 * 3600 * 24)


// PassedDaysUpdate = Math.ceil(PassedDays)

// document.write(PassedDaysUpdate + "   Days Passed Since  1st Ramzan 2015")


// Q10

// var NowDate = new Date();

// var LaterDate = new Date(2015, 5, 18);

// Passed = NowDate.getTime() - LaterDate.getTime()

// PassedDays = Passed / (1000 * 60)


// Secounds = Math.ceil(PassedDays)

// document.write("On refence date " + LaterDate + ", " + Secounds + "  Seconds had passed since beginning of 2015")


// Q11

// var CurrentDate = new Date();

// document.write("current date: " + CurrentDate + "<br>");
// var Passed = new Date(CurrentDate.getTime() - (1000 * 60 * 60));
// document.write("1 hour ago, it was " + Passed);



// Q12


// var d = new Date("june 18 , 2020");

// document.write("current date : " + d + "<br>");

// var _100YearBack = new Date("june 18 , 1920");
// document.write("100 years back , it was " + _100YearBack);




// Task - 13

// BirthYear = 1999;
// var d = new Date();
// CurrentYear = d.getFullYear();

// Age = CurrentYear - BirthYear;

// document.write("Your Age is : " + Age + "<br>")
// document.write("Your Birth Year is : " + BirthYear)


//================== chapter 35-38 =================


// Q1
// function CurrentDateTime() {
//     var d = new Date();
//     document.write(d)
// }
// CurrentDateTime();




// Q2
// function fullname() {

//     FUllName = FirstName + "     " + LastName;
//     document.write(FUllName)

// }
// FirstName = prompt("Enter your First name : ")
// LastName = prompt("Enter your Last name : ")

// fullname()



// Q3
// function AddTwoNumbers(a, b) {

//     return a + b;


// }
// FirstName = +prompt("Enter your First Number : ")
// LastName = +prompt("Enter your Second Number : ")
// No = AddTwoNumbers(FirstName, LastName)
// document.write("Sum of  two Numbers : " + No)


// Q4
// function GreatherTHree(a, b, c) {

//     if (a > b && a > c) {
//         return "A is greater  " + parseInt(a);

//     } else if (b > a && b > c) {
//         return "B is greater  " + parseInt(b);
//     } else
//         return "C is greater  " + parseInt(c);
// }

// FirstNo = +prompt("Find Greather In three Numbers \n Enter First Number : ")
// SecNo = +prompt("Enter Second Number : ")
// THirNo = +prompt("Enter Third Number : ")

// No = GreatherTHree(FirstNo, SecNo, THirNo)
// document.write(No)


// Q5
// function Square(no) {

//     return no ** 2;

// }
// No = +prompt("Enter Number for compute square : ")
// Sq = Square(No)
// document.write("Square of " + No + "   is   " + Sq)




// Q6

// function factorialize(num) {
//     if (num === 0 || num === 1)
//         return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i;


//     }
//     return num;
// }
// no = +prompt("Enter a no: ")
// a = factorialize(no);
// document.write("Factorial of the " + no + " is " + a)





// Q7  
// function Counting(St, End) {
//     for (var i = St; i <= End; i++) {

//         document.write(i, "<br>")
//     }
// }
// Start = +prompt("Enter Starting Number ")
// End = +prompt("Enter Ending Number ")

// Counting(Start, End);




// Q8


// function calculateHypotenuse(base, Prependicular) {
//     function calculateSquare(side) {
//         return side * side;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(Prependicular));
// }

// Base = +prompt("Enter base of the Traiangle")
// Prep = +prompt("Enter prependicular of the Traiangle")

// document.write("Hypotenuse of triangle is :  " + calculateHypotenuse(Base, Prep));


// Q9

// function AreaRec(width, height) {
//     return width * height;
// }
// height = +prompt("Enter the height of the triangle")
// Area = AreaRec(10, height)

// document.write("Area of Rectangle is : " + Area)




// Q10


// function checkPalindrome(OriginalInput) {
//     StringSplit = OriginalInput.split("");
//     var StringJoined = StringSplit.reverse().join("");
//     if (OriginalInput == StringJoined) {
//         document.write(OriginalInput + " is palindrome");
//     } else {
//         document.write(OriginalInput + " is not palindrome");
//     }
// }
// InputString = prompt("Enter String")
// checkPalindrome(InputString)




// Q11

// function titleCase(str) {
//     strs = str.toLowerCase().split(' ');
//     for (var i = 0; i < strs.length; i++) {
//         strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
//     }
//     return strs.join(' ');
// }
// Strings = prompt("Enter a String : ")
// document.write(titleCase(Strings))


// Q12

// function longestWord(string) {
//     var SplitedString = string.split(" ");
//     var longestWord = 0;

//     for (var i = 0; i < SplitedString.length - 1; i++) {
//         if (longestWord < SplitedString[i].length) {
//             longestWord = SplitedString[i].length;
//             var FindWord = SplitedString[i];
//         }
//     }
//     return FindWord;
// }
// SentenceORWord = prompt("Enter a Sentence or word : ")
// document.write(longestWord(SentenceORWord))


// Q13

// function LetterFinder(Strings, Letter) {
//     var x = 0,
//         y = 0;

//     for (i = 0; i < Strings.length; i++) {
//         if (Strings[i] == Letter[0]) {
//             for (j = i; j < i + Letter.length; j++) {
//                 if (Strings[j] == Letter[j - i]) {
//                     y++;
//                 }
//                 if (y == Letter.length) {
//                     x++;
//                 }
//             }
//             y = 0;
//         }
//     }
//     document.write("There are   " + x + "   occerence(s) of the word  " + Letter)
// }
// Strings = prompt("Enter a String : ")
// Letter = prompt("Enter a Letter which you want to find")
// LetterFinder(Strings, Letter)


//================== chapter 38 - 42 =================


//  Q1

// function power(a, b) {


//     return "value of a raised to b  :  " + a ** b

// }
// a = prompt("Enter a 1st number : ")
// b = prompt("Enter a 2nd number : ")

// document.write(power(a, b))


//  Q2
// function leapYear() {

//     years = parseInt(document.getElementById("isYear").value);
//     if (years % 400 == 0) {

//         var LY = document.getElementById('LeapYear');
//         LY.innerHTML += String(years) + "  " + " Its is Leap Year <br>";


//     } else if (years % 100 == 0) {


//         var LY = document.getElementById('LeapYear');
//         LY.innerHTML += String(years) + "  " + "Its is  not Leap Year <br>";

//     } else if (years % 4 == 0) {


//         var LY = document.getElementById('LeapYear');
//         LY.innerHTML += String(years) + "  " + "Its is Leap Year <br>";

//     } else {

//         var LY = document.getElementById('LeapYear');
//         LY.innerHTML += String(years) + "  " + "Its is  not Leap Year <br>";

//     }

// }




// Q3

// a = +prompt("Enter Side 1 : ")
// b = +prompt("Enter Side 2 : ")
// c = +prompt("Enter Side 3 : ")

// function AreaofTraingle() {
//     var A = (a + b + c) / 2;
//     return A;

// }

// function Area() {

//     var Side = AreaofTraingle()

//     var total = Side * ((Side - a) * (Side - b) * (Side - c))
//     return total;

// }
// document.write(Area())


// Q4


// sub1 = +prompt("Enter subject 1 marks out of 100 : ")
// sub2 = +prompt("Enter subject 2 marks out of 100 : ")
// sub3 =


//  +prompt("Enter subject 3 marks out of 100 : ")




// function StudentsResult() {


//     Average();
//     document.write("<br>")
//     Percentage();


// }
// StudentsResult(56, 76, 89)


// function Average() {

//     avg = (sub1 + sub2 + sub3) / 3;
//     document.write("Average of  3 subject  is : " + avg)


// }

// function Percentage() {

//     TM = 300;

//     OM = sub1 + sub2 + sub3;

//     per = (OM / TM) * 100;

//     document.write("Pecentage of 3 subject is : " + per)

// }


//  Q5

// function Indexof(para, char) {


//     SplitPara = para.split("");
//     document.write(SplitPara)

//     for (var i = 0; i < SplitPara.length; i++) {
//         if (SplitPara[i] === char) {
//             document.write(" <br>index of  " + SplitPara[i] + "  is   " + i)

//         }
//     }


// }

// para = prompt("Enter a sentence : ")
// char = prompt("Enter a character : ")
// Indexof(para, char)





//  Q6
// I try to do this code
// function Indexof(para) {
//     SplitPara = para.split("");

//     for (var i = 0; i < SplitPara.length; i++) {
//         if (SplitPara[i] === 'a' || SplitPara[i] === 'e' || SplitPara[i] === 'i' || SplitPara[i] === 'o' || SplitPara[i] === 'u') {

//             delete SplitPara[i]

//         }
//     }
//     document.write(SplitPara)


//     para = prompt("Enter a sentence : ")
//     Indexof(para)



// Stack over flow but i got it.
// function DeleteVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// document.write(DeleteVowels(str))




// Q7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// findOccurrences();


// Q8

// CityDistance = prompt("Enter the distance  between two cities (Km) ")
// function Covertion() {
//     meter();
//     document.write("<br>")
//     Cmeter();
//     document.write("<br>")
//     Feet();
//     document.write("<br>")
//     Inches();
// }
// Covertion()

// function meter() {

//     meter = CityDistance * 1000;

//     document.write(CityDistance + "  Km" + " into meter is " + meter)

// }

// function Cmeter() {

//     Cmeter = CityDistance * 100000;

//     document.write(CityDistance + "  Km" + "  into Centimeter is " + Cmeter)



// }

// function Feet() {

//     feet = CityDistance * 3280.8;

//     document.write(CityDistance + "  Km" + "  into feet is " + feet)



// }

// function Inches() {

//     Inches = CityDistance * 39370.078740157;

//     document.write(CityDistance + "  Km" + "  into Inches is " + Inches)



// }


// Q9

// function OverTimePay(Salary, hrs) {

//     if (hrs > 40) {

//         Overtime = (hrs - 40) * 12;

//         Salary = Salary + Overtime;

//         document.write("Salary of Employee with over time is " + Salary)

//     } else if (hrs <= 40) {


//         Overtime = hrs * 12;
//         document.write("Salary of Employee " + Salary)

//     }

// }
// Salary = +prompt("Enter your Salary : ")
// Hrs = +prompt("Enter your Hours : ")

// OverTimePay(Salary, Hrs)






// Q10

// function ConvertCurrcy(amount) {
//     Notes1000 = Math.floor(amount / 1000);

//     document.write(" There are " + Notes1000 + " Notes of 1000 in " + amount + "<br>")
//     RemainAmounts1000 = amount - (Notes1000 * 1000);

//     Notes500 = Math.floor(RemainAmounts1000 / 500);
//     document.write(" There are " + Notes500 + " Notes of 500 in " + amount + "<br>")
//     RemainAmounts500 = RemainAmounts1000 - (Notes500 * 500);


//     Notes100 = Math.floor(RemainAmounts500 / 100);
//     document.write(" There are " + Notes100 + "  Notes of 100 in " + amount + "<br>")
//     RemainAmounts100 = RemainAmounts500 - (Notes100 * 100);

//     Notes50 = Math.floor(RemainAmounts100 / 50);
//     document.write(" There are " + Notes50 + " Notes of 50 in " + amount + "<br>")
//     RemainAmounts50 = RemainAmounts100 - (Notes50 * 50);

//     Notes10 = Math.floor(RemainAmounts50 / 10);
//     document.write(" There are " + Notes10 + "  Notes of 10 in " + amount + "<br>");
//     RemainAmounts = RemainAmounts50 - (Notes10 * 10);

// }
// amount = +prompt("Enter an amount : ")
// ConvertCurrcy(amount)