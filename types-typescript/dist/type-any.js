// Tipo explicito
let idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('ideUser', idUser);
// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
// otherId = true
console.log('otherId', otherId);
let surprise = 'hello typescript';
// surprise.sayHello() // Error
const res = surprise.substring(6); // Error
console.log(res);
