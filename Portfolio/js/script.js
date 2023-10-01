 function openNavBar(){

    var x = document.getElementById("navBar");

    if(x.className === "navBar"){
        x.className += " menujs";
        document.getElementById("icos-hamburguer").innerHTML = "&Cross;";
    }
    else{
        x.className ="navBar";
        document.getElementById("icos-hamburguer").innerHTML = "&#8801;"    ;
    }
 }