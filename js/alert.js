var form_tag = document.getElementById("form_medtronic");

form_tag.addEventListener("submit", function(event){ 
 event.preventDefault();

 var name = document.getElementById("name_medtronic").value;
 var number = document.getElementById("telephone_medtronic").value;
 var email = document.getElementById("email_medtronic").value;
 var date = document.getElementById("date_medtronic").value;
 var message = document.getElementById("texterea_medtronic").value;



alert("your name : "+name+" your number ; "+number+" your email : "+email+" your date : "+date+" your menssage : "+message);
})