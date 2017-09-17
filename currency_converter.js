

function conversion{
    var from = document.getElementById("value").value,
    var curr1 = document.getElementById("from").value,
    var curr2 = document.getElementById("to").value,
    ans

if (curr1 === "INR" && curr2 === "INR2") ans = from;
if (curr1 === "INR" && curr2 === "USD2") ans = from*0.016;
if (curr1 === "USD" && curr2 === "USD2") ans = from;
if (curr1 === "USD" && curr2 === "INR2") ans = from*64.15;

document.getElementById("answer").value = ans;
}
