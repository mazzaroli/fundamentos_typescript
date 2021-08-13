export {};

// [1, 'user']
let user: [number, string];
user = [1, 'carlosmzz'];

console.log('user', user);
console.log('username', user[1]);
console.log('id', user[0]);
console.log('username.length', user[1].length);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'carlosmzz', true];
console.log('userInfo', userInfo)

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'carlos'])    // 0
array.push([2, 'melani'])    // 1
array.push([3, 'pancho'])    // 2
array.push([4, 'pitufina'])  // 3

console.log(array)

// Uso de funciones Array
// pancho -> pancho001
array[2][1] =  array[2][1].concat('001') // pancho001
console.log(array)
