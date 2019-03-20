// TODO : tweak values for responsive... bigger circles for small screens

let circleRadius = (isHorizontal) ? .1 * width : .1 * height;
let strokeWidth = 3;
let area1Center = (isHorizontal) ? [.25 * width, .5 * height] : [.5 * width, .25 * height];
let area2Center = (isHorizontal) ? [.5 * width, .5 * height] : [.5 * width, .5 * height];
let area3Center = (isHorizontal) ? [.75 * width, .5 * height] : [.5 * width, .75 * height];
let circles = [];
let circleInc = 1;

const circlesContainer = document.getElementById("circles-container");

function createAreaSVG(center, text, url) {
  const link = document.createElement("a");
  link.href = url;
  link.id = "link" + circleInc;
  const areaSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  areaSVG.setAttributeNS(null, "viewBow", `0 0 ${2 * circleRadius + strokeWidth * 2} ${2 * circleRadius + strokeWidth * 2}`);
  
  areaSVG.setAttributeNS(null, "width", circleRadius * 2 + strokeWidth * 2);
  areaSVG.setAttributeNS(null, "height", circleRadius * 2 + strokeWidth * 2);

  areaSVG.id = "area-svg" + circleInc;
  areaSVG.setAttributeNS(null, "class", "area-svg");

  areaSVG.style.transform = `translate(${center[0] - circleRadius - strokeWidth}px, ${center[1] - circleRadius - strokeWidth}px)`;

  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  arrow.id = "arrow" + (circleInc);
  arrow.setAttributeNS(null, "class", "arrow");
  arrow.setAttributeNS(null, "points", "0.5 0.82 0.5 18.74 17.81 9.87 0.5 0.82");
  arrow.setAttributeNS(null, "width", "40px");
  arrow.setAttributeNS(null, "height", "40px");


  
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.id = "circle" + (circleInc);
  circle.setAttributeNS(null, "class", "area-circle");
  circles.push(circle.id);
  circle.setAttributeNS(null, "cx", circleRadius + strokeWidth);
  circle.setAttributeNS(null, "cy", circleRadius + strokeWidth);
  circle.setAttributeNS(null, "r", circleRadius);

  circle.style.stroke = "#fff";
  circle.style.strokeWidth = strokeWidth.toString();
  circle.style.fill = "transparent";

  const circleBg = document.createElement('div');
  circleBg.className = "circle-bg";
  circleBg.id = "circle-bg" + (circleInc)
  circleBg.style.left = center[0] - circleRadius + "px";
  circleBg.style.top = center[1] - circleRadius + "px";
  circleBg.style.width = circleRadius * 2 + "px";
  circleBg.style.height = circleRadius  * 2 + "px";


  const circleTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
  circleTitle.id = "circle-title" + (circleInc)
  circleTitle.setAttributeNS(null,"x", '50%');     
  circleTitle.setAttributeNS(null,"y", '50%');
  circleTitle.setAttributeNS(null, "class", "circle-title");
  circleTitle.setAttributeNS(null, "font-size", circleRadius/5);
  circleTitle.setAttributeNS(null, "alignment-baseline", 'middle');
  circleTitle.setAttributeNS(null, "text-anchor", 'middle');
  const textNode = document.createTextNode(text);
  circleTitle.appendChild(textNode);

  circlesContainer.appendChild(link);
  link.appendChild(circleBg);
  link.appendChild(areaSVG);
  
  areaSVG.appendChild(arrow);
  areaSVG.appendChild(circle);
  areaSVG.appendChild(circleTitle);

  circleInc ++;
}

const bg = document.createElement('div');
bg.className = "bg";

setTimeout(function() {
  const area1 = createAreaSVG(area1Center, "HOTEL PARMIS", "https://parimis.benoitclement.fr");
}, 1000);
setTimeout(function() {
  const area2 = createAreaSVG(area2Center, "CONNEXIONS", "../cv2019");
  document.getElementById('circle-bg1').style.opacity = "1";
  document.getElementById('circle-title1').style.fill = "#fff";
  document.getElementById('circle-title1').style.strokeWidth = "0";
}, 2000);
setTimeout(function() {
  const area3 = createAreaSVG(area3Center, "AUTRES", "https://github.com/benoitclement");
  document.getElementById('circle-bg2').style.opacity = "1";
  document.getElementById('circle-title2').style.fill = "#fff";
  document.getElementById('circle-title2').style.strokeWidth = "0";
}, 3000);
setTimeout(function() {
  document.getElementById('circle-bg3').style.opacity = "1";
  document.getElementById('circle-title3').style.fill = "#fff";
  document.getElementById('circle-title3').style.strokeWidth = "0";
  
}, 4000);
setTimeout(function() {
  document.getElementById('arrow1').style.opacity ="1";
  document.getElementById('arrow1').style.animation = "arrowMove .5s linear forwards";
  
  document.getElementById('arrow2').style.opacity ="1";
  document.getElementById('arrow2').style.animation = "arrowMove .5s linear forwards";
  document.getElementById('arrow3').style.opacity ="1";
  document.getElementById('arrow3').style.animation = "arrowMove .5s linear forwards";
}, 4500)


