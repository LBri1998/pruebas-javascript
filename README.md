# pruebas-javascript

Tarea:
- Crear una "calculadora"

Hacer un programa nuevo que permita al usuario ingresar dos valores y una operacion a realizar.
Realizar la operación y mostrar el resultado.

El flujo es el siguiente del programa debe ser: 

Usuario ingresa primer valor -> Usuario ingresa operacion a realizar -> Usuario ingresa segundo valor
-> Se realiza el calculo


Las operaciones que el programa puede realizar deben ser:

suma -> +
resta -> -
multiplicacion -> *
division -> /
exponensial -> **
resto de la division -> //


Free Tips!:

- No te vuelvas loca al principio, empezá por suma y resta. Luego vas sumando otras operaciones.

- Acordate que los valores que ingresa el usuario, te llegan como string. Ej: "5".
Así que vas a tener que usar un parser para pasarlo a flotante (numero con coma).

- Para la parte de evaluar que operación quiere hacer el usuario, usá un switch (misma logica que el menu del programa que armamos antes)

- Resolvé todo en la misma función main, no crees más funciones, así no te complicas mucho

Ej:

function main(){
    // TODO EL CODIGO TIENE QUE ESTAR ACÁ

    // PIDO UN VALOR AL USUARIO, LO GUARDO Y VEO DE CONVERTIRLO A FLOTANTE

    // PIDO UNA OPERACION A REALIZAR

    // PIDO SEGUNDO VALOR, LO GUARDO Y VEO DE CONVERTIRLO A FLOTANTE
    
    // EVALUO QUE OPERACION QUIERE REALIZAR (ACA VA EL SWITCH)
    
    // DEVUELVO EL RESULTADO AL USUARIO 
}

main()