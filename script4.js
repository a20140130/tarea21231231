document.write("<br>")
document.write(<h2>Ejercicio 4</h2>);
document.write("<br>")
let w = parseInt(prompt("Cuántos elementos tiene el arreglo?"));
    var array = [];
    for(let v = 0; v <= w - 1; v++ ){
        var ele = prompt("Ingresa el elemento " + i);
        array[i]=ele;
    }
    for(let k = 0; k <= w - 1 ; k++ ){
        document.write("<br>")
        document.write(array[k]);
    }
