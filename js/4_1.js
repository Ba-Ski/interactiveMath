$(function(){
  $('#btn1').click(function(){
	  
		document.getElementById("path5").classList.add("startAnim5");
		document.getElementById("path2").classList.add("startAnim2");
		document.getElementById("path3").classList.add("startAnim3");
		document.getElementById("path1").classList.add("startAnim1");
		document.getElementById("path4").classList.add("startAnim4");
		
		$("#stripe").addClass("numberChange");
		$("#fiveMore").addClass("apperStart");
		
		setTimeout(function() {
        document.getElementById("path5").classList.remove("startAnim5");
	  document.getElementById("path2").classList.remove("startAnim2");
	  document.getElementById("path1").classList.remove("startAnim1");
	  document.getElementById("path3").classList.remove("startAnim3");
	  document.getElementById("path4").classList.remove("startAnim4");
	  $("#stripe").removeClass("numberChange");
	  $("#fiveMore").removeClass("apperStart");
	  
    }, 16500);
  })
  
  $('#btn2').click(function(){
	  
		document.getElementById("p2").classList.add("startAnim5");
		document.getElementById("p1").classList.add("startAnim2");
		
		setTimeout(function() {
        document.getElementById("p2").classList.remove("startAnim5");
	  document.getElementById("p1").classList.remove("startAnim2");
	  
    }, 3000);
  })
  
   $('#btn3').click(function(){
	  
	  	document.getElementById("p38").classList.add("startAnim5");
		document.getElementById("p33").classList.add("startAnim2");
		document.getElementById("p37").classList.add("startAnim3");
		document.getElementById("p31").classList.add("startAnim1");
		document.getElementById("p36").classList.add("startAnim4");
		document.getElementById("p34").classList.add("startAnim5_");
		
		
		setTimeout(function() {
	  	document.getElementById("p38").classList.remove("startAnim5");
		document.getElementById("p33").classList.remove("startAnim2");
		document.getElementById("p37").classList.remove("startAnim3");
		document.getElementById("p31").classList.remove("startAnim1");
		document.getElementById("p36").classList.remove("startAnim4_");
		document.getElementById("p34").classList.remove("startAnim5_");
	  
    }, 15000);
  })
})