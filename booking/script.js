const regions = document.querySelectorAll('.region');
const label = document.getElementById('hoverLabel');

regions.forEach(region => {
  region.addEventListener('mousemove', (e) => {
    label.style.left = `${e.pageX}px`;
    label.style.top = `${e.pageY}px`;
    label.textContent = region.dataset.label;
    label.style.opacity = 1;
  });

  region.addEventListener('mouseleave', () => {
    label.style.opacity = 0;
  });
});
