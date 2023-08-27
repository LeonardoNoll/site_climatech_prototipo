var produtosRadios = document.getElementById('divRadios')    
var img = document.getElementById('produtosImg')
var p1 = document.getElementById('pImgTit')
var p2 = document.getElementById('pImgVal')
var p3 = document.getElementById('pImgPar')
document.onload = mudarDisplay(1)
document.onload = mudarImg(1,1)

function mudarDisplay(j) {
   if (j == 1) {
       produtosRadios.innerHTML = '<input type="radio" name="produtoRadio" id="com1" checked="checked" onclick="mudarImg(1,1)"> <input type="radio" name="produtoRadio" id="com2" onclick="mudarImg(1,2)"> <input type="radio" name="produtoRadio" id="com3" onclick="mudarImg(1,3)"> <input type="radio" name="produtoRadio" id="com4" onclick="mudarImg(1,4)">'
    }    
   if (j == 2) {
       produtosRadios.innerHTML = '<input type="radio" name="produtoRadio" id="ind1" checked="checked" onclick="mudarImg(2,1)"> <input type="radio" name="produtoRadio" id="ind2" onclick="mudarImg(2,2)"> <input type="radio" name="produtoRadio" id="ind3" onclick="mudarImg(2,3)">'
   }    
   if (j == 3) {
       produtosRadios.innerHTML = '<input type="radio" name="produtoRadio" id="pec1" checked="checked" onclick="mudarImg(3,1)"> <input type="radio" name="produtoRadio" id="pec2" onclick="mudarImg(3,2)">'
    }
    mudarImg(j,1)
}
function mudarImg(j,i) {
        if ((j==1) && (i==1)) {           
        img.src = 'imgs/produto11.png'
        p1.innerHTML = 'Climatizador Joape Jurerê c/ Pedestal Reservatório 100 L'
        p2.innerHTML = 'A partir de: R$ 4.115,00'
        p3.innerHTML = 'Em até 10x sem juros'
        }
        else if ((j==1) && (i==2)) {  
        img.src = 'imgs/produto12.png'
        p1.innerHTML = 'Climatizador Joape Jurerê c/ Pedestal Reservatório 80 L'
        p2.innerHTML = 'A partir de: R$ 4.115,00'
        p3.innerHTML = 'Em até 10x sem juros'
        }
        else if ((j==1) && (i==3)) {  
        img.src = 'imgs/produto13.png'
        p1.innerHTML = 'Climatizador Joape Jurerê'
        p2.innerHTML = 'A partir de: R$ 2.560,00'
        p3.innerHTML = 'Em até 10x sem juros'
        }
        else if ((j==1) && (i==4)) {         
        img.src = 'imgs/produto14.png'
        p1.innerHTML = 'Climatizador Joape Fortaleza c/ Pedestal Reservatório 100 L'
        p2.innerHTML = 'A partir de: R$ 5.540,00'
        p3.innerHTML = 'Em até 10x sem juros'
        }
        else if ((j==2) && (i==1)) {
        img.src = 'imgs/produto21.png'
        p1.innerHTML = 'Climatizador Joape Guarujá c/ Pedestal Reservatório 100 L'
        p2.innerHTML = 'A partir de: R$ 5.034,00'
        p3.innerHTML = 'Em até 10x sem juros'
        }
        else if ((j==2) && (i==2)) {
        img.src = 'Climatizador Joape Guarujá c/ Pedestal Reservatório 80 L'
        img.src = 'imgs/produto22.png'
        p2.innerHTML = 'A partir de: R$ 5.034,00'
        p3.innerHTML = 'Em até 10x sem juros'
        }
        else if ((j==2) && (i==3)) {
         img.src = 'imgs/produto23.png'
         p1.innerHTML = 'Climatizador Joape Guarujá'
         p2.innerHTML = 'A partir de: R$ 3.650,00'
         p3.innerHTML = 'Em até 10x sem juros'
        }
         else if ((j==3) && (i==1)) {
         img.src = 'imgs/produto31.png'
         p1.innerHTML = 'Bomba Para Climatizadores'
         p2.innerHTML = 'R$ 185,00'
         p3.innerHTML = 'Em até 6x sem juros'
         }
         else if ((j==3) && (i==2)) {
          img.src = 'imgs/produto32.png'
         p1.innerHTML = 'Pedestal / Reservatório 100 litros'
        p2.innerHTML = 'R$ 1.512,00'
         p3.innerHTML = 'Em até 10x sem juros'
         }
        }