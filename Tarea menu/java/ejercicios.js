class Proyecto {
    //1) Dado una serie de numeros presentar la suma de los numeros perfectos
    perfectos() {
        let SerieNum = document.getElementById("Entrada").value
        let TextSalida = document.getElementById("Salida")
        SerieNum = SerieNum.split(",").map(n => Number(n))
        let SumaPerfect = 0
        for (let i = 0; i < SerieNum.length; i++) {
            let cont = 0, acu = 0
            let num = SerieNum[i]
            while (cont < num) {
                if (num % cont == 0) {
                    acu += cont
                }
                cont++
            }
            if (acu == num) {
                SumaPerfect = SumaPerfect + num
            }
        }
        TextSalida.textContent = ("la suma de numeros perfectos es: " + SumaPerfect)
    }
    limpiar() {
        let d = document
        d.getElementById('Entrada').value = ""
        d.getElementById('Salida').textContent = ""
        d.getElementById('Exponente').value = ""
      
 }
 limpiar2() {
    let d = document
    d.getElementById('ValorInicial').value = ""
    d.getElementById('inicio').value = ""
    d.getElementById('fin').value = ""
}
    //2) Dado una serie de numeros presentar los numeros primos
    isprimos(num) {
        let contador = 2
        let bandera = 1
        for (let i = 0; i < num.length; i++) {
            let numero = num[i]
            while (contador < numero && bandera == 1) {
                if (numero % contador == 0) {
                    bandera = 0
                } else {
                    contador++
                }
            }
        }
        return bandera
    }
    ejercicio2() {
        let serieNumeros = document.getElementById("Entrada").value
        let textarea = document.getElementById("Salida")
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let numerosPrimos = []
        for (let i = 0; i < serieNumeros.length; i++) {
            if (this.isprimos([serieNumeros[i]]) == 1) {
                numerosPrimos.push(serieNumeros[i])
            }
        }
        if (numerosPrimos.length > 0) {

            textarea.textContent = "Los numeros primos son: " + numerosPrimos.join(",")
        } else {
            textarea.textContent = "No hay numeros primos:"
        }

    }
    //3) Elaborar una funcion que reciba dos valores base y exponente. la funcion 
    //debera retornar la base elevada al exponente 
    potencia(numero1, numero2) {
        let contador = 1
        let resultado = 1
        while (contador <= numero2) {
            resultado = resultado * numero1
            contador++
        }
        return resultado

    }
    ejercicio3() {
        let num1 = parseFloat(document.getElementById("Entrada").value)
        let num2 = parseFloat(document.getElementById("Exponente").value)
        let textarea = document.getElementById("Salida")
        let n1 = 0
        n1 = this.potencia(num1, num2)
        textarea.textContent = ("el resultado de la potencia es: " + n1)
    }
    //4) Dado una serie de numeros presentar el exponente de cada numero elavado 
    //a su propio numero 
    ejercicio4() {
        let serieNumeros = document.getElementById("Entrada").value
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let arreglonumeros = []
        for (let i = 0; i < serieNumeros.length; i++) {
            let numero = serieNumeros[i]
            let exponente = this.potencia(numero, numero)
            arreglonumeros.push(exponente)
            document.getElementById("Salida").textContent = ("Exponente de su propio numero " + arreglonumeros)
        }
    }
    //5)Elaborar una funcion de la tabla de multiplicar de cualquier base del 1 al  12
    ejercicio5() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada").value)
        let tabla = ""
        for (let i = 1; i <= 12; i++) {
            let producto = i * numeroIngresado
            tabla = tabla + numeroIngresado + " * " + i + " = " + producto + "\n"

        }
        let textarea = document.getElementById("Salida")
        textarea.textContent = tabla
    }
    //6) Realizar una funcion que retorne un arreglo con los divisores de cualquier numero de 
    //cualquier valor inicial 
    retornarsuma1(numero, valor) {
        let arregloNumeros = []

        for (let i = valor; i < numero; i++) {
            if (numero % i == 0) {
                arregloNumeros.push(i)

            }
        }
        return arregloNumeros
    }

    ejercicio6() {
        let numero1 = parseFloat(document.getElementById("Entrada").value)
        let valorinicial = parseFloat(document.getElementById("ValorInicial").value)
        let numeros = this.retornarsuma1(numero1, valorinicial)
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("Los divisores: " + numeros.join(","))

    }
    //7) Realizar una funcion que retorne la suma de los divisores de cualquier numero de 
    //cualquier valor inicial
    retornarsuma(numero, valor) {
        let numeroIngresado = parseFloat(document.getElementById("Entrada").value)
        let valorInicial = parseFloat(document.getElementById("ValorInicial").value)
        let numero1 = this.retornarsuma1(numeroIngresado, valorInicial)
        let acumulador = 0
        for (let i = 0; i < numero1.length; i++) {
            acumulador = acumulador + numero1[i]
        }
        return acumulador
    }

    ejercicio7() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada").value)
        let valorInicial = parseFloat(document.getElementById("ValorInicial").value)
        let numero = this.retornarsuma(numeroIngresado, valorInicial)
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("la suma de los divisores es: " + numero)
    }
    retornardigitos(num) {
        let contador = 0
        let arreglo = []

        while (contador < num) {
            let digito = 0
            digito = num % 10
            num = parseInt(num / 10)
            arreglo.push(digito)
        }
        return arreglo

    }
    ejercicio8() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada").value)
        let numero = this.retornardigitos(numeroIngresado)
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("Los digitos son: " + numero)
    }

    ejercicio9() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada").value)
        let numero = this.retornardigitos(numeroIngresado)
        let suma = 0
        for (let i = 0; i < numero.length; i++) {
            suma = suma + numero[i]
        }
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("La suma de los digitos es: " + suma)
    }
    ejercicio10() {
        let Numero = parseInt(document.getElementById("Entrada").value)
        let mandar = this.retornardigitos(Numero)
        let arregloFinal = []
        for (let i = 0; i < mandar.length; i++) {
            if (mandar[i] % 2 == 0) {
                arregloFinal.push(mandar[i])
            }
        }
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("Los digitos pares son: " + arregloFinal)
    }
    ejercicio11() {
        let Numero = parseInt(document.getElementById("Entrada").value)
        let llamar = this.retornardigitos(Numero)
        let longuitud = llamar.length - 1
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("el primer digito es: " + llamar[longuitud])
    }
    ejercicio12() {
        let Numero = parseInt(document.getElementById("Entrada").value)
        let llamar = this.retornardigitos(Numero)
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("el ultimo digito es: " + llamar[0])
    }
    retornarFactorial(num) {
        let producto = 1
        for (let i = num; i > 0; i--) {
            producto = producto * i
        }
        return producto
    }
    ejercicio13() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada").value)
        let llamar = this.retornarFactorial(numeroIngresado)
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("el factorial del numero ingresado es: " + llamar)
    }
    ejercicio14() {
        let numeroIngresado = document.getElementById("Entrada").value
        numeroIngresado = numeroIngresado.split(",").map(n => Number(n))
        let arregloFinal = []
        for (let i = 0; i < numeroIngresado.length; i++) {
            let numeros = numeroIngresado[i]
            let llamar = this.retornarFactorial(numeros)
            arregloFinal.push(llamar)
            let textarea = document.getElementById("Salida")
            textarea.textContent = ("el factorial de los numeros ingresados es: " + arregloFinal)
        }
    }
    retornarIni(num1, num2) {
        let arregloFinal = []
        if (num1 < num2) {

            for (let i = num1; i < num2; i++) {
                arregloFinal.push(i)
            }
        } else
            if (num1 > num2) {
                for (let i = num1; i > num2; i--) {
                    arregloFinal.push(i)
                }
            }
            return arregloFinal
    }
    ejercicio15() {
        let Inicio = parseFloat(document.getElementById("inicio").value)
        let Fin = parseFloat(document.getElementById("fin").value)
        let final = this.retornarIni(Inicio, Fin)
        let textarea = document.getElementById("Salida")
        textarea.textContent = ("El inicio y el fin del arreglo es: " + final)

    }
}

let x = new Proyecto()
