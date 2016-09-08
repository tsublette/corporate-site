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
  $("input[type='checkbox']").change(function(){
    var numCheckedCheckboxesOnForm = $(this).parents('form').children("input[type='checkbox']:checked").length;
    var numCheckboxesOnForm = $(this).parents('form').children("input[type='checkbox']").length;
    if (numCheckedCheckboxesOnForm === numCheckboxesOnForm) {
       console.log("all checkboxes checked");
       if ($(this).siblings("input[name=planFrequency]:checked").val() === "monthly") {
         $(this).siblings("#monthlyPayButton").show();
         $(this).siblings("#yearlyPayButton").hide();
       } else {
         $(this).siblings("#monthlyPayButton").hide();
         $(this).siblings("#yearlyPayButton").show();
       }
    } else {
      console.log("some checkboxes unchecked");
      $(this).siblings("#monthlyPayButton").hide();
      $(this).siblings("#yearlyPayButton").hide();
    }
  });
  $("input[type='radio']").change(function(){
    var numCheckedCheckboxesOnForm = $(this).parents('form').children("input[type='checkbox']:checked").length;
    var numCheckboxesOnForm = $(this).parents('form').children("input[type='checkbox']").length;
    if (numCheckedCheckboxesOnForm === numCheckboxesOnForm) {
       if ($(this).val() === "monthly") {
         $(this).siblings("#monthlyPayButton").show();
         $(this).siblings("#yearlyPayButton").hide();
       } else {
         $(this).siblings("#monthlyPayButton").hide();
         $(this).siblings("#yearlyPayButton").show();
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
