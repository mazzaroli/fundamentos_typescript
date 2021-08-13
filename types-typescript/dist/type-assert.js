"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  <TIPO DE DATO> // Angle Bracket syntax
let username;
username = 'camzz';
// tenemos una cadena , dejate de jodet TS que aca manejo el carro yo
let message = username.length > 5 ? `hola ${username}` : `holan't ${username}`;
console.log(message);
let usernameWithId = 'carlosmzz 1';
// Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 5 ?
    `Welcome ${username}` :
    `Welcomen't ${username}`;
console.log(message);
let helloUser;
helloUser = 'Hello paparazzy';
username = helloUser.substring(6);
console.log('Username', username);
