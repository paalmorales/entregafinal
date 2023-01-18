import {validarFormulario} from './validacionFormularioPaciente'
//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaCorreo,etiquetaRegimen,etiquetaGrupodeingreso,etiquetaCuotamoderadora,etiquetaTelefono){

    let nombresPaciente=etiquetaNombre.value
    let documentoPaciente=etiquetaDocumento.value
    let correopaciente=etiquetaCorreo.value
    let RegimenPaciente=etiquetaRegimen.value
    let Grupodeingreso=etiquetaGrupodeingreso.value
    let Cuotamoderadora=etiquetaCuotamoderadora
    let TelefonoPaciente=etiquetaTelefono

   //debemos almacenar todos los valores del formulario en una SOLA VARIABLE
   //OBJETO=ALMACENAR VARIOS DTOS EN 1 SOLO ESPACIO DE MEMORIA

   let datosFormularioPaciente={
    nombrecompleto:nombresPaciente,
    documentodeidentidad:documentoPaciente,
    correo:correopaciente,
    Regimen:RegimenPaciente,
    Grupodeingreso:Grupodeingreso,
    CuotaModeradora:Cuotamoderadora,
    Telefono:TelefonoPaciente,

   }
   
   validarFormulario(datosFormularioPaciente)
}
