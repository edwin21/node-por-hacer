const fs = require('fs');
const colors = require('colors');
const { toUnicode } = require('punycode');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);

    });
};


const cargaDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }


    //console.log(listadoPorHacer);
};

const crear = (descripcion) => {

    cargaDB();
    let porHacer = {
        descripcion,
        completado: false

    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const getListado = () => {

    cargaDB();
    return listadoPorHacer;

};


const actualizar = (descripcion, completado = true) => {

    cargaDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
    //var elemento = listadoPorHacer.find(a => a.descripcion == descripcion);
};

const borrar = (descripcion) => {

    cargaDB();

    let nuevoListado = listadoPorHacer.filter(a => a.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {

        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

};