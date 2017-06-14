$(function(){

    var config = {
        sliderEl: '.slider',
        winnerListEl: '.winners-list'
    };

    function _initSlider() {
        var $el = $(config.sliderEl);
        if (!$el.length) {
            return;
        }

        $el.tinycarousel({
            axis: 'x',
            bullets  : true,
            interval: true,
            animationTime:  500,
            intervalTime:   8000
        });

        stopOnHover($el);
    }

    function _initWinnerList() {
        var $el = $(config.winnerListEl);
        if (!$el.length) {
            return;
        }

        $el.tinycarousel({
            axis: 'y',
            interval: true,
            animationTime:  500,
            intervalTime:   3000
        });

        stopOnHover($el);
    }

    function stopOnHover($el) {
        var data = $el.data("plugin_tinycarousel");
        $el.hover(
            function(){
                data.stop();
            },
            function(){
                data.start();
            }
        );
    }

    function initSlider() {
        try {
            _initSlider();
        } catch (e) {
            //console.log('[ERROR] cannot init slider');
        }
    }

    function initWinnerList() {
        try {
            _initWinnerList();
        } catch (e) {
            //console.log('[ERROR] cannot init slider');
        }
    }
    
    function initBackground() {
        $('body').css(
           'background',
           '#000008 url(images/bg-body.jpg) 50% 0 no-repeat fixed'
        );

    }

    function init(){
        initSlider();
        initWinnerList();
        
        initBackground()
    }

    init();
    $("#menu_btn").on('click', function(event) {
        event.preventDefault();
        if (!$("body").hasClass('open')) {
            $("#menu-mobile").css('visibility', 'visible');
            $("body").addClass('open');
            $(".top-menu").css('left', '260px')
        }else if($("body").hasClass('open')){
            $("#menu-mobile").css('visibility', 'hidden');
            $("body, .top-menu").removeClass('open');
            $(".top-menu").css('left', '0px');
        }
       
    })
});
