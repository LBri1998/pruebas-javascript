main()

function main(){

    const nombre = prompt("Hola profe, como te llamas?")
    alert("Bienvenido/a ", nombre, "!") 

    let flag_salida = true
    
    do {
        alert("por favor elije una opcion del menu y escribi el numero correspondiente:")
        
        let chosen_option = menu_y_socilitud_valor()

        switch(chosen_option){
            case "1": 
                ver_notas()
                break

            case "2":
                nuevo_alumno()
                break

			case "3":
				ver_promedio_general()
                break

			case "4":
				alert("Bye Bye!")
				flag_salida = false
                break
				
			default:
				alert("Debes seleccionar una opción válida")
        }

    } while (flag_salida);    
}

    //FALTA CREAR LAS FUNCIONES:
    // ver_notas
    // nuevo_alumno
    // ver_promedio_general
    // funciones dummy, solo muestran un alert diciendo "en construccion"

    //LUEGO DE HABER CREADO LAS FUNCIONES, PODEMOS MIGRAR LO ANTIGUO DE LA FUNCION nuevo_alumno


function menu_y_socilitud_valor(){
    const chosen_option = prompt(
        "1: Ver notas de alumno" +
        " 2: Ingresar nuevo alumno"  +
        " 3: Ver promedio del curso" +
        " 4: Salir"
    )
    return chosen_option
}	

function ver_notas(){
    alert("Esta funcion aun esta en contruccion")
}

function nuevo_alumno(){
    const nombre_alumno = prompt("Dime el nombre del alumno")

    const notes = new Array(3); 
    
    for (let index = 0; index < 3; index++) {
        notes[index] = prompt("Dime la nota ", index,":");
    }
    alert(nombre_alumno + " tiene las siguientes notas: " + notes)
}


function ver_promedio_general(){
    alert("Esta funcion aun esta en contruccion")
}









// 	Leer numero_seleccionado

// Algoritmo menu DONEE
	
// 	Escribir "Hola profe, cómo te llamás?"
	
// 	Leer nombre_profesor
	
// 	Escribir "Bienvenido/a ", nombre_profesor, "! por favor eligí una opción del menú y escribí el numero correspondiente:"
	
// 	Definir numero_seleccionado Como Entero
	
// 	Definir flag_salida Como Logico
// 	flag_salida <- Falso
	
// 	Repetir
		
// 		opcion_elegida <- menu_y_socilitud_valor()
		
// 		Segun opcion_elegida Hacer
// 			1:
// 				ver_notas()
// 			2:
// 				nuevo_alumno()
// 			3:
// 				ver_promedio_general()
// 			4:
// 				Escribir "Bye Bye!"
// 				flag_salida <- Verdadero
				
// 			De Otro Modo:
// 				Escribir "Debes seleccionar una opción válida"
// 		Fin Segun
		
// 	Hasta Que flag_salida
	
// FinAlgoritmo














// Funcion numero_seleccionado <- menu_y_socilitud_valor
	
	
// 	Escribir "1: Ver notas de alumno"
// 	Escribir "2: Ingresar nuevo alumno"
// 	Escribir "3: Ver promedio del curso"
// 	Escribir "4: Salir"
	
// 	Leer numero_seleccionado
	
// FinFuncion

// Funcion ver_notas
// 	Escribir "Esta función aún está en construcción"
// FinFuncion

// Funcion nuevo_alumno
// 	Escribir "Decime el nombre del Alumno"
// 	Leer nombre_alumno
	
// 	Dimension notas[3]
	
// 	Para i <- 1 Hasta 3 Hacer
// 		Escribir "Decime la nota " ,i, ":"
// 		Leer nota
		
// 		notas[i] <- nota
		
// 	FinPara
	
// 	Escribir nombre_alumno, notas[1]
	
// FinFuncion

// Funcion ver_promedio_general
// 	Escribir "Esta función aún está en construcción"
// FinFuncion