//let peso=80
//let altura=1.65

let etiquetaPeso = document.getElementById("peso");
let etiquetaEstatura = document.getElementById("estatura");
let botonCalcular2 = document.getElementById("botonCalcular2");
let resultado2 = document.getElementById("resultado2");
let validar3 = document.getElementById("validar3");
let validar4 = document.getElementById("validar4");
botonCalcular2.addEventListener("click", validarFormulario2);

function validarFormulario2() {
    let peso = etiquetaPeso.value;
    let estatura = Number(etiquetaEstatura.value);
console.log("hola");
    if (peso == "" && estatura == "") {
        etiquetaPeso.classList.add("is-invalid")
        validar3.classList.add("text-danger")
        validar3.textContent = "Ingresa tu Peso"
        etiquetaEstatura.classList.add("is-invalid")
        validar4.classList.add("text-danger")
        validar4.textContent = "Ingresa una estatura valida 'Ejemplo 1.60'"
    } else {
        if (peso == "") {
            etiquetaPeso.classList.add("is-invalid")
            validar3.classList.add("text-danger")
            validar3.textContent = "Ingresa tu Peso"
            etiquetaEstatura.classList.remove("is-invalid")
            validar4.classList.remove("text-danger")
            validar4.textContent = ""
        } else {
            if (estatura == "") {
                etiquetaEstatura.classList.add("is-invalid")
                validar4.classList.add("text-danger")
                validar4.textContent = "Ingresa una estatura valida 'Ejemplo 1.60'"
                etiquetaPeso.classList.remove("is-invalid")
                validar3.classList.remove("text-danger")
            validar3.textContent = ""
            } else {
                etiquetaPeso.classList.remove("is-invalid")
                validar3.classList.remove("text-danger")
                validar3.textContent = ""
                etiquetaEstatura.classList.remove("is-invalid")
                validar4.classList.remove("text-danger")
                validar4.textContent = ""
                
                calcularIMC(peso,estatura)
            }
        }
    }
}

function calcularIMC(peso, estatura) {
    let imc = peso / Math.pow(estatura, 2)
    if (imc > 50) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Obesidad tipo IV (Extrema)"
    } else if (imc > 40 && imc <= 49.9) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Obesidad tipo III (Mórbida)"
    } else if (imc > 35 && imc <= 39.9) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Obesidad tipo II"
    } else if (imc > 30 && imc <= 34.9) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Obesidad tipo I"
    } else if (imc > 27 && imc <= 29.9) {
        resultado2.textContent ="Tu IMC es "+imc+  " y es equivalente a Sobre peso grado II (Preobesidad)"
    } else if (imc > 25 && imc <= 26.9) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Sobre peso grado I"
    } else if (imc > 18.5 && imc <= 24.9) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Normopeso"
    } else if (imc < 18.5) {
        resultado2.textContent ="Tu IMC es "+imc+ " y es equivalente a Peso insuficiente"
    }
    
}


/*
imc = peso /  Math.pow(altura, 2)
console.log(imc)
*/