
jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
  }, "No space please and don't leave it empty");
  jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
  }, "Please enter valid email address!");
  $.validator.addMethod("numeric", function(value, element) {
    return this.optional(element) || value == value.match(/^[0-9]+$/);
  }, "Numbers Only");
  $.validator.addMethod( "alphanumeric", function( value, element ) {
  return this.optional( element ) || value == value.match(/^[a-zA-Z\s]+$/);
  }, "Letters only" );
  
$(document).ready(function(){
$("#form").validate({
    rules:{
        name:{
            required:true,
            minlength:4,
            alphanumeric: true
        },
       
        email: {
            required: true,
            customEmail: true
        },
        number : {
            required: true,
            minlength:10,
            maxlength:10,
            numeric:true,
            noSpace: true
        },
    },
    messages:{
        name: {
            required: 'Please Enter Your Name'
        },
        
        email: {
            required: 'Please Enter Your mail id',
            alphanumeric:'Please Enter only charractors'
        },
      
        email: {
            required: 'Please Enter  Your Phone Number',
            maxlength:'Enter only 10 numbers',
            minlength:'Enter minimum 10 numbers',
        },
       
        
    },
    
    
}) 
     
})
