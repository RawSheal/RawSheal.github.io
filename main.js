const playButton = document.getElementById('getNumberOfPlayer');
const dealButton = document.getElementById('dealButton');
const backToMenu = document.getElementById('backToMenu');
const player1Reveal1 = document.getElementById('player1Reveal1')
const player1Reveal3 = document.getElementById('player1Reveal3')
const player2Reveal1 = document.getElementById('player2Reveal1')
const playerReveal3 = document.getElementById('playerReveal3')

const player1card = document.getElementsByClassName('player1card');
const player2card = document.getElementsByClassName('player2card');


const menu = document.getElementById('menu');
let numberOfPlayers = 2;
let deal;


const cardSuits = ['spades','hearts','clubs','diamonds'];
const cardsRank = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];

const allCards = [];


for(let i=0; i < cardSuits.length; i++){
    let getCardSuit = cardSuits[i];
    for(let j=0; j<cardsRank.length; j++){
        allCards.push(`${cardsRank[j]+'_of_'+getCardSuit}`);
    }
}

function getRandomInt(){
        return Math.floor(Math.random() * 52); 
}

function game(){
    let players = []
    let selectedCards = [];
    if(numberOfPlayers == 2){
        const player1 = [];
        const player2 = [];
        players.push(player1,player2)
        for(let i=0; i< deal; i++){
            do {
                 randomNum = getRandomInt();
                } while (selectedCards.includes(randomNum));
            let include = selectedCards.includes(randomNum);
            selectedCards.push(randomNum)
            if(i%2 == 0 && !include){
                player1.push(allCards[randomNum])
            }else if(i%2 == 1 && !include){
                player2.push(allCards[randomNum])
            }
        }
    }


    player1Reveal3.addEventListener('click',()=>{
    for(let i=0; i<3; i++){
        const img = document.createElement('img'); // create an <img> tag
        img.src = `./cards/PNG-cards-1.3/${players[0][i]}.png`; // set image source
        img.style.width = '50%'; // optional width
        img.style.height = '100%'; // optional height
        player1card[i].innerHTML = '';
        player1card[i].appendChild(img)
    }
})

   player2Reveal3.addEventListener('click',()=>{
    for(let i=0; i<3; i++){
        const img = document.createElement('img'); // create an <img> tag
        img.src = `./cards/PNG-cards-1.3/${players[1][i]}.png`; // set image source
        img.style.width = '50%'; // optional width
        img.style.height = '100%'; // optional height
        player2card[i].innerHTML = '';
        player2card[i].appendChild(img)
    }
})


    // if(numberOfPlayers == 3){
    //     const player1 = [];
    //     const player2 = [];
    //     const player3 = [];
    //     players.push(player1,player2,player3)
    // }
    // if(numberOfPlayers == 4){
    //     const player1 = [];
    //     const player2 = [];
    //     const player3 = [];
    //     const player4 = [];
    //     players.push(player1,player2,player3,player4)
    // }
    // if(numberOfPlayers == 5){
    //     const player1 = [];
    //     const player2 = [];
    //     const player3 = [];
    //     const player4 = [];
    //     const player5 = [];
    //     players.push(player1,player2,player3,player4,player5)
    // }
    console.log(players)


}


playButton.addEventListener('click',()=>{
    selectedCards = []
    numberOfPlayers = Number(document.getElementById('numberOfPlayers').value);
    deal = numberOfPlayers * 3;
    menu.style.display = 'none';
    game()
})

dealButton.addEventListener('click',()=>{
    selectedCards = []
     for(let i=0; i<3; i++){
        const img = document.createElement('img'); // create an <img> tag
        img.src = `./cards/PNG-cards-1.3/z_back_of_card.png`; // set image source
        img.style.width = '50%'; // optional width
        img.style.height = '100%'; // optional height
        player1card[i].innerHTML = '';
        player1card[i].appendChild(img)
    }
    for(let i=0; i<3; i++){
        const img = document.createElement('img'); // create an <img> tag
        img.src = `./cards/PNG-cards-1.3/z_back_of_card.png`; // set image source
        img.style.width = '50%'; // optional width
        img.style.height = '100%'; // optional height
        player2card[i].innerHTML = '';
        player2card[i].appendChild(img)
    }
    game()
})

backToMenu.addEventListener('click',()=>{
    menu.style.display = 'flex';
})

