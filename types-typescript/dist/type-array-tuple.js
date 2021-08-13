// Corchetes []
// Tipo explicito
let users;
users = ['carlos', 'melani', 'pancho'];
// users = [1, true, 'test']; // Error
// Tipo inferido
let otherUsers = ['carlos', 'melani', 'pancho'];
// otherUsers = [1,true,'test']; // Error
// Array<TIPO>
let pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores en un Array
console.log('firstUser', users[0]);
console.log('firstTitle', pictureTitles[0]);
// Propiedades en Array
console.log('users.length', users.length);
//  Uso de funciones en Arrays
users.push('aPlatziUsers');
users.sort();
console.log('user', users);
