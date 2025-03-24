$(document).ready(function(){
  $("#button-newsletter").click(function(e){
    e.preventDefault();
    let email = $("#input-newsletter").val().trim();
    let messageDiv = $("#newsletter-message");
    if(email === "") {
      messageDiv.html('<p>Veuillez entrer une adresse e-mail.</p>');
      return;
    }
    $.ajax({
      url: "newsletter.php",
      type: "POST",
      data: { email: email },
      success: function(response) {
        messageDiv.html('<p>' + response + '</p>');
        $("#input-newsletter").val("");
      },
      error: function() {
        messageDiv.html('<p>Une erreur est survenue.</p>');
      }
    });
  });
});