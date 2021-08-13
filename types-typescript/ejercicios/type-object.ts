//  Type: object
let user: object;
user = {} // Object

user = {
    id: 1,
    username: 'Messi',
    firstName: 'Lionel',
    isPro: true,
};

console.log('user' ,user)
// Object vs object(Clase JS vs tipo TS)
// console.log('user.username', user.username) // error
const myObj = {
    id: 1,
    username: 'Messi',
    firstName: 'Lionel',
    isPro: true,
};

const isInstance = myObj instanceof Object;

console.log('isInstance', isInstance)
console.log('myObj.username', myObj.username) //
