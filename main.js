const interes= 0.67
const interesesUva= 0.11
const uva= 1293.90

let solicitud = confirm("Desea simular un prestamo?")
while (solicitud==true){ 
let cuota = parseFloat(prompt("Ingrese cantidad de meses a pagar"))
function prestamo(monto){
    if (cuota == 6){
        if(parseFloat(monto)){
            let resultado = monto*interes*0.5+monto
            let resultado2 = resultado/6
            let resultado3= monto*interesesUva*0.5+monto
            let resultado4= monto/uva
            alert("El monto a devolver es $"+resultado+" en 6 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS" )
        } 
}else if (cuota == 12){ 
        if(parseFloat(monto)){
            let resultado = monto*interes+monto
            let resultado2 = resultado/12
            let resultado3= monto*interesesUva+monto
            let resultado4= monto/uva
            alert("El monto a devolver es $"+resultado+" en 12 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS")
        }   
}else if (cuota == 18){   
        if(parseFloat(monto)){
            let resultado = monto*interes*1.5+monto
            let resultado2 = resultado/18
            let resultado3= monto*interesesUva*1.5+monto
            let resultado4= monto/uva
            alert("El monto a devolver es $"+resultado+" en 18 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS")
        }  
}else if (cuota == 24){
        if(parseFloat(monto)){
            let resultado = monto*interes*2+monto
            let resultado2 = resultado/24
            let resultado3= monto*interesesUva*2+monto
            let resultado4= monto/uva
            alert("El monto a devolver es $"+resultado+" en 24 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS")
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

const Banco = function(nombre, interestradicional, interesUVA, montomaximo){
    this.nombre= nombre
    this.interestradicional= interestradicional
    this.interesUVA= interesUVA
    this.montomaximo= montomaximo
}
let banco1  = new Banco("Santander Rio","67%","11%",8000000)
let banco2  = new Banco("Galicia","102%","7%",22000000)
let banco3  = new Banco("Banco Provincia","88%","12%",22000000)
let banco4  = new Banco("Banco Nacion","39%","8%",25000000)
let banco5  = new Banco("BBVA Frances","79%","16%",30000000)

let lista = [banco1,banco2,banco3,banco4,banco5]

function filtrarBanco(){
    let palabraClave= prompt("ingresa el banco que buscas")
    let resultado = lista.filter ( (x)=>x.nombre. toUpperCase().includes(palabraClave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro dicho banco")
    }
}
function agregarBanco(){
let nombre= prompt("ingresa el nombre del Banco")
let interestradicional = prompt("ingresa intereses por prestamo tradicional")
let interesUVA = prompt("ingresa intereses por prestamo UVA")
let montomaximo = prompt("ingrese monoto maximo del prestamo")

if(isNaN(interestradicional) || isNaN(interesUVA) || isNaN(montomaximo) || nombre == ""){
    alert("por favor ingrese valores validos")
    return
}
let banco =new Banco (nombre,interestradicional,interesUVA,montomaximo)
lista.push(banco)
console.table(lista)
}