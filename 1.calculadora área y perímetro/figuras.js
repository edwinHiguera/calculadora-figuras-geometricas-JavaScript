//cogido del cuadrado
console.group("cuadrado")

    function perimetroCuadrado(lado){

        return lado * 4;
    }
    
    function areaCuadrado(lado){
        return lado * lado;
    }

console.groupEnd();


//cogido del triangulo.


console.group("triangulo")

    function perimetroTriangulo(lado1, lado2, ladoBase){
        const cambiazo1= parseInt(lado1);
        const cambiazo2 = parseInt(lado2); //para cambiar el tipo de dato a number.
        const cambiazo3 = parseInt(ladoBase);

        return( cambiazo1 + cambiazo2 + cambiazo3);

    }

    function areaTriangulo(ladoBase, ladoAltura){

        return (ladoBase * ladoAltura) / 2;
    }

console.groupEnd();


// codigo del circulo


console.group("circulo")
    
    const pi = Math.PI;

    function diametroCirculo(radio){
        return radio * 2;
    }

    function perimetroCirculo(radio){
       
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    
    }

    function areaCirculo(radio){
        return (radio * radio) * pi;
    }

console.groupEnd();



// codigo del isosceles.


console.group("isosceles")

    function isosceles(lado1, ladoBase){
        const ladoDividido = ladoBase / 2;
        return (Math.sqrt((lado1 * lado1) - (ladoDividido * ladoDividido)));
    }

console.groupEnd();



//Aquí se interactua con el HTML para el cuadrado.

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado"); //el get element.... sirve para no poner toda la etiqueta del html, osea se trae el id de la etiqueta.
    const value = input.value;  // esta variable hace que nos de solo solo que el usurario escribe, solo el valor que dio o si no se va todo el formulario.

    let longitud = document.getElementById("longitudCuadrado");
    let tipoDeLongitud = longitud.value; //para tener el tipo de medida que dio el usuario.
    const perimetro = perimetroCuadrado(value); //se le asigna la funcion del perimetro con el valor del input que puso el usuario a una variable para ponerla en un alert.
    alert(`el perimetro de tu cuadrado mide: ${perimetro}${tipoDeLongitud}`); 

}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado"); 
    const value = input.value;  

    let longitud = document.getElementById("longitudCuadrado");
    let tipoDeLongitud = longitud.value;

    const area = areaCuadrado(value);
    alert(`el área de tu cuadrado mide: ${area}${tipoDeLongitud}${`^2`}`);

}


//aquí se interactua con HTML para el triangulo.

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo1");
    const value = input.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input3.value;


    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(`el perimetro es: ${perimetro}`);

}


function calcularAreaTriangulo(){

    const inputBase = document.getElementById("inputTriangulo3");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(`el área de tu triangulo es: ${area}`);

}


//Aqui se interactua con el HTML para el circulo.

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    let longitud = document.getElementById("longitudCirculo");
    let tipoDeLongitud = longitud.value;

    const perimetro = perimetroCirculo(value);
    alert(`el perímetro de tu circulo es: ${perimetro}${tipoDeLongitud}`);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    let longitud = document.getElementById("longitudCirculo");
    let tipoDeLongitud = longitud.value;

    const area = areaCirculo(value);
    alert(`el área de tu circulo es: ${area}${tipoDeLongitud}${"^2"}`)
}


//AQUI SE INTERACTUA CON HTML PARA EL ISOSCELES.

function calcularAltura(){
    const input = document.getElementById("inputLado1")
    const value = input.value;

    const input2 = document.getElementById("inputLado2")
    const value2 = input2.value;

    const inputBase = document.getElementById("inputLadoBase");
    const valueBase = inputBase.value;

    const altura = isosceles(value, valueBase);

    if(value!=value2){
        alert(`las medidas no corresponden a un triangulo isósceles`)
    }else 
     alert(`la altura de tu triangulo es: ${altura}`);
}