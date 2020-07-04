//Task 1 functions
function getValue(id) {
		var value = document.getElementById(id).value;
		return Number(value);
	}


function add(){
	var a=this.getValue('myinput');
	var b=this.getValue('myinput1');
	document.write(a+b);
	return a+b;
}

function sub(){
	var a=this.getValue('myinput');
	var b=this.getValue('myinput1');
	document.write(a-b);
	return a-b;
}

function mul(){
	var a=this.getValue('myinput');
	var b=this.getValue('myinput1');
	document.write(a*b);
	return a*b;
}

function div(){
	var a=this.getValue('myinput');
	var b=this.getValue('myinput1');
	document.write(a/b);
	return a/b;
}

function percent(){
	var a=this.getValue('myinput');
	var b=this.getValue('myinput1');
	var c=(a/100)*b;
	document.write(c.toFixed(3))
	return c.toFixed(3);
}

function root(){
	var a=this.getValue('myinput');
	document.write(Math.sqrt(a));
	return Math.sqrt(a);
}

function absolute(){
	var a=this.getValue('myinput');
	document.write(Math.abs(a));
	return Math.abs(a);
} 
// Alternative program single digits calculation
/*function myFunction(name) {

document.getElementById("demo").innerHTML = name;

}

function displayAdd() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = addition(x) ;
return document.getElementById("demo1").innerHTML;

}

function addition(y){

var z = Number(y)
var a = document.getElementById("demo1").textContent;
var b = Number(a);

return b+z;
}

function displaySub() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = subtraction(x) ;
return document.getElementById("demo1").innerHTML;

}

function subtraction(y){

var z = Number(y)
var a = document.getElementById("demo1").textContent;
var b = Number(a);

return b-z;
}

function displayMul() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = multiplication(x) ;
return document.getElementById("demo1").innerHTML;

}

function multiplication(y){

var z = Number(y)
var a = document.getElementById("demo1").textContent;
var b = Number(a);

return b*z;
}

function displayDiv() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = division(x) ;
return document.getElementById("demo1").innerHTML;

}

function division(y){

var z = Number(y)
var a = document.getElementById("demo1").textContent;
var b = Number(a);

return b/z;
}

function displayPer() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = percent(x) ;
return document.getElementById("demo1").innerHTML;

}

function percent(y){

var z = Number(y)
var a = document.getElementById("demo1").textContent;
var b = Number(a);

return b/100*z;
}

function displayRoot() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = root(x) ;
return document.getElementById("demo1").innerHTML;

}

function root(y){

var z = Number(y);
//var a = document.getElementById("demo1").textContent;
//var b = Number(a);
var b= z.toFixed(3);
return Math.sqrt(b);
}

function displayAbs() {

var x = document.getElementById("demo").textContent;

document.getElementById("demo1").innerHTML = absolute(x) ;
return document.getElementById("demo1").innerHTML;

}

function absolute(y){

var z = Number(y);
//var a = document.getElementById("demo1").textContent;
//var b = Number(a);
//var b= z.toFixed(3);
return Math.abs(z);
} */
//---------------------------------------------------------------------------------------------------------------------------
//Task 2 functions
function form_valid(){
	var name1 = document.getElementById("inputName").value;
	var nameRGEX = /^[a-z]/i;
	var nameResult = nameRGEX.test(name1);
	var phoneNumber = document.getElementById('inputPhone').value;
  	var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  	var phoneResult = phoneRGEX.test(phoneNumber);
  	var email1 = document.getElementById("email").value;
  	var emailREGEX= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  	var emailResult= emailREGEX.test(email1);
  	var validation
  	if(nameResult==true) {
  		console.log("name:"+ name1);
  		validation=true;
  	}
  	else{
  		alert("enter alphabet");
  		validation=false;
  	}

  	if(phoneResult==true){
  	console.log("phone:"+phoneNumber );
  	validation= true
  }
  else{
  	alert("Please enter a 10 digit number");
  	validation=false;
  }
  if(emailResult==true){
  	console.log("email:"+email1 );
  	validation= true
  }
  else{
  	alert("Please enter a valid email id");
  	validation=false;
  }
  return validation
	}
//---------------------------------------------------------------------------------------------------------------------------
//Task 3 functions
function palindrome(){
	var str= document.getElementById('inputString').value;
	const revArray = []; 
    const length = str.length - 1; 
      
    // Looping from the end 
    for(let i = length; i >= 0; i--) { 
        revArray.push(str[i]); 
    } 
      
    // Joining the array elements 
    var revStr= revArray.join(''); 
    console.log(revStr);
    if(str===revStr){
    	//alert('Enter Numeric Values Only');
    	alert("It is a palindrome");
    	return true;
    } else{
    	alert("It is not a palindrome");
    	//alert('Enter');
    	return false
    } 
} 

function anagram(){
	var str=document.getElementById("inputStr").value;
	var str1= str.toLowerCase().replace(/[^A-Za-z]/g,'');
	var str2=str1.split("").sort().join("");
	var str3=document.getElementById("inputWord").value;
	var str4= str3.toLowerCase().replace(/[^A-Za-z]/g,'');
	var str5= str4.split("").sort().join("");
	console.log(str2);
	console.log(str5);
	if(str2===str5){
		alert("It is an anagram");
		return true;
	} else{
		alert("It is not an anagram");
		return false;
	}
	
}
//----------------------------------------------------------------------------------------------------------------------------------
//Task 4

function displayRandomNum(x)  {
	if (x==1) {
       	var rndm1 = Math.floor(Math.random() * 1000);
       	document.getElementById("randomNum1").innerHTML = rndm1;
		var rsult1 = mapNumToObject(rndm1);
        document.getElementById("result1").innerHTML = rsult1;
        return document.getElementById("result1").innerHTML;
	}
   	if (x==2) {
		var rndm2 = Math.floor(Math.random() * 1000);
        document.getElementById("randomNum2").innerHTML = rndm2;
       	var rsult2 = mapNumToObject(rndm2);
        document.getElementById("result2").innerHTML = rsult2;
        return document.getElementById("result2").innerHTML
	}      
}

function mapNumToObject(rndmnum) {
 	var z = rndmnum % 3;
  	var object = "";
	if (z==0) { 
		object = "Cockroach";
	}
    if (z==1) { 
    	object = "Human";
    }
    if (z==2) { 
    	object = "Nuclear Bomb";
    }
   	return object;
}

  function whoSurvives() {
	var objectName1 = document.getElementById("result1").textContent;
    var objectName2 = document.getElementById("result2").textContent;
	var survivedObj = "";
	if (objectName1!="" || objectName2!="") {
		if (objectName2 == objectName1)
      	{
        	survivedObj = "Tie";
      	}

    	if (objectName1=="Cockroach" && objectName2=="Human")
      	{
        	survivedObj = "Human";
      	}

      	if (objectName1=="Cockroach" && objectName2=="Nuclear Bomb")
      	{
        	survivedObj = "Cockroach";
      	}

      	if (objectName1=="Human" && objectName2=="Nuclear Bomb")
      	{
        	survivedObj = "Nuclear Bomb";
      	}

      	if (objectName2=="Cockroach" && objectName1=="Human")
      	{
        	survivedObj = "Human";
      	}

      	if (objectName2=="Cockroach" && objectName1=="Nuclear Bomb")
      	{
        	survivedObj = "Cockroach";
      	}

      	if (objectName2=="Human" && objectName1=="Nuclear Bomb")
      	{
        	survivedObj = "Nuclear Bomb";
      	}

    }
      return survivedObj;
}

function displayWinner(){
     var surviver = whoSurvives();
	if (surviver!="")
        {
        	document.getElementById("winner").innerHTML = surviver;
        	return document.getElementById("winner").innerHTML;
        }

    else {

        document.getElementById("winner").innerHTML = "No surviver yet";
        return document.getElementById("winner").innerHTML;
        }
  }
   
//-----------------------------------------------------------------------------------------------------------------------
//Task 5
function currencyCode(){

var toCurrency = document.getElementById("toCurr");
var toCurrCode = toCurrency.options[toCurrency.selectedIndex].value;

var fromCurrency = document.getElementById("fromCurr");
var fromCurrCode = fromCurrency.options[fromCurrency.selectedIndex].value;

var curCode = fromCurrCode+"_"+toCurrCode;



return curCode;



}

function apiCall(){
	
	var currCode = currencyCode();
    
    
    
	var request = new XMLHttpRequest()
    var url = "https://free.currconv.com/api/v7/convert?			q="+currCode+"&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";
	

	request.open('GET', url , true);

	
	request.onload = function () {
  // Begin accessing JSON data here
  		
 	 var data = JSON.parse(this.response);
    
	 

  	if (request.status >= 200 && request.status < 400) {
    
    	var x = Object.values(data)[0];
        
        
        
        var amount = document.getElementById("amount").value;
      
      	var convertedAmount = parseFloat(amount)*parseFloat(x);
        
        var y =	convertedAmount.toFixed(3)
        
		document.getElementById("demo").innerHTML = y;
    	
     
  } else {
    console.log('error');
    }
}

request.send();

}