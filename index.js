//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const buttonInfo = document.getElementById("info1");

/* 
  cada vez que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");


});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  } 
});

// hacer funcionar los botones +info
function verContenido() {
    document.getElementById("info1").style.display = "block" ;
 }


 function verContenido2() {
    document.getElementById("info2").style.display = "block" ;  
}

function verContenido3() {
    document.getElementById("info3").style.display = "block" ; 
 }

 // validar formulario
 window.addEventListener("load", ()=> {
   const form = document.getElementById("form")
   const name = document.getElementById("name")
   const email = document.getElementById("email")
   const telefono = document.getElementById("telefono")

   form.addEventListener("submit", (e) =>{
     e.preventDefault()
     validaCampos()

   }) 

   const validaCampos =  () => {
    //capturar los valores ingresador por el usuario
     const nameValor= name.value.trim()
     const emailValor= email.value.trim()
     const telefonoValor= telefono.value.trim()

    //  validando campo usuario
     
     if(!nameValor) {
       console.log("CAMPO VACIO")
       validaFalla(name, "campo vacio")
     }else{
       validaOk(name)
     }


    // validando campo email
     if(!emailValor){
       validaFalla(email, "campo vacio")
     }else if(!validaEmail(emailValor)){
      validaFalla(email, "El email no es válido")
     }else {
       validaOk(email)
     }







   }

   const validaFalla= (input , msje) => {
    const grupo = input.parentElement 
    const aviso =grupo.querySelector("p")
    aviso.innerText = msje
 
    grupo.className = "grupo falla"
 
    }
 
    const validaOk= (input , msje) => {
     const grupo = input.parentElement 
     grupo.className= "grupo ok"
 
   }

   const validaEmail= (email) => {
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }



 })