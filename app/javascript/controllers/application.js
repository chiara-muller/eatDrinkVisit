import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

$('body').on("click", ".dropdown-menu", function (e) {
  $(this).parent().is(".open") && e.stopPropagation();
});

$('.selectall').click(function() {
  if ($(this).is(':checked')) {
      $('.option').prop('checked', true);
      var total = $('input[name="options[]"]:checked').length;
      $(".dropdown-text").html('(' + total + ') Selected');
      $(".select-text").html(' Deselect');
  } else {
      $('.option').prop('checked', false);
      $(".dropdown-text").html('(0) Selected');
      $(".select-text").html(' Select');
  }
});

$("input[type='checkbox'].justone").change(function(){
  var a = $("input[type='checkbox'].justone");
  if(a.length == a.filter(":checked").length){
      $('.selectall').prop('checked', true);
      $(".select-text").html(' Deselect');
  }
  else {
      $('.selectall').prop('checked', false);
      $(".select-text").html(' Select');
  }
var total = $('input[name="options[]"]:checked').length;
$(".dropdown-text").html('(' + total + ') Selected');
});
