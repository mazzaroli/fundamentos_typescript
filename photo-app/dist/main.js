"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'carlosmzz', 'Carlos', true);
const album = new album_1.Album(1, "Shakilo O'neal");
const picture = new picture_1.Picture(1, 'TS Course', '2021-08', photo_orientation_1.PhotoOrientation.Square);
// creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log(user);
// Borrar Album
user.removeAlbum(album);
console.log(user);
