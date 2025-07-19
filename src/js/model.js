// Implementando el modelo MVC para la aplicación Forkify
// Descripción: Este es el modelo de la aplicación Forkify, que se encarga de
// manejar la lógica de negocio, incluyendo la obtención de recetas y su renderizado.
// Repositorio: https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez


// Importando la URL de la API y la función getJSON para realizar peticiones HTTP
import { API_URL,RES_PER_PAGE } from './config.js'; // Importando la URL de la API   
import { getJSON } from './helpers.js';


//declaracion de objeto state con recipe vacío
export const state = {
    recipe: {},
    search: {
    query: '',
    results: [],
    page:1,
    resultsPerPage:RES_PER_PAGE,
},
};

//Función asíncrona loadRecipe que recibe id como parámetro
// Esta función se encarga de cargar una receta específica desde la API
// y actualizar el objeto state con los datos de la receta.
// Si ocurre un error, se captura y se muestra en la consola.
export async function loadRecipe(id) {
    try {
        const data = await getJSON(`${API_URL}${id}`); // Llamada a la función getJSON para obtener los datos de la receta
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
            ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
        };

        //Guardar en en objeto state y mostrar en consola
        state.recipe = recipeObj;
        console.log('Objeto Recipe cargado:', state.recipe);

    } catch (err) {
        // Lanzar el error para que sea manejado por el controlador
        console.log(`Error al cargar receta: ${err}`);
    }
}

export async function loadSearchResults(query) {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log('Resultados de la búsqueda:', data);

        // Validar estructura
        if (!data?.data?.recipes) {
            throw new Error('Estructura de datos inválida');
        }
        // Guardar query en el estado
         state.search.query = query;
        // Transformar los resultados y guardarlos en el estado
        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        });

        console.log('Resultados de busqueda guardados:', `${state.search.results}`);
    } catch (err) {
        console.log(`${err} 💥💥💥💥`);
        throw err; // Lanzar el error para que sea manejado por el controlador  
    }




}


    export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
    };