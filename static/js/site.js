$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 768,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
  $("#typed").typed({
      stringsElement: $('#typed-strings'),
      contentType: 'html',
      callback: function() {
        $("#typed").siblings('.typed-cursor').remove();
        typeNextString();
      }
  });
  $("input[name=terms]").change(function(){
    console.log("Terms have changed");
    if ($(this).val() === "accept") {
      console.log("Accepted terms");
      if ($(this).parents('form').find("input[name=planFrequency]:checked").val() === "monthly") {
        $(this).parents('form').find("#monthlyPayButton").show();
        $(this).parents('form').find("#yearlyPayButton").hide();
      } else {
        $(this).parents('form').find("#monthlyPayButton").hide();
        $(this).parents('form').find("#yearlyPayButton").show();
      }
    }
  });
  $("input[name=planFrequency]").change(function(){
    console.log("Frequency has changed");
    console.log($(this).parents('form').find("input[name=terms]:checked").val());
    if ($(this).parents('form').find("input[name=terms]:checked").val() === "accept") {
      if ($(this).val() === "monthly") {
        $(this).parents('form').find("#monthlyPayButton").show();
        $(this).parents('form').find("#yearlyPayButton").hide();
      } else {
        $(this).parents('form').find("#monthlyPayButton").hide();
        $(this).parents('form').find("#yearlyPayButton").show();
      }
    }
  });

});

function typeNextString() {
  $("#typed-next").typed({
      stringsElement: $('#typed-next-strings'),
      contentType: 'html',
      startDelay: 500
  });
}
