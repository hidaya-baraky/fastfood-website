$(document).ready(function() {
    const $modal = $('#myModal');
    const $modalImg = $('#modalImg');
    const $captionText = $('#caption');
    const $images = $('.gallery img');
    const $close = $('.close');

    // Handle image click to show the modal
    $images.on('click', function() {
        $modal.show();
        $modalImg.attr('src', $(this).attr('src'));
        $captionText.text($(this).attr('alt'));
    });

    // Handle close button click to hide the modal
    $close.on('click', function() {
        $modal.hide();
    });
});
