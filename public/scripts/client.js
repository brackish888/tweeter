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
    let textLength = $('textarea.tweet-text').val().length;
    if (textLength > 140) {
      return $('.error-container').empty().append("Error: Over character limit").hide().addClass('error-visible').slideDown();
    }
    if (textLength < 1) {
      return $('.error-container').empty().append("Error: Type some characters to send a tweet!").hide().addClass('error-visible').slideDown();
    }
    $.ajax({url: "/tweets", data: $(this).serialize(), method: 'POST'})
      .then(() => {
        $('.error-container').removeClass('error-visible').empty();
        loadTweets();
        $("textarea.tweet-text").val("");
        $('form')[0].reset();
        $('.counter').text('140');
      });
  });
  loadTweets();

});