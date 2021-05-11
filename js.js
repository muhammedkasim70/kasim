$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});
// validation
const validated ={
    name:false,
    email:false,
    phone:false,
    message:false
}
 
 function checkMessage(){
     var messageValue= document.getElementById("message").value;
     if(messageValue.length<=0){
         document.getElementById("messege-alert").innerHTML="Enter Your Message"
         validated.message=false;
     }else{
        document.getElementById("messege-alert").innerHTML=" ";
        validated.message =true
     }
 }
 function nameChek(){
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("fullname").value;
    var expression = /^[a-zA-Z\s]*$/;
   
    if(name == ""){
        validated.name= false;
        nameAlert.innerHTML="*Required"
        
    }else if(name.match(expression)){
        nameAlert.innerHTML="";
        validated.name= true;
    }else{
        nameAlert.innerHTML =" Enter Charecters only"
        validated.name=false
    }

    }
    // email check
    function chekEmail(){
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var emailCheck = document.getElementById('email').value;
        var emailAlert = document.getElementById('email-alert');
        if(emailCheck == ""){
            validated.email= false;
            emailAlert.innerHTML ="*Required"
        }else if(emailCheck.match(pattern)){
            emailAlert.innerHTML="";
            validated.email= true;
        }else{
            emailAlert.innerHTML ="Invalid E-mail"
            validated.email=false
        }
    }
    
    function numberCheck(){
        var phnPattern = /^\d{10}$/;
        var phoneNumber = document.getElementById('number').value;
        var phoneAlert = document.getElementById('phone-alert');
        if(phoneNumber == ""){
            validated.phone= false;
            phoneAlert.innerHTML ="*Required"
        }else if(phoneNumber.match(phnPattern)){
            phoneAlert.innerHTML="";
            validated.phone= true;
        }else{
            phoneAlert.innerHTML ="Please Enter 10 Digit Mobile Number"
            validated.phone=false
            
        }
    }
   
    function myValidation(){
      
        if(validated.name && validated.phone && validated.email && validated.message){
            return true;
        }else if(validated.message==false){
          document.getElementById("messege-alert").innerHTML="Please Enter Your Message"
           return false
            
        }else{
            alert("invalid Form Details");
            return false
        }
    }
