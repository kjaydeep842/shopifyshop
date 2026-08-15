/* 
  VALERIA & CO. - Shop The Look Hotspot Handler
*/

document.addEventListener('DOMContentLoaded', () => {
  const hotspots = document.querySelectorAll('.shop-look__hotspot');
  
  hotspots.forEach(spot => {
    spot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = spot.dataset.targetPopover;
      const popover = document.getElementById(targetId);

      // Close all other popovers
      document.querySelectorAll('.shop-look__popover').forEach(p => {
        if (p !== popover) p.classList.remove('is-active');
      });

      if (popover) {
        popover.classList.toggle('is-active');
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.shop-look__popover').forEach(p => p.classList.remove('is-active'));
  });
});
