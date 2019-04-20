// we get "disks" array and "width" (window width) from content-areas.js
console.log(disks);

if (isHorizontal) {
  const scrollLeft = document.getElementById("scroll-arrow-left");
  scrollLeft.addEventListener('click', function() {
    disks[0].style.display = "block";
    disks[3].style.display = "none";
    disks.splice(0, 0, disks.splice(disks.length-1, 1)[0]);
    console.log(disks);
    for (let i in disks) {
      // i.style.transform = `translateX(${-width * .25} px)`;
      console.log(i);
      disks[i].style.left = i * .25 * width + "px";
    }
  })

  const scrollRight = document.getElementById("scroll-arrow-right");
  scrollRight.addEventListener('click', function() {
    disks[diskIndex].style.display = "none";
    disks[diskIndex + 3].style.display = "block";
    for (let i of disks) {
      i.style.left = - (diskIndex - 1) * width * .25 + "px";
    }
  })
}