//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el controlador principal de la aplicación Forkify, que se encarga de
// manejar la lógica de la aplicación, incluyendo la obtención de recetas y su renderizado.
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-19


// Importando las dependencias necesarias
// Importando el modelo y las constantes de configuración
import * as model from './model.js';
import { API_URL, TIMEOUT_SEC } from './config.js'; // Importando las constantes  URL y timeout
import { Fraction_function } from './helpers.js'; // Importando la clase Fraction_function
import { loadSearchResults,getSearchResultsPage}  from './model.js';
import  icons  from 'url:../img/icons.svg'; // Importando los iconos SVG

// Importando las vistas necesarias
import recipeView from './views/RecipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import paginationView from './views/paginationView.js'




// Seleccionando el elemento del DOM donde se renderizará la receta
const recipeContainer = document.querySelector('.recipe');


// Definiendo el controlador de recetas
// Este controlador se encarga de manejar la lógica de las recetas, incluyendo la carga y renderizado de las mismas
// Utiliza la función loadRecipe del modelo para obtener la receta y luego
// renderiza la receta utilizando la vista recipeView
// También maneja errores y muestra mensajes de error si ocurre algún problema al cargar la receta
// La función controlRecipes es asíncrona para manejar operaciones que pueden tardar, como
// la carga de datos desde una API o base de datos.
const controlRecipes = async function() {
  
  try {
    // Obtener el ID de la receta desde el hash de la URL
    const id = window.location.hash.slice(1); 
   
    // Si no hay ID, salir de la función
    if (!id) {return;} 
   
    // Renderizar spinner mientras carga la receta
    recipeView.renderSpinner();

    // Cargar la receta utilizando el modelo
    await model.loadRecipe(id);

    // Renderizar la receta
    recipeView.render(model.state.recipe);
    
    recipeView.renderMessage('Receta cargada correctamente!'); // Mensaje de éxito al cargar la receta
    // Mostrar los datos de la receta en la consola para depuración
    console.log('Receta cargada:', model.state.recipe);

  } catch (err) {
    //Se lanza un error si ocurre un problema al cargar la receta
    console.error(`Error al cargar la receta: ${err}`);
    // Renderizar mensaje de error en la vista recipeView
    // Esto permite mostrar un mensaje de error al usuario en la interfaz de usuario
    // si ocurre un problema al cargar la receta, como un error de red o un ID
    recipeView.renderError(err.message);
    throw err; // Lanzar el error para que sea manejado por el controlador
  }
}

// Definiendo el controlador de búsqueda de resultados
// Este controlador se encarga de manejar la lógica de búsqueda de recetas, incluyendo la carga y
// renderizado de los resultados de búsqueda. Utiliza la función loadSearchResults del modelo
// para obtener los resultados de búsqueda y luego renderiza los resultados utilizando la vista resultsView.
// También maneja la paginación de los resultados y muestra mensajes de error si ocurre algún problema al cargar los resultados de búsqueda.
// La función controlSearchResults es asíncrona para manejar operaciones que pueden tardar, como
// la carga de datos desde una API o base de datos
// y utiliza la vista searchView para obtener la consulta de búsqueda del usuario.
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;
    // Renderizar spinner
    resultsView.renderSpinner();
    // Cargar los resultados de búsqueda utilizando el modelo
    await model.loadSearchResults(query);
    // Renderizar los resultados de búsqueda
    resultsView.render(getSearchResultsPage());
    // Renderizar la paginación de resultados
    paginationView.render(model.state.search);

    console.log(model.state.search.results); // Muestra los resultados en consola
  } catch (err) {
    console.error('❌ Error en controlSearchResults:', err);
  }
};

// Definiendo la funcion de controlador de paginación
// Este controlador se encarga de manejar la lógica de paginación de los resultados de búsqueda
// Utiliza la vista paginationView para renderizar los botones de paginación y
// la función getSearchResultsPage del modelo para obtener los resultados de búsqueda de la página actual
// La función controlPagination es asíncrona para manejar operaciones que pueden tardar, como
// la carga de datos desde una API o base de datos.
// También maneja la lógica de navegación entre páginas de resultados de búsqueda.
const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};


// Inicializando el controlador
// Esta función se encarga de inicializar el controlador, añadiendo los manejadores de eventos necesarios
// para renderizar la receta cuando se carga la página o se cambia el hash de la URL.
// Utiliza la vista recipeView para añadir el manejador de eventos y renderizar la receta
// También añade los manejadores de eventos para la búsqueda y paginación utilizando las vistas
// searchView y paginationView respectivamente.
// La función init se llama al final para iniciar el controlador. 
const init = function() {
  recipeView.addHandlerRender(controlRecipes); // Añadir el manejador de eventos para renderizar la receta
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  console.log('Controlador inicializado');

}
init(); // Llamada al controlador inicial para iniciar la aplicación


