let width = window.innerWidth;
let height = window.innerHeight;
let circleRadius = width / 30;
let circleTotalH = 11
let circleTotalV = Math.ceil(height / (width / 10)) + 1 ; 

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
    circle.setAttributeNS(null, "cx", x * width / 10 + y % 2* width / 20);
    circle.setAttributeNS(null, "cy", y * width / 10);
    circle.setAttributeNS(null, "r", circleRadius);
    clipPath.appendChild(circle);
  }
}
