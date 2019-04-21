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
