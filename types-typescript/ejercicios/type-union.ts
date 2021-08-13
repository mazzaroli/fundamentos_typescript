export {};
// // 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar username dado un ID
// function getUserNameById(id: number | string) {
//     //  Logica de negoico, find the user
//     return 'carlitosmzz';
// }

// getUserNameById(20);
// getUserNameById('20');


// Alias de tipo: TS
type idUser = number | string;
type Username = string;
let idUser: idUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUserNameById(id: idUser): Username {
    //  Logica de negoico, find the user
    return 'carlitosmzz';
}

getUserNameById(20);
getUserNameById('20');

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100'
let mediumPicture: SquareSize = '500x500'
let bigPicture: SquareSize = '1000x1000'