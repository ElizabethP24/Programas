
const lista1= document.getElementById("listado-elementos1")
const lista2= document.getElementById("listado-elementos2")
const lista3= document.getElementById("listado-elementos3")
const lista4= document.getElementById("listado-elementos4")
const lista5= document.getElementById("listado-elementos5")
const factoriales = []

function crearImagen1(){
    let uno = []
    let simbolos= "a";
    let contenidoLista = " "
    for (let i=0; i<=9; i++){
           uno.push(simbolos)
            contenidoLista +="<li>" + (uno)+ "<br>" + "</li>"
            console.log(contenidoLista)+ "<br>"
            lista1.innerHTML= contenidoLista + "<br>"
        }
     }

function crearImagen2(){
    let uno = ["a","a","a","a","a","a","a","a","a","a"]
    let contenidoLista = " "
    for (let i=0; i<=9; i++){
        contenidoLista +="<li>" + (uno)+ "<br>" + "</li>"
        console.log(contenidoLista)+ "<br>"
        lista2.innerHTML= contenidoLista + "<br>"
        uno.pop()
    }
}

function crearImagen3(){
    let uno = ["a","a","a","a","a","a","a","a","a","a"]
    let contenidoLista = " "
    let contador=0
    for (let i=0; i<=9; i++){
        contenidoLista +="<li>" + (uno)+ "<br>" + "</li>"
        console.log(contenidoLista)+ "<br>"
        lista3.innerHTML= contenidoLista + "<br>"
        uno[contador]= " "
        contador++
    }
}


function crearImagen4(){
    let uno = [" "," "," "," "," "," "," "," "," ","a"]
    let contenidoLista = " "
    let contador=9
    for (let i=0; i<=9; i++){
        contenidoLista +="<li>" + (uno)+ "<br>" + "</li>"
        console.log(contenidoLista)+ "<br>"
        lista4.innerHTML= contenidoLista + "<br>"
        uno[contador]= "a"
        contador--
    }
}

function factorial(){
    let num1 = 0
    let num2= 0

    swal({
        title: 'Bienvenid@',
        text: 'Por favor ingrese el primer número del 1 al 9',
        icon: "info",
        content: {
            element: "input",
            attributes: {
                type: "int",
            },
        },
    }).then( (value) => {
        num1= value
        if(value>9 || value<1){ //Si el usuario ingresó un valor errado se inicia nuevamente
            factorial();
        } else {//de lo contrario se llama nuevamente al método actual

            swal({
                text: 'Por favor ingrese segundo número del 1 al 9',
                icon: "info",
                content: {
                    element: "input",
                    attributes: {
                        type: "int",
                    },
                },
            }).then( (value) => {
                num2= value
                if(value>9 || value<1) { //Si el usuario ingresó un valor errado se inicia nuevamente
                    factorial();
                }else {
                    let resultado=1;
                    for (j = num1; j <= num2; j++) {

                        for (i =1 ; i <=[j]; i++) {
                            resultado = resultado * i;
                            console.log[j]
                            console.log(resultado)
                        }
                        return resultado
                    }
                }

            })

        }
    })
 }
