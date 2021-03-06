"use strict";

class InputValidator{
    constructor(element, maxLength, minLength){
        var self = this;
        this.element = element;
        this.maxLength = maxLength;
        this.minLength = minLength || 0;
    }
    validate(){}
    
    validateRequired(){
        if (this.value === null || this.value === "") {
            this.errorEvent(element);
            return false;
        }    
        return true;
    }
    
    validateEqual(valueb){
       if (this.value !== valueb.value) {
            this.errorEvent(this.elementa);
            this.errorEvent(valueb);
        } 
    }
        
    validateFormat(regex){
        if (this.element.value.match(regex)) {
            this.errorEvent(this.element);
            return false;
        }
    }
        
    validateMaxLength(){
        console.log(this.element.value);
        if(this.element.value.length > this.maxLength){
            this.errorEvent();
            return false;
        }
     
    }
        
    validateMinLength(){
        if (this.element.value.length < this.maxlength) {
            this.errorEvent(this.element);
            return false;
        }
    }
        
    errorEvent(){
        console.log("error");
    }
    
}

class TextValidator extends InputValidator{
    constructor(element, maxLength, minLength){
        super(element, maxLength, minLength);
    }
    validate(){
        super.validateRequired();
        super.validateMaxLength();   
    }
}

class EmailValidator extends InputValidator{
    constructor(element, maxLength, minLength){
        super(element, maxLength, minLength);
    }
    validate(){
        super.validateRequired();
        super.validateMaxLength();
        super.validateFormat(config.emailRegex);
    }
}

var config ={
    maxLength : 45,
    minLength : 0,
    passwordMinLength : 10,
    zipcodeMaxLength : 11,
    phoneNumberMaxLength : 11,
    ssnRegex : "^[12]{1}[90]{1}[0-9]{6}-[0-9]{4}$",
    emailRegex : "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
}

