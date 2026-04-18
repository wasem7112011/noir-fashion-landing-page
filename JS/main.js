const filterButtons = document.querySelectorAll('.collection .nav li');
const cards = document.querySelectorAll('.collection .card');
const formButton;

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filterValue = btn.dataset.filter;
    
    cards.forEach(card => {
      const cardCategory = card.dataset.category;
      
      if (filterValue === 'all' || filterValue === cardCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});