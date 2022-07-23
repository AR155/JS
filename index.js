// 1.Ways to print in JavaScript
//console.log("Hello Ayush");
//alert("me");
//document.write("this is a document");

// 2.JavaScript console api
// console.log("Hello Ayush", 4 + 6, "Another Log");
// console.warn("This is a warning");
// console.error("This is error");

//3 JavaScrpit Variables
//what are variables?- Containers which used to store values.

/*
Multi 
line 
comments
*/

var num1 = 34;
var num2 = 56;
// console.log(num1+num2);


//4 Data Types in JavaScript

//numbers
var num1 = 12;
var num2 = 89.78;

//strings
var str1 = "This is Ayush";
var str2 = 'This is Ayush';

//Objects
var marks = {
    shekhar: 56.7,
    ravi: 89,
    daniel: 97.99
}
// console.log(marks)

//Booleans
var a = true;
var b = false;
// console.log(a,b)

//var und=undefined
var und
// console.log(und);

var nu = null;
// console.log(null)

/*
At a very high level  types of data types in JavaScript:-
1.Primitive Data Types- undefined, null, boolean, string, numbers, symbol
2.Reference Data Types- Arrays and Objects
*/

var arr = [1, 2, "ayush", 4, 5]
// console.log(arr);


// Operators in JavaScript
// Arithmetic Operators

var a = 100;
var b = 10;
// console.log("Sum of a & b", a+b);
// console.log("difference of a & b", a-b);
// console.log("Multiplication of a & b", a*b);
// console.log("divison of a & b", a/b);

//Assignment operators
var c = b
// c+=2;
// c-=2;
// c*=2;
// c/=2
// console.log(c)
var x = 20;
var y = 90;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);


// logical operators
// And operator
// console.log(true && true);
// console.log(false && true)
// console.log(true && false);
// console.log(false && false);

// OR operator
// console.log(true || true);
// console.log(false || true)
// console.log(true || false);
// console.log(false ||  false);

// Not Operator
// console.log(!false)
// console.log(!true)

//  functions in  JavavScript
// function avg(a,b) 
// {
//     return (a+b/2);    
// } 

// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1,c2)


// In my default browser,in any web page in console section purple color represnts the number and white or peach color represtnts the string


// If statements
var age = 56;
//  Single if statement
// if(age>10)
//    console.log("You can drink rasna");

// if-else statement
// if(age > 18)
//   console.log("You can drink wine");
// else
//   console.log("You can drink rasna");

// if-else ladder
// if(age > 18)
//   console.log("Bache nhi rhe");
// else if (age>24)
//   console.log("Job leni hai");
// else if ( age > 32)
//   console.log("Shaddi ho gyi");
// else
//   console.log("Retired ho gye");

// console.log("End of Ladder");


// ARRAYS
var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
// for(var i =0; i <=arr.length; i++ )
// {
//     console.log(arr[i]);
// }

// arr.forEach(function (element)
// {
//     console.log(element)
// }) 


// Suggestion: Always format your document. Right click and select format document.


//var is used in old javascript and let is used in new one. The scope of let is only inside the block.

// const ac = 0;// constant variable whose value cannot be changed.
// ac++;// error-"Assignment to constant variable".
let j = 0;
// while(j<arr.length)
// {
//       console.log(arr[j])
//       j++;
// }

// do
// {
//       console.log(arr[j]);
//       j++;
// } while(j<arr.length)

//Array methods

let myArr = ["Fan", "Camera", 34, null, true];
//Array methods
// console.log(myArr.length)
// myArr.pop(); // it removes the last element
// myArr.push("Ayush"); // it adds the written element in the last.
// myArr.shift() // it removes the first element of the Array
// myArr.unshift("Ayush")
// let newLen = myArr.unshift("Ayush");
// console.log(newLen);
// myArr.toString; // converts the asrray into string
// console.log(myArr);
// myArr.sort(); // sorts your array values. it sorts alphabetically.
// console.log(myArr);

//String methods
let name = "Ayush is a Btech Student OF BIT MESRA";
// console.log(name.length);
// // console.log(name.indexOf("Student")); // returns the positon of the word from where it starts.
// console.log(name.lastIndexOf("Btech")); // returns the last position of the word from where it starts.
// console.log(name.slice(2,5)); //it takes out that part of the string from where it starts and ends as entered by the user.
// console.log(name.replace("Btech","BBA")); // replace the string from the what is given by the user.

let myDate = new Date(); // new is used for creatig new dates
// console.log(myDate); 
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getHours());

// DOM MAINPULATION -DOCUMENT OBJECT MODULE
let elem = document.getElementById("click");
// console.log(document.getElementById("click").style.border = '2px soild blue')
let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// document.getElementsByClassName("container")[0].style.background="yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)
tn = document.getElementsByTagName("button")
// console.log(tn)
di = document.getElementsByTagName("div")
// console.log(di)
createdElement = document.createElement('p')
createdElement.innerText = "this is a para"
di[0].appendChild(createdElement);
createdElement2 = document.createElement('b')
createdElement2.innerText = "This is bold"
di[0].replaceChild(createdElement2, createdElement);
// removeChild(element);---> removes an element
// console.log(document.URL)
// console.log(document.location)
// console.log(document.title)
// console.log(document.scripts)
// console.log(document.links)
// console.log(document.domain)
// console.log(document.images)

// //Selecting Query 
// sel = document.querySelector('.container')
// console.log(sel)
// sel1 = document.querySelectorAll('.container')
// console.log(sel1)

// Events in Java Script
//  events- something happens or has occured
// e.g.  onclick(),onmouse,onload,document.onload,window.onload,mouseover

function clicked() {
    // console.log("the button was clicked");
}
window.onload = function clicked()
{
    // console.log("the document was loaded")
}


firstContainer.addEventListener('click', function(){
    // document.querySelectorAll('.container')[1].innerHTML= "<b> WAS on clicked</b>"
    // console.log("Click on Container")
})

firstContainer.addEventListener('mouseover',function(){
    // console.log("Mouse on container ");
})

firstContainer.addEventListener('mouseout' , function(){
    // console.log("Mouse was out of container")
})

// let prevHTML= document.querySelectorAll('.container')[1].innerHTML
firstContainer.addEventListener('mouseup' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML
//     console.log("Mouse up when clicked on container")
})

firstContainer.addEventListener('mousedown' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> was on clicked</b>"
//     console.log("Mouse down when clicked container")
})


// Arrow Functions
// function summ(a,b)
// {
//     return (a+b);
//     }

summ = (a,b)=>{
    return (a+b);
}

logkaro = ()=>
{
    // document.querySelectorAll('.container')[1].innerHTML ="<b>Set Time Fired</b>"
    // console.log("i am your log");
}
// SetTimeout and setinterval
clr = setTimeout(logkaro,5000);
//  clr = setInterval(logkaro,2000)
// use clearTimeout/clearInterval to cancel setTimeout/setInterval

// Local Storage in JavaScript

// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.length()
// localStorage.clear()


// // JSON
// JSON-JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript 
// object syntax. 
// The JSON standard requires double quotes and will not accept single quotes, nor will the parser.

// obj = {name:'Ayush', length:1, a:{this:'tha\\"t'}}
// jso = JSON.stringify(obj)   // converts the object into string
// console.log( typeof jso) // typeof function shows which type of your variable is.
// console.log(jso);
// parsed = JSON.parse(`{"name":"Ayush","length":1, "a":{"this":"that"}}`)
// console.log(parsed);


// search for ECMA Script and read about the articles
// ECMA Script is a standard which is used in JavaScript

function a()
{
    return 'hello';
}

const sentence = a('hi');
console.log(sentence);
