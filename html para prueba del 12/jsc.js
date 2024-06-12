///guardo esto porque mi teclado no lo tiene <>




function validar(){
    var confirmacion_nombre = validar_nombre();
    var confirmacion_contra = validar_contraseña(); 
    var confirmacion_contraseña = validar_contraseña2();
    var confirmacion_direccion  = validar_direccion();
    var confirmacion_telefono = validar_telefono();
    var confirmacion_lista  = validar_lista();
    var confirmacion_comuna = validar_comuna();
    var confirmacion_web = validar_dWeb();

    return confirmacion_nombre && confirmacion_contra && confirmacion_contraseña && confirmacion_direccion && confirmacion_telefono && confirmacion_lista && confirmacion_comuna && confirmacion_web;
}



function validar_dWeb(){
    var input_pagina = document.getElementById("input-pagina");
    var div_error_pagina = document.getElementById("error-pagina");
    var pagina = input_pagina.value;
    var pos_punto = pagina.indexOf(".");

    if (pagina == ""){
        div_error_pagina.innerHTML = "";
        return true;
    }
    else{
        if (pos_punto < 0 ){
            div_error_pagina.innerHTML = "el formato del url es incorrecto";
            div_error_pagina.className = "text-danger small";
            return false;
        }else{
            div_error_pagina.innerHTML = "";
            return true;
        }
    };
    


};


function esnumero(digito){
    var codigo = digito.charCodeAt(0);
    return codigo >= 48 && codigo <= 57; 

};

function validar_nombre(){
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    var tiene_numero = false;
    var tiene_letra = false;
    var especial = false;
    if (nombre == ""){
        div_error_nombre.innerHTML = "el nombre es obligatorio";
        div_error_nombre.className = "text-danger small";
        return false;
    }else if (nombre.length > 10){
        div_error_nombre.innerHTML = "el nombre no puede tener mas de 10 caracteres";
        div_error_nombre.className = "text-danger small";
        return false;

    }
    else if(nombre.length < 5){
        div_error_nombre.innerHTML = "el nombre no puede tener menos de 5 caracteres";
        div_error_nombre.className = "text-danger small";
        return false;
    }
    else {
        div_error_nombre.innerHTML = "";
        for (let i = 0; i < nombre.length; i++) {
            let codigo = nombre.charCodeAt(i);
            if (
              (codigo >= 48 && codigo <= 57) ||
              (codigo >= 65 && codigo <= 90) || 
              (codigo >= 97 && codigo <= 122) 
            ) {
              if (codigo >= 48 && codigo <= 57) {
                
                tiene_numero = true;
                
              } else {
                tiene_letra = true;
              };
              
            }
            else{
                especial = true
              }}
            
          
        if(tiene_letra == false && tiene_numero){
            div_error_nombre.innerHTML = "el nombre debe tener al menos 1 letra";
            div_error_nombre.className = "text-danger small";
            return false;

          }else if(tiene_numero == false && tiene_letra){

            div_error_nombre.innerHTML = "lel nombre debe tener al menos 1 numero";
            div_error_nombre.className = "text-danger small";
            return false;
          }
          else if (tiene_letra && tiene_numero) {
            if (especial == true){
                div_error_nombre.innerHTML = "el nombre no debe tener caracteres especiales";
                div_error_nombre.className = "text-danger small";
                return false;
    
              }
            else{
                div_error_nombre.innerHTML = "";
                var primer_caracter = nombre.charCodeAt(0);
                if ((primer_caracter >= 65 && primer_caracter <= 90) || 
                    (primer_caracter >= 97 && primer_caracter <= 122)) {
                    
                    let i = nombre.length - 1;
                    while (i >= 0 && esnumero(nombre[i])) {
                        i--;
                    }

                    if (i < nombre.length - 1) {
                        return true;
                    } else {
                        div_error_nombre.innerHTML = "el nombre debe terminar por lo menos con 1 digito";
                        div_error_nombre.className = "text-danger small";
                        return false;
                    }}
                else{
                    div_error_nombre.innerHTML = "el nombre de usuario debe comenzar por una letra";
                    div_error_nombre.className = "text-danger small";
                    return false;
                    
                }
            }
                
              
            
          }
          else {
            div_error_nombre.innerHTML = "el nombre no debe tener caracteres especiales";
            div_error_nombre.className = "text-danger small";
            return false;
          }

    };
        

};

function validar_contraseña(){
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;
    var input_nombre = document.getElementById("input-nombre");
    var nombre = input_nombre.value;
    var tiene_numero = false;
    var tiene_letra = false;
    if (contraseña == ""){
        div_error_contraseña.innerHTML = "la contraseña es obligatoria";
        div_error_contraseña.className = "text-danger small";
        return false;
    } else if(nombre == ""){
        div_error_contraseña.innerHTML = "complete primero el nombre para confirmar la validacion";
        div_error_contraseña.className = "text-danger small";
        return false;

    }
    else if (contraseña.length < 3 ){
        div_error_contraseña.innerHTML = "la contraseña no puede tener menos de 3 caracteres";
            div_error_contraseña.className = "text-danger small";
            return false;
        
    }
    else if (contraseña.length > 6){
        div_error_contraseña.innerHTML = "la contraseña no puede tener mas de 6 caracteres";
            div_error_contraseña.className = "text-danger small";
            return false;

    }
    else if(contraseña.indexOf(nombre)==-1){
            div_error_contraseña.innerHTML = "";
            for (let i = 0; i < contraseña.length; i++) {
                let codigo = contraseña.charCodeAt(i);
                if (
                  (codigo >= 48 && codigo <= 57) ||
                  (codigo >= 65 && codigo <= 90) || 
                  (codigo >= 97 && codigo <= 122) 
                ) {
                  if (codigo >= 48 && codigo <= 57) {
                    tiene_numero = true;
                  } else {
                    tiene_letra = true;
                  }
                }
              }
              if (tiene_letra && tiene_numero) {
                return true;
              } else {
                div_error_contraseña.innerHTML = "la contraseña debe tener letras y numeros";
                div_error_contraseña.className = "text-danger small";
                return false;
              }
            
            
    }
    else if(contraseña.indexOf(nombre) > -1){
        div_error_contraseña.innerHTML = "la contraseña no puede contener el nombre de usuario";
            div_error_contraseña.className = "text-danger small";
            return false;
        
        
    }
    else{
        div_error_contraseña.innerHTML = "error inesperado";
        div_error_contraseña.className = "text-danger small";
        return false;

    }
    
};

function validar_contraseña2(){
    var input_contraseña2 = document.getElementById("input-contraseña2");
    var div_error_contraseña2 = document.getElementById("error-contraseña2");
    var contraseña = input_contraseña2.value;
    var contraseña_normal = document.getElementById("input-contraseña")
    var valor_contraseña = contraseña_normal.value
    if (contraseña == ""){
        div_error_contraseña2.innerHTML = "la confirmacion es obligatoria";
        div_error_contraseña2.className = "text-danger small";
        return false;
    }
    else if(contraseña !== valor_contraseña){
        div_error_contraseña2.innerHTML = "la confirmacion debe ser igual a la contraseña";
        div_error_contraseña2.className = "text-danger small";
        return false;
    }
    else{
        div_error_contraseña2.innerHTML = "";
        return true;
    }
};

function validar_direccion(){
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value
    if (direccion == ""){
        div_error_direccion.innerHTML = "la direccion es obligatoria";
        div_error_direccion.className = "text-danger small";
        return false;

    }
    else{
        div_error_direccion.innerHTML = "";
        return true;
    }
};

function validar_comuna(){
    var input_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = input_comuna.value
    if (comuna == "default"){
        div_error_comuna.innerHTML = "la comuna es obligatoria";
        div_error_comuna.className = "text-danger small";
        return false;
    } else{
        div_error_comuna.innerHTML = "";
        return true;
    }

};

function validar_telefono(){
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value;
    var tiene_numero = false;
    var tiene_letra = false;
    var especial = false;
    if (telefono == ""){
        div_error_telefono.innerHTML = "el telefono es obligatorio";
        div_error_telefono.className = "text-danger small";
        return false;
    } 
    else if (telefono.length > 9){
        div_error_telefono.innerHTML = "colocar un numero valido de 9 digitos";
        div_error_telefono.className = "text-danger small";
        return false;
    }
    else if (telefono.length< 9){
        div_error_telefono.innerHTML = "colocar un numero valido de 9 digitos";
        div_error_telefono.className = "text-danger small";
        return false;
    }
    else{
        div_error_telefono.innerHTML = "";
        for (let i = 0; i < telefono.length; i++) {
            let codigo = telefono.charCodeAt(i);
            if (
              (codigo >= 48 && codigo <= 57) ||
              (codigo >= 65 && codigo <= 90) || 
              (codigo >= 97 && codigo <= 122) 
            ) {
              if (codigo >= 48 && codigo <= 57) {
                tiene_numero = true;
              } else {
                tiene_letra = true;
              };
              
            }
            else{
                especial = true
              }}

        if(tiene_letra == false && tiene_numero && especial == false){
            div_error_telefono.innerHTML = "";
            return true;
        }else{
            div_error_telefono.innerHTML = "el telefono solo debe tener numeros";
            div_error_telefono.className = "text-danger small";
            return false;

        }
    }
        
};

var array_pas = [];

function actualizar(){
    var div_lista = document.getElementById("lista_numerica");
    div_lista.innerHTML ="";
    var ul = document.createElement("ul");
    ul.className = "list-group"
    for (var i in array_pas){
        var li = document.createElement("li");
        li.innerHTML = array_pas[i];
        li.className = "list-group-item"
        ul.appendChild(li)
    };
    div_lista.appendChild(ul);
};

function elementoNoRepetido(elemento) {
    return !array_pas.includes(elemento);
};

function añadir() {
    var input_pasatiempo = document.getElementById("input-pasatiempo");
    var div_error_pasatiempo = document.getElementById("error-pasatiempo");
    var pasatiempo = input_pasatiempo.value;

    if (pasatiempo == "") {
        div_error_pasatiempo.innerHTML = "Debe ingresar un valor válido";
        div_error_pasatiempo.className = "text-danger small";
        return false;
    } else if (!elementoNoRepetido(pasatiempo)) {
        div_error_pasatiempo.innerHTML = "El pasatiempo ya está en la lista";
        div_error_pasatiempo.className = "text-danger small";
        return false;
    } else {
        div_error_pasatiempo.innerHTML = "";
        array_pas.push(pasatiempo);
        actualizar();
        console.log(array_pas);
        return true;
    }
};

function validar_lista(){
    var div_error_pasatiempo = document.getElementById("error-pasatiempo");
    var lista = array_pas.length
    if (lista < 2){
        div_error_pasatiempo.innerHTML = "la lista debe tener al menos 2 pasatiempos";
        div_error_pasatiempo.className = "text-danger small";
        return false;

    }
    else{
        div_error_pasatiempo.innerHTML = "";
        return true
    }
};