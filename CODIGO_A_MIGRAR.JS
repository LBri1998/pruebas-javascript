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
