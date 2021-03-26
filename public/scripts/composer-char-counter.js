// need to access counter indirectly using recursion

$(document).ready(function() {

  $("#tweet-text").on('keyup', 
    function() {
      let charLimitCount;
      const charLength = $(this).val().length;
      const maxChar = 140
      charLimitCount = maxChar - charLength;
      if (charLimitCount < 0) {
        $('.counter').addClass('overcount');
      }
      if (charLimitCount > 0) {
        $('.counter').removeClass('overcount');
      }
      $('.counter').text(charLimitCount);
    });
});