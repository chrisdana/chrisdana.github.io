window.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('#proproject-mobile-selector');

  if (!selector) {
    return;
  }

  const panels = Array.from(selector.querySelectorAll('[data-proproject-panel]'));
  const indicators = Array.from(selector.querySelectorAll('[data-proproject-selector-index]'));
  const previousButton = selector.querySelector('[data-proproject-selector-prev]');
  const nextButton = selector.querySelector('[data-proproject-selector-next]');
  let activeIndex = panels.findIndex((panel) => !panel.hidden);

  if (panels.length === 0) {
    return;
  }

  if (activeIndex < 0) {
    activeIndex = 0;
  }

  const showProject = (nextIndex) => {
    activeIndex = (nextIndex + panels.length) % panels.length;

    panels.forEach((panel, index) => {
      panel.hidden = index !== activeIndex;
    });

    indicators.forEach((indicator, index) => {
      const isActive = index === activeIndex;
      indicator.classList.toggle('active', isActive);
      indicator.toggleAttribute('aria-current', isActive);
    });
  };

  previousButton?.addEventListener('click', () => {
    showProject(activeIndex - 1);
  });

  nextButton?.addEventListener('click', () => {
    showProject(activeIndex + 1);
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      showProject(Number(indicator.dataset.proprojectSelectorIndex));
    });
  });

  showProject(activeIndex);
});
