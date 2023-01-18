//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioMedicos.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenviomedico")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaRegistro=document.getElementById("registro")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorario=document.getElementById("horario")
let etiquetaDescripcion=document.getElementById("floatingTextarea")
let etiquetaFotografia=document.getElementById("fotografia")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegistro,etiquetaCorreo,etiquetaEspecialidad,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFotografia)

})