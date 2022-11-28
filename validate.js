var numP;
var numQ;
var numE;
var numN;
var numX;

// Function to check if prime
function isPrime(num) {
    if (num <= 1)
    {
        return false;
    }
    for (i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}

// Function to see if E and X have a GCD of one
function validGCD(e, x) {
    var holder;
    if (e > x)
    {
        while (e % x > 0)
        {
            holder = e % x;
            e = x;
            x = holder;
            return (x == 1);
        }
    }
    else
    {
        while (x % e > 0)
        {
            holder = x % e;
            x = e;
            e = holder;
        }
        return (e == 1);
    }
}

// Function to find private key "d"
function privateKey(e, x) {
    for(let i = 1; i < x; i++)
    {
        if ((i % x)*(e % x) % x == 1)
        {
            return i;
        }
    }
}

// Euclid's algorithm for private key "d"
function euclidAlgo(e, x) {
    if (e === 0)
    {
        return x;
    }
    else if (x === 0)
    {
        return e;
    }
    return euclidAlgo(x, e % x);
}

// Actions once submit is clicked
document.getElementById("Submit").onclick = function() {

    numP = document.getElementById("pNumber").value;
    numQ = document.getElementById("qNumber").value;
    numE = document.getElementById("eNumber").value;
    numN = numP * numQ;
    numX = (numP - 1) * (numQ - 1);

    if (numP == "" || numQ == "" || numE == "")
    {
        document.getElementById("Result").innerHTML = "Please fill out all fields!";
    }
    else
    {
        if (isPrime(numP) && isPrime(numQ))
        {
            if (validGCD(numE, numX))
            {
                var numD = privateKey(numE, numX);
                console.log(euclidAlgo(numE, numX));
                document.getElementById("Result").innerHTML = "Result: Valid! Public key is (" + numN + ", " + numE + "). Private key is " + numD + ".";
            }
            else
            {
                document.getElementById("Result").innerHTML = "Result: Invalid! The encryption exponent must be changed!";
            }
        }
        else
        {
            document.getElementById("Result").innerHTML = "Result: Invalid! Both numbers must be prime!";
        }
    }
}
  