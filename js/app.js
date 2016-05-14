/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';



var selectDeck=function(){
    var getValue=$('.pickDeck').val();
    var setUpCardSelection=function(){
        
            if(deck !== {}){
                for(var card in deck){
                    $('#cardChooser').append('<option value=' +deck[card].id +'>'+deck[card].cardName+'</option>')
                };
            };
        
    };


    setUpDecks[getValue];
    setUpCardSelection();

};

var selectCard=function(){
    var getValue=$('#cardChooser').val();
    getMyCard(getValue);
}