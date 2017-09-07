$(function() {
//	$(".img_yellow1").animate({"opacity":"1"},500,function(){
//		$(".img_yellow2").animate({"opacity":"1"},500,function(){
//		$(".img_yellow3").animate({"opacity":"1"},500,function(){
//		$(".img_yellow4").animate({"opacity":"1"},500,function(){
//		
//	})
//	})
//	})
//	})
$(".img_yellow1").show("bounce",1000);
$(".img_yellow2").show("bounce",1000);
$(".img_yellow3").show("bounce",1000);
$(".img_yellow4").show("bounce",1000);
	$(".carousel").carousel({
		interval: 30000
	});
	$(".d2").animate({
		"opacity": 1,
		"top": "35%"
	}, 500);
	$(".carousel").on("slide.bs.carousel", function() {
			//将文字隐藏，位置下移
			$(".d2").css({
				"opacity": 0,
				"top": "50%"
			});
		})
		//切换完成所触发的事件
	$(".carousel").on("slid.bs.carousel", function() {
		//执行文字显示动画
		$(".d2").animate({
			"opacity": 1,
			"top": "35%"
		}, 500);
	});
	$("#bt").click(function() {
		$("#bt1").toggleClass("s11");
		$("#bt2").toggleClass("s2");
		$("#bt3").toggleClass("s3");
	})
	
})

//按钮X号