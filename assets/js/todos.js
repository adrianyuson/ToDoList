$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(200, function(event) {
		$(this).remove();
	});
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").click(function() {
	$("input[type='text']").fadeToggle();
});
