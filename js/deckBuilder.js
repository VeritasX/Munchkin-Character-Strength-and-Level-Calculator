/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
//This file contains the functions for crating the decks
var deck={};
var createCards = function (id,cardName,cardType, points, runAway, special, cardValue){
    return {
        id:id,
        cardName: cardName,
        cardType:cardType,
        points: points,
        runAway:runAway,
        special: special,
        cardValue:cardValue
    }
};
var clearDeck = function(){
    deck={};
};
//deck.test=createCards('bats', 10, 'no powers'); Template for adding data to the deck


//deck specific operations

var removeStatTitleAndHooks = function(attribute,hook,sectionId){
    var objectToLookFor = attribute;
    var domHook = hook;
    var domElement = domHook + sectionId;
    if( objectToLookFor in userStats){
        delete userStats[objectToLookFor];
        delete userStats[undefined];
    };

    $(domElement).slideToggle();



};
