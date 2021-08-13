export {}

enum PhotoOrientation {
    Landscape,
    Portrait,   
    Square,     
    Panorama,   
}

// Superclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;
    
    constructor(id:number, title:string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id
    }
    // set id(id: number) {
    //     this._id = id;
    // }

    get title() {
        return this._title
    }
    set title(title: string) {
        this._title = title;
    }

}


// get y set

class Picture extends Item{
    public static photoOrientation = PhotoOrientation;

    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title);
        this.orientation = orientation;
    }
    
    
    get orientation() {
        return this._orientation
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    

    
    // Metodos
    public toString() {
        return `[id: ${this.id}],
                 title: ${this.title},
                 orientation: ${this.orientation}`
    }
}

class Album extends Item{
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id,title); // constructor de SUPER CLASE
        this.pictures = [];

    }

    // Metodos
    public addPicture(picture: Picture) {
        this.pictures.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture)

// console.log('album',album)
// console.table({album})
// console.table({picture})
// console.table(album.pictures)


// Accediendo a los miembros publicos 
console.log('picture.id', picture.id) // get id()

// picture.id = 100;                    // private, set id(100);
picture.title = 'Another title';     // private
album.title = 'Personal Activities'  // private

console.log('album',album)

// const item = new Item(1, 'test title');      // Error
// console.log('item', item)                    // Error


// Probamos el miembro estatico de la clase Picture
console.log('PhotoOrientation', Picture.photoOrientation.Landscape); 