//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Esta es la vista de resultados de búsqueda de recetas en la aplicación Forkify.
// Esta vista se encarga de renderizar los resultados de búsqueda obtenidos del modelo,
// mostrando una lista de recetas que coinciden con la consulta del usuario.
// Utiliza la clase View para manejar la renderización de los resultados y la clase icons
// para mostrar iconos SVG en la interfaz de usuario.
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-06

// Importando la clase View y los iconos SVG
import View from './view.js';
import icons from 'url:../../img/icons.svg';

// ResultsView hereda de la clase View para reutilizar métodos comunes de renderización
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  // Método para renderizar los resultados de búsqueda
  // Este método toma los datos de resultados de búsqueda y genera el HTML correspondiente
  // utilizando el método _generateMarkupPreview. Luego, limpia el contenido previo del elemento
  // padre y agrega el nuevo HTML al principio.

  _generateMarkup() {
    if (!this._data || this._data.length === 0) {
      return this.renderError(this._errorMessage)};
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated"></div>
          </div>
        </a>
      </li>`;
  }
}

// Exportando una instancia de ResultsView para que pueda ser utilizada en otras partes de la aplicación
// Esto permite que la vista de resultados sea reutilizable y se pueda acceder a sus métodos y
// propiedades desde otras partes del código, como el controlador principal de la aplicación.
// Al exportar una instancia, se asegura que siempre se utilice la misma instancia de ResultsView
// en toda la aplicación, lo que facilita el manejo del estado y la renderización de resultados.
// Esto es útil para mantener la consistencia en la interfaz de usuario y evitar problemas de
// duplicación de vistas o resultados.
// Además, al exportar una instancia, se puede acceder a los métodos de la clase ResultsView
// directamente desde el controlador, lo que simplifica la lógica de renderización de resultados
// y mejora la legibilidad del código.
export default new ResultsView();