export {}
// Funcion para mostrar una Fotrografia

enum PhotoOrientation {
    Landscape,
    Portrait,   
    Square,     
    Panorama,   
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log( { picture} )
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
    // extra: 'test' // Error
});

interface PictureCongif {
    title?: string,
    date?: string,
    orientation?: PhotoOrientation,
}

function generatePicuture(config: PictureCongif) {
    const pic = {title: 'Default', date: 'Default'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }
    
    return pic
}

let picture = generatePicuture({});
console.log("picture", picture)

picture = generatePicuture({title:'Travel Pic'})
console.log("picture", picture)

picture = generatePicuture({title:'Travel Pic', date:'2021-08'})
console.log("picture", picture)

// Interfaz: Usuario
interface User {
    readonly id: number; // solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'carlosmzz', isPro:true}
console.log('user' ,user)

user.username = 'panchomzz'
// user.id = 20 // Error!
console.log('user' ,user)