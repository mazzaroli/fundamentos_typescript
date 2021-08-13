"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Superclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
// get y set
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this.orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    // Metodos
    toString() {
        return `[id: ${this.id}],
                 title: ${this.title},
                 orientation: ${this.orientation}`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // constructor de SUPER CLASE
        this.pictures = [];
    }
    // Metodos
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
// console.log('album',album)
// console.table({album})
// console.table({picture})
// console.table(album.pictures)
// Accediendo a los miembros publicos 
console.log('picture.id', picture.id); // get id()
// picture.id = 100;                    // private, set id(100);
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; // private
console.log('album', album);
// const item = new Item(1, 'test title');      // Error
// console.log('item', item)                    // Error
// Probamos el miembro estatico de la clase Picture
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
