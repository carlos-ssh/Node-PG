let empleados = [{
    id: 1,
    nombre: 'Carlos'
}, {
    id: 2,
    nombre: 'Omar'
}, {
    id: 3,
    nombre: 'Gaby'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`
            Èste usuario no existe con el id ${ id }
            `);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(3, (err, empleado) => {

    if (err) {
        console.log(err);
    } else {
        getSalario(empleado, (err, resp) => {
            console.log(`Èl salario de ${empleado.nombre} es de: $ ${salarios.salario}`);
        });
    }
});