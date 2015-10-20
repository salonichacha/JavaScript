# JavaScript

// Create a “class” card that has the following immutable properties:

// • rank : String

//       o The rank of the card can be one of the following: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King

// • suit : String

//       o The suit of the card can be one of the following: Hearts, Clubs, Diamonds, Spades

// The card class should also contain a .value() method that returns the numeric value of the card.

// Note: an Ace is worth 1. Jacks, Queens, and Kings are worth 10, and all other cards assume the value of their corresponding rank.

// Finally, you should override the toString method (Hint: use card.prototype to implement this). The toString method should print the rank and suit of the card in a human-readable format (see examples below).

var card = function(ranks , suits){
  this.ranks = ranks ;
  this.suits = suits ;
}



var deck = function () {
 
 var cards = [];

  this.cards = function()
  {
     return cards;
  }
 
  this.count = -1;
  
  for(var i = 2 ; i < 11 ; i++ ){

    cards.push(new card(i,'Clubs'));

    cards.push(new card(i,'Hearts'));

    cards.push(new card(i,'Spades'));

    cards.push(new card(i,'Diamonds'));
  }


  var r = ['Ace' , 'Jack' , 'Queen' , 'King']

  for(var i = 0 ; i < r.length ; i++){
    cards.push(new card(r[i],'Clubs'));

    cards.push(new card(r[i],'Hearts'));

    cards.push(new card(r[i],'Spades'));

    cards.push(new card(r[i],'Diamonds'));
  }
 // console.log(this.cards);

    for(var i = 0 ; i < this.cards.length ; i++){

      cards[i] = cards[i].toString();

   //   console.log(cards[i]);
    }

   // console.log(this.cards.length);

    this.deal =function () {
   // console.log("here");
    this.count++;
    var x = cards[this.count];
    cards.shift();
   // console.log("Cards remaining:" + cards.length);
    return x;
    },
 
    this.remaining = function () {
     //console.log(this.cards.length);
    // remaining(this.cards)

    return cards.length;
    }
  
    this.reset =function(){
      var newDeck= new deck();
      cards=newDeck.cards() ;
      return cards;
    } 

    this.shuffle = function(){
      shuffle(cards);
    }
 
}

  card.prototype.toString = function(){
  return this.ranks + ' of '+ this.suits;

}


// function remaining(var c){
//   console.log()

// }

function shuffle (c){
  var temp ; 

  for(var i = c.length-1 ; i > 0 ; i --){
         var ranInt = Math.floor(Math.random()*(i+1)); 
         var temp = c[ranInt];
         c[ranInt] = c[i];
         c[i] = temp;
          
    }

    return c ;
}


card.prototype.value = function(){
  var numberPattern = /\d+/g;
  var temp;

  if(this.ranks == 'Ace'){
    return 11 ;
  }

  else if(this.ranks == 'King' || this.ranks == 'Queen' || this.ranks == 'Jack'){
    return 10;
  }

  else{
      temp = parseInt(this.ranks);
      return temp;
  }
}

var card1 = new card('Ace' , 'Spades');
var card2 = new card('9', 'Hearts');

console.log(card1.value());
console.log(''+card1);
console.log(card2.value());
console.log(''+card2);



var myDeck = new deck();
myDeck.shuffle();

var hand1 = [];
hand1.push(myDeck.deal());
hand1.push(myDeck.deal());

console.log('Hand 1 : ' + hand1[0] + ' and ' + hand1[1]);


var hand2 = [];
hand2.push(myDeck.deal());
hand2.push(myDeck.deal());

console.log('Hand 2 : ' + hand2[0] + ' and ' +hand2[1]);

console.log('The value of Hand1 is : ' + hand1[0].value() +' and ' +hand1[1].value());


console.log('The value of Hand1 is : ' + hand2[0].value() +' and ' +hand2[1].value());

console.log('These are ' , myDeck.remaining() , 'cards remaining in the deck');

myDeck.reset();

console.log('These are ' , myDeck.remaining() , 'cards remaining in the deck');





