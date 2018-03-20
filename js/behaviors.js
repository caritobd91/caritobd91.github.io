$(document).ready(function() {
    
    $(".hamburgermenu").on("click", (function() {
        $(".mobile-nav").delay(500).slideToggle();
        //pages hide when hamburger menu is clicked
        $(".content-box").slideUp();
    }));

    // Checking for window size to style main nav accordingly
    $(window).on("resize", (function(){
        //check if width is less than 580px
        var width = $(window).width();
        if (width > 580){
            //if it is, mobile nav display: none
            $(".mobile-nav").css("display", "none");
        }
    }));

    //Hides laptop 
    $("a[href$='#work'],a[href$='#mystory'],a[href$='#contactme']").on('click', (function(){
        $('#laptop').animate({right: '-1000px'});
    }));

    //Shows laptop
    $("a[href$='#home']").on("click", (function(){
        $('#laptop').delay(450).animate({right: '0px'});
    }));    

    //My story is clicked
    $("a[href$='#mystory']").on("click", (function(){
        //all pages slide up 
        $(".content-box").slideUp();
        //my story slides down
        $('.story').delay(500).slideDown(600, "swing");
        $(".mobile-nav").slideUp();
    }));

    //contact box animation
    $("a[href$='#contactme']").on("click", (function(){
        $(".content-box").slideUp();
        $('.contact').delay(500).slideDown(600, "swing");
        $(".mobile-nav").slideUp();
    }));

    // hides pages when home is clicked
    $("a[href$='#home']").on("click", (function(){
        $(".content-box").slideUp();
        $(".mobile-nav").slideUp();
    }));
});