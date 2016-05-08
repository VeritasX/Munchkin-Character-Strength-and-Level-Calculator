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
};
var addToUser=function(){
    userDeck.push(usersCard);
    usersCard.points=parseInt(usersCard.points);
    userStats.points=parseInt(userStats.points);
    userStats.runAway=parseInt(userStats.runAway);
    usersCard.runAway=parseInt(usersCard.runAway);
    usersCard.cardValue=parseInt(usersCard.cardValue);
    userStats.totalWorth=parseInt(userStats.totalWorth);
    userStats.points=userStats.points + usersCard.points;
    userStats.totalWorth=userStats.totalWorth + usersCard.cardValue;
    userStats.runAway+=usersCard.runAway;
    
    if(usersCard.cardType !== 'race') {
        userStats.gear.push(usersCard.cardName);
    }
    usersCard='';
};

var removeFromUser=function(card){
    var removeCard=card;
    
};


var goUpALevel=function(){
    userStats.level+=1;
}

var goDownALevel=function(){
    userStats.level-=1;
}

var usersCard='';

var userDeck=[];

var userStats={
    level:1,
    points:0,
    gear:[],
    runAway:0,
    totalWorth:0
}


