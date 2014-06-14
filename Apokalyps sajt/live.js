"use strict"
var smallpics = {
	
	 margin: function(){	 
	 
		var smallpics = document.getElementById("smallpics");
		console.log(smallpics);
		
		var pics = smallpics.getElementsByTagName("img");
		
		for(var i =0; i < pics.length;  i +=1){
			
			console.log(pics[i]);
			
			pics[i].style.marginLeft="50px";
			pics[i].style.marginTop="50px";
			pics[i].style.float="left";
			
			

		}
		
		
	}
	//var pics = picdivs.getElementsByTagName("a");
	//console.log(pics);
 
 }
 
 window.onload = smallpics.margin;