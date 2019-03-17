

let width = window.innerWidth;
let height = window.innerHeight;
let circleRadius = width / 30;
let circleTotalH = 11
let circleTotalV = Math.ceil(height / (width / 10)) + 1 ; 
let circlesIds = [];

let container = document.getElementById("img-container");

// create svg and all subelements using .createElementNS
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttributeNS(null, "viewBow", `0 0 ${width} ${height}`);
svg.setAttributeNS(null, "class", "screen-mask");
svg.setAttributeNS(null, "width", width);
svg.setAttributeNS(null, "height", height);
container.appendChild(svg);
const defs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
svg.appendChild(defs);
const clipPath = document.createElementNS("http://www.w3.org/2000/svg", 'clipPath');
clipPath.id = "circlesClipPath";
defs.appendChild(clipPath);
for(let x = 0; x < circleTotalH; x++) {
  for(let y = 0; y < circleTotalV; y++) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttributeNS(null, "class", "circle");
    circle.id = 'x' + x + " y" + y;
    circlesIds.push(circle.id);
    circle.setAttributeNS(null, "cx", x * width / 10 + y % 2* width / 20);
    circle.setAttributeNS(null, "cy", y * width / 10);
    circle.setAttributeNS(null, "r", circleRadius);
    clipPath.appendChild(circle);
  }
}

let interval = setInterval(showRndCircle, 50);

function showRndCircle() {
  if (circlesIds.length === 0) {
    clearInterval(interval);
  } else {
    let rndIndex = Math.floor((Math.random() * circlesIds.length));
    let rndId =  circlesIds[rndIndex];
    circlesIds.splice(rndIndex, 1)
    document.getElementById(rndId).style.transform = 'scale(1)';
    document.getElementById(rndId).style.opacity = 1;
    
  }
}
