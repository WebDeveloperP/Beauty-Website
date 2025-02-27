! function(n) {
    "use strict";
    n.fn.exists = function() {
        return 0 < this.length
    }, n(".tm-preloader .tm-button").on("click", function() {
        n(".tm-preloader").fadeOut()
    }), n(window).on("load", function() {
        n(".tm-preloader").fadeOut()
    });
    var t = {
        databgImage: function() {
            n("[data-bgimage]").each(function() {
                var t = n(this).data("bgimage");
                n(this).css({
                    "background-image": "url(" + t + ")"
                })
            })
        },
        meanmenuActivation: function() {
            n(".tm-header-nav").meanmenu({
                meanMenuContainer: ".tm-mobilenav",
                meanScreenWidth: "991",
                meanMenuOpen: '<i class="ti-menu"></i>',
                meanMenuClose: '<i class="ti-close"></i>',
                onePage: true
            })
        },
        beforeafterImage: function() {
            n(".tm-beforeafter-image").twentytwenty()
        },
        niceSelectActive: function() {
            n("select").niceSelect()
        },
        countdownActivation: function() {
            n(".tm-countdown").each(function() {
                var e = n(this),
                    t = n(this).data("countdown");
                e.countdown(t, function(t) {
                    e.html(t.strftime('<div class="tm-countdown-pack tm-countdown-day"><h2 class="tm-countdown-count">%-D</h2><h6>Days</h6></div><div class="tm-countdown-pack tm-countdown-hour"><h2 class="tm-countdown-count">%-H</h2><h6>Hours</h6></div><div class="tm-countdown-pack tm-countdown-minutes"><h2 class="tm-countdown-count">%M</h2><h6>Minutes</h6></div><div class="tm-countdown-pack tm-countdown-seconds"><h2 class="tm-countdown-count">%S</h2><h6>Seconds</h6></div>'))
                })
            })
        },
        scrollToSection: function() {
            n(".hash-scroll-link").on("click", function(t) {
                t.preventDefault();
                var e = n(this),
                    i = n(".tm-header-bottomarea").height();
                n("html, body").stop().animate({
                    scrollTop: n(e.attr("href")).offset().top - i
                }, 1e3)
            })
        },
        sliderActivations: {
            herosliderSliderActivation: function() {
                n(".tm-heroslider-slider").slick({
                    infinite: !0,
                    autoplay: !0,
                    pauseOnHover: !1,
                    speed: 2e3,
                    autoplaySpeed: 5e3,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    fade: !0,
                    dots: !0
                })
            },
            testimonialSliderActivation: function() {
                n(".tm-testimonial-slider").slick({
                    infinite: !0,
                    autoplay: !0,
                    pauseOnHover: !1,
                    speed: 2e3,
                    autoplaySpeed: 5e3,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !1
                })
            },
            brandlogoSliderActivation: function() {
                n(".tm-brandlogo-slider").slick({
                    infinite: !0,
                    autoplay: !0,
                    speed: 2e3,
                    autoplaySpeed: 2e3,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    pauseOnHover: !1,
                    arrows: !1,
                    dots: !1,
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                })
            },
            teamMemberSlider: function() {
                n(".tm-member-slider").slick({
                    infinite: !0,
                    autoplay: !0,
                    speed: 2e3,
                    autoplaySpeed: 2e3,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: !1,
                    pauseOnHover: !1,
                    dots: !0,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                })
            },
            productDetailsGallery: function() {
                n(".tm-prodetails-largeimages").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    fade: !0,
                    loop: !1,
                    asNavFor: ".tm-prodetails-thumbnails"
                }), n(".tm-prodetails-thumbnails").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    loop: !1,
                    asNavFor: ".tm-prodetails-largeimages",
                    dots: !1,
                    centerMode: !0,
                    centerPadding: "50px",
                    arrows: !1,
                    focusOnSelect: !0
                })
            },
            blogDetailsSliderActivation: function() {
                n(".tm-blog-imageslider").slick({
                    infinite: !0,
                    autoplay: !0,
                    autoplaySpeed: 5e3,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !0,
                    prevArrow: '<button class="slick-prev slick-arrow"><i class="ti ti-angle-left"></i></button>',
                    nextArrow: '<button class="slick-next slick-arrow"><i class="ti ti-angle-right"></i></button>',
                    dots: !1,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: !1
                        }
                    }]
                })
            },
            init: function() {
                this.herosliderSliderActivation(), this.testimonialSliderActivation(), this.brandlogoSliderActivation(), this.teamMemberSlider(), this.productDetailsGallery(), this.blogDetailsSliderActivation()
            }
        },
        fancyboxSlick: function() {
            n("[data-fancybox]").fancybox({
                beforeShow: function() {
                    n(".tm-product-quickview .tm-prodetails-largeimages").slick("slickNext")
                }
            })
        },
        ajaxMailchimp: function() {
            n("#tm-mailchimp-form").ajaxChimp({
                language: "en",
                callback: function(t) {
                    "success" === t.result ? (n(".tm-mailchimp-success").html("" + t.msg).fadeIn(900), n(".tm-mailchimp-error").fadeOut(400)) : "error" === t.result && n(".tm-mailchimp-error").html("" + t.msg).fadeIn(900)
                },
                url: "YOUR_MAILCHIMP_URL_HERE"
            })
        },
        searchForm: function() {
            n(".tm-header-searchtrigger").on("click", function(t) {
                t.preventDefault(), n(".tm-header-searcharea").toggleClass("is-visible")
            }), n(".tm-header-searchclose").on("click", function(t) {
                t.preventDefault(), n(".tm-header-searcharea").removeClass("is-visible")
            })
        },
        stickyHeader: function() {
            if (n(".tm-header-sticky").exists()) {
                var t = n(".tm-header").height();
                n(".tm-heroslider, .tm-breadcrumb-area").css({
                    marginTop: t + "px"
                }), n(window).on("scroll", function() {
                    250 < n(this).scrollTop() ? n(".tm-header").addClass("is-sticky") : n(".tm-header").removeClass("is-sticky")
                })
            }
        },
        scrollToTop: function() {
            var e = n("#back-top-top");
            e.css({
                visibility: "hidden",
                opacity: 0
            }), e.on("click", function() {
                n("html, body").stop().animate({
                    scrollTop: 0
                }, 1e3)
            }), n(window).on("scroll", function() {
                var t = n(window).scrollTop();
                n(window).height() < t ? e.css({
                    visibility: "visible",
                    opacity: 1
                }) : e.css({
                    visibility: "hidden",
                    opacity: 0
                })
            })
        },
        herosliderHeight: function() {
            var t = n(".tm-header").height();
            n(".tm-heroslider").css({
                "min-height": "calc(100vh - " + t + "px)"
            })
        },
        rangeSlider: function() {
            n(".tm-rangeslider").nstSlider({
                left_grip_selector: ".tm-rangeslider-leftgrip",
                right_grip_selector: ".tm-rangeslider-rightgrip",
                value_bar_selector: ".tm-rangeslider-bar",
                value_changed_callback: function(t, e, i) {
                    n(this).parent().find(".tm-rangeslider-leftlabel").text(e), n(this).parent().find(".tm-rangeslider-rightlabel").text(i)
                }
            })
        },
        productRatingInput: function() {
            n(".tm-ratingbox-input").each(function() {
                n(this).find("span").on("mouseenter", function() {
                    n(".tm-ratingbox-input span").addClass("is-active"), n(this).nextAll("span").removeClass("is-active")
                })
            })
        },
        productQuantityBox: function() {
            n(".tm-quantitybox").append('<div class="decrement-button tm-quantitybox-button">-</i></div><div class="increment-button tm-quantitybox-button">+</div>'), n(".tm-quantitybox-button").on("click", function() {
                var t, e = n(this),
                    i = e.parent().find("input").val();
                t = "+" == e.text() ? parseFloat(i) + 1 : 1 < i ? parseFloat(i) - 1 : 1, e.parent().find("input").val(t)
            })
        },
        instafeedActive: function() {
            new Instafeed({
                get: "user",
                userId: 12620117360,
                accessToken: "12620117360.1677ed0.73a0ac15057c4edcada08b9df21cfa49",
                resolution: "low_resolution",
                limit: 8,
                template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><ul class="tm-instaphotos-counter"><li><i class="ti ti-heart"></i> {{likes}}</li><li><i class="ti ti-comment"></i> {{comments}}</li></ul></a></li>'
            }).run()
        },
        scrollAnimation: function() {
            var e = new ScrollMagic.Controller;
            n(".tm-scrollanim").each(function(t) {
                new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: .8,
                    reverse: !1
                }).setClassToggle(this, "scrollanim-action").addTo(e)
            })
        },
        differentAddressFormToggle: function() {
            n("#billform-dirrentswitch").on("change", function() {
                n(this).is(":checked") ? n(".tm-checkout-differentform").slideDown() : n(".tm-checkout-differentform").slideUp()
            })
        },
        checkoutPaymentMethod: function() {
            n('.tm-checkout-payment input[type="radio"]').each(function() {
                n(this).is(":checked") && n(this).siblings(".tm-checkout-payment-content").slideDown(), n(this).siblings("label").on("click", function() {
                    n('.tm-checkout-payment input[type="radio"]').prop("checked", !1).siblings(".tm-checkout-payment-content").slideUp(), n(this).prop("checked", !0).siblings(".tm-checkout-payment-content").slideDown()
                })
            })
        },
        loginPassShower: function() {
            n('input[name="register-pass-show"]').on("change", function() {
                "password" == n('input[name="register-pass"]').attr("type") ? n('input[name="register-pass"]').attr("type", "text") : n('input[name="register-pass"]').attr("type", "password")
            })
        },
        scrollSpyActive: function() {
            var t = n(".tm-header-bottomarea").height();
            n(".tm-header-nav").scrollspy({
                offset: -1 * (t - 1),
                activeClass: "current",
                animate: "swing"
            })
        },
        menuOverflow: function() {
            n(".tm-header-nav ul li").on("mouseenter mouseleave", function(t) {
                if (n("ul", this).length) {
                    var e = n("ul:first", this),
                        i = e.offset().left - n("body").offset().left,
                        o = e.width();
                    e.find("ul").length && (o = 2 * e.width()), i + o <= n("body").width() ? n(this).removeClass("overflow-element") : n(this).addClass("overflow-element")
                }
            })
        },
        dropdownHasChildren: function() {
            n(".tm-header-nav-dropdown ul li").each(function() {
                n(this).children("ul").length && n(this).addClass("has-child")
            })
        },
        ajaxContactForm: function() {
            n(function() {
                var i = n("#tm-contactform"),
                    o = n(".form-messages");
                n(i).submit(function(t) {
                    t.preventDefault();
                    var e = n(i).serialize();
                    n.ajax({
                        type: "POST",
                        url: n(i).attr("action"),
                        data: e
                    }).done(function(t) {
                        n(o).removeClass("error"), n(o).addClass("success"), n(o).text(t), n('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val("")
                    }).fail(function(t) {
                        n(o).removeClass("success"), n(o).addClass("error"), "" !== t.responseText ? n(o).text(t.responseText) : n(o).text("Oops! An error occured and your message could not be sent.")
                    })
                })
            })
        },
        ajaxAppointmentForm: function() {
            n(function() {
                var i = n("#tm-appointment-form"),
                    o = n(".appointment-messages");
                n(i).submit(function(t) {
                    t.preventDefault();
                    var e = n(i).serialize();
                    n.ajax({
                        type: "POST",
                        url: n(i).attr("action"),
                        data: e
                    }).done(function(t) {
                        n(o).removeClass("error"), n(o).addClass("success"), n(o).text(t), n('#tm-appointment-form input:not([type="submit"]),  #tm-appointment-form select, #tm-appointment-form textarea').val("")
                    }).fail(function(t) {
                        n(o).removeClass("success"), n(o).addClass("error"), "" !== t.responseText ? n(o).text(t.responseText) : n(o).text("Oops! An error occured and your message could not be sent.")
                    })
                })
            })
        },
        init: function() {
            t.databgImage(), t.meanmenuActivation(), t.beforeafterImage(), t.niceSelectActive(), t.countdownActivation(), t.scrollToSection(), t.sliderActivations.init(), t.fancyboxSlick(), t.ajaxMailchimp(), t.searchForm(), t.stickyHeader(), t.scrollToTop(), t.herosliderHeight(), t.rangeSlider(), t.productRatingInput(), t.productQuantityBox(), t.instafeedActive(), t.scrollAnimation(), t.differentAddressFormToggle(), t.checkoutPaymentMethod(), t.loginPassShower(), t.scrollSpyActive(), t.menuOverflow(), t.dropdownHasChildren(), t.ajaxContactForm(), t.ajaxAppointmentForm()
        }
    };
    t.init()
}(jQuery);