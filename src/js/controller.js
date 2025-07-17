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
import  icons  from 'url:../img/icons.svg'; // Importando los iconos SVG

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

  } catch (error) {
    console.error('Error al cargar la receta:', error);
    recipeView.renderError(err.message);
  }
}

// Inicializar el controlador y cargar la receta al cargar la página
const init = function() {
  recipeView.addHandlerRender(controlRecipes); // Añadir el manejador de eventos para renderizar la receta
  console.log('Controlador inicializado');
  // Escuchar el evento hashchange para mostrar la receta cuando cambie el hash en la URL
['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, controlRecipes);
});
}
init(); // Inicializar el controlador y cargar la receta al cargar la página

