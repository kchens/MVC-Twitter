function Controller() {
  this.test = "hello";
}

Controller.prototype = {
  run: function () {
    console.log("hello function")
  }
}
