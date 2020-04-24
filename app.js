document.addEventListener('DOMContentLoaded', ()=>{

    //cartas
const cardArray = [
    {
        name:'pikachu', 
        img: 'images/pikachu.png',  
    },
    {
        name:'pikachu', 
        img: 'images/pikachu.png',
    },
    {
        name:'psyduck', 
        img: 'images/psyduck.png',
    },
    {
        name:'psyduck', 
        img: 'images/psyduck.png',
    },
    {
        name:'snorlax', 
        img: 'images/snorlax.png',  
    },
    {
        name:'snorlax', 
        img: 'images/snorlax.png',  
    },
    {
        name:'meowth', 
        img: 'images/meowth.png',  
    },
    {
        name:'meowth', 
        img: 'images/meowth.png',  
    },
    {
        name:'squirtle', 
        img: 'images/squirtle.png',  
    },
    {
        name:'squirtle', 
        img: 'images/squirtle.png',  
    },
    {
        name:'mew', 
        img: 'images/mew.png',  
    },
    {
        name:'mew', 
        img: 'images/mew.png',  
    }
]


cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen   = [];
var cardsChosenId = [];
var cardsWon      = [];

//crear tabla

function crearTabla(){
    for (let i= 0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/gotcha.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);

    }
}

crearTabla();



//check iguales
function checkIguales(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
        document.getElementById('alert').innerHTML = `<div class="alert alert-success alert-dismissible fade show animated pulse" role="alert">
                                                    <strong>Ganaste!</strong> Encontraste un Pokemon
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    </div>`;
        cards[optionOneId].setAttribute('src', 'images/tick.png');
        cards[optionTwoId].setAttribute('src', 'images/tick.png');
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/gotcha.png');
        cards[optionTwoId].setAttribute('src','images/gotcha.png');
        document.getElementById('alert').innerHTML = `<div class="alert alert-danger alert-dismissible fade show animated jello" role="alert">
                                                    <strong>Perdiste!</strong> Volve a intentarlo
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    </div>`;
      
    }
    cardsChosen = [];
    cardsChosenId =[];
    if (cardsWon.lenght == cardArray.lenght/2) {

        console.log(cardArray.length/2)
        console.log(cardsWon.length);
        resultDisplay.textContent = 'Felicitaciones! Encontraste todos los Pokemon!';
       
        
    }else if(cardsWon.length !== cardArray.lenght/2 ){
        resultDisplay.textContent = cardsWon.length;
       
       
    }
}



//flip card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push (cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length===2){
        setTimeout(checkIguales, 500);
    }

}


})


