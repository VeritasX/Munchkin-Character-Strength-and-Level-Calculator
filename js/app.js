/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
var setUpDecks={
    hideElements:function(id){
        $(id).hide();
    },
    legends:legends()

};


var selectDeck=function(){
    var getValue=$('.pickDeck').val();
    var thisSection=$('.selectCard');
    var setUpCardSelection=function(){
        
            if(deck !== {}){
                for(var card in deck){
                    $('#cardChooser').append('<option value=' +deck[card].cardName +'>'+deck[card].cardName+'</option>')
                };
            };
        
    };


    setUpDecks[getValue];
    setUpCardSelection();

};

var selectCard=function(){
    //This will have the logic for the cards in play function.
}