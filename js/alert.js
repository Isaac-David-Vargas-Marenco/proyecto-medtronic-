var form_tag = document.getElementById("form_bilberry");

form_tag.addEventListener("submit", function(event){ 
 event.preventDefault();

 var name = document.getElementById("name_bilberry").value;
 var number = document.getElementById("number_bliberry").value;
 var email = document.getElementById("email_bilberry").value;
 var select = document.getElementById("select_bilberry").value;
 
 var message = document.getElementById("textarea_bilberry").value;



alert("your name:"+name+"your number"+number+"your email"+email+"your select"+select+"your menssage"+message);
})