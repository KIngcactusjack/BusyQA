$(document).ready(function () {
    $('#colors').change(function () {
        var colorPicked = this.value.toLowerCase();
        var colorPickedClass = 'bg-' + colorPicked;
        $('.circles').append('<div class="circle bg-' + colorPicked + '"></div>')

        $('.' + colorPickedClass).css('background-color', colorPicked);

        $('.circles').on('click', '.' + colorPickedClass, function () {
            $('body').css('background-color', colorPicked);
        });

        $("#colors option[value='" + this.value + "']").remove();

    });
});