//AQUI DECLARAMOS VARIABLES GLOBALES A TODO EL PROGRAMA
const listado_alumnos = {
    "pepe": {
        name: "Pepe",
        notes: [7, 8, 9]
    },
    "maria": {
        name: "Maria",
        notes: [6, 7, 8]
    },
    "juan": {
        name: "Juan",
        notes: [5, 6, 7]
    }
}

//AQUI ESTA LA FUNCION PRINCIPAL, LA QUE MARCA EL COMIENZO Y FIN DE LA EJECUCION DEL PROGRAMA
function main(){

    const nombre = prompt("Hola profe, como te llamas?")
    alert("Bienvenido/a " + nombre + "!") 

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


//FUNCION PARA MOSTRAR MENU Y PEDIRLE AL USUARIO UNA OPCION
function menu_y_socilitud_valor(){
    const chosen_option = prompt(
        "1: Ver notas de alumno \n" +
        "2: Ingresar nuevo alumno \n"  +
        "3: Ver promedio del curso \n" +
        "4: Salir"
    )
    return chosen_option
}	

//FUNCION PARA VER NOTAS DE LOS ALUMNOS
function ver_notas(){

    let alumno_encontrado = undefined

    do {
        let nombre_alumno_que_busca = prompt("Dime el nombre del alumno que estas buscando")

        nombre_alumno_que_busca = nombre_alumno_que_busca.toLowerCase()

        alumno_encontrado = listado_alumnos[nombre_alumno_que_busca]

        if(!alumno_encontrado){
            alert("No encontre al alumno " + nombre_alumno_que_busca + ", por favor intenta de nuevo")
        }

    } while (!alumno_encontrado)

    alert("Alumno: " + alumno_encontrado.name + " Notas: " + alumno_encontrado.notes)

}

//FUNCION PARA CARGAR NUEVO ALUMNO
function nuevo_alumno(){
    const nombre_alumno = prompt("Dime el nombre del alumno")

    const notes = new Array(3); 

    for (let index = 0; index < 3; index++) {
        notes[index] = prompt("Dime la nota " + (index + 1) + ":");
    }
    alert(nombre_alumno + " tiene las siguientes notas: " + notes)

    //MI OBJETO:
    const alumno = {
        name: nombre_alumno,
        notes: notes
    }

    //CONVIERTO EL NOMBRE A MINUSCULA PARA QUE SEA MAS FACIL DE BUSCAR EN MI LISTADO
    const nombre_minuscula = nombre_alumno.toLowerCase()

    //AGREGO A MI LISTA EL ALUMNO
    listado_alumnos[nombre_minuscula] = alumno
}

//FUNCION PARA CALCULAR `Y MOSTRAR EL PROMEDIO GENERAL DEL CURSO
function ver_promedio_general(){
    alert("Esta funcion aun esta en contruccion")
}

//INCOVACION DE LA FUNCION PRINCIPAL, AQUI ES DONDE COMIENZA A FUNCIONAR EL PROGRAMA
main()