import {validarFormulario} from './validacionFormularioMedico.js'
//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegistro,etiquetaCorreo,etiquetaEspecialidad,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFotografia){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let registroMedico=etiquetaRegistro.value
    let correoMedico=etiquetaCorreo.value
    let especialidadMedico=etiquetaEspecialidad.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcionMedico=etiquetaDescripcion.value
    let fotografiaMedico=etiquetaFotografia.value

   //debemos almacenar todos los valores del formulario en una SOLA VARIABLE
   //OBJETO=ALMACENAR VARIOS DTOS EN 1 SOLO ESPACIO DE MEMORIA

   let datosFormularioMedico={
    nombres:nombresMedico,
    documento:documentoMedico,
    especialidad:especialidadMedico,
    registro:registroMedico,
    correo:correoMedico,
    sede:sedeMedico,
    horario:horarioMedico,
    descripcion:descripcionMedico,
    fotografia:fotografiaMedico,
   }
   
   validarFormulario(datosFormularioMedico)
}