//creating a function that will allow us to validate the email,name prompted vy the user
function validateForm(){
    var name= document.getElementById('name').value;
    if (name==" "){
        document.querySelector('.status').innerHTML= "Name cannot be empty";
        return false;
    }

var email= document.getElementById('email').value;
if(email==""){
    document.querySelector('.status').innerHTML ="emaii cannot be empty";
    return false;
}else {
    var re=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.querySelector('.status').innerHTML="Email format is invalid";
        return false;
    }
}
var subject= document.getElementById("subject").value;
if(subject==""){
    document.querySelector('.status').innerHTML="Subject cannot be left empty";
    return false;
}
var message= document.getElementById('message').value;
if(message==" "){
    document.querySelector('.status').innerHTML ="Message cannot be empty";
    return false;

}
    document.querySelector('.status').innerHTML ='Sending...';
}

document.addEventListener("DOMContentLoaded", function(event) {

    var div = document.getElementById('mode');
    div.addEventListener('click', function(e){
    
    var li = document.getElementById('card-mode');
    var bgdark = document.getElementById('dark-background');
    
    if (li.className.split(' ')[1] == "card-dark") {
    
    li.classList.remove('card-dark');
    bgdark.classList.remove('bg-dark');
    
    
    }else{
    
    
    
    
    li.classList.add('card-dark');
    bgdark.classList.add('bg-dark');
    
    }
    
    
    });
    
    
    
    });