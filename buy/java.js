let i5 = 820000;
let i7 = 950000;
let r5 = 1200000;
let r7 = 1500000;
let etiquetaBoton = document.getElementById("boton");
etiquetaBoton.addEventListener("click", escuchar);
function escuchar(event) {
    event.preventDefault();
    console.log("Clicked");
    let cpu = document.getElementById("cpu").value
    let age = document.getElementById("age").value
    let quantity = document.getElementById("quantity").value
    console.log(cpu + ", " + age + ", " + quantity);
    if (age >= 18) {
        if(cpu == "i5"){
            let ressult = quantity * i5
            alert("The total for your products is " + ressult);
        }
        else if(cpu == "i7"){
            let ressult = quantity * i7
            alert("The total for your products is " + ressult);
        }
        else if(cpu == "R5"){
            let ressult = quantity * r5
            alert("The total for your products is " + ressult);
        }
        else if(cpu == "R7"){
            alert("The total for your products is " + ressult);
        }
    } else {
        alert("You aren't allowed to buy yet")
    }
}
