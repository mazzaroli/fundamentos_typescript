import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'carlosmzz', 'Carlos', true);
const album = new Album(1, "Shakilo O'neal")
const picture = new Picture(1, 'TS Course', '2021-08', PhotoOrientation.Square);

// creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log(user)

// Borrar Album
user.removeAlbum(album)
console.log(user)
