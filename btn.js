// 1. Que cuando me apoye sobre el boton

var btnNode = document.querySelector('.btn');
var lettersNodes = document.querySelectorAll('.btn span');
// console.log(lettersNodes);

btnNode.addEventListener('mouseover', function(){
    for (var i = 0; i < lettersNodes.length; i++) {
        // 2. Que algunas letras se muevan hacia arriba
        if(i % 2 === 0){
            lettersNodes[i].style.transform = 'translateY(10px) rotate(5deg)';

        }else{
            // 3. Y otras hacia abajo

            lettersNodes[i].style.transform = 'translateY(-10px) rotate(-5deg)';
        }
    }
})

// 4. Que cuando me voy del boton las letras vuelvan a su lugar

btnNode.addEventListener('mouseout', function(){
    for (var i = 0; i < lettersNodes.length; i++) {
        // 2. Que algunas letras se muevan hacia arriba
        if(i % 2 === 0){
            lettersNodes[i].style.transform = 'translateY(0px)';
        }else{
            // 3. Y otras hacia abajo
            lettersNodes[i].style.transform = 'translateY(0px)';
        }
    }

})