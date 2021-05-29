const sharp = require("sharp");

const nom = "variedades_cerveza";
const nom2 = nom;
const termi = "jpg";

sharp("assets/img/"+nom+"."+termi).resize(320, undefined).toFile("assets/img/"+nom2+"-320."+termi);
sharp("assets/img/"+nom+"."+termi).resize(480, undefined).toFile("assets/img/"+nom2+"-480."+termi);
sharp("assets/img/"+nom+"."+termi).resize(600, undefined).toFile("assets/img/"+nom2+"-600."+termi);