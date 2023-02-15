//selecionando elementos da div
var elementos = document.querySelectorAll('.player-options div > img')
var playerOpt = "";
var inimigoOpt = "";
const enemyOptions = document.querySelectorAll('.enemy-options div');
let vencedor = document.querySelector('.vencedor');

//função para validar vitoria
function validarVitoria(){


    if(playerOpt == "papel")
    {
        if(inimigoOpt == "papel"){
            //empate
            vencedor.innerHTML = "O jogo foi empatado";
        }
        else if(inimigoOpt == "tesoura"){
            //inimigo ganhou
            vencedor.innerHTML = "Você Perdeu!!!";
        }
        else if(inimigoOpt == "pedra"){
            //ganhou
            vencedor.innerHTML = "Você Ganhou!!!";
        }
    }
}

//função para alterar opacidade da escolha inimiga
function resetInimigo(){

    for (var i = 0; i < enemyOptions.length; i++ )
    {
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
        }
    }

//função para a maquina jogar de forma randomica
function inimigoJogar()
{
    let rand = Math.floor(Math.random()*3);
    resetInimigo ();
    for (var i = 0; i < enemyOptions.length; i++ )
    {
        if ( i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    //alert(playerOpt);
   // alert(inimigoOpt);

    //alert(enemyOptions.length)
}

//função para diminuir a opacidade da imagem
function resetOpacityPlayer()
{
    for (var i =0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
        };
    }

//função para o player jogar
for (var i =0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
        //alert(playerOpt);
        
    });

    

    validarVitoria();
}