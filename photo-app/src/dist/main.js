"use strict";
exports.__esModule = true;
var album_1 = require("./album");
var photo_orientation_1 = require("./photo-orientation");
var picture_1 = require("./picture");
var user_1 = require("./user");
var user = new user_1.User(1, 'carlosmzz', 'Carlos', true);
var album = new album_1.Album(1, "Shakilo O'neal");
var picture = new picture_1.Picture(1, 'TS Course', '2021-08', photo_orientation_1.PhotoOrientation.Square);
// creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log(user);
// Borrar Album
user.removeAlbum(album);
console.log(user);
