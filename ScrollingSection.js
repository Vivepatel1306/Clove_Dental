
  const container = document.getElementById('auto-scroll');
  let isPaused = false;

  function autoScroll() {
    if (!isPaused) {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  // Pause on hover
  container.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  // Resume on mouse leave
  container.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  autoScroll(); // Start auto-scrolling
