! function (t) {
    "use strict";
    (new WOW).init();
    var i, s, n, o = t(window),
        l = o.width(),
        a = t(".header-sticky"),
        r = (t("html"), t("body"));
    o.on("scroll", function () {
        var e = o.scrollTop(),
            i = a.height();
        320 <= l && (e < i ? a.removeClass("is-sticky") : a.addClass("is-sticky"))
    }), i = t("#scroll-top"), s = 0, (n = t(window)).on("scroll", function () {
        var e = t(this).scrollTop();
        s < e ? i.removeClass("show") : 200 < n.scrollTop() ? i.addClass("show") : i.removeClass("show"), s = e
    }), i.on("click", function (e) {
        t("html, body").animate({
            scrollTop: 0
        }, 600), e.preventDefault()
    }), o.on("load", function () {
        t(".preloader-activate").removeClass("preloader-active")
    }), jQuery(window).on("load", function () {
        setTimeout(function () {
            jQuery(".open_tm_preloader").addClass("loaded")
        }, 1e3)
    });
    var e = t(".navigation-menu--onepage").height() - 60;
    t(".navigation-menu--onepage ul").onePageNav({
        currentClass: "active",
        scrollOffset: e
    });
    var c = t(".header-area").height();
    t(".offcanvas-navigation--onepage ul").onePageNav({
        currentClass: "active",
        scrollOffset: c
    }), t(".has-children--multilevel-submenu").find(".submenu").length && t(".has-children--multilevel-submenu").find(".submenu").each(function () {
        var e = t(this).offset().left,
            i = t(this).width();
        o.height();
        e + i <= o.width() - 10 || t(this).addClass("left")
    });
    t("#mobile-menu-trigger").on("click", function () {
        t("#mobile-menu-overlay").addClass("active"), r.addClass("no-overflow")
    }), t("#mobile-menu-close-trigger").on("click", function () {
        t("#mobile-menu-overlay").removeClass("active"), r.removeClass("no-overflow")
    }), t(".offcanvas-navigation--onepage ul li a").on("click", function () {
        t("#mobile-menu-overlay").removeClass("active"), r.removeClass("no-overflow")
    }), r.on("click", function (e) {
        var i = e.target;
        t(i).is(".mobile-menu-overlay__inner") || t(i).parents().is(".mobile-menu-overlay__inner") || t(i).is("#mobile-menu-trigger") || t(i).is("#mobile-menu-trigger i") || (t("#mobile-menu-overlay").removeClass("active"), r.removeClass("no-overflow")), t(i).is(".search-overlay__inner") || t(i).parents().is(".search-overlay__inner") || t(i).is("#search-overlay-trigger") || t(i).is("#search-overlay-trigger i") || (t("#search-overlay").removeClass("active"), r.removeClass("no-overflow"))
    });
    var p = window.location.pathname,
        d = p.substr(p.lastIndexOf("/") + 1),
        u = window.location.hash.substr(1);
    ("" != d && "/" != d && "admin" != d || "" != u) && (t(".navigation-menu li").each(function () {
        t(this).removeClass("active")
    }), "" != u ? t(".navigation-menu li a[href*='" + u + "']").parents("li").addClass("active") : t(".navigation-menu li a[href*='" + d + "']").parents("li").addClass("active")), t(".openmenu-trigger").on("click", function (e) {
        e.preventDefault(), t(".open-menuberger-wrapper").addClass("is-visiable")
    }), t(".page-close").on("click", function (e) {
        e.preventDefault(), t(".open-menuberger-wrapper").removeClass("is-visiable")
    }), t("#open-off-sidebar-trigger").on("click", function () {
        t("#page-oppen-off-sidebar-overlay").addClass("active"), r.addClass("no-overflow")
    }), t("#menu-close-trigger").on("click", function () {
        t("#page-oppen-off-sidebar-overlay").removeClass("active"), r.removeClass("no-overflow")
    }), t("#search-overlay-trigger").on("click", function () {
        t("#search-overlay").addClass("active"), r.addClass("no-overflow")
    }), t("#search-close-trigger").on("click", function () {
        t("#search-overlay").removeClass("active"), r.removeClass("no-overflow")
    }), t("#hidden-icon-trigger").on("click", function () {
        t("#hidden-icon-wrapper").toggleClass("active")
    }), t("#newsletter-popup-close-trigger").on("click", function () {
        t("#newsletter-popup").removeClass("active")
    }), t(".share-icon").on("click", function (e) {
        e.preventDefault(), t(".entry-post-share").toggleClass("opened")
    }), r.on("click", function () {
        t(".entry-post-share").removeClass("opened")
    }), t(".entry-post-share").on("click", function (e) {
        e.stopPropagation()
    });
    var w = t(".offcanvas-navigation"),
        v = w.find(".sub-menu");
    v.parent().prepend('<span class="menu-expand"><i></i></span>'), v.slideUp(), w.on("click", "li a, li .menu-expand", function (e) {
        var i = t(this);
        i.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ("#" === i.attr("href") || i.hasClass("menu-expand")) && (e.preventDefault(), i.siblings("ul:visible").length ? (i.parent("li").removeClass("active"), i.siblings("ul").slideUp()) : (i.parent("li").addClass("active"), i.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"), i.closest("li").siblings("li").find("ul:visible").slideUp(), i.siblings("ul").slideDown()))
    }), t(".projects-masonary-wrapper").imagesLoaded(function () {
        t(".messonry-button").on("click", "button", function () {
            var e = t(this).attr("data-filter");
            t(this).siblings(".is-checked").removeClass("is-checked"), t(this).addClass("is-checked"), i.isotope({
                filter: e
            })
        });
        var i = t(".mesonry-list").isotope({
            percentPosition: !0,
            transitionDuration: "0.7s",
            layoutMode: "masonry"
        })
    }), t(".masonry-activation").imagesLoaded(function () {
        t(".masonry-wrap").isotope({
            itemSelector: ".masonary-item",
            percentPosition: !0,
            transitionDuration: "0.7s",
            masonry: {
                columnWidth: 2,
                percentPosition: !0
            }
        })
    }), t(".bg-img").each(function (e, i) {
        var s = t(i),
            n = s.data("bg");
        s.css("background-image", "url(" + n + ")")
    }), t("#feel-the-wave , .feel-the-wave").length && t("#feel-the-wave , .feel-the-wave").wavify({
        height: 80,
        bones: 5,
        amplitude: 100,
        color: "rgba(224,238,255,0.5)",
        speed: .15
    }), t("#feel-the-wave-two , .feel-the-wave-two").length && t("#feel-the-wave-two , .feel-the-wave-two").wavify({
        height: 120,
        bones: 4,
        amplitude: 60,
        color: "rgba(224,238,255,0.4)",
        speed: .25
    }), t(document).ready(function () {
        new Swiper(".brand-logo-slider__container", {
            slidesPerView: 6,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            autoplay: {
                delay: 3e3
            },
            breakpoints: {
                1499: {
                    slidesPerView: 6
                },
                991: {
                    slidesPerView: 4
                },
                767: {
                    slidesPerView: 3
                },
                575: {
                    slidesPerView: 2
                }
            }
        }), new Swiper(".top-info-slider__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay: !0,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-1",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".single-flexible__container", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-1",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".service-slider__container", {
            slidesPerView: 4,
            slidesPerGroup: 4,
            loop: !0,
            speed: 1e3,
            autoplay: !0,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-service",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                991: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                575: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }
        }), new Swiper(".service-slider__project-active", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay: !1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-service",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 1
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".three-flexible__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            autoplay: !0,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-3",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".auto--center-flexible__container", {
            slidesPerView: "auto",
            centeredSlides: !0,
            freeMode: !1,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-auto",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".auto--per-flexible__container", {
            slidesPerView: "auto",
            centeredSlides: !1,
            freeMode: !0,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-5",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".auto--pree-mode-flexible__container", {
            spaceBetween: 30,
            loop: !0,
            freeMode: !0,
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination-6",
                type: "bullets",
                clickable: !0
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: !1
            },
            speed: 7e3
        }), new Swiper(".carousel-slider__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-9",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".projects-slider__container", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-project",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".testimonial-slider__container", {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: !0,
            speed: 1e3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-t01",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".testimonial-slider__container-two", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            centeredSlides: !0,
            loop: !0,
            speed: 1e3,
            spaceBetween: 50,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination-t0",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                1499: {
                    slidesPerView: 2
                },
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1
                }
            }
        })
    }), t("#fullpage").length && t("#fullpage").fullpage({
        scrollBar: !1,
        navigation: !0,
        loopBottom: !1,
        sectionSelector: "section",
        scrollingSpeed: 1e3,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        afterLoad: function () {
            t(".fp-viewing-3").addClass("tm-one-page-footer-expanded")
        }
    }), t(".chart-progress , .chart-progress__box").appear(function () {
        t(".chart-progress, .chart-progress__box").circleProgress({
            startAngle: -Math.PI / 4 * 2
        })
    }), t("[data-countdown]").each(function () {
        var i = t(this),
            e = t(this).data("countdown");
        i.countdown(e, function (e) {
            i.html(e.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Seconds</span></div>'))
        })
    });
    var g = t("#instafeed");
    if (g.length) {
        var m = g.attr("data-userid_one"),
            f = g.attr("data-accesstoken2");
        new Instafeed({
            get: "user",
            userId: m,
            target: "instafeed",
            accessToken: f,
            resolution: "standard_resolution",
            template: '<div class="grid-item"><div class="instagram-item"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /> <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>{{likes}}</span><span class="totalcomments"><i class="fa fa-comments"></i>{{comments}}</span></div> </a></div></div>',
            sortBy: "least-recent",
            limit: 6,
            links: !1
        }).run()
    }
    var b = t(".demo-option-container");
    t(".quick-option").on("click", function (e) {
        e.preventDefault(), b.toggleClass("open")
    }), t(".counter").counterUp({
        delay: 10,
        time: 1e3
    }), t(".single-svg-icon-box").each(function () {
        var e = t(this),
            i = e.find(".svg-icon"),
            s = i.attr("id"),
            n = i.data("svg-icon"),
            o = new Vivus(s, {
                duration: 100,
                file: n
            });
        e.on("mouseenter", function () {
            o.reset().play()
        })
    }), t("#DateCountdown").TimeCircles({
        animation: "smooth",
        bg_width: .6,
        fg_width: .025,
        circle_bg_color: "#eeeeee",
        time: {
            Days: {
                text: "Days",
                color: "#086AD8",
                show: !0
            },
            Hours: {
                text: "Hours",
                color: "#086AD8",
                show: !0
            },
            Minutes: {
                text: "Minutes",
                color: "#086AD8",
                show: !0
            },
            Seconds: {
                text: "Seconds",
                color: "#086AD8",
                show: !0
            }
        }
    }), t(".slide-scroll-bg").height(".slide-scroll-bg").scrollie({
        scrollOffset: 0,
        scrollingInView: function (e) {
            console.log(e);
            var i = e.data("background");
            t(".bg-body-color").css("background-color", i)
        }
    }), t(".popup-images").lightGallery(), t(".video-popup").lightGallery(), t("#showcoupon").on("click", function () {
        t("#checkout-coupon").slideToggle(500)
    }), t("#chekout-box-2").on("change", function () {
        t(".ship-box-info").slideToggle("100")
    });
    var h = t(".reveal-footer").outerHeight();
    991 < t(window).width() && t(".site-wrapper-reveal").css({
        "margin-bottom": h + "px"
    }), t(".loading-item").slice(0, 9).show(), t(".loadMore").on("click", function (e) {
        e.preventDefault(), t(".loading-item:hidden").slice(0, 3).slideDown(), 0 == t(".loading-item:hidden").length && t(".loadMore").text("All items displayed").addClass("noContent")
    }), t(".loading-item-4").slice(0, 8).show(), t(".loadMoreBtn").on("click", function (e) {
        e.preventDefault(), t(".loading-item-4:hidden").slice(0, 4).slideDown(), 0 == t(".loading-item-4:hidden").length && t(".loadMoreBtn").text("All items displayed").addClass("noContent")
    })

    // Owl-carousel

    $('.about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })
 
  }(jQuery);
