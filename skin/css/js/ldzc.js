$(function(){
	$(".ldzc_sidemenu .a1").append("<i></i>");
	$('.ldzc_sidemenu li.li1 a').click(function(e){
		var dropDown = $(this).next();
		if(dropDown.length>0){
			$('.ldzc_sidemenu .ul2').not(dropDown).slideUp('fast');
			dropDown.slideToggle('fast');
			e.preventDefault();
		}
	});
	
	$(".ldzc_sidemenu a").each(function(){
		if($.trim($(this).attr('id'))== "menuId_" + codeName){
			$(this).addClass('aon')
				   .parents(".ul2").show();
			}
	})
	
	if($.trim($(".ldzc_grjj .ldzc_tt").text()) == ''){
		$(".ldzc_grjj").remove();
	}
	$("#jqhd").load('/bysiteapps/webpage/gdltax/ldzc/ldzc.jsp?keyword=' + encodeURI($("#ldname").text())
);
})
