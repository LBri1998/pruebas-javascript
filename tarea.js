function main(){

    const nombre = prompt("Decime tu nombre, por favor") 

    const edad = prompt("Ahora decime tu edad")
    
    if (edad > 85) {
        alert("Eres viejardi, " + nombre)
    }
    else if (edad >= 18){
        alert("Bienvenido, " + nombre + " puedes pasar!")
    }

    else{
        alert("Lo lamento, " + nombre + " no puedes pasar")
    }
} 
main()


