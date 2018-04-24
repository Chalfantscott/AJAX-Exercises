$(function() {
    $.get('https://dog.ceo/api/breeds/list', function(data){
        data.message.forEach(function(currentBreed){
            $('select').append('<option val="' + currentBreed + '">"' + currentBreed + '"</option>');
        });
    });

    $('button').click(function(){
        $(this).text("Generating Dog photo");

        $.get('https://dog.ceo/api/breeds/image/random', function(response){
            $('button').text("Generate a new Dog photo");
            $('body').append('<img src="'+ response.message +'" />');
        });
    });
});