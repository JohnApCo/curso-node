//con nodeJS
/* 
const http = require("http");

const server = http.createServer((req, res) => {
  res.end('estoy respondiendo a tu solicitud v2')
})

const puerto = 3000;

server.listen(puerto, () => {
  console.log('escuchando solicitudes')
})
 */

//con expressJS framework de nodeJS

const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
  res.send('Mi respuesta desde express v2')
})

app.get('/servicios',(req,res)=>{
  res.send('Estas en la pagina de servicios')
})

app.listen(port, () =>{
  console.log('escuchando solicitudes desde express desde puerto',port) 
})