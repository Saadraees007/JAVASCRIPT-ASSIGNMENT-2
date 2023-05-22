// ***Chapter 21 (Changing Case)***

// *Question No 1*

// var allLower = UserInput.toLowerCase();

// *Question No 2*

// var x = "Hello World"
// x = x.toLowerCase();
// console.log(x)

// *Question No 3*

// var y = "hello world"
// y = y.toUpperCase();
// console.log(y)



// *Question No 4*

// var userInput = "Hello World!";
// var lowerCaseString = userInput.toLowerCase();
// console.log(lowerCaseString);


// *Question No 5*

// var array = ["Hello", "World"];
// var index = 0;
// var element = array[index].toLowerCase();
// console.log(element);


// *Question No 6*

// var userInput = "Hello World";
// var upperCaseString = userInput.toUpperCase();
// alert(upperCaseString);

// *Question No 7*

// var cityName = "kaRacHi";
// var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedName);

// ***Chapter 22 - 25 (Strings)***

// *Question No 1*

// var sameWords = "captain";
// var sliced = sameWords.slice(1, 3);
// console.log(sliced); 

// *Question No 2*

// let sameWords = "captain";
// let numCharacters = sameWords.length;
// console.log(numCharacters);  

// *Question No 3*

// let animal = "elephant";
// let startIndex = Math.floor(animal.length / 2) - 2;
// let endIndex = startIndex + 4;
// let seg = animal.slice(startIndex, endIndex);
// console.log(seg);

// *Question No 4*

// var myString = "Hello, Friends!";
// var characterCount = myString.length;
// console.log(characterCount);  

// *Question No 5*

// var myString = "Example String";
// var characterCount = myString.length;
// var slicedString = myString.slice(1, -3);
// console.log(characterCount);
// console.log(slicedString);

// *Question No 6*

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);  

// *Question No 7*

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// *Question No 8*

// var text = "Let it go, let it go, can't hold it back anymore";
// var indx = text.lastIndexOf("go");

// if (indx !== -1) {
//     indx = text.indexOf("go", indx);
// }
// console.log(indx);

// *Question No 9*

// var myString = "Hello, Friends!";
// var indexNum = 6;

// if (myString.charAt(indexNum)) {
//   // Code block to execute if the segment exists
//   console.log("Segment exists");
// } else {
//   // Code block to execute if the segment doesn't exist
//   console.log("Segment does not exist");
// }
 
// *Question No 10*

// var Alp= "abcde"
// console.log(Alp.charAt (2)) 

// *Question No 11*

// var text = "Lorem ipsum dolor sit amet";
// var cha = text.charAt(10);

// console.log(cha);

// *Question No 12*

// var str = "Hello, Friends..!";
// var x = str.charAt(str.length - 1);
// console.log(x);

// *Question No 13*

// var input = "Hello World!";
// var cha = input.charAt(4);
// console.log(cha);

// *Question No 14*

// var myString = "Hello, world!";
// var specificChar = "l";

// if (myString.charAt(2) === specificChar) {
//       // Code block to execute if the 3rd character matches the specific character
//       console.log("The 3rd character is 'l'");
//     } else {
//           // Code block to execute if the 3rd character doesn't match the specific character
//           console.log("The 3rd character is not 'l'");
//         }
        
//         *Question No 15*
        
//                 var myString = "Hello, world!";
//                 var charArray = [];
        
//         for (var i = 0; i < myString.length; i++) {
//           charArray[i] = myString.charAt(i);
//         }

//         console.log(charArray);

//         var reply = "no, I don't think so. It's a no for me.";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply);

// *Question No 16*

// var str = "I have 1 mango and 2 apple.";
// var newStr = str.replace("1", "one");
// console.log(newStr);

// *Question No 17*

// var x = "apple, banana, and orange";
// var y = x.replace(/a/g, "z");
// console.log(y);

// ***Chapter 26 (Rounding Numbers)***

// *Question No 1*

// var number = 9.5;
// var roundedNumber = Math.round(number);
// console.log(roundedNumber);

// *Question No 2*

// var origNum = 8.4;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// *Question No 3*

// var origNum = 9.8;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

// *Question No 4*

// var num = 7.7;
// var roundedNum = Math.round(num);
// console.log(roundedNum);

// *Question No 5*

// var num = .5;
// var roundedNum = Math.floor(num);
// console.log(roundedNum);

// ***Chapter 27 (Random Numbers)***

// *Question No 1*

// var randomNumber = Math.random();
// var min = 1;
// var max = 50;
// var convertedNumber = Math.floor(randomNumber * (max - min + 1)) + min;
// console.log(convertedNumber); 

// *Question No 2*

// var randomNumber = Math.random();
// console.log(randomNumber);

// *Question No 3*

// function rollDice() {
//         var randomNumber = Math.floor(Math.random() * 6) + 1;
//         return randomNumber;
//       }  
//       var diceResult = rollDice();
//       console.log("Dice rolled: " + diceResult);
    
//     *Question No 4*
    
//     function tossCoin() {
//     var randomNumber = Math.random();
//     var result = (randomNumber < 0.5) ? 'Head' : 'Tail'; 
//     // If randomNumber is less than 0.5, set result as 'Head', otherwise set it as 'Tail'
//     return result;
//   }
//   var coinTossResult = tossCoin();
//   console.log("Coin Toss Result: " + coinTossResult);
  
// ***Chapter 28, 29 (Converting Strings)***

// *Question No 1*

// var str = "587";
// var num = Number(str);
// console.log(num); 

// *Question No 2*

// function stringToInteger(str) {
//         var num = parseInt(str);
//         return num;
//       }
//       var str = "746";
//       var integer = stringToInteger(str);
//       console.log(integer);
    
//     *Question No 3*
    
    // var decimalString = "3.14";
    // var floatValue = +decimalString;
    // console.log(floatValue);
    
//     *Question No 4*
    
//     var str = "123";
// var intValue = parseInt(str);
// var floatValue = parseFloat(str);

// if (isNaN(intValue)) {
//   console.log("String cannot be converted to an integer");
// } else {
//   console.log("String can be converted to an integer");
// }

// if (isNaN(floatValue)) {
//   console.log("String cannot be converted to a decimal");
// } else {
//   console.log("String can be converted to a decimal");
// }

// *Question No 5*

// var number = 168;
// var str = number.toString();
// console.log(str);

// *Question No 6*

// function numberToString(number) {
//     var str = String(number);
//     return str;
//   }
  
//   var result = numberToString(42);
//   console.log(result); 

// *Question No 7*

// var decimalString = "3.14";
// var integer = parseInt(decimalString);
// console.log(integer);

// ***Chapter 30 (Controlling the length of decimals)***

// *Question No 1*

// var num = 3.14159265359;
// var newNum = Number(num.toFixed(4)).toString();
// console.log(newNum); 

// *Question No 2*

// var num = 3.14159265359;
// num = Number(num.toFixed(2));
// console.log(num);

// *Question No 3*

// var num = 2876;
// num = Number(num.toFixed(2));

// var numAsString = num.toString();
// if (numAsString.length > 4) {
//   console.log("Number has more than 4 characters.");
// } else {
//   console.log("Number does not have more than 4 characters."); 
// }
                
// *Question No 4*

// var number = 7.1151592653589793;
// var roundedNumber = Number(number.toFixed(2)).toString();
// alert(roundedNumber);

// Chapter 31 - 34 (Date & Time)***

// *Question No 1*

// var dObj = new Date();
// console.log(dObj)

// *Question No 2*

// var dObj = new Date();
// var dStr = dObj.toString();
// console.log(dStr)

// *Question No 3*

// var d = new Date();
// var day = d.getDay();
// console.log(day)

// *Question No 4*

// var d = new Date();
// var day = d.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[day]);

// *Question No 5*

// var d = new Date();

// var year = d.getFullYear();
// var month = d.getMonth() + 1;
// var date = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var milliseconds = d.getMilliseconds();
// var day = d.getDay();

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Date: " + date);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milliseconds: " + milliseconds);
// console.log("Day: " + day);

// *Question No 6*

// var later = new Date(2020, 11, 0);
// console.log(later)

// *Question No 7*

// var myDate = new Date(1992, 6, 5);
// console.log(myDate)

// *Question No 8*

// alert(Date.now() - new Date(1980, 0, 1).getTime());

// *Question No 9*

// var d = new Date(); // Create a new Date object representing the current date and time
// console.log("Before: " + d);

// d.setFullYear(2022); // Set the year of the Date object to 2022
// console.log("After: " + d);

// *Question No 10*

// var changeMonthToJanuary = (date) => new Date(date.getFullYear(), 0, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

// var currentDate = new Date();
// console.log("Before: " + currentDate);

// var januaryDate = changeMonthToJanuary(currentDate);
// console.log("After: " + januaryDate);

// *Question No 11*

// var date = new Date("2023-05-30");
// var dayOfWeek = date.getDay();
// console.log(dayOfWeek); 

// *Question No 12*

// function changeMinutesToSpecificValue() {
//     var givenTime = prompt("Enter the given time (in hh:mm format):");
//     var specificMinutes = prompt("Enter the specific minutes:");
  
//     var timeParts = givenTime.split(":");
//     var hours = parseInt(timeParts[0]);
//     var minutes = parseInt(timeParts[1]);
  
//     if (isNaN(hours) || isNaN(minutes)) {
//       return "Invalid time input.";
//     }
  
//     var newMinutes = parseInt(specificMinutes);
  
//     if (isNaN(newMinutes) || newMinutes < 0 || newMinutes > 59) {
//       return "Invalid minutes input.";
//     }
  
//     timeParts[1] = newMinutes.toString().padStart(2, "0");
  
//     return timeParts.join(":");
//   }
  
  
//   var modifiedTime = changeMinutesToSpecificValue();
  
//   console.log("Modified Time: " + modifiedTime);
  
  
// *Question No 13*

// function addHoursToTime(time, hoursToAdd) {
//     var timeParts = time.split(":");
//     var hours = parseInt(timeParts[0]);
//     var minutes = parseInt(timeParts[1]);
//     var seconds = parseInt(timeParts[2]);
  
//     var totalHours = hours + hoursToAdd;
  
//     var newHours = totalHours % 24;
//     var daysToAdd = Math.floor(totalHours / 24);
  
//     var newTime = [newHours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')].join(":");
  
//     return newTime;
//   }
//   var currentTime = "4:23:00";
//   var hoursToAdd = 5;
  
//   var newTime = addHoursToTime(currentTime, hoursToAdd);
//   console.log(newTime); 
      
// *Question No 14*

// function calculateAge(birthDate) {
//     var today = new Date();
//     var birthDateObj = new Date(birthDate);
  
//     var yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
  
//     var isBirthdayPassed = today.getMonth() > birthDateObj.getMonth() ||
//       (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate());
  
//     if (!isBirthdayPassed) {
//       yearsDiff--;
//     }
  
//     return yearsDiff;
//   }
//   var birthDate = "2002-08-23";

//   var age = calculateAge(birthDate);
//   console.log(age); 
    

// ***Chapter 35 - 37 (Functions)***

// *Question No 1*

// function displayAlert() {
    //     alert("This is an alert message!");
    //   }
    //   displayAlert();
    
    // *Question No 2*
    
    // function askName() {
    //     var userName = prompt("What's your name!");
    //     return userName;
    //   }
    //   var name = askName();
    //   console.log("Hello, " + name + "!");
            
    // *Question No 3*
    
    // function functionOne() {
    //     console.log("This is function one.");
    //   }
      
    //   function functionTwo() {
    //     console.log("This is function two.");
    //   }
      
    //   function callTwoFunctions() {
    //     functionOne();
    //     functionTwo();
    //   }
      
    //   callTwoFunctions();
      
    // *Question No 4*
    
    // function displayPromptAndAlert() {
        //     var userName = prompt("Enter name");
        //     alert("Hello, " + userName + "!");
        //   }
        
        //   displayPromptAndAlert();
        
        // *Question No 5*
        
        // function concat(a, b, c, variable, str, num) {
        //     var result = a + b + c + variable + str + num;
        //     return result;
        //   }
          
        //   var firstThreeLetters = "ABC";
        //   var myString = "Hello";
        //   var myNumber = 42;
          
        //   var concatenatedValue = concat("A", "B", "C", firstThreeLetters, myString, myNumber);
        //   console.log(concatenatedValue);
          
            // *Question No 6*
            
            // function concatenateParameters(param1, param2) {
            //     var concatenatedResult = param1 + param2;
            //     return concatenatedResult;
            //   }
              
            //   var parameter1 = "Hello";
            //   var parameter2 = "Kesehoyar";
              
            //   var result = concatenateParameters(parameter1, parameter2);
            //   console.log(result);
            
            // *Question No 7*
            
            // function multiplyParameters(param1, param2, param3) {
            //     var multipliedResult = param1 * param2 * param3;
            //     return multipliedResult;
            //   }
              
            //   var parameter1 = 6;
            //   var parameter2 = 8;
            //   var parameter3 = 3;
              
            //   var result = multiplyParameters(parameter1, parameter2, parameter3);
            //   console.log(result);
              
            // *Question No 8*
            
            // function calculateAverage(numbers) {
            //     if (numbers.length === 0) {
            //       return 0;
            //     }
              
            //     var sum = 0;
            //     for (var i = 0; i < numbers.length; i++) {
            //       sum += numbers[i];
            //     }
              
            //     var average = sum / numbers.length;
            //     return average;
            //   }
            //   var numbers = [10, 9, 5, 7, 3];
            //   var averageResult = calculateAverage(numbers);
            //   console.log(averageResult);

            // *Question No 9*
            
            // function calculateSum(num1, num2) {
                //     var sum = num1 + num2;
                //     return sum;
                //   }
                //   var number1 = 54;
                //   var number2 = 67;
                //   var sumResult = calculateSum(number1, number2);
                //   console.log(sumResult);
                
                // *Question No 10*
                
                // function calculateAverage(numbers) {
            //     if (numbers.length === 0) {
                //       return 0;
            //     }
              
            //     var sum = 0;
            //     for (var i = 0; i < numbers.length; i++) {
            //       sum += numbers[i];
            //     }
              
            //     var average = sum / numbers.length;
            //     return average;
            //   }
            //     var numbers = [8, 5, 2, 6, 9];
            //     var averageResult = calculateAverage(numbers);
            //     console.log(averageResult);
                
            // *Question No 11*
            
            // function addNumbers(num1, num2) {
            //     return num1 + num2;
            //   }
              
            //   var result = addNumbers(3, 8);
            //   console.log(result);
              
            // *Question No 12*
            
            // function countLetters(word) {
            //     var letterCounts = {};
              
            //     for (var i = 0; i < word.length; i++) {
            //       var letter = word[i];
            //       if (letterCounts.hasOwnProperty(letter)) {
            //         letterCounts[letter]++;
            //       } else {
            //         letterCounts[letter] = 1;
            //       }
            //     }
              
            //     return letterCounts;
            //   }
            //   var word = "Saad";
            //   var counts = countLetters(word);
            //   console.log(counts);
                            
            // *Question No 13*
            
            // function setYearInDate(year) {
            //     var date = new Date();
            //     date.setFullYear(year);
            //     return date;
            //   }
            //   var year = 2023;
            //   var dateObject = setYearInDate(year);
            //   console.log(dateObject);
            
            // *Question No 14*
            
            // function calculateAge(dateOfBirth) {
            //     var currentDate = new Date();
            //     var birthDate = new Date(dateOfBirth);
                
            //     var age = currentDate.getFullYear() - birthDate.getFullYear();
              
            //     var currentMonth = currentDate.getMonth();
            //     var birthMonth = birthDate.getMonth();
              
            //     if (currentMonth < birthMonth) {
            //       age--;
            //     } else if (currentMonth === birthMonth) {
            //       var currentDay = currentDate.getDate();
            //       var birthDay = birthDate.getDate();
              
            //       if (currentDay < birthDay) {
            //         age--;
            //       }
            //     }
              
            //     return age;
            //   }
            //   var dateOfBirth = "2001-05-15";
            //   var age = calculateAge(dateOfBirth);
            //   console.log(age);
               
            // *Question No 15*
            
            // function checkWordPresence(word) {
            //     var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
            //     var isPresent = array.includes(word);
            //     return isPresent;
            //   }
            //   var word = 'saad';
            //   var isPresent = checkWordPresence(word);
            //   console.log(isPresent);
               
            // *Question No 16*
            
            // function repeatLetter(letter) {
            //     var repeatedString = letter.repeat(10);
            //     return repeatedString;
            //   }
            //   var letter = 'fbcd';
            //   var repeatedResult = repeatLetter(letter);
            //   console.log(repeatedResult);
            
            // *Question No 17*
            
            // function reverseArray(array) {
            //     var reversedArray = array.reverse();
            //     return reversedArray;
            //   }
            //   var array = ['a','b','c','d','e'];
            //   var reversedResult = reverseArray(array);
            //   console.log(reversedResult);
                
            // ***Chapter 38 (Local vs. Global Variables)***
                
            // *Question No 1*
            
            // function calculateSum(num1, num2) {
            //     var result = num1 + num2;
            //     return result;
            //   }
            //   var sum = calculateSum(36, 7);
            //   console.log(sum);
            
            // *Question No 2*
            
            // var globalVariable = 'Hello, its global variable!';

            // function accessGlobalVariable() {
            // console.log(globalVariable);
            // }
            // accessGlobalVariable();
            
            // ***Chapter 39, 40 (Switch Statements)***
            
            // *Question No 1*
            
            //     var variable = 'A';

            //    switch (variable) {

            //    case 'A':
            //    console.log('The variable is equal to A');
            //    break;

            //    case 'B':
            //    console.log('The variable is equal to B')
            //    break;

            //    case 'C':
            //    console.log('The variable is equal to C');
            //    break;

            //    default:
            //    console.log('The variable does not match any case');
            //    break;
            //    }

            // *Question No 2*
            
                // var cityName = prompt('Enter a city name:');

                // switch (cityName) {
                // case 'Karachi':
                // alert('You entered Karachi!');
                // break;

                // case 'Islamabad':
                // alert('You entered Islamabad!');
                // break;

                // case 'New Lahore':
                // alert('You entered New Lahore!');
                // break;

                // default:
                // alert('The city name you entered does not match any expected cities.!');
                // break;
                // }

       // ================= THE END =================

            
            
            
            
            
            
            
            
            
            
            
            
            
            


            










