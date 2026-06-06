window.addEventListener('DOMContentLoaded', () => {
  const mobileGalleries = Array.from(document.querySelectorAll('[data-mobile-gallery]'));
  const updateMobileGalleryHint = (gallery) => {
    const strip = gallery.querySelector('.project-mobile-shot-strip');

    if (!strip || strip.offsetParent === null) {
      return;
    }

    const maxScrollLeft = strip.scrollWidth - strip.clientWidth;
    const scrollLeft = Math.max(0, strip.scrollLeft);
    const canScroll = maxScrollLeft > 1;

    gallery.classList.toggle('can-scroll-left', canScroll && scrollLeft > 1);
    gallery.classList.toggle('can-scroll-right', canScroll && scrollLeft < maxScrollLeft - 1);
  };
  const updateMobileGalleryHints = () => {
    mobileGalleries.forEach(updateMobileGalleryHint);
  };

  mobileGalleries.forEach((gallery) => {
    const strip = gallery.querySelector('.project-mobile-shot-strip');

    strip?.addEventListener('scroll', () => {
      updateMobileGalleryHint(gallery);
    }, { passive: true });
  });

  window.addEventListener('resize', updateMobileGalleryHints);
  document.addEventListener('shown.bs.collapse', updateMobileGalleryHints);

  const selector = document.querySelector('#proproject-mobile-selector');

  if (!selector) {
    updateMobileGalleryHints();
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

    requestAnimationFrame(updateMobileGalleryHints);
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
  updateMobileGalleryHints();
});
