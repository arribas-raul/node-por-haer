const descripcion = {
     demand: true,
     alias: 'd',
     desc: 'Descripción de la tarea por hacer'
};

const completado = {
     default: true,
     alias: 'c',          
     desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
          .command('crear', 'Crear un elmento por hacer.', { descripcion })  
          .command('listar', 'Lista de tareas.') 
          .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado } )
          .command('borrar', 'Borrar una tarea por hacer', { descripcion }) 
          .help()
          .argv;

module.exports = {
     argv
}