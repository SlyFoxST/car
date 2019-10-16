jQuery(document).ready(function(e){

	 $('#step2').attr('disabled',true);
	 $('#step3').attr('disabled',true);

	$("#start-animate").on("click",function(){
		$('.description-animate').hide();
		$('.car-section').show();
	});
	$("#step1").on("click",function(){
		$(".car2").show();
		$(".car1").hide();
		$(".car4").hide();
		$(".car3").hide();

		 $('#step2').removeAttr('disabled');
		$(".check1").show();
	});

	$("#step2").on("click",function(){
		$(".car2").hide();
		$(".car3").show();
		$(".car4").hide();
		 $('#step3').removeAttr('disabled');
		$(".check2").show();
	});
	$("#step3").on("click",function(){
		$(".car3").hide();
		$(".car2").hide();
		$(".car1").hide();
		$(".car4").show();
		$(".check3").show();
	});

});