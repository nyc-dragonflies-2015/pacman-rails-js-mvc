VideoGame.PacmanView = function(selector) {
  this.selector = selector;
  this.element = $(selector);
}

VideoGame.PacmanView.prototype.draw = function(data) {
  this.element.html(data);
}

