let solicitud = confirm("Desea simular un prestamo?")
while (solicitud==true){
let cuota = parseFloat(prompt("Ingrese cantidad de meses a pagar"))

if (cuota == 6){
    function prestamo(monto){
        if(parseFloat(monto)){
            let resultado = monto*33.5/100+monto
            let resultado2 = resultado/6
            alert("El monto a devolver es $" + resultado + " en 6 cuotas de $" +resultado2)
        }
    }
}else if (cuota == 12){
    function prestamo(monto){
        if(parseFloat(monto)){
            let resultado = monto*67/100+monto
            let resultado2 = resultado/12
            alert("El monto a devolver es $" + resultado + " en 12 cuotas de $" +resultado2)
        }
    }
}else if (cuota == 18){
    function prestamo(monto){
        if(parseFloat(monto)){
            let resultado = monto*100.5/100+monto
            let resultado2 = resultado/18
            alert("El monto a devolver es $" + resultado + " en 18 cuotas de $" +resultado2)
        }
    }
}else if (cuota == 24){
    function prestamo(monto){
        if(parseFloat(monto)){
            let resultado = monto*134/100+monto
            let resultado2 = resultado/24
            alert("El monto a devolver es $" + resultado + " en 24 cuotas de $" +resultado2)
        }
    }
}
function calcularprestamo(){ 
    let precio = parseFloat (prompt ("Ingrese monto a solicitar: "))
    prestamo(precio)
}
calcularprestamo()

let continuar = confirm ("Desea continuar?")
if(continuar == true){
    parseFloat (prompt("Ingrese número de contacto"))
    alert("Nos contactaremos")
    break
} else {
    let repetir = confirm("Desea hacer otra simulacion?")
    if (repetir!=true){
        alert("Hasta luego!")
        break
    }
}
}