$(function() {
    $('button').click(function(){
        $(this).text("Generating Dog photo");

        $.get('https://dog.ceo/api/breeds/image/random', function(response){
            $('button').text("Generate a new Dog photo");
            $('body').append('<img src="'+ response.message +'" />');
        });
    });
});