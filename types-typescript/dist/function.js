"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usamos TS, definimos tipos para parametors
// function createPicture(title:string, date:string, size: SquareSize) {
//     // Se crea la Fotografia
//     console.log('create Picture using', title, date, size)
// }
// createPicture('Mi cumple', '10/09/2000', '500x500');
// createPicture('Colombia Trip', '2020-03');
function createPicture(title, date, size) {
    // Se crea la Fotografia
    console.log('create Picture using', title, date, size);
}
createPicture('Mi cumple', '10/09/2000', '500x500');
createPicture('Colombia Trip', '30/2/2017');
createPicture('Colombia Trip');
//  Flat Array Function
let createPic = (title, date, size) => {
    return {
        title: title,
        date: date,
        size: size
    };
    // return {
    //     title,
    //     date,
    //     size,
    // }
};
const picture = createPic('Platzi Conf', '2021/8/30', '500x500');
console.log('picture', picture);
// Tipo de retorno con TS
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    let result = handleError(200, 'OK'); // String
    console.log(result);
    result = handleError(404, 'error'); // Never
    console.log(result);
}
catch (error) {
}
