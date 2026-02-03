const billingToggle = document.querySelector('[data-toggle="billing"]');

if (billingToggle) {
  billingToggle.addEventListener('click', () => {
    billingToggle.classList.toggle('active');
    const isMonthly = billingToggle.classList.contains('active');
    document.querySelectorAll('.price[data-price-year]').forEach((priceEl) => {
      const year = priceEl.dataset.priceYear;
      const month = priceEl.dataset.priceMonth;
      priceEl.innerHTML = `¥${isMonthly ? month : year} <span>/ ${isMonthly ? '月' : '年'}</span>`;
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
