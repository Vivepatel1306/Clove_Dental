
  const scrollContainer = document.getElementById("scrollContainer");
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      scrollContainer.scrollBy({ left: 1, behavior: 'smooth' });

      // Reset to start if fully scrolled
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 1500); // speed of scroll
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  scrollContainer.addEventListener('mouseenter', stopAutoScroll);
  scrollContainer.addEventListener('mouseleave', startAutoScroll);

  // Start on load
  startAutoScroll();
