//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el controlador principal de la aplicación Forkify, que se encarga de
// manejar la lógica de la aplicación, incluyendo la obtención de recetas y su renderizado.
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-06


// Importando las dependencias necesarias
import * as model from './model.js';
import { API_URL, TIMEOUT_SEC } from './config.js'; // Importando las constantes  URL y timeout
import { Fraction_function } from './helpers.js'; // Importando la clase Fraction_function
import recipeView from './views/RecipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import paginationView from './views/paginationView.js'
import  icons  from 'url:../img/icons.svg'; // Importando los iconos SVG
import { loadSearchResults,getSearchResultsPage}  from './model.js';



const recipeContainer = document.querySelector('.recipe');


// Función para mostrar la receta
const controlRecipes = async function() {
  
  try {
    // Obtener el ID de la receta desde el hash de la URL
    const id = window.location.hash.slice(1); 
    console.log('ID de la receta:', id);
    // Si no hay ID, salir de la función
    if (!id) {return;} 
   
    // Renderizar spinner
    recipeView.renderSpinner();

    // Cargar la receta
    await model.loadRecipe(id);

    // Renderizar la receta
    recipeView.render(model.state.recipe);
    console.log('Receta cargada:', model.state.recipe);

  } catch (err) {
    recipeView.renderError(err.message);
    throw err; // Lanzar el error para que sea manejado por el controlador
  }
}

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;
    resultsView.renderSpinner();
    await model.loadSearchResults(query);

    resultsView.render(getSearchResultsPage());

    paginationView.render(model.state.search);

    console.log(model.state.search.results); // Muestra los resultados en consola
  } catch (err) {
    console.error('❌ Error en controlSearchResults:', err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};


// Inicializar el controlador y cargar la receta al cargar la página
const init = function() {
  recipeView.addHandlerRender(controlRecipes); // Añadir el manejador de eventos para renderizar la receta
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  console.log('Controlador inicializado');

}
init(); // Inicializar el controlador y cargar la receta al cargar la página


