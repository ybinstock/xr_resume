AFRAME.registerComponent('rotate-hologram', {
  init: function () {
    this.el.addEventListener('click', function () {
      var hologram = document.getElementById('hologram');
      var hologramCurrentRotation = hologram.getAttribute('rotation');
      console.log('hologram rotation starts', hologramCurrentRotation);
      hologram.setAttribute('rotation', {x: 0, y: (hologramCurrentRotation.y + 90), z: 0});
      console.log('holgram rotation ends', hologramCurrentRotation);
    });
  }
});
