//  Closure (Laxical Scoping): it allows the inner functions to access the Scope of Outer Function.
// In  this example 'color' is the scope of outer function but inner function has access to the 'color'

function colorGenerator(color) {
    return function () {
        document.body.style.backgroundColor = color;
    }
}

document.getElementById('orange').onclick = colorGenerator("orange")
document.getElementById('green').onclick = colorGenerator("green")