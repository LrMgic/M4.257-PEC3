const sharp = require("sharp");

const nom = "fachadavideo";
const nom2 = nom;
const termi = "png";
const termi2 = "webp";

/* sharp("assets/img/"+nom+"."+termi).resize(320, undefined).toFile("assets/img/"+nom2+"-320."+termi2); */
sharp("assets/img/"+nom+"."+termi).resize(480, undefined).toFile("assets/img/"+nom2+"-480."+termi2);
/* sharp("assets/img/"+nom+"."+termi).resize(600, undefined).toFile("assets/img/"+nom2+"-600."+termi2); */
/* sharp("assets/img/"+nom+"."+termi).resize(800, undefined).toFile("assets/img/"+nom2+"-800."+termi2); */