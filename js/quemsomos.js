

let titulo = 'teste'
let texto  = 'teste'

document.onload = mudarDisplay(1) 

function mudarDisplay(i){
    switch(i){
        case 1:
            titulo = 'Como Trabalhamos'
            texto = '<p>Com uma trajetória de mais de 20 anos de mercado, na Climatech você encontra qualidade e garantia nos serviços prestados, através de uma equipe composta por profissionais qualificados para melhor atender a sua necessidade.</p>     <div id="quemSomosImgWrapper"><img src="imgs/imgsLeo/instalaMecanico.jpg" alt="climatizadores instalados em mecanico" height="250px"></div>     <p>Atendemos o seu projeto de climatização residencial, comercial e industrial, seguindo todas as normas técnicas e boas práticas de mercado, visando sempre a sua segurança e bem estar.</p>   <div id="quemSomosImgWrapper"><img src="imgs/imgsLeo/pedestais.jpg" alt="climatizadores em pedestais" height="250px"><img src="imgs/imgsLeo/pvcs.jpg" alt="climatizadores instalados em fabrica" height="250px"></div>      <p>Como representante autorizado Joape®, todos os nossos serviços utilizam apenas peças originais, certificando qualidade e durabilidade aos equipamentos. Temos a solucao para seu problema, seja ele do tamanho que for.</p>'
            break;
        case 2:
            titulo = 'Onde Atuamos'
            texto = '<p>Atendemos clientes residenciais, comerciais e industriais em Porto Alegre e Região.</p>   <p>Temos experiência no atendimento de diversos segmentos, como: indústrias, hospitais, escolas, clubes, lojas, entre outros ambientes que necessitem de climatização adequada e manutenção periódica.</p>  <div id="quemSomosImgWrapper"><img src="imgs/imgsLeo/mesas.jpg" alt="climatizadores perto de mesinhas de madeira" height="300px"><img src="imgs/imgsLeo/fabrica.jpeg" alt="climatizadores perto de mesinhas de madeira" height="300px"></div>'
            break;
        case 3:        
            titulo = 'Clientes'
            texto = '<div id="quemSomosImgWrapper"><img src="imgs/imgsLucas/ccg.jpg" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/gerdau.png" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/gngaucho.png" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/grendene.png" alt="climatizadores instalados em mecanico" height="15x"><img src="imgs/imgsLucas/hospital-mae-de-deus_teal.jpg" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/la-salle-1024x1024.jpg" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/lebes.png" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/queroquero.jpg" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/tumelero.png" alt="climatizadores instalados em mecanico" height="75x"><img src="imgs/imgsLucas/unimed-logo-1.png" alt="climatizadores instalados em mecanico" height="75x"></div>'
            break;
    }
    document.getElementById("quemSomosDisplayContentContent").innerHTML = texto;
    document.getElementById("quemSomosDisplayTitulo").innerHTML = titulo;

} 