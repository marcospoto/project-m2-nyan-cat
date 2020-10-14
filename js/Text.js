// This class is not used in the project yet.
class Text {
  // The constructor has three parameters. Here is an example of how you would create
  // an instance of this class
  constructor(root, xPos, yPos) {
    // We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
    // set the \`domElement\` property of the instance to the newly created DOM element so we can update it later
    const div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = xPos;
    div.style.top = yPos;
    div.style.color = "red";
    div.style.font = "bold 40px Impact";
    div.style.zIndex = 2000;
    div.style.height = 50;
    div.style.width = 200;
    div.style.textAlign = "center";
    root.appendChild(div);

    this.domElement = div;
  }

  // This method is used to update the text displayed in the DOM element
  update(txt) {
    this.domElement.innerText = txt;
  }
  center() {
    this.domElement.style.left =
      GAME_WIDTH / 2 - this.domElement.offsetWidth / 2;
    this.domElement.style.top =
      GAME_HEIGHT * 0.3 - this.domElement.offsetHeight / 2;
  }
}
