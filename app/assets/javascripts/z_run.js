var controller, river, view;
$(document).ready( function() {
  controller.run();
})

river = new River();
view = new View();
controller = new Controller(river, view);
