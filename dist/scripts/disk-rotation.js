// we get "disks" array and "width" (window width) from content-areas.js
// console.log(disks);

if (isHorizontal) {
  const scrollLeft = document.getElementById("scroll-arrow-left");
  scrollLeft.addEventListener('click', function() {
    if (scrollLeft.classList.contains('scrolling')) return;
    else {
      scrollLeft.classList.add("scrolling");
      console.log("bonjour");
      setTimeout(() => {
        scrollLeft.classList.remove("scrolling");
      }, 500);

      disks[0].style.opacity = "1";
      disks[3].style.opacity = "0";

      disks.splice(0, 0, disks.splice(disks.length-1, 1)[0]);
      
      for (let i in disks) {
        // i.style.transform = `translateX(${-width * .25} px)`;
        disks[i].style.left = i * .25 * width - diskDiameter / 2 + "px";
      }
    }
  });

  const scrollRight = document.getElementById("scroll-arrow-right");
  scrollRight.addEventListener('click', function() {
    if (scrollRight.classList.contains('scrolling')) return;
    else {
      scrollRight.classList.add('scrolling');
      setTimeout(() => {
        scrollRight.classList.remove('scrolling');
      }, 500);
      disks[1].style.opacity = "0";
      disks[4].style.opacity = "1";

      disks.splice(disks.length-1, 0, disks.splice(0, 1)[0]);
      for (let i in disks) {
        disks[i].style.left = i * .25 * width - diskDiameter / 2 + "px";
      }
    }
  })
} else {
  const scrollTop = document.getElementById("scroll-arrow-top");
  scrollTop.addEventListener('click', function() {
    if (scrollTop.classList.contains('scrolling')) return;
    else {
      scrollTop.classList.add('scrolling');
      setTimeout(() => {
        scrollTop.classList.remove('scrolling');
      }, 500);
      disks[0].style.opacity = "1";
      disks[3].style.opacity = "0";

      disks.splice(0, 0, disks.splice(disks.length-1, 1)[0]);
      
      for (let i in disks) {
        // i.style.transform = `translateX(${-width * .25} px)`;
        disks[i].style.top = i * .25 * height - diskDiameter / 2 + "px";
      }
    }
  
  })

  const scrollBottom = document.getElementById("scroll-arrow-bottom");
  scrollBottom.addEventListener('click', function() {
    if (scrollBottom.classList.contains('scrolling')) return;
    else {
      scrollBottom.classList.add('scrolling');
      setTimeout(() => {
        scrollBottom.classList.remove('scrolling');
      }, 500);
      disks[1].style.opacity = "0";
      disks[4].style.opacity = "1";

      disks.splice(disks.length-1, 0, disks.splice(0, 1)[0]);
      for (let i in disks) {
        disks[i].style.top = i * .25 * height - diskDiameter / 2 + "px";
      }
    }
  })
}