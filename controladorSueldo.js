let etiquetaNombre = document.getElementById("nombreTrabajador");
let etiquetaHoras = document.getElementById("horasTrabajadas");
let botonCalcular = document.getElementById("botonCalcular");
let resultado = document.getElementById("resultado");
let validar1 = document.getElementById("validar1");
let validar2 = document.getElementById("validar2");
//2.Configuro escuchador de evento de clic sobre el boton Calcular
botonCalcular.addEventListener("click", validarFormulario);


function validarFormulario() {
    let nombre = etiquetaNombre.value;
    let horas = Number(etiquetaHoras.value);

    if (nombre == "" && horas == "") {
        etiquetaNombre.classList.add("is-invalid")
        validar1.classList.add("text-danger")
        validar1.textContent = "Ingresa tu nombre"
        etiquetaHoras.classList.add("is-invalid")
        validar2.classList.add("text-danger")
        validar2.textContent = "Ingresa el numero de horas trabajadas 'Mayor a 0'"
    } else {
        if (nombre == "") {
            etiquetaNombre.classList.add("is-invalid")
            validar1.classList.add("text-danger")
            validar1.textContent = "Ingresa tu nombre"
            etiquetaHoras.classList.remove("is-invalid")
            validar2.classList.remove("text-danger")
            validar2.textContent = ""
        } else {
            if (horas == "") {
                etiquetaHoras.classList.add("is-invalid")
                validar2.classList.add("text-danger")
                validar2.textContent = "Ingresa el numero de horas trabajadas 'Mayor a 0'"
                etiquetaNombre.classList.remove("is-invalid")
                validar1.classList.remove("text-danger")
            validar1.textContent = ""
            } else {
                etiquetaNombre.classList.remove("is-invalid")
                validar1.classList.remove("text-danger")
                validar1.textContent = ""
                etiquetaHoras.classList.remove("is-invalid")
                validar2.classList.remove("text-danger")
                validar2.textContent = ""
                calcularSueldo(horas, nombre);
            }
        }
    }
}


function calcularSueldo(horas, nombre) {
    if (horas >= 1 && horas <= 40) {
        resultado.textContent = nombre + " Tu sueldo correspondiente a la semana calculada es: $" + horas * 20000;
    } else if (horas > 40) {
        let normales = 40 * 20000;
        let resta = horas - 40;
        let recargo = resta * 25000;
        let total = normales + recargo;

        resultado.textContent = nombre + " Tus horas normales trabajas fueron: 40 que equivales a un total de: $" + normales + ", tus horas extras fueron " + resta + " con un valor de: $" + recargo + " obteniendo un salario total de: $" + total;
    } else {
        resultado.textContent = "Revisar datos de entrada";
    }

}

