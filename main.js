function calcular(){
    var fnote = document.querySelector(".fnote").value;
    var lnote = document.querySelector(".lnote").value;
   var resultado=document.getElementById("resultado")
   var resultado2=document.getElementById("resultado2")
    var resultado1 = (parseInt(fnote) + parseInt(lnote))  / 2;
   resultado.textContent="Sua media foi de "+resultado1
   if(resultado1 < 10){
       resultado2.textContent="Cuidado!!, com essa media cores o risco de reprovar de ano"
   }
}