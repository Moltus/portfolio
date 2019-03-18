let circleRadius = (isHorizontal) ? .1 * width : .1 * height;
let strokeWidth = 3;
let area1Center = (isHorizontal) ? [.25 * width, .5 * height] : [.5 * width, .25 * height];
let area2Center = (isHorizontal) ? [.5 * width, .5 * height] : [.5 * width, .5 * height];
let area3Center = (isHorizontal) ? [.75 * width, .5 * height] : [.5 * width, .75 * height];
let areas = [];

function createAreaSVG(center) {
  const areaSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  areaSVG.setAttributeNS(null, "viewBow", `0 0 ${2 * circleRadius + strokeWidth * 2} ${2 * circleRadius + strokeWidth * 2}`);
  areaSVG.id = "area" + areas.length + 1;
  areas.push(areaSVG.id);
  areaSVG.setAttributeNS(null, "width", circleRadius * 2 + strokeWidth * 2);
  areaSVG.setAttributeNS(null, "height", circleRadius * 2 + strokeWidth * 2);

  container.appendChild(areaSVG);
  areaSVG.style.left = center[0] - circleRadius - strokeWidth;
  areaSVG.style.top = center[1] - circleRadius - strokeWidth;

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  circle.id = 'x' + posX + "-y" + posY;
  // circlesIds.push(circle.id);
  circle.setAttributeNS(null, "cx", circleRadius + 3);
  circle.setAttributeNS(null, "cy", circleRadius + 3);
  circle.setAttributeNS(null, "r", circleRadius);

  circle.style.stroke = "white";
  circle.style.fill = "transparent";

  areaSVG.appendChild(circle);
}

const area1 = createAreaSVG(area1Center);
const area2 = createAreaSVG(area2Center);
const area3 = createAreaSVG(area3Center);

