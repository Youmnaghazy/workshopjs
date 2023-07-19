// var userInput=document.getElementById("userInput");
// var arr=[];
// function addContact(){
//     arr.push(userInput.value)
// displaydata(arr)
// }
// function displaydata(arr){
//     var cartoona=``;
//     for(var i=0; i<arr.length;i++)
// cartoona +=`<div id="home-content">
// <div
// class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
// <p id="x">${arr[i]}</p>
// <i class=" fa-sharp fa-solid fa-trash" onclick="deleterow(${i})"></i>
// </div>
// </div>`
// document.getElementById("home").innerHTML=cartoona;
// reset();
// }
// function reset(){
//     userInput.value="";

// }

// function deleterow(id){
//     arr.splice(id,1)
//     displaydata(arr)

// }

//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.
 //Otherwise, return "there is no 7 in the array".
// function Boom(arr){
// arr.join('').includes('7')?console.log("Boom"):console.log("there is no 7 in the array");
// }
// Boom([8, 6, 33, 100]);


// Create a function that takes an array of strings and returns an array with only the strings
// that have numbers in them. If there are no strings containing numbers, return an empty array.
// function checknumber(arr){
//     var newArr=[]
// for (var i=0;i<arr.length;i++)
// {
//     for(var j=0; j< arr[i].length;j++){
//     // console.log(arr[i][j]);
//     if(arr[i][j] >=0 && arr[i][j]<=9){
//         newArr.push(arr[i])
        
//     }
// }
// }
// console.log(newArr);

// }


// checknumber(["1a", "a", "2b", "b"])

// Write a sum method which will work properly when invoked using either syntax below.
function sumNum(x){
if(arguments.length==2){
console.log(arguments[0] + arguments[1]);
}
else{
return function (y){
    console.log(y+x);
}
}
   
}
sumNum(2,3)
sumNum(2)(3)