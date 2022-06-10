function calcular(){
    var fnote = document.querySelector(".fnote").value;
    var snote = document.querySelector(".snote").value;
    var lnote = document.querySelector(".lnote").value;
   var resultado=document.getElementById("resultado")
   var resultado2=document.getElementById("resultado2")
    var calculo = (parseInt(fnote) + parseInt(snote) + parseInt(lnote))  / 3;
   resultado.textContent="Sua media foi de "+calculo
   if(resultadofinal < 10){
       resultado2.textContent="Cuidado!!, com essa media cores o risco de reprovar de ano"
   }
}
