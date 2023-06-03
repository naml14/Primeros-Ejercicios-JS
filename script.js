let seleccion=parseInt(prompt(`introdusca el número para ejecutar el ejercicio deseado:
    1. Ejercicio 1.
    2. Ejercicio 2. 
    3. Ejercicio 3.
    4. Ejercicio 4.
    5. Ejercicio 5.
    6. Ejercicio 6.
    7. Ejercicio 7.
    8. Ejercicio 8.
    9. Ejercicio 9.
    10. Ejercicio 10.
    11. Ejercicio 11.
    12. SALIR.
Si llega a introducir una opción no válida estará en un bucle infinito`));
if(seleccion===1||seleccion===2||seleccion===3||seleccion===4||seleccion===5||seleccion===6||seleccion===7||seleccion===8||seleccion===9||seleccion===10||seleccion===11||seleccion===12){error=0}
else{error=1}
while(error==1){
    seleccion=parseInt(prompt(`introdusca el número para ejecutar el ejercicio deseado:
    1. Ejercicio 1.
    2. Ejercicio 2. 
    3. Ejercicio 3.
    4. Ejercicio 4.
    5. Ejercicio 5.
    6. Ejercicio 6.
    7. Ejercicio 7.
    8. Ejercicio 8.
    9. Ejercicio 9.
    10. Ejercicio 10.
    11. Ejercicio 11.
    12. SALIR.
Si llega a introducir una opción no válida estará en un bucle infinito`))
    if(seleccion===1||seleccion===2||seleccion===3||seleccion===4||seleccion===5||seleccion===6||seleccion===7||seleccion===8||seleccion===9||seleccion===10||seleccion===11||seleccion===12){error=0}
    else{error=1}
}
switch (seleccion) {
    case 1:
        bello();
        break;
    case 2:
        modulo();
        break;
    case 3:
        par();
        break;
    case 4:
        ganador();
        break;
    case 5:
        comparar2();
        break;
    case 6:
        comparar3();
        break;
    case 7:
        dia();
        break;
    case 8:
        nota();
        break;
    case 9:
        helado();
        break;
    case 10:
        curso();
        break;
    case 11:
        transporte();
        break;
    default:
        alert("Gracias por usar este programa")
        delete seleccion
        break;
}
function bello() {
    let bello=prompt("¿Eres bellisimo/a?")
        if (bello=="si"||bello=="Si"||bello=="SI"||bello=="sI"||bello=="no"||bello=="No"||bello=="NO"||bello=="nO") {
            error=0
        } else {
            error=1
        }
        if (error==0) {
            if (bello=="si"||bello=="Si"||bello=="SI"||bello=="sI") {
                alert("Ciertamente")
            }
            if (bello=="no"||bello=="No"||bello=="NO"||bello=="nO") {
                alert("No te creo")
            }
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete seleccion
}
function modulo() {
    let num=parseInt(prompt("Ingrese un número para saber si es divisible por 2"))
        if (!isNaN(num)) {
            if ((num%2)==0) {
                alert(`El número ${num} es divisible entre 2`)
            } else {
                alert(`El número ${num} no es divisible entre 2`)
            }
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete seleccion
}
function par() {
    let par=parseInt(prompt("Ingrese un número para saber si es divisible par o no"))
        if (!isNaN(par)) {
            if (par&1!=0) {
                alert(`El número ${par} es un número par`)
            } else {
                alert(`El número ${par} no es un número par`)
            }
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete seleccion
}
function ganador(ganador) {
    let ganador=parseInt(prompt("Ingrese su número de cliente"))
        if (!isNaN(ganador)) {
            if (ganador===1000) {
                alert("Ganaste un premio")
            } else {
                alert(`Cliente n° ${ganador}.
                        Lo sentimos, sigue participando`)
            }
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete seleccion
}
function comparar2() {
    let num1=parseInt(prompt("Ingrese el primer número que desea comprar, Si no es un número estará en un bucle infinito"))
        while (isNaN(num1)) {
            num1=parseInt(prompt("Ingrese el primer número que desea comprar, Si no es un número estará en un bucle infinito"))
        }
        let num2=parseInt(prompt("Ingrese el segundo número que desea comprar, Si no es un número estará en un bucle infinito"))
        while (isNaN(num2)) {
            num2=parseInt(prompt("Ingrese el segundo número que desea comprar, Si no es un número estará en un bucle infinito"))
        }
        if (num1<num2) {
            alert(`El número ${num1} es el menor`)
        } else {
            alert(`El número ${num2} es el menor`)
        }
    delete num1
    delete num2
    delete seleccion
}
function comparar3() {
    let numb1=parseInt(prompt("Ingrese el primer número que desea comprar, Si no es un número estará en un bucle infinito"))
        while (isNaN(numb1)) {
            numb1=parseInt(prompt("Ingrese el primer número que desea comprar, Si no es un número estará en un bucle infinito"))
        }
        let numb2=parseInt(prompt("Ingrese el segundo número que desea comprar, Si no es un número estará en un bucle infinito"))
        while (isNaN(numb2)) {
            numb2=parseInt(prompt("Ingrese el segundo número que desea comprar, Si no es un número estará en un bucle infinito"))
        }
        let numb3=parseInt(prompt("Ingrese el tercer número que desea comprar, Si no es un número estará en un bucle infinito"))
        while (isNaN(numb3)) {
            numb3=parseInt(prompt("Ingrese el tercer número que desea comprar, Si no es un número estará en un bucle infinito"))
        }
        if (numb1===numb2) {
            if (numb1>numb3) {
                alert(`El primer y segundo número son los mayores`)
            } else {
                alert(`El tercer número es el mayor`)
            }
        } else if (numb1>numb2) {
            if (numb1===numb3) {
                alert(`El primer y tercer número son los mayores`)
            } else if(numb1>numb3){
                alert(`El primer número es el mayor`)
            } else{
                alert(`El tercer número es el mayor`)
            }
        } else{
            if (numb2===numb3) {
                alert(`El segundo y tercer número son los mayores`)
            } else if (numb2>numb3) {
                alert(`El segundo número es el mayor`)
            } else if (numb1===numb3) {
                alert(`El primer y tercer número son los mayores`)
            } else {
                alert(`El tercer número es el mayor`)
            }
        }
    delete numb1
    delete numb2
    delete numb3
    delete seleccion
}
function dia() {
    let dia=prompt("Ingrese un día de la semana por favor").toLowerCase()
        if (dia=="lunes") {
            alert("Inicio de semana")
        } else if (dia=="viernes") {
            alert("Se viene el fin de semana")
        } else if (dia=="sabado"||dia=="domingo") {
            alert("Estamos en fin de semana")
        } else if (dia=="martes"||dia=="miercoles"||dia=="jueves") {
            alert("Día normal")
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete seleccion
}
function nota() {
    let nota=parseInt(prompt("Ingrese la calificación por favor, Si no es un número estará en un bucle infinito"))
        while (isNaN(nota)) {
            nota=parseInt(prompt("Ingrese la calificación por favor, Si no es un número estará en un bucle infinito"))
        }
        if (nota>10||nota<1) {
            alert("ENTRADA ERRONEA SALIENDO")
        } else {
            if (nota<6) {
                alert("REPROBADO")
            } else if (nota>=6||nota<=8) {
                alert("REGULAR")
            } else if (nota=9) {
                alert("BIEN")
            } else {
                alert("EXCELENTE")
            }
        }
    delete seleccion
}
function helado() {
    const costo=50
        let selec=prompt("¿Desea su helado con algún tipo de topping?").toLowerCase()
        if (selec==="si") {
            let topping=prompt("¿Qué tipo de topping desea?").toLowerCase()
            switch (topping) {
                case "topping de oreo":
                    alert(`El helado con topping de oreo cuesta ${costo+10} MXN`)
                    break;
                case "topping de kitkat":
                    alert(`El helado con topping de KitKat cuesta ${costo+15} MXN`)
                    break;
                case "topping de brownie":
                    alert(`El helado con topping de brownie cuesta ${costo+20} MXN`)
                    break;
                default:
                    alert(`No tenemos este topping, lo sentimos.
                    El helado sin topping cuesta ${costo} MXN`)
                    break;
            }
        } else if (selec=="no") {
            alert(`El helado sin topping cuesta ${costo} MXN`)
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete costo
    delete seleccion
}
function curso() {
    const course=4999
    const carrera=3999
    const master=2999
    const facebook=0.2
    const google=0.15
    const jesua=0.5
        let tipo=parseInt(prompt(`Ingrese el tipo de nivel que desea por favor, Si no es un número estará en un bucle infinito
        1. Couse: $${course} MXN
        2. Carrera: $${carrera} MXN
        3. Master $${master} MXN
        4. Salir`))
        while (isNaN(tipo)) {
            tipo=parseInt(prompt(`Ingrese el tipo de nivel que desea por favor, Si no es un número estará en un bucle infinito
        1. Couse: $${course} MXN
        2. Carrera: $${carrera} MXN
        3. Master $${master} MXN
        4. Salir`))
        }
        if (tipo<=4) {
            switch (tipo) {
                case 1:
                    let descuento=parseInt(prompt(`¿Cuenta con algún descuento?, Si no selecciona bien estará en un bucle infinito
                    1. Si
                    2. No`))
                    while (isNaN(descuento)||(descuento<1||descuento>2)) {
                        descuento=parseInt(prompt(`¿Cuenta con algún descuento?, Si no selecciona bien estará en un bucle infinito
                    1. Si
                    2. No`))
                    }
                    if (descuento==1) {
                        let tdescuento=parseInt(prompt(`¿Qué tipo de descuento tiene?, Si no selecciona bien estará en un bucle infinito
                        1. Beca Facebook
                        2. Beca Google
                        3. Beca Jesua`))
                        while (isNaN(tdescuento)||(tdescuento>3||tdescuento<1)) {
                            tdescuento=parseInt(prompt(`¿Qué tipo de descuento tiene?, Si no selecciona bien estará en un bucle infinito
                        1. Beca Facebook
                        2. Beca Google
                        3. Beca Jesua`))
                        }
                        switch (tdescuento) {
                            case 1:
                                alert(`El total a pagar mensualmente es de $${parseInt(course*facebook)} MXN durante 2 meses
                                    En total sería $${parseInt(course*facebook)*2} MXN`)
                                break;
                            case 2:
                                alert(`El total a pagar mensualmente es de $${parseInt(course*google)} MXN durante 2 meses
                                    En total sería $${parseInt(course*google)*2} MXN`)
                                break;
                            case 3:
                                alert(`El total a pagar mensualmente es de $${parseInt(course*jesua)} MXN durante 2 meses
                                    En total sería $${parseInt(course*jesua)*2} MXN`)
                                break;
                            default:
                                break;
                        }
                    } else {
                        alert(`El total a pagar mensualmente es de $${course} MXN durante 2 meses
                            En total sería $${course*2} MXN`)
                    }
                    break;
                case 2:
                    let descuento2=parseInt(prompt(`¿Cuenta con algún descuento?, Si no selecciona bien estará en un bucle infinito
                    1. Si
                    2. No`))
                    while (isNaN(descuento2)||(descuento2>2||descuento2<1)) {
                        descuento2=parseInt(prompt(`¿Cuenta con algún descuento?, Si no selecciona bien estará en un bucle infinito
                    1. Si
                    2. No`))
                    }
                    if (descuento2==1) {
                        let tdescuento2=parseInt(prompt(`¿Qué tipo de descuento tiene?, Si no selecciona bien estará en un bucle infinito
                        1. Beca Facebook
                        2. Beca Google
                        3. Beca Jesua`))
                        while (isNaN(tdescuento2)||(tdescuento2>3||tdescuento2<1)) {
                            tdescuento2=parseInt(prompt(`¿Qué tipo de descuento tiene?, Si no selecciona bien estará en un bucle infinito
                        1. Beca Facebook
                        2. Beca Google
                        3. Beca Jesua`))
                        }
                        switch (tdescuento2) {
                            case 1:
                                alert(`El total a pagar mensualmente es de $${parseInt(carrera*facebook)} MXN durante 6 meses
                                    En total sería $${parseInt(carrera*facebook)*6} MXN`)
                                break;
                            case 2:
                                alert(`El total a pagar mensualmente es de $${parseInt(carrera*google)} MXN durante 6 meses
                                    En total sería $${parseInt(carrera*google)*6} MXN`)
                                break;
                            case 3:
                                alert(`El total a pagar mensualmente es de $${parseInt(carrera*jesua)} MXN durante 6 meses
                                    En total sería $${parseInt(carrera*jesua)*6} MXN`)
                                break;
                            default:
                                break;
                        }
                    } else {
                        alert(`El total a pagar mensualmente es de $${carrera} MXN durante 6 meses
                            En total sería $${carrera*6} MXN`)
                    }
                    break;
                case 3:
                    let descuento3=parseInt(prompt(`¿Cuenta con algún descuento?, Si no selecciona bien estará en un bucle infinito
                    1. Si
                    2. No`))
                    while (isNaN(descuento3)||(descuento3>2||descuento3<1)) {
                        descuento3=parseInt(prompt(`¿Cuenta con algún descuento?, Si no selecciona bien estará en un bucle infinito
                        1. Si
                        2. No`))
                    }
                    if (descuento3==1) {
                        let tdescuento3=parseInt(prompt(`¿Qué tipo de descuento tiene?, Si no selecciona bien estará en un bucle infinito
                        1. Beca Facebook
                        2. Beca Google
                        3. Beca Jesua`))
                        while (isNaN(tdescuento3)||(tdescuento3>3||tdescuento3<1)) {
                            tdescuento3=parseInt(prompt(`¿Qué tipo de descuento tiene?, Si no selecciona bien estará en un bucle infinito
                        1. Beca Facebook
                        2. Beca Google
                        3. Beca Jesua`))
                        }
                        switch (tdescuento3) {
                            case 1:
                                alert(`El total a pagar mensualmente es de $${parseInt(master*facebook)} MXN durante 12 meses
                                    En total sería $${parseInt(master*facebook)*12} MXN`)
                                break;
                            case 2:
                                alert(`El total a pagar mensualmente es de $${parseInt(master*google)} MXN durante 12 meses
                                    En total sería $${parseInt(master*google)*12} MXN`)
                                break;
                            case 3:
                                alert(`El total a pagar mensualmente es de $${parseInt(master*jesua)} MXN durante 12 meses
                                    En total sería $${parseInt(master*jesua)*12} MXN`)
                                break;
                            default:
                                break;
                        }
                    } else {
                        alert(`El total a pagar mensualmente es de $${master} MXN durante 12 meses
                            En total sería $${master*12} MXN`)
                    }
                    break;
                default:
                    alert("Gracias por visitarnos, vuelva pronto")
                    break;
            }
        } else {
            alert("ENTRADA ERRONEA SALIENDO")
        }
    delete seleccion
    delete course
    delete carrera
    delete master
    delete facebook
    delete google
    delete jesua
}
function transporte() {
    const coche=0.2
        const moto=0.1
        const autobus=0.5
        let auto=parseInt(prompt(`¿Qué tipo de vehículo usó?, Si no selecciona bien estará en un bucle infinito
        1. Coche
        2. Moto
        3. Autobús`))
        while (isNaN(auto)||(auto>3||auto<1)) {
            auto=parseInt(prompt(`¿Qué tipo de vehículo usó?, Si no selecciona bien estará en un bucle infinito
        1. Coche
        2. Moto
        3. Autobús`))
        }
        let distancia=parseInt(prompt("Ingrese la cantidad de kilometros recorridos, Si no es un número estará en un bucle infinito"))
        while (isNaN(distancia)) {
            distancia=parseInt(prompt("Ingrese la cantidad de kilometros recorridos, Si no es un número estará en un bucle infinito"))
        }
        let litros=parseInt(prompt("Ingrese la cantidad de litros consumidos, Si no es un número estará en un bucle infinito"))
        while (isNaN(litros)) {
            litros=parseInt(prompt("Ingrese la cantidad de litros consumidos, Si no es un número estará en un bucle infinito"))
        }
        switch (auto) {
            case 1:
                if (litros<=100) {
                    alert(`Su total a pagar es: $${(coche*distancia)+5}`)
                } else {
                    alert(`Su total a pagar es: $${(coche*distancia)+10}`)
                }
                break;
            case 2:
                if (litros<=100) {
                    alert(`Su total a pagar es: $${(moto*distancia)+5}`)
                } else {
                    alert(`Su total a pagar es: $${(moto*distancia)+10}`)
                }
                break;
            case 3:
                if (litros<=100) {
                    alert(`Su total a pagar es: $${(autobus*distancia)+5}`)
                } else {
                    alert(`Su total a pagar es: $${(autobus*distancia)+10}`)
                }
                break;
            default:
                break;
        }
    delete coche
    delete moto
    delete autobus
    delete seleccion
}