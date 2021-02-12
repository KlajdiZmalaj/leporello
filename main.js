(function ($) {
  //cHJvamVjdF9ieV9rbGFqZGlfem1hbGFq
  $.fn.translate = function (options) {
    var that = this; //a reference to ourselves
    var settings = {
      css: "trn",
      lang:
        "en" /*,
      t: {
        "translate": {
          pt: "tradução",
          br: "tradução"
        }
      }*/,
    };
    settings = $.extend(settings, options || {});
    if (settings.css.lastIndexOf(".", 0) !== 0)
      //doesn't start with '.'
      settings.css = "." + settings.css;
    var t = settings.t;
    //public methods
    this.lang = function (l) {
      if (l) {
        settings.lang = l;
        this.translate(settings); //translate everything
      }

      return settings.lang;
    };
    this.get = function (index) {
      var res = index;

      try {
        res = t[index][settings.lang];
      } catch (err) {
        //not found, return index
        return index;
      }

      if (res) return res;
      else return index;
    };
    this.g = this.get;
    //main
    this.find(settings.css).each(function (i) {
      var $this = $(this);
      var trn_key = $this.attr("data-trn-key");
      if (!trn_key) {
        trn_key = $this.html();
        $this.attr("data-trn-key", trn_key); //store key for next time
      }
      $this.html(that.get(trn_key));
    });
    return this;
  };
})(jQuery);

$(document).ready(() => {
  if (screen.width > 768) {
    (function () {
      var container = document.getElementById("section8"),
        inner = document.getElementById("innerGall");

      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
          return "(" + this.x + ", " + this.y + ")";
        },
      };

      mouse.setOrigin(container);

      var counter = 0;
      var refreshRate = 10;
      var isTimeToUpdate = function () {
        return counter++ % refreshRate === 0;
      };

      var onMouseEnterHandler = function (event) {
        update(event);
      };

      var onMouseLeaveHandler = function () {
        inner.style = "";
      };

      var onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };

      var update = function (event) {
        mouse.updatePosition(event);
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
      };

      var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x * 6 + "deg) rotateY(" + y * 52 + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };

      container.onmousemove = onMouseMoveHandler;
      container.onmouseleave = onMouseLeaveHandler;
      container.onmouseenter = onMouseEnterHandler;
    })();
  }
});
if (screen.width > 768) {
  $(document).ready(() => {
    var timeline = new TimelineMax();
    var timeline2 = new TimelineMax();
    var timeline5 = new TimelineMax();
    var timeline6 = new TimelineMax();
    var timeline8 = new TimelineMax();
    var controller = new ScrollMagic.Controller();

    /* ****************** Timelines ******************/
    timeline.from(
      "#c1",
      1,
      {
        x: 440,
        y: 0,
        ease: Power2.easeInOut,
      },
      "0.1"
    );
    timeline.from(
      "#c2",
      1,
      {
        x: 640,
        y: 0,
        ease: Power2.easeInOut,
      },
      "0.2"
    );
    timeline.from(
      "#c3",
      1,
      {
        x: 240,
        y: 0,
        ease: Power2.easeInOut,
      },
      "0.3"
    );
    $(".greek .imgs.right img").each((ind, el) => {
      timeline2.to(
        el,
        1,
        {
          x: 0,
          y: 100 / ind - 200,
          ease: Power2.easeInOut,
        },
        "0"
      );
    });
    $(".greek .imgs.left img").each((ind, el) => {
      var elObj = {};
      if (ind == 0) {
        elObj = {
          x: -55,
          y: -22,
          ease: Power2.easeInOut,
        };
      } else if (ind == 1) {
        elObj = {
          x: -255,
          y: 200,
          ease: Power2.easeInOut,
        };
      }
      timeline2.from(el, 1, elObj, "0");
    });
    timeline2.from(
      ".greek .infos>div:nth-child(2)",
      1,
      {
        x: 0,
        y: 100,
        ease: Power2.easeInOut,
      },
      "0"
    );

    $(".lithostroto .lithostroto--col:nth-child(2) .imgs img").each(
      (ind, el) => {
        timeline5.from(
          el,
          1,
          {
            x: ind === 0 ? -100 : -500,
            y: 122,
            ease: Linear.easeOut,
          },
          "0"
        );
      }
    );
    timeline5.from(
      ".lithostroto .lithostroto--col:nth-child(3)>div",
      1,
      {
        x: 500,
        y: 122,
        ease: Linear.easeOut,
      },
      "0"
    );
    timeline6.to(
      "#gall1 img",
      1,
      {
        y: "0%",
        ease: Power2.easeInOut,
      },
      "0"
    );
    timeline6.to(
      "#gall2 img",
      1,
      {
        y: "-50%",
        ease: Power2.easeInOut,
      },
      "0"
    );
    timeline8.from(
      ".labart .labart--col:nth-child(2) img:nth-child(2)",
      1,
      {
        y: -10,
        x: 20,
        ease: Power2.easeInOut,
      },
      "0"
    );
    timeline8.fromTo(
      ".labart .labart--col:nth-child(2) img:nth-child(3)",
      1,
      {
        y: 10,
        x: 400,
        ease: Power2.easeInOut,
      },
      {
        y: 0,
        x: 0,
        ease: Power2.easeInOut,
      },
      "0"
    );
    timeline8.fromTo(
      ".labart .labart--col:nth-child(1) > div:nth-child(2)",
      1,
      {
        x: -100,
        ease: Power2.easeInOut,
      },
      {
        x: 0,
        ease: Power2.easeInOut,
      },
      "0"
    );
    timeline8.fromTo(
      ".labart .labart--col:nth-child(1) > img",
      1,
      {
        x: -1000,
        opacity: 0,
        ease: Power1.easeInOut,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power1.easeInOut,
      },
      "0"
    );
    /* ******************SCENES ******************/
    new ScrollMagic.Scene({
      triggerElement: "#section3",
      duration: "1080",
      triggerHook: 0,
      offset: "0",
    })
      .setTween(timeline)
      .setPin("#section3")
      // .addIndicators({
      //   name: "reon scene",
      //   colorStart: "red",
      //   colorEnd: "red",
      // })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#section4",
      duration: "100%",
      triggerHook: 0.5,
      offset: "0",
    })
      .setTween(timeline2)

      // .addIndicators({
      //   name: " scene3",
      //   colorStart: "blue",
      //   colorEnd: "blue",
      // })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#section5",
      duration: 1000,
      triggerHook: 0.7,
      offset: "0",
    })
      // .addIndicators({
      //   name: " scene4",
      //   colorStart: "pink",
      //   colorEnd: "pink",
      // })
      .setClassToggle(".trip .max-width", "animate__flipInX")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#section6",
      duration: "40%",
      triggerHook: 0.2,
      offset: "0",
    })
      // .addIndicators({
      //   name: " scene 5",
      //   colorStart: "#222",
      //   colorEnd: "#222",
      // })
      .setTween(timeline5)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#section7",
      duration: "200%",
      triggerHook: 0,
      offset: "0",
    })
      // .addIndicators({
      //   name: " scene6",
      //   colorStart: "#222",
      //   colorEnd: "#222",
      // })
      .setPin("#section7")
      .setTween(timeline6)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#section9",
      duration: "30%",
      triggerHook: 0,
      offset: "0",
    })
      // .addIndicators({
      //   name: " scene8",
      //   colorStart: "#222",
      //   colorEnd: "#222",
      // })
      .setTween(timeline8)
      .addTo(controller);
  });
}

function scollInto(section) {
  var element = document.getElementById(section);
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
}
var activeSection = "section1";
var sectionsTops = {
  section1: {},
  section2: {},
  section3: {},
  section4: {},
  section5: {},
  section6: {},
  section7: {},
  section8: {},
  section9: {},
  section10: {},
};
function setActiveBullet() {
  //console.log("activated bull active");
  $("[data-set].active").removeClass("active");
  $(`[data-set="${activeSection}"]`).addClass("active");
}
function checkScoll() {
  if ($(window).scrollTop() > 80) {
    $("header").addClass("fixed");
    $(".intro").addClass("fixedHeader");
  } else if ($(window).scrollTop() < 80) {
    $("header").removeClass("fixed");
    $(".intro").removeClass("fixedHeader");
  }
  console.log("activeSection", activeSection);
  Object.keys(sectionsTops).forEach((key) => {
    if (
      sectionsTops[key]["top"] <= $(window).scrollTop() &&
      $(window).scrollTop() <= sectionsTops[key]["bottom"]
    ) {
      activeSection = key;
    }
  });
  setActiveBullet();
}

$(document).ready(() => {
  window.scrollTo(0, 0);
  $('[id*="section"]').each((ind, el) => {
    sectionsTops[`section${ind + 1}`] = {
      top:
        parseInt(
          document.querySelector(`#section${ind}`)?.getBoundingClientRect?.()
            ?.bottom
        ) || 80,
      bottom: parseInt(el.getBoundingClientRect().bottom),
    };
    // console.log("cxa ka", el.getBoundingClientRect());
  });
  console.log("cxa ka", sectionsTops);
  $(".fixedBtn").on("click", () => {
    $("#leftMenu").toggleClass("active");
  });
  $("footer > img").on("click", () => {
    scollInto("section1");
  });
  $("[data-set]").click((e) => {
    $("[data-set]").each((ind, el) => {
      $(el).removeClass("active");
    });
    $(e.target).addClass("active");
    scollInto($(e.target).attr("data-set"));
  });
  checkScoll();
  $(window).scroll(function (e) {
    checkScoll();
  });
  $(".goDown").on("click", function () {
    scollInto("section" + (parseInt(activeSection.split("section")[1]) + 1));
  });
  $(".lang > span").each((ind, el) => {
    $(el).on("click", () => {
      switch (ind) {
        case 0:
        case 3:
          $(".pdf a").attr("href", "./pdf/ita.pdf");
          break;
        case 1:
        case 4:
          $(".pdf a").attr("href", "./pdf/eng.pdf");
          break;
        case 2:
        case 5:
          $(".pdf a").attr("href", "./pdf/gr.pdf");
          break;
      }
    });
  });
});
