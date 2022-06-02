function validacion() {
    var nombre, apellido, expresion, telefono, nacimiento;
   
   
    nombre = document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    clave = document.getElementById("password").value;
   
   
   
   if ( nombre === ""){
   
       alert("El campo nombre esta vacío");
       return false;
   }
   
   
   if (nombre.length <= 2){
   
       alert("Campo nombre posee carácteres insuficientes");
       return false;
   }
   
   if (nombre.length > 40){
   
       alert("Campo nombre debe tener hasta 40 carácteres máximo");
       return false;
   }
   
   if ( apellido === ""){
   
       alert("El campo apellido esta vacío");
       return false;
   }
   
   if (apellido.length <= 2){
   
       alert("Campo apellido posee carácteres insuficientes");
       return false;
   }
   
   if (apellido.length > 25){
   
       alert("Campo apellido debe tener hasta 25 carácteres máximo");
       return false;
   }
   
   
   
   if (isNaN(telefono)){
       alert("El teléfono ingresado no es un número");
       return false;
   }
   
   if (telefono.length > 12){
   
       alert("Campo teléfono debe tener hasta 12 carácteres máximo");
       return false;
   }
   
   if (telefono === ""){
   
       alert("Ingrese su teléfono");
       return false;
   }

   var nacimiento = document.getElementById("nacimiento");
            
            
            var fecha1= new Date("11/13/2021");
            var fecha2 = new Date(document.getElementById("nacimiento").value);
          
            var a =(fecha1.getTime() - fecha2.getTime());
            
            var b = (24*60*60*1000);
            var c = Math.round ( a / b);
          
            var d = c / 365;
            
            
          if (d<15){
            alert("Debe ser mayor a 13 años para poder registrarse")
  
        }

      
  
   
   
   }
   
   