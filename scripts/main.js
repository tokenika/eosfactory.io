$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var windowWidth = $(window).width();

function runArrow() {
    if(windowWidth > 576) {
        var currentScroll = $(window).scrollTop(),
        maxScroll = 330;
    } else {
        var currentScroll = $(window).scrollTop(),
        maxScroll = 250;
    }
    

    if (currentScroll < maxScroll) {
        $('#arrowSVG').css('margin-top', currentScroll / 3);
        $('#distance').find('span').each(function () {
            var spanHeight = $(this).attr('data-height');
            $(this).css('height', (parseInt(spanHeight) + (currentScroll / 3) + 'px'));
        });
    } else {
        $('#arrowSVG').css('margin-top', maxScroll / 3);
    }
}

var pointDrawn = false;
var numberDrawn = false;

function lineDraw() {
    if (!pointDrawn) {
        anime({
            targets: '.point line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 500,
            delay: function (el, i) {
                return i * 75
            },
            direction: 'normal',
            loop: false
        });
    }

    pointDrawn = true;
}

function numberDraw() {
    if (!numberDrawn) {
        anime({
            targets: '.number line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function (el, i) {
                return i * 75
            },
            direction: 'normal',
            loop: false
        });
    }

    numberDrawn = true;
}

function checkPointVisibility() {
    if ($('.point').isInViewport()) {
        lineDraw();
    }
    if ($('.last-point').isInViewport()) {
        lineDraw();
    }
    if ($('.number').isInViewport()) {
        numberDraw();
    }
}

$(function () {
    var lineDrawing = anime({
        targets: '#welcomeSVG line',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) {
            return i * 250
        },
        direction: 'alternate',
        loop: false
    });

    runArrow();
    checkPointVisibility();
});

$(window).on('scroll', function () {
    runArrow();
    checkPointVisibility();
});

$(window).on('resize', function () {
    runArrow();
    checkPointVisibility();
});

$('#arrowSVG, #getStarted').on('click', function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#main").offset().top
    }, 1000);
});

var timeout;
$('.section1').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax1.bind(null, e), 200);
});

$('.section2').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax2.bind(null, e), 200);
});

$('.section3').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax3.bind(null, e), 200);
});

$('.section4').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax4.bind(null, e), 200);
});

$('.section5').mousemove(function (e) {
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax5.bind(null, e), 200);
});

function callParallax1(e) {
    parallaxIt1(e, '.section1 .svg-to-move1', -60);
    parallaxIt1(e, '.section1 .svg-to-move2', 30);
}

function callParallax2(e) {
    parallaxIt2(e, '.section2 .svg-to-move1', -60);
    parallaxIt2(e, '.section2 .svg-to-move2', 30);
}

function callParallax3(e) {
    parallaxIt3(e, '.section3 .svg-to-move1', -60);
    parallaxIt3(e, '.section3 .svg-to-move2', 30);
}

function callParallax4(e) {
    parallaxIt4(e, '.section4 .svg-to-move1', -60);
    parallaxIt4(e, '.section4 .svg-to-move2', 30);
}

function callParallax5(e) {
    parallaxIt5(e, '.section5 .svg-to-move1', -60);
    parallaxIt5(e, '.section5 .svg-to-move2', 30);
}

function parallaxIt1(e, target, movement) {
    var $this = $('.section1');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}

function parallaxIt2(e, target, movement) {
    var $this = $('.section2');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}

function parallaxIt3(e, target, movement) {
    var $this = $('.section3');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}

function parallaxIt4(e, target, movement) {
    var $this = $('.section4');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}

function parallaxIt5(e, target, movement) {
    var $this = $('.section5');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}