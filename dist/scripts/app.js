
let width = window.innerWidth;
let height = window.innerHeight;
let isHorizontal = width > height;

(function () {

  var timeout = null,
      delay = 250; // How long to wait (in ms) before deciding resize is complete

   window.onresize = function () {
      // Clear previous timeout to indicate resizing is still occurring
      window.clearTimeout(timeout);

      timeout = window.setTimeout(function () {
          // Resizing is (probably) done, now we can reload the document
          location.reload();
      }, delay);
  };
})();