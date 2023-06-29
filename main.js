

/*alert("Factura de compra de productos");

console.log("SUPERMERCADO ADSO");
console.log("Factura de venta NRO. 001");

const nombre = prompt("Digite su nombre");

const producto1 = prompt("Digite el nombre del primer producto");
let precio1 = prompt("Digite el precio del producto");
precio1 = Number.parseInt(precio1);
console.log(producto1, precio1);

const producto2 = prompt("Digite el nombre del segundo producto");
let precio2 = prompt("Digite el precio del producto");
precio2 = Number.parseInt(precio2);
console.log(producto2, precio2);

const producto3 = prompt("Digite el nombre del tercer producto");
let precio3 = prompt("Digite el precio del producto");
precio3 = Number.parseInt(precio3);
console.log(producto3, precio3);

const producto4 = prompt("Digite el nombre del cuarto producto");
let precio4 = prompt("Digite el precio del producto");
precio4 = Number.parseInt(precio4);
console.log(producto4, precio4);

console.log("---------------------------");

subtotal = precio1 + precio2 + precio3 + precio4;
console.log("El subtotal de la factura es", subtotal);

descuento = (subtotal * 10) / 100;
des = subtotal - descuento;
console.log("El descuento de la factura es", des);

iva = subtotal * 0.19;
console.log("El IVA de la factura es", iva);

total = subtotal - des + iva;
console.log(
  "El total a pagar por el usuario",
  "" + nombre + "",
  "de la factura es de $",
  total
);

console.log("---------------------------");






//////////////////////////////////////////////////////////////////






alert("Calcular nota final");

console.log("CALCULAR NOTA FINAL");
console.log("Recuerde que los valores admitidos solo seran de 10 a 50");

const nombre1 = prompt("Primer estudiante digite su nombre");
let nota1 = prompt("Digite su primer nota");
nota1 = Number.parseInt(nota1);
let nota2 = prompt("Digite su segunda nota");
nota2 = Number.parseInt(nota2);
let nota3 = prompt("Digite su tercer nota");
nota3 = Number.parseInt(nota3);
console.log("Estudiante 1:", nombre1);
console.log("Sus notas son", +nota1, nota2, nota3);
let porcentaje1;
porcentaje1 = (20 / 100) * nota1;
let porcentaje2;
porcentaje2 = (20 / 100) * nota2;
let porcentaje3;
porcentaje3 = (60 / 100) * nota3;
porfinal = porcentaje1 + porcentaje2 + porcentaje3;
console.log("Su nota final es", porfinal);

const nombre2 = prompt("Segundo estudiante digite su nombre");
let enota1 = prompt("Digite su primer nota");
enota1 = Number.parseInt(enota1);
let enota2 = prompt("Digite su segunda nota");
enota2 = Number.parseInt(enota2);
let enota3 = prompt("Digite su tercer nota");
enota3 = Number.parseInt(enota3);
console.log("Estudiante 2:", nombre2);
console.log("Sus notas son", +enota1, enota2, enota3);
let eporcentaje1;
eporcentaje1 = (20 / 100) * enota1;
let eporcentaje2;
eporcentaje2 = (20 / 100) * enota2;
let eporcentaje3;
eporcentaje3 = (60 / 100) * enota3;
eporfinal = eporcentaje1 + eporcentaje2 + eporcentaje3;
console.log("Su nota final es", eporfinal);

const nombre3 = prompt("Tercer estudiante digite su nombre");
let rnota1 = prompt("Digite su primer nota");
rnota1 = Number.parseInt(rnota1);
let rnota2 = prompt("Digite su segunda nota");
rnota2 = Number.parseInt(rnota2);
let rnota3 = prompt("Digite su tercer nota");
rnota3 = Number.parseInt(rnota3);
console.log("Estudiante 3:", nombre3);
console.log("Sus notas son", +rnota1, rnota2, rnota3);
let rporcentaje1;
rporcentaje1 = (20 / 100) * rnota1;
let rporcentaje2;
rporcentaje2 = (20 / 100) * rnota2;
let rporcentaje3;
rporcentaje3 = (60 / 100) * rnota3;
rporfinal = rporcentaje1 + rporcentaje2 + rporcentaje3;
console.log("Su nota final es", rporfinal);



///////////////////////////////////////////////////////////////////////////



alert("TU CLASE EN EDUCATIO");

const clase = {
  materia: prompt("Digite la materia que eligio"),
  tema: prompt("Digite el tema"),
  modalidad: prompt("Digite la modalidad por la cual va a tomar la clase"),
  precio: prompt("Digite el precio"),
  fecha: prompt("Digite la fecha en la cual va a tomar la clase"),
  horas: prompt("Digite el numero de horas que tendra la clase"),
};

const estudiante = {
  nombre: prompt("Digite su nombre"),
  apellido: prompt("Digite su apellido"),
  telefono: prompt("Digite su telefono"),
  metododepago: prompt("Digite el metodo de pago"),
  ciudad: prompt("Digite la ciudad donde va a tomar la clase"),
};

const docente = {
  nombred: prompt("Digite el nombre del docente"),
  apellidod: prompt("Digite el apellido del docente"),
  profesion: prompt("Digite la profesion del docente"),
  telefonod: prompt("Digite el telefono del docente"),
  ciudadd: prompt("Digite la ciudad de residencia del docente"),
};

console.log(clase);
console.log(estudiante);
console.log(docente);

const clases = { ...clase, ...docente, ...estudiante };
preciofinal = clase.precio * clase.horas;
console.log(
  "La materia solicitada  ",
  clase.materia + "  y tema  ",
  clase.tema + "  solicitado por el estudiante  ",
  estudiante.nombre + estudiante.apellido + "  para la fecha  ",
  clase.fecha + "  con modalidad  ",
  clase.modalidad + "  sera dada en la ciudad de  ",
  estudiante.ciudad + "  por el docente  ",
  docente.nombred + docente.apellidod + "  y tendra un costo de  ",
  preciofinal + "  el cual sera pagado por  ",
  estudiante.metododepago
);







/////////////////////////////////////////////////////////////////





alert("Tu clase en EDUCATIO");

const clase = [
  {
    profesor: prompt("Digite su nombre"),
    profesion: prompt("Digite profesion"),
    materia: prompt("Digite la materia"),
  },
  {
    profesor: prompt("Digite su nombre"),
    profesion: prompt("Digite profesion"),
    materia: prompt("Digite la materia"),
  },
  {
    profesor: prompt("Digite su nombre"),
    profesion: prompt("Digite profesion"),
    materia: prompt("Digite la materia"),
  },
];

console.table(clase);





///////////////////////////////////////////////////////////




let numero;
numero = prompt("Escribe un número entero");
do {
  numero = prompt("Este numero no es valido,digite nuevamente");
} while (numero%numero!== 0);

let n = 0;
do {
  console.log(n);
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(`${n} pin pong`);
  } else if (n % 3 === 0) {
    console.log(`${n} ping`);
  } else if (n % 5 === 0) {
    console.log(`${n} pong`);
  }
  n++;
} while (n <= numero);






/////////////////////////////////////////////////////////////////////////////////








alert("Tu clase en EDUCATIO");

const profesores = [];

const pro1 = {
  nombre: prompt("digite su nombre"),
  profesion: prompt("digite profesion"),
  materia: prompt("digite materia"),
};

const pro2 = {
  nombre: prompt("digite su nombre"),
  profesion: prompt("digite profesion"),
  materia: prompt("digite materia"),
};

const pro3 = {
  nombre: prompt("digite su nombre"),
  profesion: prompt("digite profesion"),
  materia: prompt("digite materia"),
};

profesores.unshift(pro3);
profesores.push(pro2);
profesores.push(pro1);

console.table(profesores);






////////////////////////////////////////////////////////////////////////







const colores = ["rojo", "azul", "rosado", "verde", "morrado"];

const [color1, , , color4] = colores;
console.log(color1);
console.log(color4);






/////////////////////////////////////////////////////////////////////////







function profesores(nombre,asignatura,profesion,direccion) {
console.log( "hola",nombre,asignatura,profesion,direccion);
}
profesores('javi','programa','ing','frente al sena')


function bienvenido() {
    console.log("ya estas autenticada");
    iniciosesion("valeria")
}
bienvenido();

function iniciosesion(usuario) {
    console.log("estamos verificando su identidad");
    console.log(`bienvenida ${usuario}`);
}
iniciosesion();





//////////////////////////////////////////////////////







let total=0;

function agregar(precio) {
    return total+=(precio);
}
function iva() {
    return total*1.19;
}

total=agregar(500);
total = agregar(500);
total = agregar(500);

const totalpagar=iva(total);
console.log(total);
console.log(`el valor total de la factura es ${totalpagar}`);





////////////////////////////////////////////////////






const peliculas = {
  drama: function (nombre) {
    console.log(`usted esta en el apartado de peliculas de drama ${nombre}`);
  },

  infantil: function () {
    console.log("usted esta en el apartado de peliculas infantiles");
  },

  suspenso: function () {
    console.log("usted esta en el apartado de peliculas de suspenso");
  },

  terror: function () {
    console.log("usted esta en el apartado de peliculas de terror");
  }
};

peliculas.drama("y esta viendo el silencio")
peliculas.infantil()
peliculas.suspenso()
peliculas.terror()








////////////////////////////////////////////////////////










const reproductor = {
  play: function () {
    console.log("usted dio play");
  },

  stop: function () {
    console.log("usted dio stop");
  },

  pause: function () {
    console.log("usted dio pause");
  },

  forvard: function (siguiente) {
    console.log(`usted paso a la siguiente cancion que se llama ${siguiente}`);
  },

  reverse: function () {
    console.log("usted dio reverse");
  },
};

reproductor.play();
reproductor.stop();
reproductor.pause();
reproductor.forvard("in the name of love");
reproductor.reverse();







//////////////////////////////////////////////////////







const aprender = function(asignatura){
    console.log(`estamos aprendiendo ${asignatura}`);
}
aprender("matematicas")

const aprender2=  (asignatura)=> `estamos aprendiendo ${asignatura}`;
console.log(aprender2("ciencias politicas"));







////////////////////////////////////////////////////////



const dinero = 10000;
const facTotal = 150000;

if (dinero > facTotal) {
  console.log("el dinero si tre alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 150000;

if (facTotal < dinero) {
  console.log("el dinero si te alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 20000;
const tarjeta = false;
const tarcredito = false;
const cheque = true;

if (dinero >= facTotal) {
  console.log("el dinero si te lacanza");
} else if (tarjeta) {
  console.log("puedo pagar porque tengo tarjeta");
} else if (tarcredito) {
  console.log("puedo pagar porque tengo tarjeta credito");
} else if (cheque) {
  console.log("puedo pagar porque tengo cheque");
} else {
  console.log("no es suficiente");
}


const dinero = 10000;
const facTotal = 150000;

if (dinero > facTotal) {
  console.log("el dinero si tre alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 150000;

if (facTotal < dinero) {
  console.log("el dinero si te alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 20000;
const tarjeta = false;
const tarcredito = false;
const cheque = true;

if (dinero >= facTotal) {
  console.log("el dinero si te lacanza");
} else if (tarjeta) {
  console.log("puedo pagar porque tengo tarjeta");
} else if (tarcredito) {
  console.log("puedo pagar porque tengo tarjeta credito");
} else if (cheque) {
  console.log("puedo pagar porque tengo cheque");
} else {
  console.log("no es suficiente");
}




//////////////////////////////////////////////////


//metodo switcth//

const metodopago = 'efectivo';
switch (metodopago){
    case 'efectivo':
        console.log(`el pago fue realizado con ${metodopago}`);
          break;

    case 'cheque':
            console.log(`el pago fue realizado con ${metodopago}`);
            break;

    case 'tarjeta':
            console.log(`el pago fue realizado con ${metodopago}`);
            break;

    case 'tarjeta de credito':
                pagar();
            break;

    default:
     console.log(`no has seleccionado un metodo de pago`)
             break;
}
 function pagar(){
    console.log(` te encuentras pagando con ${metodopago}`);
 }

//tienen que cumplirse ambas //
const usuario= true;
 const puedepagar= false;

 if (usuario){
    console.log('si puede pagar')
 }
 else
 {
    console.log('no este no es el usuario')
 }

 if (usuario && puedepagar){
    console.log('el usuario puede comprar')
 }

 else{
    console.log('el usuario no puede comprar')
 }






////////////////////////////////////////////////////////



 //ejercio mayor menor//11
const edad = prompt(" edad");
if (edad >= 18) {
  console.log("eres mayopr de edad");
} else {
  console.log("eres menor de edad");
}



/////////////////////////////////////////





const usuario= false;
const puedepagar= false;
const transporte= false;

 if (usuario || puedepagar){
    console.log('si puede pagar')
 }
 else
 {
    console.log('el ususario no puede pagar')
}


const usuario= false;
const puedepagar= true;
const transporte= false;

 if (usuario && puedepagar){
    console.log('el usuario puede pagar')
 }
 else if(!usuario)
 {
    console.log('no eres un usuario debes registraste')
 }
 else if(!puedepagar)
 {
    console.log('no tienes fondos')
 }
 else if(!transporte)
 {
    console.log('compre taxi o comprese un carro')
 }
 else{
console.log("el usuario no puede comprar")
}


const efectivo= 1000;
const credito= 5000;
const disponible= efectivo + credito;

totalapagar= 3000;

if(efectivo > totalapagar){
console.log("si puedes pagar");
}
else{
console.log("no puedes pagar");
}


if(efectivo > totalapagar || credito>totalapagar){
console.log("si puedes pagar");
}
else{
console.log("no puedes pagar");
}


if(efectivo > totalapagar || credito>totalapagar || disponible>totalapagar){
console.log("si puedes pagar")
}
else{
console.log("no puedes pagar")
}







////////////////////////////////////////////////////////////////

//iteradores
//for loop

let i;

for (i = 0; i<= 20; i++) {
console.log(`numero:${i}`);
}


let i;
for (i = 0; i <= 20; i++) {
  console.log(`numero:${i}`);
}














////////////////////////////////////


//encontrar numeros pares e impars

let y;
for (y = 0; y <= 50; y++) {
  console.log(`numero:${y}`);
  if (y % 2 === 0) {
    console.log(`el numero es ${y} par`);
  } else {
    console.log(`en numero es${y}impar`);
  }
}




////////////////////////////////////////////




const libros=[
    {nombre:'la iliada', precio: 1500, pasta: 'dura'},
    {nombre:'la odisea', precio: 5500, pasta: 'dura'},
    {nombre:'principito', precio: 7000, pasta: 'plastificada'},
    {nombre:'psicoanalista', precio: 95000, pasta: 'dura'},
    {nombre:'cien años', precio: 45000, pasta: 'dura'},
]

let i;



for(i=0; i<libros.length; i++){
console.log(libros[i].nombre, libros[i].precio);
}


const maestros=[
    {nombre:'angela', materia: 'ciencias'},
    {nombre:'lisbeth', materia: 'arquitetura'},
    {nombre:'valeria', materia: 'dibujo'},
    {nombre:'jerson', materia: 'matematicas'},
    {nombre:'josue', materia: 'geometria'},
]

let i;

//objeto
for (i=0; i <= maestros.length; i++){
console.table(maestros[i]);
}

//destructurin saco los datos que quiero saber
for(i=0; i<maestros.length; i++){
console.log(`${maestros[i].nombre}:${maestros[i].materia}`);
}






////////////////////////////////////







//break y continue

let i;
for(i=0; i <= 10; i++){
console.log(i);
if(i===5) {
    console.log(`este es el numero${i}`);
    break
}
}

for(i=0; i <=10; i++){
console.log(i);
if(i===5){
console.log(`este es el numero${i}`);
continue
}
}









///////////////////////////////////////////////////










const maestros=[
    {nombre:'angela', materia: 'ciencias'},
    {nombre:'lisbeth', materia: 'arquitetura'},
    {nombre:'valeria', materia: 'dibujo'},
    {nombre:'jerson', materia: 'matematicas'},
    {nombre:'josue', materia: 'geometria'},
]

let i;

for(i=0; i<maestros.length; i++){
if(maestros[i].materia==="dibujo"){
console.log(`la mejor opcion es ${maestros[i].nombre}:${maestros[i].materia}`);
continue;
}












/////////////////////////////////////////////





const dinero = 10000;
const facTotal = 150000;

if (dinero > facTotal) {
  console.log("el dinero si tre alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 150000;

if (facTotal < dinero) {
  console.log("el dinero si te alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 20000;
const tarjeta = false;
const tarcredito = false;
const cheque = true;

if (dinero >= facTotal) {
  console.log("el dinero si te lacanza");
} else if (tarjeta) {
  console.log("puedo pagar porque tengo tarjeta");
} else if (tarcredito) {
  console.log("puedo pagar porque tengo tarjeta credito");
} else if (cheque) {
  console.log("puedo pagar porque tengo cheque");
} else {
  console.log("no es suficiente");
}


const dinero = 10000;
const facTotal = 150000;

if (dinero > facTotal) {
  console.log("el dinero si tre alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 150000;

if (facTotal < dinero) {
  console.log("el dinero si te alcanza");
} else {
  console.log("no es suficiente");
}

const dinero = 10000;
const facTotal = 20000;
const tarjeta = false;
const tarcredito = false;
const cheque = true;

if (dinero >= facTotal) {
  console.log("el dinero si te lacanza");
} else if (tarjeta) {
  console.log("puedo pagar porque tengo tarjeta");
} else if (tarcredito) {
  console.log("puedo pagar porque tengo tarjeta credito");
} else if (cheque) {
  console.log("puedo pagar porque tengo cheque");
} else {
  console.log("no es suficiente");
}





/////////////////////////////////////////////











//metodo switcth//

const metodopago = 'efectivo';
switch (metodopago){
    case 'efectivo':
        console.log(`el pago fue realizado con ${metodopago}`);
          break;

    case 'cheque':
            console.log(`el pago fue realizado con ${metodopago}`);
            break;

    case 'tarjeta':
            console.log(`el pago fue realizado con ${metodopago}`);
            break;

    case 'tarjeta de credito':
                pagar();
            break;

    default:
     console.log(`no has seleccionado un metodo de pago`)
             break;
}
 function pagar(){
    console.log(` te encuentras pagando con ${metodopago}`);
 }







/////////////////////////////////////////////////////////











//tienen que cumplirse ambas //
const usuario= true;
 const puedepagar= false;

 if (usuario){
    console.log('si puede pagar')
 }
 else
 {
    console.log('no este no es el usuario')
 }

 if (usuario && puedepagar){
    console.log('el usuario puede comprar')
 }

 else{
    console.log('el usuario no puede comprar')
 }





/////////////////////////////////////////////






 //ejercio mayor menor//11
const edad = prompt(" edad");
if (edad >= 18) {
  console.log("eres mayopr de edad");
} else {
  console.log("eres menor de edad");
}


const usuario= false;
const puedepagar= false;
const transporte= false;

 if (usuario || puedepagar){
    console.log('si puede pagar')
 }
 else
 {
    console.log('el ususario no puede pagar')
}






////////////////////////////////////////




const usuario= false;
const puedepagar= true;
const transporte= false;

 if (usuario && puedepagar){
    console.log('el usuario puede pagar')
 }
 else if(!usuario)
 {
    console.log('no eres un usuario debes registraste')
 }
 else if(!puedepagar)
 {
    console.log('no tienes fondos')
 }
 else if(!transporte)
 {
    console.log('compre taxi o comprese un carro')
 }
 else{
console.log("el usuario no puede comprar")
}






/////////////////////////////////////////////////////







const efectivo= 1000;
const credito= 5000;
const disponible= efectivo + credito;

totalapagar= 3000;

if(efectivo > totalapagar){
console.log("si puedes pagar");
}
else{
console.log("no puedes pagar");
}


if(efectivo > totalapagar || credito>totalapagar){
console.log("si puedes pagar");
}
else{
console.log("no puedes pagar");
}


if(efectivo > totalapagar || credito>totalapagar || disponible>totalapagar){
console.log("si puedes pagar")
}
else{
console.log("no puedes pagar")
}








//////////////////////////////////////////











//iteradores
//for loop

let i;

for (i = 0; i<= 20; i++) {
console.log(`numero:${i}`);
}


let i;
for (i = 0; i <= 20; i++) {
  console.log(`numero:${i}`);
}

//encontrar numeros pares e impars

let y;
for (y = 0; y <= 50; y++) {
  console.log(`numero:${y}`);
  if (y % 2 === 0) {
    console.log(`el numero es ${y} par`);
  } else {
    console.log(`en numero es${y}impar`);
  }
}








///////////////////////////////////////













const libros=[
    {nombre:'la iliada', precio: 1500, pasta: 'dura'},
    {nombre:'la odisea', precio: 5500, pasta: 'dura'},
    {nombre:'principito', precio: 7000, pasta: 'plastificada'},
    {nombre:'psicoanalista', precio: 95000, pasta: 'dura'},
    {nombre:'cien años', precio: 45000, pasta: 'dura'},
]

let i;



for(i=0; i<libros.length; i++){
console.log(libros[i].nombre, libros[i].precio);
}








//////////////////////////////////



const maestros=[
    {nombre:'angela', materia: 'ciencias'},
    {nombre:'lisbeth', materia: 'arquitetura'},
    {nombre:'valeria', materia: 'dibujo'},
    {nombre:'jerson', materia: 'matematicas'},
    {nombre:'josue', materia: 'geometria'},
]

let i;

//objeto
for (i=0; i <= maestros.length; i++){
console.table(maestros[i]);
}

//destructurin saco los datos que quiero saber
for(i=0; i<maestros.length; i++){
console.log(`${maestros[i].nombre}:${maestros[i].materia}`);
}





/////////////////////////////////////










//break y continue

let i;
for(i=0; i <= 10; i++){
console.log(i);
if(i===5) {
    console.log(`este es el numero${i}`);
    break
}
}

for(i=0; i <=10; i++){
console.log(i);
if(i===5){
console.log(`este es el numero${i}`);
continue
}
}








/////////////////////////////////////







const maestros=[
    {nombre:'angela', materia: 'ciencias'},
    {nombre:'lisbeth', materia: 'arquitetura'},
    {nombre:'valeria', materia: 'dibujo'},
    {nombre:'jerson', materia: 'matematicas'},
    {nombre:'josue', materia: 'geometria'},
]

let i;

for(i=0; i<maestros.length; i++){
if(maestros[i].materia==="dibujo"){
console.log(`la mejor opcion es ${maestros[i].nombre}:${maestros[i].materia}`);
continue;
}


//while=mientras que se cumpla eso haga tal cosa

let i=0;
while(i<10){
console.log(`el numero${i}`);//condicion
i++;//incremento
}

let x=0;
while(x<=20){
if(x%2==0)[
console.log(`el numero${i} es par`)
]
i++;
}



/////////////////////////////////////////



const numero = prompt("escribe un numero");
if (numero % numero !== 0) {
  console.log("no es valido");
}

for (n = 0; n <= numero; n++) {
  console.log(`${n}`);
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(`${n} pin pong`);
  } else if (n % 3 === 0) {
    console.log(` ${n} ping`);
  } else if (n % 5 === 0) {
    console.log(` ${n} pong`);
  }
}


let i=0;
do{
  console.log(`los numeros en orden ${i}`);
  i++
}
while(i++);


const numero = prompt("escribe un numero");
if (numero % numero !== 0) {
  const numero = prompt("escriba el numero nuevamente");
}


let numero;
while(numero = prompt("escribe un numero")){
  if(numero % numero !== 0)[
  numero = prompt("escriba el numero nuevamente")
  ]
  i++;
}


while(numero=prompt("escribe un numero"))
if(numero%numero!== 0){
    const numero=prompt("escribe un numero nuevamente")  
}

let i=0;
do{
  console.log(`los numeros en orden ${i}`);
  i++
}
while(i++);*/

