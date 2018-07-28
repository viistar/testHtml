$(".home_blankDiv").height(Math.max($(window).height()-$(".header").height()- $(".footer").outerHeight() -74-215, 235));
/*var ssTop=$(window).height()-$(".footer").outerHeight() -74-215;
$(".search").css("top",ssTop);*/

//要闻动态
jQuery(".ywdt_tpxw").slide( {titCell:".hd ul", mainCell:".bd ul",effect:"fold",delayTime:800,interTime:4000,autoPlay:true,autoPage:true})
			   .find(".hd ul li").empty();
jQuery(".ywdt_news").slide({delayTime:0,triggerTime:0});
jQuery(".ywdt_ztzl").slide({titCell:".hd ul", mainCell:".bd ul",effect:"fold",delayTime:800,interTime:4000,autoPlay:true,autoPage:true})
					   .find(".hd ul li").each(function() {
							$(this).empty().append("<span class='item-" + $(this).index() + "'></span>");
						});

//政务公开
jQuery(".zwgk_tpxw").slide({titCell:".hd ul", mainCell:".bd ul",effect:"fold",delayTime:800,interTime:4000,autoPlay:true,autoPage:true})
					   .find(".hd ul li").each(function() {
							$(this).empty().append("<span class='item-" + $(this).index() + "'></span>");
						});
jQuery(".zwgk_ldzc").slide({titCell:".hd li", mainCell:".bd",delayTime:0,triggerTime:0});
$(".zwgk_ldzc .bd .item").each(function() {
    $(this).find("li:even").addClass("liEven")
});
$(".zwkg_xxgklist li").addClass(function() { return 'li' + $(this).index();}).find("a").append("<i></i>");

//办事服务
$(".bsfw_ggfw .bd li").addClass(function() { return 'li' + $(this).index();}).find("a").append("<i></i>");
$(".bsfw_wsbs ul li").addClass(function() { return 'li' + $(this).index();}).find("a").wrapInner("<span></span>").prepend("<i></i>");

//互动交流
$(".hdjl_iconlink1 li").addClass(function() { return 'li' + $(this).index();}).find("a").wrapInner("<span></span>").prepend("<i></i>");
$(".hdjl_zsk .bd li").addClass(function() { return 'li' + $(this).index();}).find("a").wrapInner("<span></span>").prepend("<i></i>");
$(".hdjl_myzj").slide({});
$(".hdjl_xfxd").slide({titCell:".hd ul li.hov",delayTime:0,triggerTime:0});
$("#hdjl_wsdc_list").load("/bysiteapps/webpage/gdltax/dcwj/dcwj_sy_list.jsp .common_newslist");
$("#hdjl_myzj_list").load("/bysiteapps/webpage/gdltax/collect/cngd_myzj_list.jsp .common_newslist");


//走进白云
jQuery(".zjby_byfj").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop"});

//招商引资
jQuery(".zsyz_tpxw").slide( {titCell:".hd ul", mainCell:".bd ul",effect:"fold",delayTime:800,interTime:4000,autoPlay:true,autoPage:true})
			   .find(".hd ul li").empty();
jQuery(".zsyz_fzbj").slide({titCell:".hd ul li", mainCell:".bd ul",effect:"fold",delayTime:800,interTime:4000,autoPlay:true,autoPage:false});


//页面动画
//$("#mainBd").hide();
var isClick = "false";
function closed(){
	$(".logo").animate({left:'3%',top:50},1000);
	$(".search").animate({right:"24%",top:257},1000);
	
	/*$(".logo").animate({left:'0',top:0},1000);
	$(".search").animate({right:"24%",top:ssTop},1000);*/
	$("#mainBd").animate({height:0},1000);
	$(".mainnavbg").animate({opacity:0.4},1000);
	$(".switch").removeClass("switch2");
	$(".home_mainHd li.navslide").removeClass("on");
}
function openin(){
	$(".logo").animate({left:'7%',top:50},1000);
	$(".search").animate({right:"7%",top:71},1000);
	$("#mainBd").animate({height:591},1000);
	$(".mainnavbg").animate({opacity:0.7},1000);
	$(".switch").addClass("switch2");
	isClick = "true";
}
$(".switch").click(function(){
	if($("#mainBd").height() ==0 ){
		openin();
		}
	else{
		closed();
	}
	$(".home_blankDiv").slideToggle(1000);
});
//$(".home_mainHd li.nav0").remove();	
$(".home_mainHd li.navslide a").click(function(e){
		e.preventDefault();
})
$(".home_mainHd .navslide").click(function(){
	//var str = $(this).index();
	var str=$(this).attr("data-index");

	$(this).addClass("on").siblings().removeClass("on");
	if($("#mainBd").height() ==0 ){
		openin();
		$(".home_blankDiv").slideToggle(1000);
	}


	var sumUL=$(".home_mainHd li.navslide").length;
	for(var e=0;e<sumUL;e++){
			
			if(e==str){
				$("#tab_con"+e).fadeIn(500);
				}
				else{$("#tab_con"+e).hide();
				}
		}
	clearTimeout(t);
})


//导航链接传参定位
var navname = getQueryString("link");
 if(navname!=null){
   switch(navname){
	  case "ywdt":
	  $(".nav1").click();
	  break;
	  case "zwgk":
	  $(".nav2").click();
	  break;
	  case "bsfw":
	  $(".nav3").click();
	  break;
	  case "hdjl":
	  $(".nav4").click();
	  break;
	  case "zjzc":
	  $(".nav5").click();
	  break;
   }
 }
 else{
	 $(".nav1").click();
//	var t=setTimeout("$('.nav1').click();",1);
	}

function getQueryString(name) { 
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
   var r = window.location.search.substr(1).match(reg); 
   if (r != null) return decodeURI(r[2]); return null; 
}


//政声传递
$.ajax({
		url : "http://www.gz.gov.cn/sofpro/gzyyqt/zscd/zscd_json.jsp",
		dataType : "json",
		success : function(data) {
			//alert(data);
			$.each(data,function(i,json){
				var title = json.gztitle;
				title = title.length>31?title.substring(0,30)+"...":title;
				if(i<3){
				$("#zscd2").append("<li><a h"+"ref='"+json.gzurl+"' target='_blank' title='"+json.gztitle+"'>"+title+"</a><span>"+json.gzpubdate+"</span></li>")
				}
			})
		}
});

$.ajax({
	url : 'http'+'://app.gd.gov.cn/xxts/pushinfo_json.php?s=12&d=1',
	dataType : "jsonp",
	jsonp : "pushInfoJsonpCallBack",
	jsonpCallback:"pushInfoJsonpCallBack",
	success : function(data) {
		$.each(data,function(i,json){
			var title = json.title;
			title = title.length>31?title.substring(0,30)+"...":title;
			if(i<6){
			$("#zscd").append("<li><a h"+"ref='"+json.link+"' target='_blank' title='"+json.title+"'>"+title+"</a><span>"+json.pubDate+"</span></li>")
			}
		})
	}
});


//背景
//jQuery(function($){
	$("body").bgStretcher({
		images: ["/skin/images/index/bg1.jpg", "/skin/images/index/bg2.jpg", "/skin/images/index/bg3.jpg", "/skin/images/index/bg4.jpg", "/skin/images/index/bg5.jpg", "/skin/images/index/bg6.jpg", "/skin/images/index/bg7.jpg"],
		slideShow: true,
		transitionEffect: "fade",
		imageWidth: 1440,
		imageHeight: 768,
		nextSlideDelay: 3000,
		slideShowSpeed: 1000
	});
//});

//首页飘窗
$(function(){
	$(".close_btn").click(function () {
		$(this).parent().hide();
	});
})
var ad1 = new AdMove("wzsse", true);
ad1.Run();


/*春节弹框*/
	$(".chunjie_tk").animate({height:'426px',padding:'0px'},1000);
	$(".mydiv_bg").fadeIn(1000);
	isClick="true"
	var tkcolse = "false";
	function colsetk(){
		$(".mydiv_bg").fadeOut(1000);
		$(".chunjie_tk").animate({height:'0px',padding:'0px'},1000);
		isClick = "false";
		setTimeout(zhankai,1500);
		}
 	$(".chunjie_tk .tk_colse").click(function(){
		colsetk();
		var tkcolse = "true";
		
		})
	if(tkcolse=="false"){
		setTimeout(function(){
			colsetk();
			},10000);
		setTimeout(zhankai,1500);
		
		}
	/*春节弹框结束*/