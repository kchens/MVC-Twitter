function View() {
  this.riverNode     = $('#tweets-container ul');
  this.tweetsContainer = $('#tweets-container');
  this.tweetTemplate = $('#tweet-template');
}

View.prototype = {
  initialize: function (tweets) {
    //not working for some reason
    this.riverNode.empty();
    console.log(this.tweetTemplate);
    tweets.forEach( function (tweet) {
      // put the tweet into the tweet template
      // append the tweet to the riverNode
      // var formattedTweet = this.tweetTemplate(tweet)
      // console.log(formattedTweet);
      // this.riverNode.append(formattedTweet)
    })
  }
}