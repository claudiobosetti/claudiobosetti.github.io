$("#Menu a").on("click", function() {
var position = $(this)
.parent().position();
var width = $(this)
.parent().width();
$("#Menu .fluid").css({ opacity: 1, left: +position.left, width: width });
});
    