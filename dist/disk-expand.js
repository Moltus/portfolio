for (let i of disks) {
	i.addEventListener('click', function (evt) {
		if (!i.classList.contains('expand')) {
			evt.preventDefault();
			i.classList.add('expand');
			i.classList.remove('shadowed');
			for (let j of disks) {
				if (j != i) {
					j.classList.remove('expand');
					j.classList.add('shadowed');
				}
			}
		}
	});
}

document.addEventListener('click', (evt) => {
	let activeDisk;
	let inactiveDisk = [];
	for (let i of disks) {
		if (i.classList.contains('expand')) {
			activeDisk = i;
		} else inactiveDisk.push(i);
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
	inactiveDisk.map((i) => i.classList.remove('shadowed'));
});
