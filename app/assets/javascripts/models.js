// 1) What are your objects?
// 2) What are the properties and methods?
// 3) How do your objects interact with their respective DOM elements?

function Tweet(options) {
  this.avatarUrl = options.avatar_url;
  this.content = options.content;
  this.createdAt = options.created_at;
  this.handle = options.handle;
  this.hashtagName = options.hashtag_names;
  this.id = options.id;
  this.updatedAt = options.updated_at;
  this.userName = options.username;
}


function River() {
  this.tweets = [];
}

River.prototype = {
  initialize: function(tweetsData) {
    for (var index = 0; index < tweetsData.length; index++) {
      var tweet = new Tweet(tweetsData[index]);
      this.tweets.push(tweet);
    }
  }
}
