/**
 * Created by aaronendsley on 5/6/16.
 */
'use strict'

var getMyCard=function(card){
    var myCard=card;
    for(var cards in deck){
        if(myCard == deck[cards].cardName){
            console.log(deck[cards].cardName);
            console.log(deck[cards].cardType);
            console.log(deck[cards].points);
            console.log(deck[cards].runAway);
            console.log(deck[cards].cardValue);

            usersCard=deck[cards];
        }else{
            console.log('That card does not exist in the deck');
        }
    }
}
var updateUser=function(){
    userDeck.push(usersCard);
    usersCard='';
}

var usersCard='';

var userDeck=[];

