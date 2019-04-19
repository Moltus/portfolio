const diskList = document.getElementsByClassName('circular-area');
console.log(diskList);
let diskIndex = 0;

if (isHorizontal) {
  const scrollLeft = document.getElementById("scroll-arrow-left");
  scrollLeft.addEventListener('click', function() {
    diskList[diskIndex + 3].style.display = "block";
    diskList[diskIndex].style.display = "none";
    diskIndex += 1;
    for (let i of diskList) {
      // i.style.transform = `translateX(${-width * .25} px)`;
      i.style.left = -diskIndex * width * .25 + "px";
    }
  })

  const scrollRight = document.getElementById("scroll-arrow-right");
  scrollRight.addEventListener('click', function() {
    diskList[diskIndex + 3].style.display = "none";
    diskList[diskIndex].style.display = "block";
    diskIndex -= 1;
    for (let i of diskList) {
      i.style.left = diskIndex * width * .25 + "px";
    }
  })
}