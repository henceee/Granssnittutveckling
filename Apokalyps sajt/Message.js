"use strict";

function Message(message, date) {

    this.getText = function () {

        return message;

        
    }

    this.setText = function (_text) {

        message = _text;
    }

    this.getDate = function () {

        return date;
    }

    this.setDate = function (_date) {
        
        _date = date;

    }

    Message.prototype.toString = function () {

        return this.getText() + " (" + this.getDate() + ")"
    }


    Message.prototype.getHTMLText = function () {

        var message = this.getText();

        return message.replace(/[\n\r]/g, "<br />");
    }

    Message.prototype.getDateText = function () {

        var date = this.getDate();

        

        var month = [];

        month[0] = "January";
        month[1] = "Februari";
        month[2] = "Mars";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "Augusti";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "December";

        var m = month[date.getMonth()];

        var thedate =  m +" " + date.getUTCDate()+" " +date.getUTCFullYear();

        return thedate;
    }
}