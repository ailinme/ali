var calcular=document.getElementById("calcular");

calcular.addEventListener("click" ,()=>{
    var base=document.getElementById("base");
    var altura=document.getElementById("altura");
    var area=base * altura / 2;
    console.log("El area es: "+area);
    document.getElementById("area").value=parseInt(area);

});