//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioPaciente'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombrepaciente")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documentopaciente")
let etiquetaCorreo=document.getElementById("Correoelectronico")
let etiquetaRegimen=document.getElementById("Regimen")
let etiquetaGrupodeingreso=document.getElementById("Grupodeingreso")
let etiquetaCuotamoderadora=document.getElementById("Cuotamoderadora")
let etiquetaTelefono=document.getElementById("Telefono")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaCorreo,etiquetaRegimen,etiquetaGrupodeingreso,etiquetaCuotamoderadora,etiquetaTelefono)

})