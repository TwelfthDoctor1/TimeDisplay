// JavaScript Document
setInterval(function(){
var myDate = new Date();
	var hrs = myDate.getHours();
	var Name = 'TwelfthDoctor1'
	var greet;
	var d = new Date();
	var n = d.toLocaleTimeString();
	
	function checkTime(n) {
  			if (n < 10) {n = "0" + n};  // add zero in front of numbers < 10
  			return n;
	}
	

if (hrs < 5)
	greet = 'Good Night';
else if (hrs >= 5 && hrs <= 11)
	greet = 'Good Morning'
else if (hrs >= 12 && hrs <= 16)
	greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 20)
	greet = 'Good Evening';
else if (hrs >= 21 && hrs <= 24)
	greet = 'Good Night';

console.log("+----------TimeDisplay Console Edition----------+");
console.log("                                                 ");
console.log('           '+ greet +', '+Name+'           ');
console.log("                                                 ");
console.log("                  The time is:                    ");
console.log("                  "+n+"                    ");
console.log("                                                 ");
console.log("       To Exit This Script, Press Ctrl + C.      ");
console.log("                                                 ");
console.log("+--------------Version 1.0 Testing--------------+");
setTimeout(function(){console.clear()}, 900)
}, 1000)