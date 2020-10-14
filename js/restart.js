class Restart {
  constructor(root) {
    let button = document.createElement("button");

    button.style.position = "absolute";
    button.style.color = "black";
    button.style.backgroundColor = "blue";
    button.style.borderRadius = 5;
    button.style.font = "bold 15px Impact";
    button.style.zIndex = 2000;
    button.style.height = 50;
    button.style.width = 100;
    button.style.textAlign = "center";
    root.appendChild(button);

    this.domElement = button;
  }

  update(txt) {
    this.domElement.innerText = txt;
  }
  center() {
    this.domElement.style.left =
      GAME_WIDTH / 2 - this.domElement.offsetWidth / 2;
    this.domElement.style.top =
      GAME_HEIGHT / 2 - this.domElement.offsetHeight / 2;
  }
  reset() {
    this.domElement.addEventListener("click", () => {
      gameEngine.gameLoop();
      this.domElement.remove();
    });
  }
  start() {
    this.domElement.addEventListener("click", () => {
      gameEngine.gameLoop();
      this.domElement.remove();
    });
  }
}
