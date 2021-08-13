console.log('Hello platzi')

// Number
// Explicito
let phone: number;
phone = 1;
phone = 543624123456;
// phone = 'hola'; // Error

// Tipo Inferido
let phoneNumber = 543624123456;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo de dato

// Sistemas de Numeracion
let hex: number = 0xf93d;       // 0x
let binary: number = 0b1010;    // 0b
let octal: number = 0o744;      // 0o

// Tipo: Boolean
// Tipo explicito
let isPro: boolean;
isPro = true;
// isPro = 1; // Error

// Tipo Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error

// Tipo: String
// Tipo explicito
let username: string = 'carlos'
username = "Carlos"
// username = true // Error

// Template String
// Uso de back-tick ``
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Mazzaroli'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);

