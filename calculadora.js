function main(){

    alert("Bienvenidos a My Calculator")
    
    let primer_digito = prompt ("Dime el dígito con el que te gustaría comenzar")
    
    primer_digito = parseFloat(primer_digito)

    const operation = prompt ("Bien, ahora dime la operación que te gustraía realizar:"
        + "\n Suma: +"
        + "\n Resta: -" 
        + "\n Multiplicación: *" 
        + "\n División: /"
        + "\n Exponencial: **"
        + "\n Resto división: %"
        )

    let segundo_digito = prompt ("Dime el segundo dígito de tu operación")
    
    segundo_digito = parseFloat(segundo_digito)

    let result = 0

    switch(operation){

        case "+":
            result = primer_digito + segundo_digito
            break
        
        case "-":
            result = primer_digito - segundo_digito
            break

        case "*":
            result = primer_digito * segundo_digito
            break

        case "/":
           if (primer_digito == 0){
                result = 0
           } 
           else {
                result = primer_digito / segundo_digito
            } 

            break

        case "**":
            result = primer_digito ** segundo_digito
            break

        case "%":
            result = primer_digito % segundo_digito
            break

        default:
            alert("operación no soportada")


    }

    alert("El resultado es: " + result)


}
main()