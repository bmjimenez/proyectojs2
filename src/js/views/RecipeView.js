//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el modelo de la aplicación Forkify, que se encarga de manejar la lógica de negocio, incluyendo la obtención de recetas y su renderizado.
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-16

// Importando iconos SVG y la clase Fraction_function
import icons from 'url:../../img/icons.svg'; // Usar parcel u otra herramienta para íconos SVG
import {Fraction_function}  from '..//helpers.js'; // requiere: npm install fracty
import View from './view.js'

// Clase RecipeView se encarga de renderizar la receta en el DOM, mostrar errores y spinner
// y manejar eventos relacionados con la receta.
// RecipeView hereda de la clase View para reutilizar métodos comunes de renderización
// y manejo de errores.
class RecipeView extends View {
  // Seleccionando el elemento del DOM donde se renderizará la receta
  _parentElement = document.querySelector('.recipe');
  _data;
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = 'Recipe loaded successfully!';

  // Método para renderizar la receta en el DOM
  // Este método genera el HTML necesario para mostrar la receta
  // y lo inserta en el contenedor de recetas.
  // Utiliza la función _generateMarkup para crear el HTML de la receta.
  render(data) {
    if (!data || typeof data !== 'object') return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Método para renderizar un spinner mientras se cargan los datos
  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Este método renderiza un mensaje de error en el DOM
  // Se utiliza un template literal para crear el HTML del mensaje de error.
  // El método _clear se utiliza para eliminar el contenido previo antes de renderizar el error
  // y se inserta el nuevo contenido al principio del contenedor de recetas.
  renderError(message = this._errorMessage) {
    if (!message) message = this._errorMessage;
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
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Este método renderiza un mensaje de exito en el DOM
  // Se utiliza un template literal para crear el HTML del mensaje de éxito.
  // El método _clear se utiliza para eliminar el contenido previo antes de renderizar el error
  // y se inserta el nuevo contenido al principio del contenedor de recetas.
  renderMessage(message = this._message) {
    if (!message) message = this._message;
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  // Método para añadir un manejador de eventos para renderizar la receta
  // Este método se utiliza para escuchar eventos de cambio en el hash de la URL
  // y cargar la receta correspondiente cuando el hash cambia.
  // Se utiliza para actualizar la vista de la receta cuando el usuario navega a una receta
  // específica a través de la URL.
  // Se utiliza un bucle forEach para añadir el manejador de eventos a los eventos
  // 'hashchange' y 'load', lo que permite que la receta se cargue
  // tanto al cambiar el hash de la URL como al cargar la página por primera vez.
  // Esto asegura que la receta se renderice correctamente en ambos casos.
  // Se utiliza el método addEventListener para añadir el manejador de eventos.
  // El manejador de eventos se pasa como argumento a este método.
  // Esto permite que el controlador pueda definir la lógica de renderizado de la receta.
  // El manejador de eventos se ejecutará cada vez que ocurra uno de los eventos
  // especificados, lo que permite que la receta se renderice automáticamente
  // cuando el usuario navega a una receta específica.
  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => 
      window.addEventListener(ev, handler)
    );
  }

  // Método para limpiar el contenido del contenedor de recetas
  // Este método se utiliza para eliminar el contenido previo antes de renderizar una nueva receta.
  _clear() {
    this._parentElement.innerHTML = '';
  }

  // Método para renderizar la receta en el DOM
  // Este método genera el HTML necesario para mostrar la receta
  // y lo inserta en el contenedor de recetas.
  // Utiliza la función _generateMarkup para crear el HTML de la receta.
  _generateMarkup() {
  if (!this._data.ingredients || !Array.isArray(this._data.ingredients)) {
    return this.renderError('Ingredientes no disponibles');
  }

  return `
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title"><span>${this._data.title}</span></h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
        <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
        </div>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateIngredientMarkup).join('')}
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        This recipe was designed by
        <span class="recipe__publisher">${this._data.publisher}</span>. Check it out!
        </p>
        <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>   
        </svg>
        </a>    
    </div>
  `;
}

  // Método privado para generar el HTML de un ingrediente
  // Este método se utiliza para crear el HTML de cada ingrediente de la receta.
  // Utiliza la función _formatQuantity para formatear la cantidad del ingrediente.
  // Este método es llamado dentro de _generateMarkup para generar la lista de ingredientes.
  // Se utiliza un template literal para crear el HTML de cada ingrediente.
  // Cada ingrediente se muestra con su cantidad, unidad y descripción.
  _generateIngredientMarkup(ing) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">
          ${ing.quantity ? new Fraction_function(ing.quantity).toString() : ''}
        </div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit || ''}</span>
          ${ing.description}
        </div>
      </li>
    `;
  }

// Método privado para formatear la cantidad de un ingrediente
// Este método utiliza la clase Fraction_function para convertir la cantidad a una fracción
// Si la cantidad no es un número válido, se devuelve la cantidad original.
_formatQuantity(qty) {
    try {
      return new Fraction_function(qty).toString();
    } catch (e) {
      return qty;
    }
  }
}

// Exportar una instancia de RecipeView para ser utilizada en el controlador
// Esto permite que el controlador pueda acceder a los métodos de la clase RecipeView
// y renderizar recetas, spinner y errores en el DOM.
// Se utiliza el patrón Singleton para asegurar que solo haya una instancia de RecipeView.
// Esto es útil para mantener un único punto de acceso a la vista de recetas en toda la aplicación.
// Esto evita la creación de múltiples instancias y asegura que los cambios en la vista se reflecten en un solo lugar.
// Se puede importar esta instancia en el controlador y utilizar sus métodos directamente.
export default new RecipeView();