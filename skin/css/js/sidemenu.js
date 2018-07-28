// JavaScript Document
/*
必须先定义全局变量 ：
		var parentChnlName;
		var currentChnlName="<CMSPRO_CHANNEL CODE='' FIELD='channelName'>当前频道名称</CMSPRO_CHANNEL>";
		
*/
	
function removeHTMLTag(str) {
		str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
		str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
		str = str.replace(/[\r\n]/g,""); //去除多余空行
		str=str.replace(/ /ig,'');//去掉&nbsp;
		return str;
}

function gx_ifUnderHomeChnl() 
{
	/* 
		返回值：逻辑型，真=上级目录为home目录
	*/
	
	if (parentChnlName=="")		// 当父频道名为空
		{
		return true;		// 返回真
		} else		// 当为非home目录
		{
		return false;		// 返回假
		};
}

function gx_ifHassub(DivID1) 
{
	/* 
		返回值：逻辑型，真=有子目录
	*/
	var sidemenuL=document.getElementById(DivID1).innerHTML;
	sidemenuL=removeHTMLTag(sidemenuL);
	if (sidemenuL=="")		// 当父频道名为空
		{
		return true;		// 返回假
		} else		// 当包含内容
		{
		return false;		// 返回真
		};
}


function setLeftChnlTitle(LeftChnlTitleStrID,DivID1)
{	
	/* */
	var ShowChnlDescStr ;
	
	if ( gx_ifUnderHomeChnl() && gx_ifHassub(DivID1))		// 当父频道为home,并且无子栏目时
		{
		//ShowChnlDescStr= "网站导航";
		return;    //不改变标题内容，用原来的
		}
	else if ( gx_ifUnderHomeChnl() || (!gx_ifUnderHomeChnl() && !gx_ifHassub(DivID1)))		// 当为一级栏目  或者 为不是一级栏且有子栏目（比如二级栏目含有三级子栏目）时
		{
		ShowChnlDescStr= currentChnlName;
		}
	
	else
		{
		ShowChnlDescStr= parentChnlName;
		};
	window.document.getElementById(LeftChnlTitleStrID).innerHTML=ShowChnlDescStr;		// 改变页面的显示内容
}


function setLeftChnlListDivStyle(DivID0,DivID1)
{	
	if( gx_ifUnderHomeChnl() && gx_ifHassub(DivID1)){    //当为一级栏目且无子栏目时   显示同级目录(根目录)
		
		window.document.getElementById(DivID0).style.display="block";
		window.document.getElementById(DivID1).style.display="none";	
	}
	else if(!gx_ifHassub(DivID1) || gx_ifUnderHomeChnl()){    //当为一级栏目且有子栏目时   显示子目录
		
		window.document.getElementById(DivID0).style.display="none";
		window.document.getElementById(DivID1).style.display="block";	
	}
	else
		{
		window.document.getElementById(DivID0).style.display="block";
		window.document.getElementById(DivID1).style.display="none";
		};
}
