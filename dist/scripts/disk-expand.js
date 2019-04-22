for (let i of disks) {
  i.addEventListener('click', function() {
    if (!i.classList.contains('expand')) {
      i.classList.add('expand');
      for (let j of disks) {
        if (j != i) {
          j.classList.remove('expand');
        }
      }
    }
  })
}

document.addEventListener("click", (evt) => {
  let activeDisk;
  for (let i of disks) {
    if (i.classList.contains('expand')) {
      activeDisk = i;
    }
  }
  if (!activeDisk) return;
  // const flyoutElement = document.getElementById("flyout-example");
  let targetElement = evt.target; // clicked element

  do {
      if (targetElement == activeDisk) {
          // This is a click inside. Do nothing, just return.
          return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  activeDisk.classList.remove('expand');
});