/**
 * Created by aaronendsley on 5/14/16.
 */
'use strict'
var setUpDecks={
    hideElements:function(id){
        $(id).hide();
    },
    userRefresh: function(){

        $('.userDisplay').remove();
        $('.userCards').remove();
            $('.stats').append('<div class="userDisplay"></div>');
        $('.CardsInPlay').append('<div class="userCards"></div>');
            for(var stat in userStats){
                if(userStats[stat] !== userStats.gear){
                    $('.userDisplay').append('<p>' + userStats[stat] + '</p>');
                };
            };
            for(var i =0; i < userDeck.length; i++){
                $('.userCards').append('<p>' + userDeck[i].cardName +'</p>');
            };
        },

    legends:legends()

};