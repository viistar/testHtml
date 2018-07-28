$(function(){
	
	var sideshow = ["政务要闻","领导之窗","政策法规"],
		str = $(".curmb").text(),
		str1 = str.split(">");
	
	if(str1.length > 0){
		
		for (var i=0;i<str1.length;i++){
			for (var j=0;j<sideshow.length;j++){
				if($.trim(str1[i]).indexOf(sideshow[j])>-1){
					$(".sideBar").show();
				}
			}
		}
	}

	

	
	
	$(".sideMenu .a1").append("<i></i>");
	$(".sideMenu a").each(function(){
		if($.trim($(this).attr('id'))== "menuId_" + codeName){
			$(this).addClass('aon')
			}
		//外链新窗口打开
		if($(this).attr("href").indexOf("http://")==0){
				$(this).attr("target","_blank");
			}
	})
	
	$(".sideMenu_drop .sub a").each(function(){
		if($.trim($(this).attr('id'))== "menuId_" + codeName){
			$(this).parents(".sub").prev(".a1").addClass("aon down");
			}
	})

})
