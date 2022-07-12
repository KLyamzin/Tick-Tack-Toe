class Player {
  constructor(shape = "circle") {
    this.shape = shape;
  }
}
let player = new Player();

/*  select the input from radio buttons and pass it to the player*/
let shapeSelected = document.querySelectorAll('input[name="shapes"]');
shapeSelected.forEach((selected) => {
  selected.addEventListener("change", () => {
    console.log(`switched shape to ${selected.value}`);
    player.shape = selected.value;
  });
});

/* Display the shape element in the grid */
const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", (e) => {
    const tileID = e.target.getAttribute("id");
    const tileSelected = document.getElementById(tileID);
    const shape = document.createElement("img");
    if (!tile.hasChildNodes()) {
      if (player.shape === "circle") {
        shape.classList.add("circle");
        shape.setAttribute("src", "/assets/tabler-icon-circle.svg");
      } else if (player.shape === "cross") {
        shape.classList.add("cross");
        shape.setAttribute("src", "/assets/tabler-icon-x.svg");
      } else {
        console.error("Invalid shape of player.elementShape");
      }
      tileSelected.appendChild(shape);
    }
  });
});
