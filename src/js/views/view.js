//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el modelo de la aplicación Forkify, que se encarga de manejar
// las vistas de la aplicación, incluyendo la búsqueda de recetas, la paginación
// y la visualización de recetas.
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-18


//Importa iconos y la clase View
import icons from 'url:../../img/icons.svg'; 
//import View from './view.js';

// Clase View que maneja la renderización de datos en el DOM
// Esta clase se encarga de renderizar los datos en el DOM, mostrar errores y spinner
// y manejar eventos relacionados con la vista.
// Utiliza iconos SVG para mostrar iconos en la interfaz de usuario.
// La clase View es una clase base (padre) que puede ser extendida por otras vistas específicas,
// como RecipeView o SearchView, para reutilizar métodos comunes de renderización y manejo de errores.
// Esta clase proporciona métodos para renderizar datos, mostrar errores y mensajes,
// y renderizar un spinner mientras se cargan los datos.
// También proporciona un método para limpiar el contenido previo antes de renderizar nuevos datos.
// La clase View es una parte fundamental de la arquitectura de la aplicación, ya que
// permite separar la lógica de negocio de la lógica de presentación, facilitando el mantenimiento
// y la escalabilidad de la aplicación.
// Esta clase es utilizada por otras vistas para renderizar datos en el DOM y manejar eventos relacionados
// con la vista, como la búsqueda de recetas o la visualización de recetas específicas.
export default class View {
  _data;

  // Método para renderizar los datos en el DOM
  // Este método toma los datos y genera el HTML correspondiente utilizando el método _generateMarkup.
  // Luego, limpia el contenido previo del elemento padre y agrega el nuevo HTML al principio.
  // Si los datos son inválidos o no existen, se renderiza un mensaje de error
  // utilizando el método renderError.
  // Si los datos son válidos, se renderiza el HTML generado por _generateMarkup
  // y se limpia el contenido previo del elemento padre antes de agregar el nuevo HTML.
  // Este método es utilizado por las vistas para renderizar datos en el DOM y actualizar la
  // interfaz de usuario con la información más reciente.
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Método para limpiar el contenido previo del elemento padre
  _clear() {
    this._parentElement.innerHTML = '';
  }

  // Método para renderizar un spinner mientras se cargan los datos
  // Este método genera un HTML para un spinner de carga y lo inserta en el elemento
  // padre antes de renderizar los datos. Se utiliza para indicar al usuario que los datos
  // están siendo cargados y que debe esperar.
  // El spinner se muestra mientras se realizan operaciones asíncronas, como la carga de
  // datos desde una API o base de datos.
  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Método para renderizar un mensaje de error
  // Este método genera un HTML para un mensaje de error y lo inserta en el elemento
  // padre. 
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Método para renderizar un mensaje de éxito
  // Este método genera un HTML para un mensaje de éxito y lo inserta en el elemento
  // padre. 
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
