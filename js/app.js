/**
 * Created by aaronendsley on 4/30/16.
 */
'use strict';
var setUpDecks={
    legends:legends()
}

var selectDeck=function(){
    var getValue=$('.pickDeck').val();

    setUpDecks[getValue];
}