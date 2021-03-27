$(document).ready(function() {
  

  
  const createTweetElement = function(tweetObject) {
    let $tweet = $(`<article class="tweet">
    <header class="tweet-header"> 
    <div class="tweet-header-left">
    <img class="tweetImg" src=${tweetObject.user.avatar} alt="profile pic" width="20%">
    <p class="user-name">${tweetObject.user.name}</p>
    </div>
    <p class="tweeter-handle">${tweetObject.user.handle}</p>
    </header> 
    <div class="tweet-content">
    <p>${tweetObject.content.text}</p>
    </div>
    <footer class="tweet-footer">
    <output name="date-posted" class="date-posted">${tweetObject.created.at}</output> 
    <img src="images/social-buttons-temp.png" alt="social-buttons">
    </footer>
    </article>`);
    return $tweet;
  };

const renderTweets = function(tweets) {
  console.log(tweets)
  $('.tweet-container').empty();
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);
  $('.tweet-container').prepend($tweet);
  }

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      renderTweets(tweets);
  })};
  loadTweets();
};


$('form').submit(function (event) {
  event.preventDefault();
  let tweetText = $(this).serialize();
  let textLength = $('#tweet-text').val().length
  if (textLength > 140) {
    return $('.error-container').empty().append("Error: Over character limit").hide().addClass('error-visible').slideDown()
  };
  if (textLength < 1) {
    return $('.error-container').empty().append("Error: Your tweet is blank").hide().addClass('error-visible').slideDown();
  } 
  $.ajax("/tweets", {data: tweetText, method: 'POST'})
  
  .then(function (tweetText) {
    $('.error-container').removeClass('error-visible').empty();
    console.log('Success: ', tweetText);
    loadTweets();
    $('form')[0].reset();
    $('.counter').text('140');
  });
});

});