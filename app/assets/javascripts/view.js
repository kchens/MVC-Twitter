function View() {
  this.source         = $("#tweet-template").html();
  this.tweetTemplate = Handlebars.compile(this.source);
  this.riverNode     = $('#tweets-container ul');

}

View.prototype = {
  initialize: function(tweetsData) {
    this.riverNode.empty();
    for(var index = 0; index < tweetsData.length; index++) {
      var context   = tweetsData[index];
      console.log(context);
      var tweetHTML = this.tweetTemplate(context);
      this.riverNode.append(tweetHTML);
    }
  },
}