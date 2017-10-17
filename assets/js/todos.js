$("li").click(function() {
    $(this).toggleClass("completed");
});

$("span").click(function(event) {
    $(this).parent().remove();
    event.stopPropagation();
});