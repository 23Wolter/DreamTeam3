$(document).ready(function() {
    $('body').click(function() {
        rotate = false;
    });

    $('button').each(function(index) {
        $(this).click(panTo(locations[index].coords));
    });

    $('#earth_form').submit(function(event) {

        $('#nextpage').val(page_count);
        page_count++;
        localStorage.setItem('page_count', JSON.stringify(page_count));

        $(this).unbind('submit').submit(); // continue the submit unbind preventDefault
    });
});

function startStopRotation() {
    // Start a simple rotation animation
    var before = null;
    requestAnimationFrame(function animate(now) {
        if (rotate) {
            var c = earth.getPosition();
            var elapsed = before ? now - before : 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.2 * (elapsed / 30)]);
            requestAnimationFrame(animate);
        } else {
            return null;
        }
    });
}

function panTo(coords) {
    return function() {
        earth.panTo(coords);
    }
}