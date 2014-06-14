"use strict"
var media = {
	
	 find: function(){	 
	 	 
	 var medialinklist = document.getElementById("media");
	 
	 var medialink = medialinklist.getElementsByTagName("a")[0];
	   
	 console.log(medialink);
	

	 medialink.onclick= function(){
		
		return false;
	}
	

 }
 }
 
 window.onload = media.find;