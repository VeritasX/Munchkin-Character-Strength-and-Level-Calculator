/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
//This file contains the functions for crating the decks
var deck={};

var createCards = function (cardName, points, special){
    return {
        cardName: cardName,
        points: points,
        special: special
    }
};

var clearDeck = function(){
    deck={};
}

//deck.test=createCards('bats', 10, 'no powers'); Template for adding data to the deck

