$(function(){
  $('#btn1').click(function(){
	  
	  
	  	document.getElementById("paths11").classList.remove("firstDrow");
	  	document.getElementById("paths12").classList.remove("secondDrow");
	  	document.getElementById("paths21").classList.remove("secondDrow");
	  	document.getElementById("paths22").classList.remove("firstDrow");

	  	$("#11_22").removeClass("firstAppear");
		$("#minus").removeClass("middleAppear");
		$("#21_12").removeClass("secondAppear");
		
		setTimeout(function() {
        document.getElementById("paths11").classList.add("firstDrow");
		document.getElementById("paths12").classList.add("secondDrow");
		document.getElementById("paths21").classList.add("secondDrow");
		document.getElementById("paths22").classList.add("firstDrow");
		
		$("#11_22").addClass("firstAppear");
		$("#minus").addClass("middleAppear");
		$("#21_12").addClass("secondAppear");
	  
    }, 100);
  });
});