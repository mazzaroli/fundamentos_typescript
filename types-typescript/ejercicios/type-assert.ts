export {}
//  <TIPO DE DATO> // Angle Bracket syntax
let username: any;
username = 'camzz'

// tenemos una cadena , dejate de jodet TS que aca manejo el carro yo
let message: string = (<string>username).length > 5 ? `hola ${username}` : `holan't ${username}`;
console.log(message)

let usernameWithId: any = 'carlosmzz 1';
// Como obtener el username?
username = (<string>usernameWithId).substring(0,10);
console.log('Username only', username);

// Sintaxis "as"
message = (username as string).length > 5 ? 
          `Welcome ${username}` :
          `Welcomen't ${username}`;
console.log(message)

let helloUser: any;
helloUser = 'Hello paparazzy';
username = (helloUser as string).substring(6)
console.log('Username', username);
