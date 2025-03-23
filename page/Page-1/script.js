document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-button');
  const productCards = document.querySelectorAll('.product-card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.dataset.category;

      productCards.forEach(card => {
        if (selectedCategory === 'all') {
          card.setAttribute('data-hidden', 'false');
        } else {
          const cardCategories = card.dataset.categories.split(',');
          card.setAttribute('data-hidden', !cardCategories.includes(selectedCategory));
        }
      });
    });
  });
});