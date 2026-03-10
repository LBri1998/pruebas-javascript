function main(){

    const list_size = 5

    let list_values = Array(list_size)

    alert("Vas a tener que ingresar " + list_size + " valores")
    
    for (let index = 0; index < list_size; index++) {
        
        let value = prompt("Ingresa el valor " + index + ":")
        list_values[index] = value
        
    }

    let search_value = prompt("Ingresa el valor a buscar")

    let encontrado = false
    let posicion = null

    for (let index = 0; index < list_size; index++) {
        if(list_values[index] == search_value){
            encontrado = true
            posicion = index
            break
        }
    }

    if(encontrado){
            alert("Encontre el valor! Esta en la posicion " + posicion)
    }
    else{
            alert("El valor no esta en la lista")

    }
}

main()