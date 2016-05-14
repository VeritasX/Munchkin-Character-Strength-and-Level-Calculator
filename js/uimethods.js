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
            $('.stats').append('<div class="userDisplay"></div>');

            for(var stat in userStats){
                if(userStats[stat] !== userStats.gear) {
                    $('.userDisplay').append('<p>' + userStats[stat] + '</p>');
                }
            }
        },

    legends:legends()

};