const billingToggle = document.querySelector('[data-toggle="billing"]');

if (billingToggle) {
  billingToggle.addEventListener('click', () => {
    billingToggle.classList.toggle('active');
    const isMonthly = billingToggle.classList.contains('active');
    document.querySelectorAll('.price[data-price-year]').forEach((priceEl) => {
      const year = priceEl.dataset.priceYear;
      const month = priceEl.dataset.priceMonth;
      priceEl.innerHTML = `$${isMonthly ? month : year} <span>/ ${isMonthly ? 'month' : 'year'}</span>`;
    });
  });
}

const menuButtons = document.querySelectorAll('.menu-item[data-target]');
const tabPanels = document.querySelectorAll('.tab-panel');

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    menuButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const target = button.dataset.target;
    tabPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove('open');
      }
    });
    item.classList.toggle('open');
  });
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('in-view'));
}
