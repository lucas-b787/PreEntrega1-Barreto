const interes= 0.67
const interesesUva= 0.11
const uva= 1293.90

//funcion simuladora prestamo
const formPrestamo=document.getElementById("formPrestamo")
formPrestamo.addEventListener("submit", (e)=>simularprestamo(e));
function simularPrestamo(e,monto){
    e.preventDefault();
    monto= parseInt(formPrestamo.monto.value);
    cuota= parseInt(formPrestamo.cuota.value);
    document.getElementById("resultado").innerHTML
    formPrestamo.reset();
      if (cuota == 6){
          if(parseFloat(monto)){
              let resultado = monto*interes*0.5+monto
              let resultado2 = resultado/6
              let resultado3= monto*interesesUva*0.5+monto
              let resultado4= monto/uva
              document.getElementById("resultado").innerHTML= "El monto a devolver es $"+resultado+" en 6 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS"
          } 
  }else if (cuota == 12){ 
          if(parseFloat(monto)){
              let resultado = monto*interes+monto
              let resultado2 = resultado/12
              let resultado3= monto*interesesUva+monto
              let resultado4= monto/uva
              document.getElementById("resultado").innerHTML= "El monto a devolver es $"+resultado+" en 12 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS"
          }   
  }else if (cuota == 18){   
          if(parseFloat(monto)){
              let resultado = monto*interes*1.5+monto
              let resultado2 = resultado/18
              let resultado3= monto*interesesUva*1.5+monto
              let resultado4= monto/uva
              document.getElementById("resultado").innerHTML= "El monto a devolver es $"+resultado+" en 18 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS"
          }  
  }else if (cuota == 24){
          if(parseFloat(monto)){
              let resultado = monto*interes*2+monto
              let resultado2 = resultado/24
              let resultado3= monto*interesesUva*2+monto
              let resultado4= monto/uva
              document.getElementById("resultado").innerHTML= "El monto a devolver es $"+resultado+" en 24 cuotas de $"+resultado2+" o $"+resultado3+"="+resultado4+" UVAS"
          }
      }
  }
  function calcularprestamo(){ 
      const monto = document.getElementById("monto").Value;
      prestamo(monto)
  }

  
  //filtrar banco
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

  const formFiltrar=document.getElementById("formFiltrar")
  formFiltrar.addEventListener("submit", (e)=>filtrarBanco(e));
  function filtrarBanco(e){
    e.preventDefault();
    palabraClave= (formFiltrar.filtra.value);
    document.getElementById("pFiltrar").innerHTML
    formFiltrar.reset();
      let resultado = lista.filter ( (x)=>x.nombre. toUpperCase().includes(palabraClave))
  
      if(resultado.length >0){
        console.table(resultado)
        let myjson=JSON.stringify(resultado);
        document.getElementById("pFiltrar").innerHTML= myjson
      }else{
        Swal.fire({
          icon: "error",
          title: "no se encontro dicho banco",
          text: "intenta escribiendo con MAYUSCULAS",
        });
      }
  }
  
  //agregar banco
  const formAgregar=document.getElementById("formAgregar")
  formAgregar.addEventListener("submit", (e)=>agregarBanco(e));
  function agregarBanco(e){
    e.preventDefault();
    nombre=(formAgregar.nombre.value);
    interestradicional= parseInt(formAgregar.interestradicional.value);
    interesUVA= parseInt(formAgregar.interesUVA.value);
    montomaximo= parseInt(formAgregar.montoMaximo.value);
    document.getElementById("pAgregar").innerHTML
    formAgregar.reset();

  if(isNaN(interestradicional) || isNaN(interesUVA) || isNaN(montomaximo) || nombre == ""){
      Swal.fire({
        icon: "warning",
        title: "ERROR",
        text: "por favor ingrese valores validos",
      });
      return
  }
  let banco = new Banco (nombre,interestradicional,interesUVA,montomaximo)
  lista.push(banco)
  console.table(lista)
  Swal.fire({
    icon: "success",
    title: "BANCO AGREGADO",
    text: "ver la consola",
  });
  }

//botonera
let simular = document.getElementById ("simular")
 simular.addEventListener(`click`,simularPrestamo)
 
let filtrar =document.getElementById ("filtrar")
  filtrar.addEventListener(`click`,filtrarBanco)

let agregar= document.getElementById("agregar")
  agregar.addEventListener(`click`,agregarBanco)

  
  const inputNombre = document.getElementById("inputNombre")
  const inputCelular = document.getElementById("inputCelular")
  const inputEmail = document.getElementById("inputEmail")
  const botonEnviar = document.getElementById("boton")
  const botonRecuperar = document.getElementById("botonRecuperar")
  const botonLimpiar = document.getElementById("limpiar")
  const botonJSON= document.getElementById("btonJSON")
  
  //funcion que me guarde el formulario en el localStorage

  function guardarFormulario(){
    localStorage.setItem(`nombre`,inputNombre.value)
    localStorage.setItem(`celular`,inputCelular.value)
    localStorage.setItem(`email`,inputEmail.value)

    const recuperarJson = JSON.parse(localStorage.getItem("datosDelFormulario"));//dice esto en la consola......VM661:1 Uncaught SyntaxError: "[object Object]" is not valid JSONat JSON.parse (<anonymous>)
    inputNombre.value=recuperarJson.nombre //aparece en consola....main.js:119 Uncaught TypeError: Cannot read properties of null (reading 'nombre')at HTMLButtonElement.guardarFormulario (main.js:148:37)
    inputCelular.value=recuperarJson.celular
    inputEmail.value=recuperarJson.email

 console.log(recuperarJson)
  
      const datosDelFormulario = {
          nombre: inputNombre.value,
          celular: inputCelular.value,
          email: inputEmail.value,
      }
  
      let resultado = JSON.stringify(datosDelFormulario)
      console.log(resultado)
      localStorage.setItem( "resultado", resultado)    
  }
  
  botonEnviar.addEventListener(`click`,guardarFormulario)
  botonRecuperar.addEventListener(`click`,recuperarDatosDelFormulario,)
  botonLimpiar.addEventListener(`click`,limpiarLocalStorage)
  
  function recuperarDatosDelFormulario(){
     inputNombre.value=localStorage.getItem(`nombre`)
     inputCelular.value = localStorage.getItem(`celular`)
     inputEmail.value = localStorage.getItem(`email`)
     event.preventDefault()
  }
    
  function limpiarLocalStorage(){
      localStorage.clear()
  }

let url= 'https://dolarapi.com/v1/dolares/blue'
const dolarApi = document.getElementById('dolar-api');

fetch(url)
  .then(response => response.json())
  .then(data => {
      const precioDolar= document.createElement(`div`);
      console.log(data) //devuelve los datos d ela api
      precioDolar.innerHTML= `
      <h2>${data}</h2> 

      `; //no muestra los datos, solo [object object]
      
      dolarApi.appendChild(precioDolar);
      
    })