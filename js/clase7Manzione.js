let tablaGrupoC = [];
let partidos = [];
let goles = "";
let orden = 1;

function ordenarNombre(a, b){
    if(a.get_nombre() > b.get_nombre()){
        return (1 * orden);
    }else{
        return (-1 * orden);
    }
}


function ordenarPuntos(a, b){
    if(a.get_puntos() > b.get_puntos()){
        return (-1 * orden);
    }else if (a.get_puntos() == b.get_puntos()){
        if(a.get_diferenciaGoles() > b.get_diferenciaGoles()){
            return (-1 * orden);
        }else{
            return (1 * orden);
        }

        
    }else{
        return (1 * orden);
    }
}

function ordenarGolesAFavor(a, b){
    if(a.get_golesAFavor() > b.get_golesAFavor()){
        return (-1 * orden);
    }else{
        return (1 * orden);
    }
}

function ordenarGolesEnContra(a, b){
    if(a.get_golesEnContra() > b.get_golesEnContra()){
        return (-1 * orden);
    }else{
        return (1 * orden);
    }
}


class Equipo{
    constructor(nombre, puntos, golesAFavor, golesEnContra){
        this.nombre = nombre;
        this.puntos = puntos;
        this.golesAFavor = golesAFavor;
        this.golesEnContra = golesEnContra;
    }

    set_puntos(puntos){
        this.puntos = this.puntos + puntos;
    }

    set_golesAFavor(goles){
        this.golesAFavor = this.golesAFavor + parseInt(goles);
    }

    set_golesEnContra(goles){
        this.golesEnContra = this.golesEnContra + parseInt(goles);
    }

    get_nombre(){
        return this.nombre;
    }

    get_puntos(){
        return this.puntos;
    }

    get_golesAFavor(){
        return this.golesAFavor;
    }

    get_golesEnContra(){
        return this.golesEnContra;
    }

    get_datos(){
        return this.nombre + " | " + this.puntos + " | " + this.golesAFavor + " | "+ this.golesEnContra;
    }

    get_diferenciaGoles(){
        return this.golesAFavor - this.golesEnContra;
    }
}

class Partido{
    constructor(equipoA, golesA, equipoB, golesB){
        this.equipoA = equipoA;
        this.golesA = golesA;
        this.equipoB = equipoB;
        this.golesB = golesB;
    }

    set_golesA(goles){
        this.golesA = goles;
    }

    set_golesB(goles){
        this.golesB = goles;
    }

    get_golesA(){
        return this.golesA;
    }

    get_golesB(){
        return this.golesB;
    }

    get_equipoA(){
        return this.equipoA.get_nombre();
    }
    
    get_equipoB(){
        return this.equipoB.get_nombre();
    }
    
    get_partido(){
        return this.equipoA.nombre + " VS " + this.equipoB.nombre;
    }

    get_resultado(){
        return this.equipoA.nombre + " " + this.golesA + " | "+ this.equipoB.nombre + " " + this.golesB;
    }
}


let argentina = new Equipo("Argentina", 0, 0, 0);
let arabia = new Equipo("Arabia Saudita", 0, 0, 0);
let mexico = new Equipo("Mexico", 0, 0, 0);
let polonia = new Equipo("Polonia", 0, 0, 0);

tablaGrupoC.push(argentina);
tablaGrupoC.push(arabia);
tablaGrupoC.push(mexico);
tablaGrupoC.push(polonia);


let grupoCPartido1 = new Partido(argentina, 0, arabia, 0);
let grupoCPartido2 = new Partido(mexico, 0, polonia, 0);
let grupoCPartido3 = new Partido(arabia, 0, polonia, 0);
let grupoCPartido4 = new Partido(argentina, 0, mexico, 0);
let grupoCPartido5 = new Partido(argentina, 0, polonia, 0);
let grupoCPartido6 = new Partido(arabia, 0, mexico, 0);

partidos.push(grupoCPartido1);
partidos.push(grupoCPartido2);
partidos.push(grupoCPartido3);
partidos.push(grupoCPartido4);
partidos.push(grupoCPartido5);
partidos.push(grupoCPartido6);

console.log("Bienvenido al fixture del Grupo C del mundial de Qatar 2022");
console.log("Indique el resultado de cada partido o escriba SALIR para finalizar");

for (let equipos of partidos){

    let modificar = "SI";
    
    console.log("Partido ", (partidos.indexOf(equipos)+1));
    console.log(equipos.get_partido());

    while (modificar == "SI" ){
        goles = "";

        while (goles < 0 || isNaN(parseInt(goles))){
            goles = prompt("Ingrese los goles que tendrá " + equipos.get_equipoA() + " en el partido "+ equipos.get_partido() + " ");
            if(goles == "SALIR"){
                break;
            }else if (goles < 0 || isNaN(parseInt(goles))){
                alert("Se debe informar un número mayor o igual a 0");
            }
        }

        if(goles == "SALIR" ){
            break;
        }

        equipos.set_golesA(goles);

        goles = "";

        while (goles < 0 || isNaN(parseInt(goles))){
            goles = prompt("Ingrese los goles que tendrá " + equipos.get_equipoB() + " en el partido "+ equipos.get_partido());
            if(goles == "SALIR"){
                break;
            }else if (goles < 0 || isNaN(parseInt(goles))){
                alert("Se debe informar un número mayor o igual a 0");
            }
        }

        if(goles == "SALIR" ){
            break;
        }

        equipos.set_golesB(goles);

        modificar = prompt("El resultado del partido que se ingreso es " + equipos.get_resultado() + " \n ¿Desea modificar el resultado? Ingrese Si para modificarlo y NO para conservarlo ");
        while (modificar != "SI" && modificar != "NO" ){
            modificar = prompt("Solo puede ingresar SI o NO, ¿Quiere modificar el resultado "+ equipos.get_resultado()+ "?") ;
        }
        
    }

    if(goles == "SALIR" ){
        break;
    }


    console.log("El resultado del partido " + (partidos.indexOf(equipos)+1) + " quedo con el resultado " + equipos.get_resultado());

    equipos.equipoA.set_golesAFavor(equipos.get_golesA());
    equipos.equipoA.set_golesEnContra(equipos.get_golesB());
    equipos.equipoB.set_golesAFavor(equipos.get_golesB());
    equipos.equipoB.set_golesEnContra(equipos.get_golesA());

    if( equipos.get_golesA() > equipos.get_golesB()){
        equipos.equipoA.set_puntos(3);
        equipos.equipoB.set_puntos(0);
    }else if(equipos.get_golesA() < equipos.get_golesB()){
        equipos.equipoA.set_puntos(0);
        equipos.equipoB.set_puntos(3);
    }else{
        equipos.equipoA.set_puntos(1);
        equipos.equipoB.set_puntos(1);
    }

}

if (goles !=  "SALIR"){
    console.log("La tabla de grupo C quedo con las siguientes posiciones: ");
    console.log("Pais | Puntos | Goles a favor | Goles en contra ");
    for (let equipo of tablaGrupoC.sort(ordenarPuntos)){
        console.log(equipo.get_datos());
    }

    let ordenar = "";
    while (ordenar != "NO"){
        ordenar = prompt("¿Quieres ordenar la tabla por otro valor? Ingrese únicamente SI o NO");
        while (ordenar != "SI" && ordenar != "NO" ){
            ordenar = prompt("Solo puede ingresar SI o NO, ¿Quieres ordenar la tabla por otro valor?");
        }

        if (ordenar == "SI"){
            ordenar = prompt("Ingrese 1 si quiere ordenar por nombre del pais, 2 si quiere ordenar por puntos, 3 si quiere ordenar por goles a favor o 4 si quiere ordenar por goles en contra.");
            while (ordenar != 1 && ordenar != 2 && ordenar != 3 && ordenar != 4){
                ordenar = prompt("Solo puede ingresar 1, 2, 3 o 4");
            }

            disposicion = prompt("Ingrese 1 si quiere ver la tabla de forma ascendente o 2 si quiere verla de forma descendente");
            while (disposicion != 1 && disposicion != 2){
                disposicion = prompt("Solo puede ingresar 1 o 2");
            }

            if (disposicion == 1){
                orden = 1;
            }else{
                orden = -1;
            }

            console.log("Pais | Puntos | Goles a favor | Goles en contra ");
            if (ordenar == 1){

                for (let equipo of tablaGrupoC.sort(ordenarNombre)){
                    console.log(equipo.get_datos());
                } 
            }else if (ordenar == 2){
                for (let equipo of tablaGrupoC.sort(ordenarPuntos)){
                    console.log(equipo.get_datos());
                } 
            }else if (ordenar == 3){
                for (let equipo of tablaGrupoC.sort(ordenarGolesAFavor)){
                    console.log(equipo.get_datos());
                } 
            }else{
                for (let equipo of tablaGrupoC.sort(ordenarGolesEnContra)){
                    console.log(equipo.get_datos());
                } 
            }
        }
    }

}

if (goles ==  "SALIR"){
    console.log("Ha ingresado SALIR, por lo tanto se da por finalizado el proceso.");
} else {
    console.log("Gracias por utilizar el fixture del Grupo C del mundial de Qatar 2022. Que tenga un buen día.");
}
