const sharp = require("sharp");

const nom = "800px-Helles_im_Glas-Helles_(pale_beer)";
const nom2 = "Helles_im_Glas-Helles_(pale_beer)";
const termi = "jpg";

sharp("assets/img/"+nom+"."+termi).resize(320, undefined).toFile("assets/img/"+nom2+"-320."+termi);
sharp("assets/img/"+nom+"."+termi).resize(480, undefined).toFile("assets/img/"+nom2+"-480."+termi);
sharp("assets/img/"+nom+"."+termi).resize(600, undefined).toFile("assets/img/"+nom2+"-600."+termi);
sharp("assets/img/"+nom+"."+termi).resize(800, undefined).toFile("assets/img/"+nom2+"-800."+termi);