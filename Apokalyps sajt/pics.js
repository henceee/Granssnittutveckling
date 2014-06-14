"use strict"
var pics = {
	
	 resize: function(){	 
	 
	 var picdivs = document.getElementsByClassName("pic");
	 
	 console.log(picdivs);
	
	 for( var i =0; i < picdivs.length; i +=1){
		 	
			console.log(picdivs[i]);
			
			var a = picdivs[i].getElementsByTagName("a")[0];
			
			console.log(a);
			
			a.style.height="223";
		 
		 }
	//var pics = picdivs.getElementsByTagName("a");
	//console.log(pics);
 }
 }
 
 window.onload = pics.resize;