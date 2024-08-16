function calcularEdad(fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    var mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    return edad;
}
var fechaNacimiento = '1982-04-12';
console.log("La edad es: ".concat(calcularEdad(fechaNacimiento)));
