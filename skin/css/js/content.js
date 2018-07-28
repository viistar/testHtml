$("#view").load('/bysiteapps/webpage/gdltax/info_count/info_count.jsp?url=' + window.location + ' span');
//$("#dz").load('/bysiteapps/webpage/gdltax/dianzan/dianzan.jsp?url=' + window.location + ' span');
$("#dianzan").attr("src","/bysiteapps/webpage/gdltax/dianzan/dianzan.jsp?url="+window.location);

//扫码浏览
document.write("<script src='/by/xhtml/js/qrcode.js'></script>");
document.write("<script src='/by/xhtml/js/jquery.qrcode.js'></script>");
$(".content_extended .smll").hover(function(){
  $(this).find(".drop").stop(true,false).fadeIn('fast');
},function(){
	   $(this).find(".drop").hide();
});
//文件状态
$(".state").each(function(i) {
	if($.trim($(this).find("font").text()) == ""){
		$(this).remove();	
	}
});
//手机版分享
$(".sjb_fx_fxd").click(function(){ $("#share").slideDown("fast");})
$("#share .btn").click(function(){ $("#share").slideUp("fast");	 })


$("a").each(function(){ 
	var href_url = $(this).attr("href");
	if(typeof(href_url) != "undefined"){
		href_url = href_url.replace("http://10.195.242.11/","/");  
		href_url = href_url.replace("http://www.by.gov.cnhttp/www.by.gov.cn/","/"); 
		href_url = href_url.replace("http://192.168.50.112:8080/","/"); 
	}
	$(this).attr("href",href_url);
});
	
//调整字体大小:
var tgs = new Array( 'div','td','tr','font','p','span');   
var fontsizePx = 16;  // same as font-size in body   
/* *** Adjust Font Size *** */  
function adjustFontsize(tag, sizechange) {   
  if (!document.getElementById) return;   
  var d = document,cEl = null,i,j,cTags;      
  if( sizechange == 'larger' ) fontsizePx = 18;   
  else if( sizechange == 'small' ) fontsizePx = 14;  // same as font-size in body   
  else if( sizechange == 'large') fontsizePx = 16;   
     
  if ( !( cEl = d.getElementById( tag ) ) ) cEl = d.getElementsByTagName( tag )[ 0 ];   
  //debug(cEl);   
  cEl.style.fontSize = fontsizePx + "px";   
     
  for ( i = 0 ; i < tgs.length ; i++ ) {   
    cTags = cEl.getElementsByTagName( tgs[ i ] );   
   // t = cEl.all.tags(tgs[ i ]);   
    //alert(tgs[i] +":" + cTags.length);   
    for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = fontsizePx + "px";   
  }   
}

//mp4格式视频兼容方法：
function convertMedia(){
	if (!document.getElementById("zoomcon")) return ;
	var mediaDom = document.getElementById("zoomcon").getElementsByTagName("embed") ;
	var videoDom = document.createElement("video") ;
	if (typeof(videoDom.canPlayType) != "undefined" && mediaDom && mediaDom.length > 0){
		for(var i = 0 ; i < mediaDom.length ; i++) {
			var el = mediaDom[i] ;
			var newMediaDom = document.createElement("video") ;
			newMediaDom.setAttribute("controls" , "controls") ;
			newMediaDom.setAttribute("preload" , "preload") ;
			newMediaDom.setAttribute("src" , el.getAttribute("flashvars").replace(/^vcastr_file=/ , "")) ;
			newMediaDom.setAttribute("width" , "60%") ; // el.width
			newMediaDom.setAttribute("height" , "auto") ; // el.height
			var parentDom = el.parentNode ;
			el.style.display="none" ;
			parentDom.appendChild(newMediaDom) ;
			//parentDom.removeChild(el) ;
		}
		var len = mediaDom.length ;
		for(var i = 1 ; mediaDom.length > 0 ; i++ ) {
			
			var parentDom = mediaDom[0].parentNode ;
			parentDom.removeChild(mediaDom[0]) ;
			
			if (i >= len){
				break ;
			}
		}
	}
}
convertMedia() ;