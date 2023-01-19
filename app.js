// clase constructora
class CrearCliente {
    constructor(nombre, fecha, horario, servicio){
        this.nombre = nombre.toUpperCase();
        this.fecha = Number(fecha);
        this.horario = Number(horario);
        this.servicio = Number(servicio);
    }
    //metodo
    turnosDado(){
        if(this.horario >= 8 && this.horario <= 20){
            switch(this.servicio){
                case 1:
                    let semi = 1000;
                    return this.datosIngresados() + ("\nEl costo del Semi es de: $" + semi);
                            
                case 2:
                    let kapping = 1500;
                    return this.datosIngresados() + ("\nEl costo del Kapping es de: $" + kapping);
    
                case 3:
                    let esculpidas = 2000;
                    return this.datosIngresados() + ("\nEl costo de Esculpidas es de: $" + esculpidas);           
            }
        } 
            
    }
    //metodo
    datosIngresados(){
        return "Su nombre y apellido es: " + this.nombre + "\n" +
                "Su turno es el dia: " + this.fecha + "\n" +
                "En el horario de: " + this.horario + " hs"
    }
}

//------------ funciones ----------------------------
// funcion que valida que no ingrese vacio o nada
function validarQueSeaTexto(mensaje){
    let respuesta = prompt(mensaje);
    while(respuesta == null || respuesta.trim() == ""){
        respuesta = prompt("No puede avanzar sino ingresa letras.\n" + mensaje);
    }
    return respuesta;

}
// 
function validarQueSeaNumero(mensaje, tipo){
    //funcion que valida que no ingrese vacio o vacios o nada y que sea numero
    let respuesta = prompt(mensaje);
    while(respuesta == null || respuesta.trim() == "" || isNaN(Number(respuesta))){
        respuesta = prompt("No puede avanzar sino ingresa un numero.\n" + mensaje)
    }

    if(tipo == "hora"){
        //valido si ingresa una hora incorrecta
        while(respuesta < 8 || respuesta > 20){
            alert("El horario ingresado es incorecto")
            respuesta = prompt("Por favor Ingrese una hora correcta")
        }
        return Number(respuesta);
        
    }else if(tipo == "servicio"){
        //valido si elije una opcion incorrecta
        while(respuesta < 1 || respuesta > 3){
            alert("La opcion del servicio ingresado es incorecto")
            respuesta = prompt("Por favor Ingrese una opcion correcta \n\n\ 1 - semi \n 2 - kapping \n 3 - esculpida");
        }
        return Number(respuesta);
    }
    return Number(respuesta);
}
//funcion que imprime los elementos
function imprimirDatos(elem){
    if(elem.servicio == 1){
        console.log( "Nombre: "+elem.nombre+
        "\nFecha: "+elem.fecha+
        "\nHorario: "+elem.horario+
        "\nServicio: Semipermanente")
    }else if(elem.servicio == 2){
        console.log("Nombre: "+elem.nombre+
        "\nFecha: "+elem.fecha+
        "\nHorario: "+elem.horario+
        "\nServicio: Kapping")

    }else if(elem.servicio == 3){
        console.log("Nombre: "+elem.nombre+
        "\nFecha: "+elem.fecha+
        "\nHorario: "+elem.horario+
        "\nServicio: Esculpidas")
    }else{
        alert("No ingreso una fecha")
    }
}

function filtrarPorFecha(fecha){
    console.log("\n\nLas reservas del dia "+elem.fecha+" son\n\n")
    let filtro = clientesIngresados.filter(elem => elem.fecha == fecha)
    filtro.forEach(elem => imprimirDatos(elem))
}
// funcion que muestra la lista de clientes
function mostrarListaClientes(){
    clientesIngresados.forEach(cliente => {console.log(cliente.turnosDado())});
    lista += clientesIngresados + "\n";
}
//funcion que ingresa al cliente
function ingresarCliente(){
     
    // solicito los datos
    let nombre = validarQueSeaTexto("Ingrese Nombre");
    let fecha = validarQueSeaNumero("Ingrese un dia");
    //valida primero que sea numero y despues que sea la franja horaria
    let horario = validarQueSeaNumero("Ingrese una hora", "hora");

    //valida primero que sea numero y despues que sea la franja horaria
    let servicio = validarQueSeaNumero("Ingrese un servicio: \n 1 - semi \n 2 - kapping \n 3 - esculpida)", "servicio");
    
    // luego de validar creo el cliente
    let cliente = new CrearCliente(nombre, fecha, horario, servicio);
    //console.log(cliente)//para hacer pruebas

    //muestro por pantalla para asegurarame que esta cargando datos
    alert(cliente.turnosDado());
    //ingresan los datos del cliente al array
    clientesIngresados.push(cliente);
}


/*---------------------   codigo que dispara todo   -------------------------------------*/

//inicio vacio
let menu;
let lista = "";

const clientesIngresados = [];

//menu para que el usuario elija una opcion
do{
    menu = Number(prompt(
             "Elija una opcion:\n ANTES HABRA CONSOLA PARA VER RESULTADOS\n\n\
            1- Ingresar Cliente \n\
            2- Mostrar Lista de Clientes Ingresados \n\
            3- Filtar Cliente Por Fechas \n\
            0- Salir"
        ));
    switch(menu){
        case 1:
            ingresarCliente();
            break
        case 2:
            mostrarListaClientes();
            break
        case 3:
            let filtrados = prompt("Ingresa la fecha a filtrar")
            filtrarPorFecha(filtrados);
            break
        case 0:
            alert("Gracias por tu visita, te esperamos pronto!")
            break
        default:
            alert("No ingreso ninguna opcion")
            break
    }

}while(menu != 0)





// let consulta = validarQueSeaTexto("Desea agendar un turno? si/no").toLowerCase();




// while(consulta === "si"){


//     consulta = validarQueSeaTexto("Desea agendar otro turno? si/no").toLowerCase();
    
// }
// al decconsole.log(filtrarPorServicio(filtrados))ir no sale del ciclo y muestra la lista por consola y un alert para saber que salio del ciclo

//console.log(clientesIngresados);//veo como array los datos cargado por consola

//

















