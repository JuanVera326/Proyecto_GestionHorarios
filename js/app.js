// Atributos de documento //

const formulario_registro = document.forms['form_registro'];
const btn_mostrar_empleados = document.querySelector('#btn_laura');
const btn_excusas = document.querySelector('#btn_aura');
const btn_faltas = document.querySelector('#btn_samuel');

// Eventos //

btn_mostrar_empleados.addEventListener('click',() => {mostrarEmpleados()});
btn_excusas.addEventListener('click',() => {gestionExcusas()});
btn_faltas.addEventListener('click',() => {gestionFaltas()});

// Obtener datos formulario de registro //

let data = {};

formulario_registro.onsubmit = function(e) {
    e.preventDefault();
    
    data.id = e.target[0].value;
    data.nombre = e.target[1].value;
    data.direccion = e.target[2].value;
    data.edad = e.target[3].value;
    data.telefono = e.target[4].value;

    console.table(data);

    registrarEmpleado(data);
};

// Funciones y metodos //

const registrarEmpleado = () => { console.log("Se registra empleado!!"); }

const mostrarEmpleados = () => { console.log("Se muestran empleados!!"); }

const gestionExcusas = () => { console.log("Se gestiona excusas!!"); }

const gestionFaltas = () => { console.log("Se gestiona faltas!!"); }