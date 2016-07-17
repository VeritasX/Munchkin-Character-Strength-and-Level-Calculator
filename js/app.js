/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
var selectDeck=function(){
    var getValue=$('.pickDeck').val();
    var setUpCardSelection=function(){

                for(var card in deck) {
                    $('#cardChooser').append('<option value=' + deck[card].id + '>' + deck[card].cardName + '</option>')
                }

    };

    var removeStatTitle = function(attribute,hook,sectionId){
        // This function will remove a key from the the userStats Object
        var objectToLookFor = attribute;
        var domHook = hook
        var domElement = domHook + sectionId;
        if( objectToLookFor in userStats){
            delete userStats[objectToLookFor];
            delete userStats[undefined];
        };

        $(domElement).remove();



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
                removeStatTitle('level','.','level');
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

var changeButton=function(){
    var selectValue=$('#pickDeck').val();

    if(selectValue !== 'default'){
        $('#hideSelectDeck').removeAttr('disabled');

    }else{
        $('#hideSelectDeck').attr('disabled');
    }


}

