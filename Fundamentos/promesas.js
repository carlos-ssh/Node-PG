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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`
            Èste usuario no existe con el id ${ id }
            `);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {


        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(1).then(empleado => {

        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de  ${ resp.nombre } es de: $ ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });