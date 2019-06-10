$(document).ready(function() {
    $("#survey form").submit(function(event) {
      var nameInput = $("input#name").val();
  
      $(".nameInput").text(nameInput);
  
      $(".suggestion").fadeOut();
      
      $("#relaxSuggestion").fadeIn();
  
      event.preventDefault();
    });
  });