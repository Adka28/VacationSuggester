$(document).ready(function() {
    $("#survey form").submit(function(event) {
      var name1Input = $("input#name1").val();
  
      $(".name1").text(name1Input);
  
      $("#suggestion").toggle();
  
      event.preventDefault();
    });
  });