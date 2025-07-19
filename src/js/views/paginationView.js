//Proyecto: Forkify Curso Javascript 2 Tec Milenio
// Implementando el modelo MVC para la aplicación Forkify
// Descripción: Este es el modulo de la aplicación Forkify, que se encarga de hacer la paginación de los resultados de búsqueda
// Repositorio: https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez
// email: bmjimenez@hotmail.com

import View from './view.js';
import icons from 'url:../../img/icons.svg';

// Clase PaginationView que maneja la paginación de los resultados de búsqueda
// Esta clase hereda de la clase View para reutilizar métodos comunes de renderización
// y manejo de errores. Se encarga de renderizar los botones de paginación
// y manejar los eventos de clic en los botones de paginación.
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  // Método para renderizar los botones de paginación
  // Este método genera el HTML necesario para los botones de paginación
  // y lo inserta en el contenedor de paginación.
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log('GotoPage', `${goToPage}`);
      handler(goToPage);
    });
  }
  // Método para generar el HTML de los botones de paginación
  // Este método toma los datos de paginación y genera el HTML correspondiente
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    //console.log('Total de paginas', `${numPages}`);


    // Página 1, y hay más
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Última página
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }

    // Página intermedia
    if (curPage < numPages) {
      return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Solo una página
    return '';
  }
}// termina la clase PaginationView

// Exportando una instancia de PaginationView para que pueda ser utilizada en otras partes de la aplicación
// Esto permite que la vista de paginación sea reutilizable y se pueda acceder a sus métodos y
// propiedades desde otras partes del código, como el controlador principal de la aplicación.
export default new PaginationView();
