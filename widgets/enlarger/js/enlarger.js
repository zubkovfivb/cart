﻿'use strict'
function makeZoomable(node){

    var hider = $('.hider-enlarger');
    var container = $('.container2-enlarger');
    var close = $('.close-enlarger');
    var bigImg = $('.bigImg-enlarger');

    function closeImge(){
        bigImg.attr('src','');
        hider.css("display", "none");
        container.css("display", "none");
    }

    function resizer() {
        var windowWidth = window.innerWidth || document.body.clientWidth;
        var windowHeight = window.innerHeight || document.body.clientHeight;

        bigImg.css('max-width', windowWidth*0.8+'px');
        bigImg.css('max-height', windowHeight*0.8+'px');
    }

    close.bind("click", function() {
        closeImge();
    });

    $('body').bind("keydown",function (event){
        if(event.which === 27){
            closeImge();
        }
    });

    $( window ).resize(resizer);

    node.bind("click", function(event) {
        if(event.target.nodeName === 'IMG'){

            bigImg.attr("src", $(event.target).attr("src").replace("small","large") );
            
            hider.css("display", "block");

            
            close.css("top", bigImg[0].offsetTop);
            bigImg.ready(function(){
                resizer();    
                container.css("display", "block"); 
            });
        }
    });

}

makeZoomable($('.gallery-1-enlarger'));
makeZoomable($('.gallery-2-enlarger'));