'use strict';

const totalCategory = document.querySelectorAll('.item');
console.log('Number of categories', totalCategory.length);

const categoryList = document.querySelectorAll('#categories > li ');
const categoryArray = [];
categoryList.forEach(element => {
  console.log(
    `Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`,
  );
});


//TAMBIEN PUEDE SER 


// const refs = {
//   categoriesRef: document.querySelector('#categories'),
// };

// const categoryItems = [...refs.categoriesRef.children];

// console.log(`Number of categories: ${categoryItems.length}`);

// categoryItems.forEach(el => {
//   const elements = el.querySelectorAll('li');
//   console.log(`Category: ${el.firstElementChild.textContent}`);
//   console.log(`Elements: ${elements.length}`);
// });
