// TODO : tweak values for responsive... bigger disks for small screens
let diskTotal = 3;
let diskDiameter = (isHorizontal) ? .6 * width / diskTotal : .6 * height / diskTotal;
// TODO : make a function to return area center for each disk depending on how many disks are there
let area1Center = (isHorizontal) ? [.25 * width, .5 * height] : [.5 * width, .25 * height];
let area2Center = (isHorizontal) ? [.5 * width, .5 * height] : [.5 * width, .5 * height];
let area3Center = (isHorizontal) ? [.75 * width, .5 * height] : [.5 * width, .75 * height];
let area4Center = (isHorizontal) ? [width, .5 * height] : [.5 * width, height];
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

  const diskArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  diskArrow.setAttributeNS(null, "class", "diskArrow");
  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  diskArrow.appendChild(arrow);
  diskArrow.style.width = '40px';
  diskArrow.style.height = '20px';
  diskArrow.style.left = center[0] - diskDiameter / 2 + "px";
  diskArrow.style.top = center[1] - diskDiameter / 2 + "px";
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
  
  diskLink.appendChild(diskArrow);
  diskLink.appendChild(disk);
  disk.appendChild(diskTitle);

  diskInc ++;

  return circularArea;
}

function createScrollArrows() {
  if (isHorizontal) {

    // when screen is horizontal create icon for scrolling left
    const scrollArrowLeft = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scrollArrowLeft.setAttributeNS(null, "class", "scroll-arrow");
    scrollArrowLeft.setAttributeNS(null, "viewbox", "0 0 512 512");
    scrollArrowLeft.setAttributeNS(null, "height", "512px");
    scrollArrowLeft.setAttributeNS(null, "width", "512px");
    scrollArrowLeft.id = "scroll-arrow-left";
    const arrowLeft = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowLeft.setAttributeNS(null, "points", "318.8,445.2 129.6,256 318.8,66.8 361.2,109.2 214.4,256 361.2,402.8  ");

    scrollArrowLeft.style.left = .1 * width;
    scrollArrowLeft.style.top = .5 * height;
    scrollArrowLeft.appendChild(arrowLeft);
    disksContainer.appendChild(scrollArrowLeft);


    // when screen is horizontal create icon for scrolling right
    const scrollArrowRight = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scrollArrowRight.setAttributeNS(null, "class", "scrollArrow");
    scrollArrowRight.id = "scroll-arrow-right";
    const arrowRight = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowRight.setAttributeNS(null, "d", "M1280 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm160 0q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z");
  }
}

const bg = document.createElement('div');
bg.className = "bg";

setTimeout(function() {
  const area1 = createArea(area1Center, "HOTEL PARIMIS", "https://parimis.benoitclement.fr");
}, 500);
setTimeout(function() {
  const area2 = createArea(area2Center, "MIND-MAPPING", "../cv2019");
}, 1000);
setTimeout(function() {
  const area3 = createArea(area3Center, "VEVILLE LOCATIONS", "../veville");
}, 1500);
setTimeout(function() {
  const area4 = createArea(area4Center, "AUTRES TRAVAUX", "https://github.com/benoitclement");
  area4.style.opacity = "0";
  createScrollArrows();
}, 2000);



