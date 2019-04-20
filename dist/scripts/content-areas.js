// TODO : tweak values for responsive... bigger disks for small screens
let disksOnScreen = 3;
let diskDiameter = (isHorizontal) ? .6 * width / disksOnScreen : .6 * height / disksOnScreen;
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
  circularArea.id = "circular-area" + diskInc;
  circularArea.className = "circular-area";
  circularArea.style.position = "absolute";
  circularArea.style.left = "0";
  circularArea.style.top = "0";
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
    scrollArrowLeft.setAttributeNS(null, "viewbox", "0 0 100 100");
    scrollArrowLeft.setAttributeNS(null, "height", "100px");
    scrollArrowLeft.setAttributeNS(null, "width", "100px");
    scrollArrowLeft.id = "scroll-arrow-left";
    const arrowLeft = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowLeft.setAttributeNS(null, "points", "68,19.1 29.7,49.1 68,79.1 69.2,77.6 32.9,49.1 69.2,20.6 68,19.1 ");

    scrollArrowLeft.style.left = .04 * width - 50 + "px";
    scrollArrowLeft.style.top = .5 * height - 50 + "px";
    scrollArrowLeft.appendChild(arrowLeft);
    disksContainer.appendChild(scrollArrowLeft);
    scrollArrowLeft.style.transform = `scale(${width/1500})`;
    scrollArrowLeft.style.opacity = "0";


    // when screen is horizontal create icon for scrolling right
    const scrollArrowRight = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scrollArrowRight.setAttributeNS(null, "class", "scroll-arrow");
    scrollArrowRight.setAttributeNS(null, "viewbox", "0 0 100 100");
    scrollArrowRight.setAttributeNS(null, "height", "100px");
    scrollArrowRight.setAttributeNS(null, "width", "100px");
    scrollArrowRight.id = "scroll-arrow-right";
    const arrowRight = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowRight.setAttributeNS(null, "points", "30.4,20.6 66.7,49.1 30.4,77.6 31.6,79.1 69.9,49.1 31.6,19.1 30.4,20.6 ");

    scrollArrowRight.style.right = .04 * width - 50 + "px";
    scrollArrowRight.style.top = .5 * height - 50 + "px";
    scrollArrowRight.appendChild(arrowRight);
    disksContainer.appendChild(scrollArrowRight);
    scrollArrowRight.style.transform = `scale(${width/1500})`;
    scrollArrowRight.style.opacity = "0";

    return [scrollArrowLeft, scrollArrowRight];

  } else {
    // when screen is vertical create icon for scrolling top
    const scrollArrowTop = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scrollArrowTop.setAttributeNS(null, "class", "scroll-arrow");
    scrollArrowTop.setAttributeNS(null, "viewbox", "0 0 100 100");
    scrollArrowTop.setAttributeNS(null, "height", "100px");
    scrollArrowTop.setAttributeNS(null, "width", "100px");
    scrollArrowTop.id = "scroll-arrow-top";
    const arrowTop = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowTop.setAttributeNS(null, "points", "22.4,64.1 50.8,36.5 79.3,64.1 80.8,63.2 50.8,34.1 20.8,63.2 22.4,64.1 ");

    scrollArrowTop.style.left = .5 * width - 50 + "px";
    scrollArrowTop.style.top = .04 * height - 50 + "px";
    scrollArrowTop.appendChild(arrowTop);
    disksContainer.appendChild(scrollArrowTop);
    scrollArrowTop.style.transform = `scale(${height/1500})`;
    scrollArrowTop.style.opacity = "0";


    // when screen is vertical create icon for scrolling bottom
    const scrollArrowBottom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scrollArrowBottom.setAttributeNS(null, "class", "scroll-arrow");
    scrollArrowBottom.setAttributeNS(null, "viewbox", "0 0 100 100");
    scrollArrowBottom.setAttributeNS(null, "height", "100px");
    scrollArrowBottom.setAttributeNS(null, "width", "100px");
    scrollArrowBottom.id = "scroll-arrow-bottom";
    const arrowBottom = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowBottom.setAttributeNS(null, "points", "23.1,34.1 51.5,61.7 80,34.1 81.5,35 51.5,64.1 21.5,35 23.1,34.1 ");

    scrollArrowBottom.style.left = .5 * width - 50 + "px";
    scrollArrowBottom.style.bottom = .04 * height - 50 + "px";
    scrollArrowBottom.appendChild(arrowBottom);
    disksContainer.appendChild(scrollArrowBottom);
    scrollArrowBottom.style.transform = `scale(${height/1500})`;
    scrollArrowBottom.style.opacity = "0";

    return [scrollArrowTop, scrollArrowBottom];
  }
}

const bg = document.createElement('div');
bg.className = "bg";

const scrollArrows = createScrollArrows();

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
  area4.style.display = "none";
  scrollArrows[0].style.opacity = "1";
  scrollArrows[1].style.opacity = "1";
  
}, 2000);



