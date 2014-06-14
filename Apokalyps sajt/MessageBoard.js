"use strict";

//MessageBoard ett objekt, innehållande messages arrayen som innehåller alla meddelanden; init som körs när sidan laddas, renderMessages som renderar alla meddelande (tar bort, loopar igenom,
// anropar renderMessage (OBS singular!).

var MessageBoard = {

    messages: [],
    init: function () {
		
		        
      
        var msgstring = document.querySelector("#msg");		
        var write = document.querySelector("#write");
		
		
	
        //Om man tycker man trycker enter blir det som att man klicka på "skriv" (write.onclick)

        msgstring.onkeyup = function (e) {
                        
           
            if (!e.shiftKey && e.which == 13) {
                write.click();
                return false;
            }

        }
              


        
        //Om man klickar på "skriv" knappen (med id write) pushas meddelandet in i messages arrayen.

        write.onclick = function () {

            var input = msgstring.value;                      

            var mess = new Message(input, new Date());
            
            MessageBoard.messages.push(mess);
           
           
            MessageBoard.renderMessages();            

            
        }

        
    },

    renderMessages: function () {

        //Ta bort alla meddelande

        var present = document.querySelector("#present").innerHTML = "";

        //rendera alla med.

        for (var i = 0; i < MessageBoard.messages.length; ++i) {

            MessageBoard.renderMessage(i);

            //kallar på renderMessage som renderar alla meddelanden
        }

    },

    renderMessage: function (MessageID) {
       
        //Lägger in en p-tag med meddelandet.

        var text = document.createElement("p");
                
        text.innerHTML = MessageBoard.messages[MessageID].getHTMLText();

        var present = document.querySelector("#present"); 
		
		var presentclass= document.createElement("div");
		
		presentclass.className="present";
        
        var mezzdate = MessageBoard.messages[MessageID].getDateText();		
       		
		var nameanddate= document.createElement("div");	
		
		nameanddate.className="nameanddate";
		
		var name = document.createElement("p");
		
		var namestring = document.querySelector("#name");
		
		var lnamestring = document.querySelector("#lname");
		
		name.innerHTML = "<b>"+ namestring.value +" "+lnamestring.value + "</b>, " + mezzdate;
		
		nameanddate.appendChild(name);		
        
		presentclass.appendChild(nameanddate);
		
		
		var textmsg = document.createElement("div");
		
		textmsg.className="message";
		
		textmsg.appendChild(text);
		
        presentclass.appendChild(textmsg);   
		
		present.appendChild(presentclass);



        }
               
    

};

window.onload = MessageBoard.init;





