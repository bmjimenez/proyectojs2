
//Proyecto: Forkify Curso Javascript 2 Tec Milenio
//Autor: Jose Bernardo Moya Jimenez 
//email: bmjimenez@hotmail.com
//Descripción: Esta clase genera la Vista de los resultados de busqueda 
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-17

// Esta clase SearchView se encarga de manejar la vista de búsqueda en la aplicación Forkify.
// Permite obtener la consulta de búsqueda del usuario y manejar el evento de búsqueda.
// Utiliza el patrón de diseño de vista para separar la lógica de la interfaz de usuario de
// la lógica de negocio, facilitando el mantenimiento y la escalabilidad de la aplicación.
class SearchView {
  _parentEl = document.querySelector('.search');

  // Método para obtener la consulta de búsqueda del usuario
  // Este método busca el valor del campo de entrada de búsqueda y lo devuelve.
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Método para limpiar el campo de entrada de búsqueda
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Método para renderizar un mensaje de error en la vista de búsqueda
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}// termina la clase searchView

// Exportando una instancia de SearchView para que pueda ser utilizada en otras partes de la aplicación
export default new SearchView();