// TODO : tweak values for responsive... bigger disks for small screens
let diskTotal = 3;
let diskDiameter = (isHorizontal) ? .6 * width / diskTotal : .6 * height / diskTotal;
// let strokeWidth = 3;
let area1Center = (isHorizontal) ? [.25 * width, .5 * height] : [.5 * width, .25 * height];
let area2Center = (isHorizontal) ? [.5 * width, .5 * height] : [.5 * width, .5 * height];
let area3Center = (isHorizontal) ? [.75 * width, .5 * height] : [.5 * width, .75 * height];
let disks = [];
let diskInc = 1;

const disksContainer = document.getElementById("disks-container");

function createArea(center, text, url) {
  const circularArea = document.createElement("div");
  circularArea.id = "circularArea" + diskInc;
  circularArea.className = "circularArea";
  const diskLink = document.createElement("a");
  diskLink.href = url;
  diskLink.id = "disk-link" + diskInc;
  diskLink.className = "disk-link";

  const arrowSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  arrowSVG.setAttributeNS(null, "class", "arrowSVG");
  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  arrowSVG.appendChild(arrow);
  arrowSVG.style.width = '20px';
  arrowSVG.style.height = '20px';
  arrowSVG.style.left = center[0] - diskDiameter / 2 + "px";
  arrowSVG.style.top = center[1] - diskDiameter / 2 + "px";
  arrow.id = "arrow" + diskInc;
  arrow.setAttributeNS(null, "class", "arrow");
  arrow.setAttributeNS(null, "points", "0.5 0.82 0.5 18.74 17.81 9.87 0.5 0.82");

  const disk = document.createElement('div');
  disk.className = "disk";
  disk.id = "disk" + diskInc;
  disk.style.left = center[0] - diskDiameter / 2 + "px";
  disk.style.top = center[1] - diskDiameter / 2 + "px";
  disk.style.width = diskDiameter + "px";
  disk.style.height = diskDiameter + "px";

  const diskTitle = document.createElement("h2");
  diskTitle.id = "disk-title" + diskInc;
  diskTitle.className = "disk-title";
  diskTitle.style.fontSize = diskDiameter / 10 + 'px';
  const textNode = document.createTextNode(text);
  diskTitle.appendChild(textNode);

  disksContainer.appendChild(circularArea);
  circularArea.appendChild(diskLink);
  
  circularArea.appendChild(arrowSVG);
  diskLink.appendChild(disk);
  disk.appendChild(diskTitle);
  

  diskInc ++;
}

const bg = document.createElement('div');
bg.className = "bg";

setTimeout(function() {
  const area1 = createArea(area1Center, "HOTEL PARIMIS", "https://parimis.benoitclement.fr");
}, 500);
setTimeout(function() {
  const area2 = createArea(area2Center, "COMPÉTENCES", "../cv2019");
}, 1000);
setTimeout(function() {
  const area3 = createArea(area3Center, "AUTRES...", "https://github.com/benoitclement");
}, 1500);



