let input = document.getElementById("weight-input");
let cards = document.querySelectorAll(".card");
let btn = document.querySelector("#btn");

input.addEventListener("input", converter);
btn.addEventListener("click", refreshPage);

function converter(e){

    let lbs = e.target.value;

    if(!isNaN(lbs) && (lbs !== "") ){  
        cards.forEach(element => {
        element.style.display = "block"
        });
    document.getElementById("gramsOutput").innerHTML = lbs / 0.0022846 + " g";
    document.getElementById("kgOutput").innerHTML = lbs / 2.2046 + " Kg";
    document.getElementById("ounceOutput").innerHTML = lbs * 2 + " ounce";  

    } else {
        
    input.placeholder = "Please Enter a Valid Number";

        cards.forEach(element => {
            element.style.display = "none"
        }); 
    }   
};

function refreshPage(){
    window.location.reload()
}

