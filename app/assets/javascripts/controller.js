function Controller(river, view) {
  this.river = river;
  this.view = view;
}

Controller.prototype = {
  initialize: function() {
    var self = this;
    $.ajax({
      url: '/tweets/recent',
      type: "GET",
      cache: false
    })
    .done( function(tweetsData) {
      console.log("in initialize");
      console.log(this);
      console.log(self);
      self.river.initialize(tweetsData);
      console.log(self.river.tweets);
    })
    .fail( function() {
      console.log("Failed getting recent tweets");
    })
  },
  run: function () {
    this.initialize();
  }
}
