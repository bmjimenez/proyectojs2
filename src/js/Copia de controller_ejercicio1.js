//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el controlador principal de la aplicación Forkify, que se encarga de
// manejar la lógica de la aplicación, incluyendo la obtención de recetas y su renderizado.
//Repositorio:
//Fecha: 2025-07-06


const recipeContainer = document.querySelector('.recipe');
import  icons  from 'url:../img/icons.svg'; // Importando los iconos SVG

// Funcion para manejar el timeout de las peticiones
// Esta función devuelve una promesa que se rechaza después de un tiempo específico
// Sirve para manejar casos en los que una petición tarda demasiado tiempo en completarse.
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
export async function showRecipe() {
  try {
    // b. Esperar respuesta del fetch
    const resp = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');

    // Convertir respuesta a JSON
    const data = await resp.json();

    //Imprimir resp y data en consola
    console.log('Respuesta completa (resp):', resp);
    console.log('Datos convertidos a JSON (data):', data);

    // Renderizar spinner
    renderSpinner(recipeContainer);

    //Crear variable recipe a partir de data.data
    let recipe = data.data.recipe;

    //Desestructurar recipe
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    //Imprimir recipe desestructurado
    console.log('Recipe desestructurado:', recipe);

    // Generar HTML con template string
    const markup = `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(ing => {
            return `
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity ?? ''}</div>
                <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit ?? ''}</span>
                  ${ing.description}
                </div>
              </li>
            `;
          }).join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${recipe.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;

  // Mostrar en el HTML
  if (recipeContainer) {
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
} else {
    console.error(`Contenedor ${recipeContainer} no encontrado en el DOM`);
}
  

  } catch (error) {
    alert('Ocurrió un error: ' + error);
  }
}

function renderSpinner(parentEI) {
  const markup = `
      <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
         `;
  
  if (parentEI){
    parentEI.innerHTML = '';
  parentEI.insertAdjacentHTML('afterbegin', markup);}
  else {
    console.error(`Elemento padre ${parentEi} no encontrado en el DOM`);
  } 
}