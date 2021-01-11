let deadpool = {
    Nombre: 'Wade',
    Apellido: 'Winston',
    Poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.Nombre } ${ this.Apellido } - Poder ${ this.Poder } `
    }
};
console.log(deadpool.getNombre());

let {
    Nombre: primerNombre, //Destructuracion
    Apellido,
    Poder
} = deadpool;


console.log(primerNombre, Apellido, Poder);