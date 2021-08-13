// Void

// Tipo explicito
function showInfo(user: any): any {
    console.log('User info', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({id:1, username: 'carlos', firstName: 'Luis'});

//  Tipo inferido
function showFormattedInfo(user: any) {
    console.log('user info', `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    `)
}

showFormattedInfo({id:1, username: 'carlos', firstName: 'Carlos'})

//  Tipo void, como tipo de dato en una variable
let unsuable: void
unsuable = null;
unsuable = undefined;

// Tipo: never
function handleError(code: number, message: string): never {

    // Process your code 
    // Generate a message
    throw new Error(`${message}. Code ${code}`); 

}

try {
    handleError(404, 'Not Found')
} catch (error) {
    
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
    //  return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina