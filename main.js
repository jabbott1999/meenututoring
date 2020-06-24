/* eslint-env jquery */
/* global $ */


$(document).ready(function () {



    scrollCheck();

    $(document).on("scroll", function () {

        scrollCheck();
    });
});


function scrollCheck() {
    var pageTop = $(document).scrollTop();

    if (pageTop > 0) {
        $("#small-logo").css("display", "block");
        $("#big-logo").css("display", "none");
        $("#nav-container").css("height", "50px");
    } else if (pageTop == 0) {

        $("#small-logo").css("display", "none");
        $("#big-logo").css("display", "block");
        $("#nav-container").css("height", "150px");
    }
}
