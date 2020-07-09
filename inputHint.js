$(function() {
// Bind a blur event to the search input that restores the hint text and hint class.
var $search=$('#search');
var $input = $search.find('input.input_text') 
var hint = $search.find('label').remove().text(); //'Enter search term'

    $input 
   .val(hint)
   .addClass('hint')
   .focus(function() {
       var entry = $input.val()
       $input.removeClass('hint')
    if(entry == hint) $input.val('');
   })
   .blur(function() {
      if(!$.trim($input.val())) $input.val(hint);
      if ($input.val() == hint) $input.addClass('hint');
   })
})
