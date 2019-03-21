
let width = window.innerWidth;
let height = window.innerHeight;
let isHorizontal = width > height;
let inkDropRadius = (isHorizontal) ? width / 50 : height / 50;
let inkDropTotal = 50;
let inkDropsIds = [];
const inkDropColors = ['#6cce74', '#c18d46', '#c14745', '#2e1e5b', '#9c37a6', '#76bdd1'];

const backgroundContainer = document.getElementById("background-container");

// create svg and all subelements using .createElementNS
const inksSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
inksSVG.setAttributeNS(null, "viewBow", `0 0 ${width} ${height}`);
// inksSVG.setAttributeNS(null, "class", "ink-drop");
inksSVG.id = "inks";
inksSVG.setAttributeNS(null, "width", width);
inksSVG.setAttributeNS(null, "height", height);
backgroundContainer.appendChild(inksSVG);
// const FiltersGroup = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
// svg.appendChild(FiltersGroup);
const inksGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
inksGroup.id = "inks-group";
inksSVG.appendChild(inksGroup);

function getInkInfo() {
  let posX = Math.floor(Math.random() * (width)) + 1;
  let posY = Math.floor(Math.random() * (height)) + 1;
  let color = inkDropColors[Math.floor(Math.random() * inkDropColors.length)];
  return [posX, posY, color];
}

for(let i=0; i < inkDropTotal; i++) {
  // create inkDrop svg circles and define their default scale : 0;
  [posX, posY, color] = getInkInfo();
  let inkDrop = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  inkDrop.id = 'x' + posX + "-y" + posY;
  inkDropsIds.push(inkDrop.id);
  inkDrop.setAttributeNS(null, "cx", posX);
  inkDrop.setAttributeNS(null, "cy", posY);
  inkDrop.setAttributeNS(null, "r", inkDropRadius);

  inkDrop.style.fill = color;
  inkDrop.style.transform = 'scale(0)';
  inkDrop.style.transformOrigin = posX +  "px " + posY + "px";

  inkDrop.setAttributeNS(null, "class", "ink-drop");


  inksGroup.appendChild(inkDrop);
}

var interval = setInterval(showRndCircle, 30);

function showRndCircle() {
  if (inkDropsIds.length === 0) {
    clearInterval(interval);
    console.log("cleared interval");
  } else {
    let rndIndex = Math.floor(Math.random() * inkDropsIds.length);
    let rndId =  inkDropsIds[rndIndex];
    inkDropsIds.splice(rndIndex, 1);
    
    document.getElementById(rndId).style.transform = 'scale(10)';
    document.getElementById("inks").style.filter = 'blur(8vmax)';
    console.log(interval);
  }
}
