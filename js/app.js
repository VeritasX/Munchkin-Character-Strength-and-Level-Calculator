/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
var selectDeck=function(){
    var getValue=$('.pickDeck').val();
    var setUpCardSelection=function(){
            if(deck !== {} && getValue !== 'default'){
                for(var card in deck){
                    $('#cardChooser').append('<option value=' +deck[card].id +'>'+deck[card].cardName+'</option>')
                };
                $('#hideSelectDeck').click(function(){
                    setUpDecks.hideElements('.selectCard');
                    $('.level, .stats, .cardEditors').slideToggle();
                })
            }

    };
    setUpDecks[getValue];
    setUpCardSelection();
};
var selectCard=function(){
    var getValue=$('#cardChooser').val();
    getMyCard(getValue);
};

var removeCard=function(){
    var getValue=$('#selectToRemove').val();
    removeFromUser(getValue);
}
