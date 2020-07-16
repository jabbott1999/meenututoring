/* eslint-env jquery */
/* global $ */
var testimonialCounter = 0;


var testimonialName = ["<h2>Joaquin</h2><h3>España</h3>", "<h2>Krisztina</h2><h3>Magyarország</h3>", "<h2>Joel</h2><h3>Portugal</h3>", "<h2>Barbara</h2><h3>España</h3>", "<h2>Robert</h2><h3>Italia</h3>", "<h2>Isa</h2><h3>Italia</h3>", "<h2>Mauricio</h2><h3>Chile</h3>", "<h2>Ana</h2><h3>España</h3>"];
var testimonialPhoto = ["url(Images/Joaquin.jpg)", "url(Images/Krisztina.jpg)", "url(Images/Joel.jpg)", "url(Images/Barbara.jpg)", "url(Images/Robert.jpg)", "url(Images/Isa.jpg)", "url(Images/Mauricio.jpg)", "url(Images/Ana.jpg)"];
var testimonialText = ["<em><p>&quot;Among other English teachers on the Internet, I chose Meenu to help me to correct my script of my workshop Speaking in Public Mindfully and … I did not make a mistake.</p><p>Meenu is an enthusiastic teacher. She knows how to make you like English and learn it correctly. On-line classes with her could be as efficient as in person. We finished the correction of my workshop and I continue having conversation classes with her. And she is very kind. Work well done it's a priority for her more than the money you pay.&quot;</p></em><p>Joaquin (Spanish student)</p>", "<em><p>&quot;Meenu is one of my favourite teachers ever. She is a motivated, organised teacher who develops inspiring relationships with her students. Meenu has a wonderful rapport with me. Her ability to connect with her students and her talent at teaching simple concepts, as well as more advanced topics, are both truly superior.</p><p>She is a very enthusiastic and vibrant teacher who encourages her students for learning and a desire to achieve more. I often can hardly wait for my lessons and they are always a pleasure with her. It is as if we were old friends from the first lesson.</p><p>I cannot recommend her highly enough.&quot;</p></em><p>Krisztina (Hungarian student)</p>", "<em><p>&quot;I would like to recommend Meenu as an English teacher because I have had a really good experience with her lessons. I improved my English with her help and dedication. I can highlight her ability to explain the grammar very comprehensibly to all levels.&quot;</p></em><p>Joel (Portuguese student)</p>", "<em><p>&quot;I can only say good things about Meenu, as a teacher I would highlight her dedication, commitment and, especially, her patience with the progress of each student. The best of their classes are their dynamism and the adaptation to the needs that each one presents. Personally, I would like to emphasize her predisposition to help in what she can.&quot;</p></em><p>Barbara (Spanish student)</p>", "<em><p>&quot;I was struggling to find the right teacher online to help me with my website then I ran into what I was looking for! As a Massage Therapist I needed professional content such as the description of some services that I offer and my biography, I also needed to improve my spoken English so I decided for lessons via skipe. Meenu is a teacher able to listen to my needs and help me with my English, the method that Meenu use is simple and understandable, a modern way how to teach but at the same time effective, I was very impressive of that! I highly recommend Meenu's lessons.&quot;</p></em><p>Robert (Italian student)</p>", "<em><p>&quot;I highly recommend Meenu as a tutor. I have been taking classes with her for over two years now, and she tailors the classes to my needs and requirements. She is very patient and I have made great progress!&quot;</p></em><p>Isa (Italian student)</p>", "<em><p>&quot;Meenu is a very talented teacher. The methods she uses consider the level of each student. She takes time to explain everything and is very kind when I make mistakes. Her patience has helped me a lot to progress and in just a couple of months I've advanced what I've done in years. It's a privilege to have her as a teacher as a good English person, she always offers me tea in class!&quot;</p></em><p>Mauricio (Chilean student)</p>", "<em><p>&quot;When I arrived to England I needed to improve my writing and pronunciation and after trying several attempts like academy groups and 1:1 Lessons I found a teacher that know how to teach English efficiently.With Meenu the clases were always dynamic. She helped me to structure how to study and practice English and I learned new vocabulary with no effort. My pronunciation also improved very quickly. This gave me the confidence I needed to approach new customers and expand my business in The UK.</p><p>I will strongly recommend her services as she is not only a very good teacher but a wonderful human being that knows exactly how to customize your English learning.&quot;</p></em><p>Ana (Spanish student)</p>"];










$(window).on("load", function () {
    $('#loading-cover').delay(500).fadeOut(200);
});

$(document).ready(function () {

  
    
    
    // highlight contact in nav
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            $('.contact-nav-item').css("color", "black");
        } else if ($(window).scrollTop() + $(window).height() < $(document).height() - 100) {
            $('.contact-nav-item').css("color", "rgba(120, 120, 120, 1)");
        }
    });

    // add dots to testimonial
    for (var i = 0; i < testimonialName.length; i++) {
        $('#testimonial-controller').append('<div class="testimonial-slide" style="width: 20px; height: 20px; background-image: url(Images/slide%20inactive.svg); display: inline-block; cursor: pointer;"></div>');
    }

    // set an active testimonial
    setActiveTestimonial($('#testimonial-controller').children().eq(testimonialCounter));


    // switch testimonial on timer
    var timer = setInterval(function () {
        nextTestimonial();
        setActiveTestimonial($('#testimonial-controller').children().eq(testimonialCounter));
    }, 20000);


    // check whether user scrolled for menu size
    scrollCheck();

    $(document).on("scroll", function () {

        scrollCheck();
    });

    // user click testimonial dot
    $(".testimonial-slide").click(function () {
        var index = $(".testimonial-slide").index(this);
        setTestimonial(index);
        setActiveTestimonial($('#testimonial-controller').children().eq(index));
    });

    // turn off testimonial slider auto
    $(".testimonial-slide").click(function () {
        clearInterval(timer);
    });


    // open menu mobile
    $("#mobile-open-menu").click(function () {
        expandMobileMenu();
    });


    // close menu mobile
    $("#mobile-close-menu").click(function () {
        closeMobileMenu();
    });
    $("#mobile-nav a").click(function () {
        closeMobileMenu();
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

function nextTestimonial() {
    $('.testimonial-name, .testimonial-photo, .testimonial-text').fadeOut(200).queue(function (n) {
        $('.testimonial-name').empty().append(testimonialName[testimonialCounter]);
        $('.testimonial-photo').css("background-image", testimonialPhoto[testimonialCounter])
        $('.testimonial-text').empty().append(testimonialText[testimonialCounter]);
        n();
    });
    $('.testimonial-name, .testimonial-photo, .testimonial-text').fadeIn(200);

    if (testimonialCounter == testimonialName.length - 1) {
        testimonialCounter = 0;
    } else {
        testimonialCounter++;
    }

}

function setTestimonial(index) {
    $('.testimonial-name, .testimonial-photo, .testimonial-text').fadeOut(200).queue(function (n) {
        $('.testimonial-name').empty().append(testimonialName[index]);
        $('.testimonial-photo').css("background-image", testimonialPhoto[index])
        $('.testimonial-text').empty().append(testimonialText[index]);
        n();
    });
    $('.testimonial-name, .testimonial-photo, .testimonial-text').fadeIn(200);

}


function setActiveTestimonial(testimonial) {

    $('#testimonial-controller').children().css("background-image", "url(Images/slide%20inactive.svg)");
    testimonial.css("background-image", "url(Images/slide%20active.svg)");

}

function expandMobileMenu() {
    $('#nav-container').animate({
        "top": "240px"
    }, 300);
    $('#mobile-nav').animate({
        "top": "0px"
    }, 300);
    $('#mobile-open-menu').hide();
    $('#mobile-close-menu').show();
}

function closeMobileMenu() {
    $('#nav-container').animate({
        "top": "0px"
    }, 300);
    $('#mobile-nav').animate({
        "top": "-240px"
    }, 300);
    $('#mobile-open-menu').show();
    $('#mobile-close-menu').hide();
}
