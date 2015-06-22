$(function() {
  new VideoGame.PacmanController(
    new VideoGame.PacmanView("#pacman-view"),
    new VideoGame.Cartridge("Pitfall"));
});
