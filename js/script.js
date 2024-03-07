

$(document).ready(function () {
  AOS.init();



  $('.menu-toggle-wrap').click(function () {
    $('.navbar').slideToggle(250)
    $('.menu-toggle-wrap').toggleClass('active')
  });

  $('.plan_change_btn .nav-tabs li').click(function () {
    $(".plan_change_btn .nav-tabs li").removeClass('active')
    $(this).addClass('active')
  });

  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      530: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    }
  });

  var slider_block = new Swiper('.slider_block', {
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1.3,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 1.5,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

  Fancybox.bind("[data-fancybox]", {
    animated: true,
    dragToClose: true,
    autoplay: true,
    Images: {
      zoom: true,
    },
    Toolbar: {
      display: {
        left: [],
        middle: ["infobar"],
        right: ["close"],
      },
    },
    Thumbs: {
      type: "modern",
    },
    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 15,
      },
    },
  });

  var slider_blocked = new Swiper('.slider_blocked', {
    spaceBetween: 15,
    slidesPerView: 2.5,
    items: 18,
    loop: true,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: false,
    loop: true,
    breakpoints: {
      530: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,

      },
      1400: {
        slidesPerView: 4.8,
      },
    },
  });

  $('.screen_interface_slider').owlCarousel({
    loop: true,
    margin: 10,
    margin: 15,
    dragEndSpeed: 1000,
    dot: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }

  });

});