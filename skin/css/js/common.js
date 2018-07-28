//头部二维码
$(".header .menu li").hover(function(){
  $(this).find(".drop").stop(true,false).slideDown('fast');
},function(){
	   $(this).find(".drop").hide();
   });

//导航选中效果
try{
	var str = $(".curmb").text(); 
	var str1 = str.split(">")[1];
	if($.trim(str1)!=''){
	$(".mainnav li").each(function(){
		if( $.trim($(this).find("a b").text()).search($.trim(str1))>-1){
			$(this).addClass("on");
		}
	})
	}
}catch(e){}

//手机版头部导航
$(".navtoggle").click(function(){
	$(".mainnav_mobile").slideToggle("fast");
	$(this).toggleClass("navclose");
})


//外连跳转提示
if (typeof String.prototype.startsWith != 'function'){ //判断当前字符串是否以str开始 先判断是否存在function是避免和js原生方法冲突，自定义方法的效率不如原生的高
	String.prototype.startsWith = function(str) {
		return this.slice(0, str.length) == str;
	};
}　　　　
if (typeof String.prototype.endsWith != 'function') {  //判断当前字符串是否以str结束
	String.prototype.endsWith = function(str) {
		return this.slice(-str.length) == str;
	};
}

$(document).ready(function(){  
	//云搜索统计
	var str = Math.round(Math.random()*10000); // 定义变量
	var oText = document.getElementById('token');
	oText.value=str; // 给文本框赋值并显示
	
	

//文件状态
$(".state").each(function(i) {
	if($.trim($(this).find("font").text()) == ""){
		$(this).remove();	
	}
});