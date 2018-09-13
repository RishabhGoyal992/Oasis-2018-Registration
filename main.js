$(document).ready(function(){
   $("#back-btn").css('display', "none");
   $('#select_info').text('(For Multiple Selection of Events Press Ctrl+)');

  
    var temp;
    inputs.keydown(function(event) {
      if ((event.keyCode === 13||event.keyCode === 40) && this.validity.valid) { 
         scrollCheck = 1;
         console.log("keydown")
          var newIndex = inputs.index(this) + 1;
          console.log(inputs.length)
          if (newIndex < inputs.length) {
              temp = inputs.eq(newIndex);
              console.log(temp)
              temp.focus();
          }
      }
      if(event.keyCode === 38){
          scrollCheck = 1;
          newIndex = inputs.index(this) - 1;
          if(newIndex >= 0){
            temp = inputs.eq(newIndex);
            temp.focus();
          }
      }
    });
    
    $('.field').click(function(){
      scrollCheck = 1;
      scrollToActiveField(this);
      console.log("click")
    })
    changeActiveField(index);
$('#submit-button').click(function(){
    submitFormData(changeActiveField);
  })
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