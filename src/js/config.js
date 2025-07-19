//Proyecto: Forkify Curso Javascript 2 Tec Milenio
// Archivo de configuración para la aplicación Forkify
// Contiene constantes y configuraciones globales
// Repositorio:https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez
// email: bmjimenez@hotmail.com

// Este archivo contiene la URL de la API y el tiempo de espera para las peticiones HTTP
// Se utiliza para configurar la conexión a la API y manejar errores de tiempo de espera.
// Estas constantes son importadas en otros módulos para realizar peticiones a la API y manejar la lógica de la aplicación.
// Se recomienda mantener estas constantes en un archivo separado para facilitar su mantenimiento y reutilización en toda la aplicación.
// Además, se pueden agregar más configuraciones globales en este archivo según sea necesario en el futuro.
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const TIMEOUT_SEC = 5; // Timeout para las peticiones
export const RES_PER_PAGE = 10; // paginas de hasta 10 resultados 