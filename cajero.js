document.getElementById("welcome").textContent = "Bienvenido " +sessionStorage.getItem('nombre')

let saldo = parseFloat(sessionStorage.getItem("saldo"))

function consultarSaldo(){
    let cantidad = saldo
    document.getElementById(saldo).value = cantidad;
}

function depositar() {
    let monto = parseFloat(document.getElementById('monto').value);
    let depositoPrevio = monto + saldo
    if (depositoPrevio >= 2000) {
        alert("No puedes depositar mas de 2000")
    } else {
        saldo += monto
        alert("Tu saldo actual es : " +saldo)
    }
}

function retirar() {
    let monto = parseFloat(document.getElementById('monto').value);
    let retiroPrevio = monto - saldo
    if (retiroPrevio >= 2000) {
        alert("No puedes retirar mas de 2000")
    } else {
        saldo -= monto
        alert("Tu saldo actual es : " +saldo)
    }
}