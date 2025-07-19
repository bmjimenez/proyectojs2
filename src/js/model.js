//Proyecto: Forkify Curso Javascript 2 Tec Milenio
// Implementando el modelo MVC para la aplicación Forkify
// Descripción: Este es el modelo de la aplicación Forkify, que se encarga de
// manejar la lógica de negocio, incluyendo la obtención de recetas y su renderizado.
// Repositorio: https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez
// email: bmjimenez@hotmail.com

// Importando la URL de la API y la función getJSON para realizar peticiones HTTP
import { API_URL,RES_PER_PAGE } from './config.js'; // Importando la URL de la API   
import { getJSON } from './helpers.js';


//Declaracion de objeto state con elementos inicializados
// Este objeto state contiene la receta actual y los resultados de búsqueda.
// Se utiliza para almacenar el estado de la aplicación y facilitar la gestión de datos.
// La propiedad recipe almacena la receta actual, mientras que search contiene los resultados de búsqueda,
// la consulta de búsqueda, la página actual y el número de resultados por página.
// Este objeto se utiliza en el controlador para acceder a los datos de la aplicación y renderizar
// las vistas correspondientes.
export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
};

//Función asíncrona loadRecipe que recibe id como parámetro
// Esta función se encarga de cargar una receta específica desde la API
// y actualizar el objeto state con los datos de la receta.
// Si ocurre un error, se captura y se muestra en la consola.
export async function loadRecipe(id) {
    try {
        // Llamada a la función getJSON para obtener los datos de la receta
        const data = await getJSON(`${API_URL}${id}`);
        console.log('Datos de la receta:', data);
        // Validar response structure recibida de la API
        // Si la estructura de datos no es válida, se lanza un error
        if (!data?.data?.recipe) {
            throw new Error('Estructura de datos invalida');
        }
        // Desestructuración del objeto recipe y guardado en state
        // Aquí se extraen los datos de la receta del objeto data y se crea un nuevo
        // objeto recipe con las propiedades necesarias.
        // Se asegura de que la propiedad ingredients sea un array, incluso si no hay ingredientes.
        // Esto es importante para evitar errores al renderizar la receta en la vista.  
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
        // Aquí se actualiza el objeto state con la receta cargada,
        // lo que permite que otras partes de la aplicación accedan a los datos de la receta
        state.recipe = recipeObj;
        console.log('Objeto Recipe cargado:', state.recipe);

    } catch (err) {
        // Lanzar el error para que sea manejado por el controlador
        throw err;
        // Aquí se captura cualquier error que ocurra durante la carga de la receta
        // y se lanza para que pueda ser manejado por el controlador.
        // Esto es útil para manejar errores de red, errores de la API o errores de validación de datos.
        // También se puede mostrar un mensaje de error al usuario en la vista.
        // En este caso, se lanza el error para que sea manejado por el controlador
        // y se pueda mostrar un mensaje de error adecuado en la interfaz de usuario.
        // Se puede utilizar console.log para mostrar el error en la consola durante el desarrollo.
        console.log(`Error al cargar receta: ${err}`);
    }
}// termina la función loadRecipe

// Función asíncrona loadSearchResults que recibe query como parámetro
// Esta función se encarga de cargar los resultados de búsqueda desde la API
// y actualizar el objeto state con los resultados de búsqueda.
// Si ocurre un error, se captura y se muestra en la consola.
export async function loadSearchResults(query) {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log('Resultados de la búsqueda:', data);

        // Validar estructura de datos recibida de la API
        // Si la estructura de datos no es válida, se lanza un error
        // Aquí se verifica que la propiedad recipes exista en el objeto data.data
        // y que sea un array. Si no es así, se lanza un error.
        // Esto es importante para asegurarse de que los datos recibidos sean válidos
        // y se puedan procesar correctamente en la aplicación.
        if (!data?.data?.recipes || !Array.isArray(data.data.recipes)) {
            throw new Error('Estructura de datos inválida');
        }
        // Guardar query en el estado
        state.search.query = query;
        // Transformar los resultados y guardarlos en el objeto state
        // Aquí se mapea el array de recetas recibido de la API y se crea un nuevo
        // array de objetos con las propiedades necesarias para mostrar en la vista.
        // Se asegura de que cada objeto tenga las propiedades id, title, publisher e image.
        // Esto es importante para que la vista pueda renderizar correctamente los resultados de búsqueda.
        // Se utiliza el método map para transformar los datos y crear un nuevo array de objetos.
        // Luego, se guarda este array en la propiedad results del objeto state.search.
        // Esto permite que otras partes de la aplicación accedan a los resultados de búsqueda
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
}// termina la función loadSearchResults

// Función para obtener una página de resultados de búsqueda
// Esta función toma un número de página como argumento y devuelve los resultados de búsqueda
// correspondientes a esa página. Si no se proporciona un número de página, se utiliza el valor
// actual de la página en el objeto state.search.page.
// Se calcula el índice de inicio y fin de los resultados para esa página y se devuelve un
// array con los resultados correspondientes.
// Esta función es útil para implementar la paginación de resultados de búsqueda en la aplicación.
// Permite obtener los resultados de búsqueda de una página específica y facilita la navegación
// entre páginas de resultados.
export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
};