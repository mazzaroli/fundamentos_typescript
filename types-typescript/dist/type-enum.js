// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape); // 0
console.log('landscape', PhotoOrientation[landscape]);
var PictureSizes;
(function (PictureSizes) {
    PictureSizes[PictureSizes["Landscape"] = 10] = "Landscape";
    PictureSizes[PictureSizes["Portrait"] = 11] = "Portrait";
    PictureSizes[PictureSizes["Square"] = 12] = "Square";
    PictureSizes[PictureSizes["Panorama"] = 13] = "Panorama";
})(PictureSizes || (PictureSizes = {}));
console.log('portrait', PictureSizes.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country', country);
// Reto extender Enumerados
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales["Lunes"] = "MON";
    DiasLaborales["Martes"] = "TUE";
    DiasLaborales["Miercoles"] = "WED";
    DiasLaborales["Jueves"] = "THU";
    DiasLaborales["Viernes"] = "FRI";
})(DiasLaborales || (DiasLaborales = {}));
var DiasFinSemana;
(function (DiasFinSemana) {
    DiasFinSemana["Sabado"] = "SAT";
    DiasFinSemana["Domingo"] = "SUN";
})(DiasFinSemana || (DiasFinSemana = {}));
const Semana = Object.assign(Object.assign({}, DiasLaborales), DiasFinSemana);
console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT
