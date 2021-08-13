"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para mostrar una Fotrografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log({ picture });
}
let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
    // extra: 'test' // Error
});
function generatePicuture(config) {
    const pic = { title: 'Default', date: 'Default' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicuture({});
console.log("picture", picture);
picture = generatePicuture({ title: 'Travel Pic' });
console.log("picture", picture);
picture = generatePicuture({ title: 'Travel Pic', date: '2021-08' });
console.log("picture", picture);
let user;
user = { id: 10, username: 'carlosmzz', isPro: true };
console.log('user', user);
user.username = 'panchomzz';
// user.id = 20 // Error!
console.log('user', user);
