// Implementando el modelo MVC para la aplicación Forkify
// Descripción: Este es el modelo de la aplicación Forkify, que se encarga de
// manejar la lógica de negocio, incluyendo la obtención de recetas y su renderizado.
// Repositorio: https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez


// Importando la URL de la API y la función getJSON para realizar peticiones HTTP
import { API_URL } from './config.js'; // Importando la URL de la API   
import { getJSON } from './helpers.js';

//declaracion de objeto state con recipe vacío
export const state = {
    recipe: {},
};

//Función asíncrona loadRecipe que recibe id como parámetro
// Esta función se encarga de cargar una receta específica desde la API
// y actualizar el objeto state con los datos de la receta.
// Si ocurre un error, se captura y se muestra en la consola.
export async function loadRecipe(id) {
    try {
        const data = await getJSON(id); // Llamada a la función getJSON para obtener los datos de la receta
        console.log('Datos de la receta:', data);
        // Validar response structure
        if (!data?.data?.recipe) {
            throw new Error('Estructura de datos invalida');
        }
        //Desestructuración del objeto recipe y guardado en state
        const { recipe } = data.data;
        const recipeObj = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };

        //Guardar en en objeto state y mostrar en consola
        state.recipe = recipeObj;
        console.log('Objeto Recipe cargado:', state.recipe);

    } catch (err) {
        // Lanzar el error para que sea manejado por el controlador
        console.log(`Error al cargar receta: ${err}`);
    }
}