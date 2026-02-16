const category = document.getElementById('categories');
const parentLiItems = category.querySelectorAll('li.item');
console.log('Number of categories: ', parentLiItems.length);
parentLiItems.forEach(liItem => {
  const h2 = liItem.querySelector('h2');
  console.log('Category: ', h2.textContent);
  const liItems = liItem.querySelectorAll('li');
  console.log('Elements: ', liItems.length);
})