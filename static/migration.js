$(document).ready(function() {
	$(".select-all").on("click",function() {
		var box = $(this).closest('.form-group')
		
		var selectall = box.data("selectall");
	
		if(selectall == true)
		{
			box.find("input:checkbox").prop("checked",false);  
			box.data("selectall",false);
		}
		else
		{
			box.find("input:checkbox").prop("checked",true);  
			box.data("selectall",true);
		}
	});
	
	
 
});