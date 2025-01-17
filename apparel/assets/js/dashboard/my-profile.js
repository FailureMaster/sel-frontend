!(function (e) {
    var t = (function () {
      e(window).width();
      return {
        init: function () {},
        load: function () {
          new ApexCharts(document.querySelector("#pieChart2"), {
            series: [90, 68, 85],
            chart: { type: "donut", height: 230 },
            dataLabels: { enabled: !1 },
            stroke: { width: 0 },
            colors: ["#1D92DF", "#4754CB", "#D55BC1"],
            legend: { position: "bottom", show: !1 },
            responsive: [{ breakpoint: 768, options: { chart: { height: 200 } } }]
          }).render();
        },
        resize: function () {}
      };
    })();
    jQuery(window).on("load", function () {
      setTimeout(function () {
        t.load();
      }, 1e3);
    });
  })(jQuery);
  