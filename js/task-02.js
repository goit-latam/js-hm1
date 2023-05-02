// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const ingredientsListEl = document.querySelector('#ingredients');

// const makeIngredientsList = ingredients.map(ingredient => {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.textContent = ingredient;
//   ingredientsEl.classList.add('item');
//   return ingredientsEl;
// });
// ingredientsListEl.append(...makeIngredientsList);

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const ingredientsList = document.querySelector('#ingredients');

// const listItemsHtml = ingredients.map(ingredients => {
//   const li = document.createElement('li');
//   li.textContent = ingredients;
//   li.classList.add('item');
//   return li;
// });

// ingredientsList.append(...listItemsHtml);

const ulIngredients = document.querySelector(`#ingredients`);
const liArray = ingredients.map(ingredients => {
  const li = document.createElement(`li`);
  li.textContent = ingredients;
  li.classList.add(`item`);
  return li;
});
ulIngredients.append(...liArray);
