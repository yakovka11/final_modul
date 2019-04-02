var animateHTML = function() {
    var elemAustronaut,
        elemLight,
        elemTelescope,
        windowHeight;

    var init = function() {
        elemAustronaut = document.getElementsByClassName("animation");
        elemLight = document.getElementsByClassName("animation-2");
        elemTelescope = document.getElementsByClassName("animation-3");
        windowHeight = window.innerHeight;
        addEventHandlers();
    };

    var addEventHandlers = function() {
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init);
        window.addEventListener("load", loadAnimation);
    };
    var checkPosition = function() {
        for ( var i = 0; i < elemAustronaut.length; i++ ) {
            var posFromTop = elemAustronaut[i].getBoundingClientRect().top;
            if ( posFromTop - windowHeight <= -500) {
                elemAustronaut[i].className = elemAustronaut[i].className.replace( "animation", "animate" );
            }
        }
        for ( var j = 0; j < elemTelescope.length; j++ ) {
            var posFromTop2 = elemTelescope[j].getBoundingClientRect().top;
            if ( posFromTop2 - windowHeight <= 0) {
                elemTelescope[j].className = elemTelescope[j].className.replace( "animation-3", "animate-3" );
            }
        }

    };
    var loadAnimation = function () {
        for ( var j = 0; j < elemLight.length; j++ ) {
            elemLight[j].className = elemLight[j].className.replace( "animation-2", "animate-2" );
        }
    };

    return {
        init: init
    }
};

animateHTML().init();