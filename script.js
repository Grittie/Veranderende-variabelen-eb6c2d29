const pi = 3.14;

function maths(){
    input = document.getElementById("input").value;
    console.log(input);
    result = input * pi;

    document.getElementById("eind").innerHTML = result;
}