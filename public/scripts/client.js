$(document).ready(function() {
  
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
 
  const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet">
    <header>
    <div id="user">
    <img src=${tweet.user.avatars} />
    ${tweet.user.name}
    </div>
    <div id="handle">${escape(tweet.user.handle)}</div>
    </header> 
    <div class="tweet-content">
    ${escape(tweet.content.text)}
    </div>
    <footer class="tweet-footer">
    <div> ${moment(tweet.created_at).fromNow()}</div>
    <span class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </span>
    </footer>
    </article>`);
    return $tweet;
  };
  const renderTweets = function(tweets) {
    console.log(tweets);
    $('#tweet-container').empty();
    for (const tweet of tweets.reverse()) {
      let $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    }
  };

  const loadTweets = function() {
    $.ajax({url: '/tweets', method: 'GET',
    }).then((res, err) => {
      renderTweets(res);
    }).catch(err => {
      console.log(err);
    });
  };
  loadTweets();

  $('form').submit(function(event) {
    event.preventDefault();
    let tweetText = $(this).serialize();
    let textLength = $('#tweet-text').val().length;
    if (textLength > 140) {
      return $('.error-container').empty().append("Error: Your tweet is over the character limit").hide().addClass('error-visible').slideDown();
    }
    if (textLength < 1) {
      return $('.error-container').empty().append("Error: Type some characters to send a tweet!").hide().addClass('error-visible').slideDown();
    }
    $.ajax( "/tweets", {data: tweetText, method: 'POST'})
      .then(function(tweetText) {
        $('.error-container').removeClass('error-visible').empty();
        console.log('Success: ', tweetText);
        loadTweets();
        $('form')[0].reset();
        $('.counter').text('140');
      });
  });
  loadTweets();

});