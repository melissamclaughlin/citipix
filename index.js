
$(document).ready(function() {
  $('#submit-btn').click(function(){ 
  event.preventDefault();  
    var city = $('#city-type').val();
    $('#city-input').val(''); 
       console.log(city);
    if (city == "New York" || city =="NYC" || city == "New York City") { 
      $('body').attr('class','nyc');
    } else if (city == "San Francisco" || city == "SF" || city =="Bay Area") {      
       $('body').attr('class','sf');
    } else if (city == "Los Angeles" || city =="LA" || city == "LAX") {      
       $('body').attr('class','la');
    } else if (city == "Austin" || city =="ATX") {      
       $('body').attr('class','austin');
    } else if (city == "Sydney" || city =="SYD") {      
       $('body').attr('class','sydney');
    }
  });
});
