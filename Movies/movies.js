$('#movieAdd').on('submit', function(evt) {
    evt.preventDefault();
    if ($('#name').val() && $('#rating').val()) {
    $('ul').append(`<li>${$('#name').val()} - ${$('#rating').val()}<button class="delete">X</button></li>`);
    $('#movieAdd')[0].reset();
    }
});

$('ul').on('click', 'button', function(evt){
    $(evt.target).closest("li").remove();
    console.log("ding");
});

