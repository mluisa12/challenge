function encriptar() {
    const texto = document.getElementById('texto').value;
    const codigo = 3;
    if (!texto) {
        alert('Por favor, ingresa un texto para encriptar.');
        return;
    }
    let salida = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        // Sólo aplica el cifrado a letras
        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            salida += String.fromCharCode(((charCode - 65 + codigo) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            salida += String.fromCharCode(((charCode - 97 + codigo) % 26) + 97);
        } else {
            salida += inputText[i]; // Otros caracteres no se modifican
        }
    }

    document.getElementById('salida').value = salida;
}

function desencriptar() {
    const texto = document.getElementById('texto').value;
    const codigo = 3;
    if (!texto) {
        alert('Ingresa un texto para desencriptar.');
        return;
    }
    let salida = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        // Sólo aplica el descifrado a letras
        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            salida += String.fromCharCode(((charCode - 65 - codigo + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            salida += String.fromCharCode(((charCode - 97 - codigo + 26) % 26) + 97);
        } else {
            salida += texto[i]; // Otros caracteres no se modifican
        }
    }

    document.getElementById('salida').value = salida;


}



