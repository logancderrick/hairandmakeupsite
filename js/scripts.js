$(function () {
  $(".carousel").carousel({ interval: 2000 });

  // date picker code
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container =
    $("#bookingForm").length > 0 ? $("#bookingForm").parent() : "body";
  var options = {
    format: "mm/dd/yyyy",
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
});
