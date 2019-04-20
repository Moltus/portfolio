// we get "disks" array and "width" (window width) from content-areas.js
console.log(disks);

if (isHorizontal) {
  const scrollLeft = document.getElementById("scroll-arrow-left");
  scrollLeft.addEventListener('click', function() {
    disks[0].style.display = "block";
    // disks[3].style.display = "none";
    disks[0].style.opacity = "1";
    disks[3].style.opacity = "0";

    disks.splice(0, 0, disks.splice(disks.length-1, 1)[0]);
    console.log(disks);
    
    for (let i in disks) {
      // i.style.transform = `translateX(${-width * .25} px)`;
      console.log(i);
      disks[i].style.left = i * .25 * width - diskDiameter / 2 + "px";
    }
  
  })

  const scrollRight = document.getElementById("scroll-arrow-right");
  scrollRight.addEventListener('click', function() {
    disks[1].style.display = "none";
    disks[4].style.display = "block";

    disks.splice(disks.length-1, 0, disks.splice(0, 1)[0]);
    console.log(disks);
    for (let i in disks) {
      disks[i].style.left = i * .25 * width - diskDiameter / 2 + "px";
    }
  })
}