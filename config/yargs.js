const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {

        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Imprime en consola todas las tareas', {

    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};