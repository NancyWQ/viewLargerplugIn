// JavaScript Document
/*由于大图绑定在href属性中，故一般而言，需使用a标签的href指向大图。仅支持png,gif,jpg,bmp四种格式的图片。用法是：目标.preview();
例如：<a href="xx.jpg">图片</a>
$("a").preview(想要的大图尺寸);就可以了
*/
(function($){
	$.fn.preview = function(pictureWidth){
		var xOffset = 10;
		var yOffset = 20;
		var w = $(window).width();
		$(this).each(function(){
			$(this).hover(function(e){
				if(/.png$|.gif$|.jpg$|.bmp$/.test($(this).attr("href"))){
					$("body").append("<div id='preview'><div><img src='"+$(this).attr('href')+"' /></div></div>");
				}else{
					$("body").append("<div id='preview'><div></div></div>");
				}
				$("#preview").css({
					position:"absolute",
					zIndex:1000
				});
				$("#preview>div>img ").css({
					width:pictureWidth+"px",
					height:pictureWidth+"px"
				});
				var h=$("#preview>div>img").height();
				console.log(h);
				if(e.pageY<h){
					$("#preview").css({
						top:(e.pageY - yOffset) + "px",
					});
				}else{
					$("#preview").css({"top": (e.pageY-h)+"px"}).fadeIn("fast");
				}
				if(e.pageX < w/2){
					$("#preview").css({
						left: e.pageX + xOffset + "px",
						right: "auto",
					}).fadeIn("fast");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left", "auto").fadeIn("fast");
				}
			},function(){
				$("#preview").remove();
			}).mousemove(function(e){
				//$("#preview").css("top",(e.pageY - xOffset) + "px")
				var h=$("#preview>div>img").height();
				if(e.pageY<h){
					$("#preview").css({
						top:(e.pageY - yOffset) + "px",
					});
				}else{
					$("#preview").css({"top": (e.pageY-h)+"px"}).fadeIn("fast");
				}
				if(e.pageX < w/2){
					$("#preview").css("left",(e.pageX + yOffset) + "px").css("right","auto");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left","auto");
				}
			});						  
		});
	};
})(jQuery);