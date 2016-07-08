/**
 * Created by aaronendsley on 5/14/16.
 */
'use strict';
var setUpDecks={
    hideElements:function(id) {
        var itemId=$(id);
        itemId.slideToggle(100);
    },
    userRefresh: function(){
        $('.userDisplay').remove();
        $('.userCards').remove();
        $('.cardsForRemoval').remove();
            $('.stats').append('<div class="userDisplay"></div>');
        $('.cardsInPlayContainer').append('<div class="userCards"></div>');
        $('#selectToRemove').append('<optgroup label="cards in your deck" class="cardsForRemoval"><option>Choose Your Card</option></optgroup>');
            for(var stat in userStats){
                    if(userStats[stat] === userStats.name) {
                        $('.userDisplay').append('<p><strong> User:</strong>' + userStats[stat] + '</p>');
                    }else if(userStats[stat] !== userStats.name && userStats[stat] !== userStats.totalWorth) {
                        $('.userDisplay').append('<p><strong>' + titles[stat] + ':</strong>' + userStats[stat] + '</p>');
                    }else if(userStats[stat] === userStats.totalWorth && userStats.totalWorth !== 0){
                        $('.userDisplay').append('<p><strong> Total Gold Worth:</strong>' + userStats[stat] + '</p>');
                    };
            };
            for(var i =0; i < userDeck.length; i++){
                $('.userCards').append('<p>' + userDeck[i].cardName +'</p>');
            };
           for(var i =0; i < userDeck.length; i++){
             $('.cardsForRemoval').append('<option value=' +userDeck[i].id +'>'+ userDeck[i].cardName+'</option>');
           }
        }
};