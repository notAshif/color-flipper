let colorName = document.getElementById("color-name");
let body = document.body;

document.getElementById("color-button").addEventListener("click", () => {
  function hex() {
    let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);

    return hex;
  }

  let newColor = hex();
  body.style.backgroundColor = newColor;
  colorName.innerHTML = `BackGround color ${newColor}`
});
