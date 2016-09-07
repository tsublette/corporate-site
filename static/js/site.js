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
});

function typeNextString() {
  $("#typed-next").typed({
      stringsElement: $('#typed-next-strings'),
      contentType: 'html',
      startDelay: 500
  });
}
