// Archivo helpers.js con funciones auxiliares para la aplicación Forkify
// Contiene funciones para manejar peticiones a la API y otras utilidades
// Repositorio:
// Fecha: 2025-07-06
// Autor: Bernardo Moya Jimenez

import { API_URL, TIMEOUT_SEC } from './config.js'; // Importando la URL de la API desde config.js


// Funcion para obtener los datos de una receta y hacer una petición a la API
// Esta función realiza una petición a la API y devuelve los datos de la receta

export async function getJSON (id) 
{  
    try {
        const fetchPro = fetch(`${API_URL}${id}`);
        console.log('Petición a la API:', `${API_URL}${id}`);
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        // v.1.b - Declaración de data      
        const data = await res.json();
        // v.1.c - Validación del estado de res
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data

    } catch (err) {
        throw err; // Lanzar el error para que sea manejado por el controlador;
    };
}



// Funcion para manejar el timeout de las peticiones
// Esta función devuelve una promesa que se rechaza después de un tiempo específico
// Sirve para manejar casos en los que una petición tarda demasiado tiempo en completarse.
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};


// Debido a problemas con Fractional, tuve que implementar una clase para manejar fracciones
// Clase Fraction_function para manejar fracciones
// Esta clase permite crear fracciones a partir de números o cadenas de texto
// Si se proporciona un denominador, se crea una fracción con el numerador y denominador especificados
// Si no se proporciona un denominador, se calcula la fracción a partir of un número o cadena de texto
// La clase incluye métodos para convertir la fracción a una cadena de texto y para obtener su valor numérico

export class Fraction_function {
    constructor(numerator, denominator) {
        if (denominator) {
            this.numerator = numerator;
            this.denominator = denominator;
        } else {
            const value = typeof numerator === 'number' ? numerator : parseFloat(numerator);
            const tolerance = 1.0E-6;
            let h1 = 1,
                h2 = 0,
                k1 = 0,
                k2 = 1,
                b = value;
            do {
                const a = Math.floor(b);
                let aux = h1;
                h1 = a * h1 + h2;
                h2 = aux;
                aux = k1;
                k1 = a * k1 + k2;
                k2 = aux;
                b = 1 / (b - a);
            } while (Math.abs(value - h1 / k1) > value * tolerance);

            this.numerator = h1;
            this.denominator = k1;
        }
    }

    toString() {
        return this.denominator === 1
            ? `${this.numerator}`
            : `${this.numerator}/${this.denominator}`;
    }

    valueOf() {
        return this.numerator / this.denominator;
    }
}
