VideoGame.PacmanController = function(view, model) {
  this.view = view;
  this.model = model;


  $("body").on('click', function(e) {
    this.view.draw(this.model.toString());
  }.bind(this));
}

VideoGame.PacmanController.prototype = {
}

