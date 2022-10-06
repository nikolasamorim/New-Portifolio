window.addEventListener("scroll", function () {
    var up = document.querySelector("#up");
    up.classList.toggle("sky", window.scrollY > 500);
});

var carrousel = {

    nbSlide: 0,
    nbCurrent: 1,
    elemCurrent: null,
    elem: null,
    timer: null,

    init: function (elem) {
        this.nbSlide = elem.find(".slide").length;

        //creation pagination
        elem.append('<div class="carrousel-picto"></div>');
        for (var i = 1; i <= this.nbSlide; i++) {
            elem.find(".carrousel-picto").append("<li><span>" + i + "</span></li>");
        }

        // au click goto slide correspondant
        elem.find(".carrousel-picto span").click(function () {
            carrousel.gotoSlide($(this).text());
        });

        //au click prev
        elem.find("#carrousel-nav .prev").click(function () {
            carrousel.prev();
        });

        //au click next
        elem.find("#carrousel-nav .next").click(function () {
            carrousel.next();
        });

        //initialisation du carrousel
        this.elem = elem;
        elem.find(".slide").hide();
        elem.find(".slide:first").show();
        this.elemCurrent = elem.find(".slide:first");
        this.elem.find(".carrousel-picto li:first").addClass("active");

        //créer timer
        carrousel.play();

        //arret au survol du carrousel
        elem.mouseover(carrousel.stop);
        elem.mouseout(carrousel.play);

    },

    gotoSlide: function (num) {

        if (num == this.nbCurrent) { return false; }

        /*Animation en slide*/
        var sens = 1;
        if (num < this.nbCurrent) { sens = -1; }
        var cssDepart = { "left": sens * this.elem.width() };
        var cssFin = { "left": sens * -this.elem.width() };
        this.elem.find("#slide" + num).show().css(cssDepart);

        this.elem.find("#slide" + num).animate({ "top": 0, "left": 0 }, 500);
        this.elemCurrent.animate(cssFin, 500);

        this.elem.find(".carrousel-picto li").removeClass("active");
        this.elem.find(".carrousel-picto li:eq(" + (num - 1) + ")").addClass("active");
        this.nbCurrent = num;
        this.elemCurrent = this.elem.find("#slide" + num);
    },

    next: function () {
        var num = this.nbCurrent + 1;
        if (num > this.nbSlide) {
            num = 1;
        }
        this.gotoSlide(num);
    },
    prev: function () {
        var num = this.nbCurrent - 1;
        if (num < 1) {
            num = this.nbSlide;
        }
        this.gotoSlide(num);
    },
    stop: function () {
        window.clearInterval(carrousel.timer);
    },
    play: function () {
        window.clearInterval(carrousel.timer);
        carrousel.timer = window.setInterval("carrousel.next()", 5000);
    }

}

$(function () {
    carrousel.init($("#carrousel"));
});