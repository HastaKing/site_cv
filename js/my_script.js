$( document ).ready(function() {
    var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	$(".img_layer").each(function(item){
		var width = Math.floor((Math.random() * 200) + 100);
		var height = Math.floor((Math.random() * 200) + 100);
		var v1 = Math.floor((Math.random() * 200) + 1);
		var v2 = Math.floor((Math.random() * 200) + 1);
		var v3 = Math.floor((Math.random() * 200) + 1);
		var v4 = Math.floor((Math.random() * 200) + 1);
		$(this).css({
			"width": width, 
			"height": height,
			"margin-left": v1,
			"margin-right": v2,
			"margin-top": v3,
			"margin-bottom": v4   
		});
	});
});