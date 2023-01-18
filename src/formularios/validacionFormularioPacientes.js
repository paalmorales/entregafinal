export function validarFormulario(datos){

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombrepaciente")
    let etiquetaDocumento=document.getElementById("documentopaciente")

    //validemos 2 campos del formulario
    //nombres-documento-registro del medico
    let nombresPaciente=datos.nombre
    let documentoPaciente=datos.documento

    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMULARIO
    if(nombresPaciente=="" && documentoPaciente==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios',
          })
    }else if(nombresPaciente=="" && documentoPaciente!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if(nombresPaciente=!"" && documentoPaciente==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        alert("nos vamos para la bd")
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }
}