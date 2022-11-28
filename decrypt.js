var numN;
var numD;
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

document.getElementById("Submit").onclick = function() {
    numN = document.getElementById("nNumber").value;
    numD = document.getElementById("dNumber").value;
    ciphertext = document.getElementById("ciphertext").value;
    message = modExp(ciphertext, numD, numN);
    document.getElementById("Message").innerHTML = "Message: " + message;
}