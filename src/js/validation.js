// --------------------------------------------------------------validacion de formulario
$(document).ready(function(){

    $('#btnSend').click(function(){
  
        let errores = '';
  
        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p style="color: #F14B4B">⦿ Escriba un nombre</p>';
            $('#names').css("border-color", "#F14B4B");
        } else{
            $('#names').css("border-color", "#234AFC");
        }
   
        //Validando telefono=============================
        if( $('#phone').val() == '' ){
          errores += '<p style="color: #F14B4B">⦿ Ingrese un telefono</p>';
          $('#phone').css("border-color", "#f14b4b")
        } else{
          $('#phone').css("border-color", "#234AFC")
        }
       
        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p style="color: #F14B4B">⦿ Escriba un mensaje</p>';
            $('#mensaje').css("border-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-color", "#234AFC")
        }
  
        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                html:
                '<div>'+
                '<h3>Errores encontrados</h3>'+
                errores+
                '</div>',
                showClass: {
                    popup: 'animate__animated animate__bounceIn'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__bounceOut'
                  }

              })
        }else{
          Swal.fire(
            'Listo!',
            'Mensaje enviado',
            'success'
          )
        }
    });
  
  });
  