$(function(){
	
	$("#MENU").on("click",doOPEN);
	
	//動作：打開選單
	function doOPEN(){
		
		$("#SUBMENU").slideToggle(300); //JQ 的功能：讓 DIV 拉上拉下的效果
		
		$("article").on("click",doCLOSE); //打開選單之後，才讓內容區有滑鼠事件
				
	}
	
	//動作：關閉選單	
	function doCLOSE(){
		
		$("#SUBMENU").hide(); //JQ 的功能：讓 DIV 直接消失的效果
			
		$("article").off("click",doCLOSE);//內容區解除滑鼠事件聯繫，節省效能
		
	}
		
})

