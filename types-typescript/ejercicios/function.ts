export {}
// // Crear una Fotografia
// function createPicture(title, date, size) {
//     // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usamos TS, definimos tipos para parametors
// function createPicture(title:string, date:string, size: SquareSize) {
//     // Se crea la Fotografia
//     console.log('create Picture using', title, date, size)
// }

// createPicture('Mi cumple', '10/09/2000', '500x500');
// createPicture('Colombia Trip', '2020-03');

function createPicture(title?:string, date?:string, size?: SquareSize) {
    // Se crea la Fotografia
    console.log('create Picture using', title, date, size)
}

createPicture('Mi cumple', '10/09/2000', '500x500');
createPicture('Colombia Trip', '30/2/2017');
createPicture('Colombia Trip');

//  Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title: title,
        date: date,
        size: size
    }

    // return {
    //     title,
    //     date,
    //     size,
    // }
}

const picture = createPic('Platzi Conf', '2021/8/30', '500x500');
console.log('picture', picture)

// Tipo de retorno con TS

function handleError(code: number, message:string): never | string {
    // Procesamiento del codigo, mensaje
    if(message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has occurred';
    }
}


try {
    let result = handleError(200, 'OK') // String
    console.log(result)
    
    result = handleError(404, 'error') // Never
    console.log(result)
} catch (error) {
    
}