

console.log("JavaScript is amazing!");

var type = $('#type');

type.data('text', type.text());
type.html('');
type.removeClass('zeroOpacity');

// typer
function typer(text, n, speed) {

    if (n < (text.length)) {
        type.html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typer(text, n, speed)
        }, speed);
    }
}

var text = type.data('text');
typer(text, 0, 50);
