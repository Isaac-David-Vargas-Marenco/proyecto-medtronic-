/*var form_tag = document.getElementById("form_medtronic");

form_tag.addEventListener("submit", function(event){ 
 event.preventDefault();

 var name_med = document.getElementById("name_medtronic").value;
 var number = document.getElementById("telephone_medtronic").value;
 var email = document.getElementById("email_medtronic").value;
 var date = document.getElementById("date_medtronic").value;
 var message = document.getElementById("texterea_medtronic").value;



//alert("your name : "+name+" your number ; "+number+" your email : "+email+" your date : "+date+" your menssage : "+message);
})*/

var submit_button = document.getElementById("submit-button")

submit_button.onclick = function(event){
  event.preventDefault();
  var name_med = document.getElementById("name_medtronic").value;
  var number_med = document.getElementById("telephone_medtronic").value;
  var email_med = document.getElementById("email_medtronic").value;
  var date_med = document.getElementById("date_medtronic").value;
  var text_med = document.getElementById("texterea_medtronic").value;


Swal.fire({
    title: '<strong> Your information is</strong>',
    icon: 'information',
    html:
      '<h5> Inserted name value is : '+name_med+  '</h5> <h5> Inserted telephone value is : '+ number_med+ '</h5> <h5> Inserted email value is : '+email_med+'</h5> <h5> Inserted date value is : '+date_med+' <h5> inserted message is : '+text_med +'</h5>',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}//