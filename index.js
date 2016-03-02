var cities = ['NYC', 'LA', 'SF', 'ATX', 'SYD'];
var userSelect;

 for (var i = 0; i < cities.length; i++ ) {
  console.log( cities[i] );
    $('#city-options').append('<option val="' + cities[i]+ '"> '+cities[i]+' </option>')
 }

     $('form').on('change', '#options', function(){
      console.log();
        userSelect = $('#city-options').find("options:selected").val();
        console.log( userSelect );
       if (userSelect == " NYC " ){ // How do I do other options: ny, New york, etc?
            $('body').addClass('nyc');
        } else if (userSelect == "SF") {      
           $('body').attr('class','sf');
        } else if (userSelect == "LA") {      
           $('body').attr('class','la');
        } else if (userSelect == "AUS") {      
           $('body').attr('class','austin');
        } else if (userSelect == "SYD") {      
           $('body').attr('class','sydney');
       }
     });


// $('#userSelect-options').append('<option val="' +cities[i]+ '"> '+cities[i]+' </option>')
