define(function(){
	//关闭按钮X得操作
$(function(){
	window.setTimeout(function(){
	$("#safe_warm").slideDown(300);
},500);
	$("#safe_warm .icon_x").click(function(){
		$(this).parents("#safe_warm").slideUp(100)
	})
})
//鼠标划入选择省份
$(function(){
	$(".txt_1").mouseenter(function(){
	$(this).children(".province").css("display","block");
	//$(this).css("background","white")
})
	$(".txt_1").mouseleave(function(){
		$(this).children(".province").css("display","none")
		//$(this).css("background",$(this).parent.css('backgroundColor'));
		//选项卡中换一下类名
	})
	$(".province a").click(function(){
		$(".one").html( $(this).html()) ;
	})
})
//鼠标划入我的1药网
$(function(){
	$(".dd").mouseover(function(){
		$(this).children("ul").css("display","block")
	})
	$(".dd").mouseout(function(){
		$(this).children("ul").css("display","none");
	})
})
//jsonp
$(function(){
	
	$("#search").keyup(function(){
		if($(this).val() != ""){
			$(".jsp_con").html("");
		$str = $(this).val();
		$sc = $("<script></script>");
		$sc.attr("src","https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+ $str +"&cb=$.fn.fun");
		$("head").append($sc)
		//console.log($str);
		$(".jsp_con").css("display","block");
		}
		
	});
	$("#search").mousedown(function(){
		if($(this).val() != ""){
			$(".jsp_con").html("");
		$str = $(this).val();
		$sc = $("<script></script>");
		$sc.attr("src","https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+ $str +"&cb=$.fn.fun");
		$("head").append($sc)
		//console.log($str);
		$(".jsp_con").css("display","block");
		}
		
	});
	$.fn.fun = function(data){
		//console.log(data);
		$arr = data.s;
		//console.log($arr);
		$arr.forEach(function(value){
			$li = $("<li></li>");
			$li.html(value);
			$(".jsp_con").append($li);
			$(".jsp_con > li").click(function(){
				//console.log($(this).html());
				$("#search").val($(this).text());
				$(".jsp_con").css("display","none");
			})
		})
	}
//	$(document).mouseup(function(){
//		console.log($(this));
//		$(".jsp_con").css("display","none");
//	})
})
})

