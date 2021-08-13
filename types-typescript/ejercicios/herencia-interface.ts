export {}

enum PhotoOrientation {
    Landscape,
    Portrait,   
    Square,     
    Panorama,   
}

// Herencia para interfaces
interface Entity {
    id: number,
    title: string,
}


interface Album extends Entity {
    // copia de los atributos de Entity
    description: string,
}

interface Picture extends Entity {
    orientation: PhotoOrientation,
};

const album: Album = {
    id: 1,
    title: 'shakira',
    description: 'Community events around the world'
};

const picture: Picture = {
    id: 1,
    title: 'family',
    orientation: PhotoOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album',album);
console.log(`picture`,picture);
console.log(`newPicture`,newPicture);