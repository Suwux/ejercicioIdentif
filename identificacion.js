function login(user, password) {
    switch (true && true) {
        case user === undefined && password === undefined:
            return "Ingrese los datos requeridos";
            break;
            
        case user === "admin" && password === 1234:
            return "Bienvenido a nuestro sitio";
            break;

        case user !== "admin" && password === 1234:
            return "Usuario incorrecto";
            break;
            
        case user === "admin" && password !== 1234:
            return "Contraseña incorrecta";
            break;
            
        case user !== "admin" && password !== 1234:
            return "Usuario y Contraseña incorrectos";
            break;    
    }   
} 

console.log(login("admin", 1234));

console.log(login("admim", 1234));

console.log(login("admin", 1235));

console.log(login("admim", 1235));

console.log(login()); 