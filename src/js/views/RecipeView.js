// views/RecipeView.js
import icons from 'url:../../img/icons.svg'; // Usar parcel u otra herramienta para íconos SVG
import {Fraction_function}  from '..//helpers.js'; // requiere: npm install fracty

class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
  #errorMessage = 'We could not find that recipe. Please try another one!';

  render(data) {
     if (!data) return this.renderError();
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

renderError(message = this.#errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => 
      window.addEventListener(ev, handler)
    );
  }

#clear() {
    this.#parentElement.innerHTML = '';
  }

  // Método para renderizar la receta
    #generateMarkup() {
        return `
        <figure class="recipe__fig">
            <img src="${this.#data.image}" alt="${this.#data.title}" class="recipe__img" />
            <h1 class="recipe__title"><span>${this.#data.title}</span></h1>
        </figure>
    
        <div class="recipe__details">
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this.#data.cookTime}</span>
            <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this.#data.servings}</span>
            <span class="recipe__info-text">servings</span>
            </div>
        </div>
    
        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            ${this.#data.ingredients.map(ing => `
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                    <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${ing.quantity ? new Fraction_function(ing.quantity).toString() : ''}</div>
                <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit || ''}</span>
                    ${ing.description}
                </div>
                </li>`).join('')}
            </ul>
        </div>
    
        <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
            This recipe was designed by
            <span class="recipe__publisher">${this.#data.publisher}</span>. Check it out!
            </p>
            <a class="btn--small recipe__btn" href="${this.#data.sourceUrl}" target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>   
        </svg>
            </a>    
        </div>
        `;  
    } 

    #generateIngredientMarkup(ing) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">
          ${ing.quantity ? this.#formatQuantity(ing.quantity) : ''}
        </div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit || ''}</span>
          ${ing.description}
        </div>
      </li>
    `;
  }


#formatQuantity(qty) {
    try {
      return new Fraction_function(qty).toString();
    } catch (e) {
      return qty;
    }
  }
}

export default new RecipeView();