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
