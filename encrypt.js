var numN;
var numE;
var message;
var ciphertext;

// Function to convert number to binary for fast modular exponentiation
function toBinary(num) {
    var binary = "";
    while (num > 0)
    {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    var result = binary.split("");
    return result;
}

// Function to do fast modular exponentiation
function modExp(base, exponent, mod) {
    var binaryArray = toBinary(exponent);
    var result = base;

    for (var i = 1; i < binaryArray.length; i++)
    {
        result = result * result;
        result = result % mod;
        if (binaryArray[i] == 1)
        {
            result = result * base;
            result = result % mod;
        }
    }

    return result;
}

// Submit button actions
document.getElementById("Submit").onclick = function() {
    numN = document.getElementById("nNumber").value;
    numE = document.getElementById("eNumber").value;
    message = document.getElementById("message").value;
    ciphertext = modExp(message, numE, numN);
    document.getElementById("Ciphertext").innerHTML = "Ciphertext: " + ciphertext;
}