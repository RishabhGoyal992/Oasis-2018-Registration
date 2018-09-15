URL= "http://172.17.42.109:8000/registrations/";

var xhr = new XMLHttpRequest();
xhr.open('GET', URL , true);
xhr.send();
 
xhr.onreadystatechange = processRequest;
 
function processRequest(e) {
 
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
        alert(response.colleges[0]);
        alert(response.events[0]);
}
}

window.onload = function(f){
var xhr = new XMLHttpRequest();
  xhr.open("POST", URL, true);

  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onreadystatechange = function() {
      if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        // console.log(this.responseText);
      }
  }
  myObj = { "events":"sadf", "email":"rishabbarora1780@gmail.com", "name":"rishabh", "gender":"male", "city":"noida", "phone":9911074100, "head_of_society":true, "year_of_study":2 };
x=JSON.stringify({ events:["Best Event Ever","fghjk"], email:"rishabbarora1780@gmail.com", name:"rishabh", college:"BITS" , gender:"male", city:"noida", phone:9911074100, head_of_society:true, year_of_study:2 });
// x=JSON.stringify(myObj);  
xhr.send(x);
}

//new


$(document).ready(function(){
   $("#back-btn").css('display', "none");
   $('#select_info').text('(For Multiple Selection of Events Press Ctrl+)');
    $('#select_info_mobile').text('(For Multiple Selection of Events Press +)');
 })

function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
      'txtEmail'.textContent = 'Please provide a valid email address';
      alert('Please provide a valid email address');
      email.focus;
    return false;
 }
}
function phonenumber()
{
  var phoneno = /^\d{10}$/;
  var mobn = document.getElementById('mob-number');
  if(!phoneno.test(mobn.value))
  {
    
     alert("Provide a valid Mobile Number");
     return false;
      
  }
  else
  {
    return true;
  }
  }

  function myFunction(){
    checkEmail();
    phonenumber();
}


$(document).ready(function() {
  $('#event-select').select2({
    'placeholder': 'Search event name',
    width: "resolve",
  });
   $('#college').select2({
   
    width: "resolve",
  });
});



console.clear();
