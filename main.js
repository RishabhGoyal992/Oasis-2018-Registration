$(document).ready(function(){
   $("#back-btn").css('display', "none");
   $('#select_info').text('(For Multiple Selection of Events Press Ctrl+)');
    $('#select_info_mobile').text('(For Multiple Selection of Events Press +)');
 })

$(document).ready(function() {
  $('#event-select').select2({
    'placeholder': 'Search event name',
    width: "resolve",
  });
   $('#college').select2({
   
    width: "resolve",
  });
});

console.clear();
