/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
var setUpDecks={
    legends:legends()
};


var selectDeck=function(){
    var getValue=$('.pickDeck').val();

    setUpDecks[getValue];
};

var selectCard=function(){
    //This will have the logic for the cards in play function.
}