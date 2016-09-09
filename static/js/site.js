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
    if ($(this).val() === "accept" && typeof $(this).parents('form').find("input[name=planFrequency]:checked").val() != 'undefined') {
      console.log("Accepted terms");
      $(this).parents('form').find("button").show();
    }
  });
  $("input[name=planFrequency]").change(function(){
    console.log("Frequency has changed");
    console.log($(this).parents('form').find("input[name=terms]:checked").val());
    if ($(this).parents('form').find("input[name=terms]:checked").val() === "accept") {
      $(this).parents('form').find("button").show();
    }
  });
  $(".subscription-modal").find("form").submit(function(e){
    console.log("Form submitted");
    var form = $(this);
    $.ajax({
         url   : form.attr('action'),
         type  : form.attr('method'),
         data  : form.serialize(), // data to be submitted
         success: function(response){
            alert(response); // do what you like with the response
         },
         error: function (response) {
           alert("error:" + response);
        }
    });
    return false;
  });

  $(".subscription-modal").find("button").on('click', function(e) {
    var frequency = $(this).parents('form').find("input[name=planFrequency]:checked").val()
    var name = $(this).parents('.subscription-modal').find("h3").text();
    var amount = $(this).parents('form').find("input[name=" + frequency+ "Price]").val()

    var button = this;
    var handler = StripeCheckout.configure({
      key: 'pk_test_Hgj5DuHk5eDVtkrfTLrAHNOr',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log("received token successfully");
        console.log(token);
        $(button).parents("form").find("input[name=stripeToken]").val(token.id);
        $(button).parents("form").find("input[name=stripeEmail]").val(token.email);
        var form = $(button).parents("form");
        submitSubscription(form);
      }
    });

    // Open Checkout with further options:
    handler.open({
      name: '3DSIM LLC',
      description: name + " " + frequency,
      amount: amount
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation:
  $(window).on('popstate', function() {
    handler.close();
  });
});

function submitSubscription(form) {
  console.log("Form: ");
  console.log(form);
  console.log("submitting subscription to " + form.attr('action'));
  $.ajax({
       url   : form.attr('action'),
       type  : form.attr('method'),
       data  : form.serialize(), // data to be submitted
       success: function(response){
         console.log("subscription successful");
          // alert(response); // do what you like with the response
       },
       error: function (response) {
         console.log("subscription error");
         console.log(response);
        //  alert("error:" + response);
      }
  });
  return false;
}

function typeNextString() {
  $("#typed-next").typed({
      stringsElement: $('#typed-next-strings'),
      contentType: 'html',
      startDelay: 500
  });
}
