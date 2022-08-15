jQuery(document).ready(function($){

    //FIXED HEADER
    window.onscroll = function() {
        if(window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    };

    //ISOTOPE
    let btns = $("#servicos button-group button");

    btns.click(function (e) {
        $("#servicos .button-group button").removeClass("active"); 
        e.target.classList.add("active");
    });
});