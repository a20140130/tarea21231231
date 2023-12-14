document.write("<br>")
document.write(<h2>Ejercicio 3</h2>)
document.write("<br>")
var familia = ["Natalia", "Angie", "Carlos", "Linda", "Sachiko", "Teresa", "Juan"];
for (let x = 0; x < 7; x ++) {
  familia[x] = prompt("Ingresa el nombre de los miembros de tu familia:");
}
document.write("<br>")
document.write("Nombres de su familia: ", familia);