/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
var selectDeck=function(){
    var getValue=$('.pickDeck').val();
    var setUpCardSelection=function(){

                for(var card in deck) {
                    $('.addCards').append('<option value=' + deck[card].id + '>' + deck[card].cardName + '</option>')
                }

    };


    var findDeck = function (val){
        switch(val){
            case 'legends':
                legends();
                break;
            case 'zombies':
                zombies();
                break;

            case 'MDeluxe':
                mdeluxe();
                break;
        }
    };
    findDeck(getValue);


    setUpCardSelection();
};
var selectCard=function(){
    var getValue=$('#cardChooser').val();
    getMyCard(getValue);
};

var removeCard=function(){
    var getValue=$('#selectToRemove').val();
    removeFromUser(getValue);
};



