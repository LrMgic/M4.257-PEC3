const sharp = require("sharp"); // Dependencia llamada.

const nom = "Weyermann_Produkte"; // Nombre del archivo inicial.
const termi = "gif"; // Tipo de archivo.

const nom2 = nom; // Nombre de los archivos hijos.
const termi2 = "webp"; // Tipo de archivo final

// Representan los cuatro tipos de tamaño de imagen que queremos crear.
/* sharp("assets/img/"+nom+"."+termi).resize(320, undefined).toFile("assets/img/"+nom2+"-320."+termi2);
sharp("assets/img/"+nom+"."+termi).resize(480, undefined).toFile("assets/img/"+nom2+"-480."+termi2);
sharp("assets/img/"+nom+"."+termi).resize(600, undefined).toFile("assets/img/"+nom2+"-600."+termi2);
sharp("assets/img/"+nom+"."+termi).resize(800, undefined).toFile("assets/img/"+nom2+"-800."+termi2); */
// Cambiar formato gif
sharp("assets/img/" + nom + "." + termi, { pages: -1 }).toFile("assets/img/" + nom2 + "." + termi2)