
$("ul").on("click", "li" , function() {

	// 
	// $(this).css("color", "gray");
	// $(this).css("text-decoration" , "line-through");
     // console.log($(this).css("color"));
     // if($(this).css("color") === "rgb(128, 128, 128"){
     // 	$(this).css({
     // 		color: "black",
     // 		textDecoration: "none"
     // 	});
     // 	// console.log("it is currently gray");
     // } 
     // else {
     // 	$(this).css({
     // 	color: "gray",
     // 	textDecoration: "line-through"
     // 	});
     // }

     $(this).toggleClass("completed");
     
});

$("ul").on("click", "span" , function(event){
	// alert("clicked on a span");
	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	event.stopPropagation();
});

// $("ul").click(function(){
// 	alert("clicked on a ul");
// });

// $("#container").click(function(){
// 	alert("clicked on a container div");
// });

// $("body").click(function(){
// 	alert("clicked on a body");
// });
$("input[type = 'text'").keypress(function(){
	if (event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		// console.log("you hit key PRess !");
	}
	
});
$(".fa-plus").click(function(){
	$("input[type = 'text'").fadeToggle();
});
