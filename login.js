let cliente1 = {
    nombre: "Jessica",
    correo: "jess@gmail.com",
    password: "1234",
    saldo: 990
}
let cliente2 = {
    nombre: "Francisco",
    correo: "paco@gmail.com",
    password: "4321",
    saldo: 1000
}

let cliente3 = {
    nombre: "Antonio",
    correo: "toño@gmail.com",
    password: "151416",
    saldo: 300
}

let clientes = [cliente1, cliente2, cliente3];


function login() {
    let correo = document.getElementById('mail').value;
    let contrasena = document.getElementById('password').value;
    evaluar(correo, contrasena);
}

let stateLogin = true

function evaluar(mail, contrasena) {
    let clienteOk = clientes.find((persona) => persona.correo == mail)
    if(clienteOk != undefined) {
        if (clienteOk.password == contrasena) {
            console.log("Bienvenido a Banco ", clienteOk.nombre)

            sessionStorage.setItem("nombre", clienteOk.nombre)
            sessionStorage.setItem("correo", clienteOk.correo)
            sessionStorage.setItem("saldo", clienteOk.saldo)
            window.location.href = "banca/banca.html";

        } else {
            alert("Su contraseña es incorrecta")
        }
    } else {
        alert("Su correo no esta registrado")
    }
}