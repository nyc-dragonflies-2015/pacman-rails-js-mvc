VideoGame.Cartridge = function(gameName) {
  this.gameName = gameName;
}

VideoGame.Cartridge.prototype.toString = function() {
  return this.gameName + " is great!"
}

