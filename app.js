const sharp = require("sharp");

const nom = "cerveza-tipo-ale";
const nom2 = nom;
const termi = "png";

sharp("assets/img/"+nom+"."+termi).resize(320, undefined).toFile("assets/img/"+nom2+"-320."+termi);
sharp("assets/img/"+nom+"."+termi).resize(480, undefined).toFile("assets/img/"+nom2+"-480."+termi);
sharp("assets/img/"+nom+"."+termi).resize(600, undefined).toFile("assets/img/"+nom2+"-600."+termi);