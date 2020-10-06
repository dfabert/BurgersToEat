$(function() {
    $('.devour').on('click', function(event) {
        console.log('You ate it!');
        var id = $(this).data('id');

        var devouredBurgerState = {
            devoured:  1
        }

        $.ajax('/api/burgers/' + id, {
            type:  "PUT",
            data: devouredBurgerState
        }).then(
            function() {
                location.reload();
            }
        );
    });


    $('.create-form').on('submit', function(event) {
        event.preventDefault();






    })







})