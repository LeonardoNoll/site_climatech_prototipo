

let titulo = 'teste'
let texto  = 'teste'

document.onload = mudarDisplay(1) 

function mudarDisplay(i){
    switch(i){
        case 1:
            titulo = 'Instalação'
            texto = '<p>Projetamos a solução para você ou executamos o seu projeto.</p><p>Nossos serviços de instalação dispõem de diversos planos, que incluem desde a análise inicial até a manutenção preventiva dos equipamentos, conforme a sua necessidade e disponibilidade, para sua maior segurança e tranquilidade</p>    <div id="quemSomosImgWrapper"><img src="imgs/imgsLeo/instalaRafa.jpg" height="250px" alt="homem instalando climatizador"><img src="imgs/imgsLeo/mercado.jpg" height="250px" alt="homem instalando climatizador em mercado"></div>'           
            break;
        case 2:
            titulo = 'Manutenção'
            texto = '<p>Trabalhamos com manutenção preventiva e corretiva de toda a linha de climatizadores Joape®.</p> <p>Nossa equipe técnica passa por treinamentos e avaliações periódicas, mantendo a excelência na prestação de um serviço qualificado, atualizado e dinâmico, adaptado à sua demanda.</p>    <div id="quemSomosImgWrapper"><img src="imgs/imgsLeo/antes.jpg" height="250px" alt="climatizador sujo"><img src="imgs/imgsLeo/depois.jpg" height="250px" alt="climatizador limpo"></div><img src="imgs/imgsLeo/desmontados.jpg" height="250px" alt="climatizadores desmontados">'
            break;
        case 3:        
            titulo = 'Venda'
            texto = '<p>Nossa equipe de especialistas é altamente qualificada para oferecer a você a melhor solução para o seu ambiente, buscando viabilidade técnica, segurança, conforto térmico e eficiência energética. </p><div id="quemSomosImgWrapper"><img src="imgs/vendas.png" height="250px" alt="climatizador sujo"></div><p>Além disso, você pode contar com nossa central de atendimento pós venda, que está preparada para auxiliar e orientar você sobre qualquer assunto em que a Climatech possa auxiliá-lo.</p>'
            break;
    }
    document.getElementById("quemSomosDisplayContentContent").innerHTML = texto;
    document.getElementById("quemSomosDisplayTitulo").innerHTML = titulo;

} 