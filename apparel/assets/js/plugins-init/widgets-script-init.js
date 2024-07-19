!(function (y) {
    "use strict";
    var e = (function () {
        function l() {
            0 < jQuery("#chart_widget_5").length &&
                (c("#chart_widget_5"),
                new Chartist.Line(
                    "#chart_widget_5",
                    {
                        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
                        series: [[4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]]
                    },
                    {
                        low: 0,
                        showArea: 1,
                        showPoint: !0,
                        showLine: !0,
                        fullWidth: !0,
                        lineSmooth: !1,
                        chartPadding: { top: 4, right: 0, bottom: 0, left: 0 },
                        axisX: { showLabel: !1, showGrid: !1, offset: 0 },
                        axisY: { showLabel: !1, showGrid: !1, offset: 0 }
                    }
                ));
        }
        function g() {
            0 < jQuery("#chart_widget_6").length &&
                new Chartist.Line(
                    "#chart_widget_6",
                    {
                        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
                        series: [[4, 5, 3.5, 5, 4, 5.5, 3.8, 4.6]]
                    },
                    {
                        low: 0,
                        showArea: 1,
                        showPoint: !0,
                        showLine: !0,
                        fullWidth: !0,
                        lineSmooth: !1,
                        chartPadding: { top: 4, right: 0, bottom: 0, left: 0 },
                        axisX: { showLabel: !1, showGrid: !1, offset: 0 },
                        axisY: { showLabel: !1, showGrid: !1, offset: 0 }
                    }
                );
        }
        function p() {
            0 < jQuery("#chart_widget_8").length &&
                new Chartist.Line(
                    "#chart_widget_8",
                    {
                        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
                        series: [[4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]]
                    },
                    {
                        low: 0,
                        showArea: !1,
                        showPoint: !0,
                        showLine: !0,
                        fullWidth: !0,
                        lineSmooth: !1,
                        chartPadding: { top: 4, right: 0, bottom: 0, left: 0 },
                        axisX: { showLabel: !1, showGrid: !1, offset: 0 },
                        axisY: { showLabel: !1, showGrid: !1, offset: 0 }
                    }
                );
        }
        function c(e, r = []) {
            jQuery(e).empty(),
                jQuery(e).each(function () {
                    var e = y.map(this.attributes, function (e) {
                            return e.name;
                        }),
                        a = y(this);
                    y.each(e, function (e, t) {
                        "id" == t ||
                            (0 !== r.length && -1 !== jQuery.inArray(t, r)) ||
                            a.removeAttr(t);
                    });
                });
        }
        y(window).width();
        return {
            init: function () {},
            load: function () {
                var a, r, i, e, t, o, n;
                if (
                    (null !== (n = document.getElementById("activity")) &&
                        ((a = [
                            {
                                first: [
                                    35,
                                    48,
                                    25,
                                    35,
                                    40,
                                    24,
                                    30,
                                    25,
                                    22,
                                    20,
                                    45,
                                    35
                                ]
                            },
                            {
                                first: [
                                    50,
                                    35,
                                    35,
                                    45,
                                    40,
                                    50,
                                    60,
                                    80,
                                    25,
                                    50,
                                    34,
                                    35
                                ]
                            },
                            {
                                first: [
                                    20,
                                    35,
                                    60,
                                    45,
                                    40,
                                    70,
                                    30,
                                    80,
                                    65,
                                    70,
                                    60,
                                    35
                                ]
                            },
                            {
                                first: [
                                    25,
                                    88,
                                    25,
                                    50,
                                    70,
                                    70,
                                    60,
                                    70,
                                    50,
                                    60,
                                    50,
                                    70
                                ]
                            }
                        ]),
                        (r = {
                            type: "bar",
                            data: {
                                labels: [
                                    "01",
                                    "02",
                                    "03",
                                    "04",
                                    "05",
                                    "06",
                                    "07",
                                    "08",
                                    "09",
                                    "10",
                                    "11",
                                    "12"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [
                                            35,
                                            18,
                                            30,
                                            35,
                                            40,
                                            20,
                                            30,
                                            25,
                                            22,
                                            20,
                                            45,
                                            35
                                        ],
                                        borderColor: "rgba(249, 58, 11, 1)",
                                        borderWidth: "0",
                                        backgroundColor: "rgba(249, 58, 11, 1)"
                                    }
                                ]
                            },
                            options: {
                                responsive: !0,
                                maintainAspectRatio: !(n.height = 300),
                                plugins: { legend: !1 },
                                legend: { display: !1 },
                                scales: {
                                    y: {
                                        gridLines: {
                                            color: "rgba(89, 59, 219,0.1)",
                                            drawBorder: !0
                                        },
                                        ticks: { fontColor: "#999" }
                                    },
                                    x: {
                                        gridLines: {
                                            display: !1,
                                            zeroLineColor: "transparent"
                                        },
                                        ticks: {
                                            stepSize: 5,
                                            fontColor: "#999",
                                            fontFamily: "Nunito, sans-serif"
                                        }
                                    }
                                },
                                tooltips: {
                                    mode: "index",
                                    intersect: !1,
                                    titleFontColor: "#888",
                                    bodyFontColor: "#555",
                                    titleFontSize: 12,
                                    bodyFontSize: 15,
                                    backgroundColor: "rgba(256,256,256,0.95)",
                                    displayColors: !0,
                                    xPadding: 10,
                                    yPadding: 7,
                                    borderColor: "rgba(220, 220, 220, 0.9)",
                                    borderWidth: 2,
                                    caretSize: 6,
                                    caretPadding: 10
                                }
                            }
                        }),
                        (n = document
                            .getElementById("activity")
                            .getContext("2d")),
                        (i = new Chart(n, r)),
                        document
                            .querySelectorAll(
                                "#user-activity .nav-tabs .nav-item"
                            )
                            .forEach(function (e, t) {
                                e.addEventListener("click", function () {
                                    (r.data.datasets[0].data = a[t].first),
                                        i.update();
                                });
                            })),
                    0 < jQuery("#activeUser").length &&
                        ((n = document
                            .getElementById("activeUser")
                            .getContext("2d")),
                        (e = new Chart(n, {
                            type: "bar",
                            data: {
                                labels: [
                                    "0",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "0",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        backgroundColor: "rgba(58,223,174,1)",
                                        strokeColor: "rgba(58,223,174,1)",
                                        pointColor: "rgba(0,0,0,0)",
                                        pointStrokeColor: "rgba(58,223,174,1)",
                                        pointHighlightFill:
                                            "rgba(58,223,174,1)",
                                        pointHighlightStroke:
                                            "rgba(58,223,174,1)",
                                        data: [
                                            65,
                                            59,
                                            80,
                                            81,
                                            56,
                                            55,
                                            40,
                                            65,
                                            59,
                                            80,
                                            81,
                                            56,
                                            55,
                                            40
                                        ]
                                    }
                                ]
                            },
                            options: {
                                responsive: !0,
                                maintainAspectRatio: !1,
                                plugins: { legend: !1 },
                                legend: { display: !1 },
                                tooltips: { enabled: !1 },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: { display: !1 },
                                        barPercentage: 1,
                                        categoryPercentage: 0.5
                                    },
                                    y: {
                                        display: !1,
                                        ticks: {
                                            padding: 10,
                                            stepSize: 20,
                                            max: 100,
                                            min: 0
                                        },
                                        grid: {
                                            display: !0,
                                            drawBorder: !1,
                                            lineWidth: 1,
                                            zeroLineColor: "#48f3c0"
                                        }
                                    }
                                }
                            }
                        })),
                        setInterval(function () {
                            e.config.data.datasets[0].data.push(
                                Math.floor(10 + 80 * Math.random())
                            ),
                                e.config.data.datasets[0].data.shift(),
                                e.update();
                        }, 2e3)),
                    0 < jQuery("#chart_widget_1").length &&
                        ((n = document
                            .getElementById("chart_widget_1")
                            .getContext("2d")),
                        new Chart(n, {
                            type: "bar",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                        borderColor: "rgba(255, 255, 255, .8)",
                                        borderWidth: "0",
                                        barThickness: "25",
                                        backgroundColor:
                                            "rgba(255, 255, 255, .8)",
                                        hoverBackgroundColor:
                                            "rgba(255, 255, 255, .8)"
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    y: {
                                        display: !1,
                                        ticks: {
                                            beginAtZero: !0,
                                            display: !1,
                                            max: 100,
                                            min: 0,
                                            stepSize: 10
                                        },
                                        grid: { display: !1, drawBorder: !1 }
                                    },
                                    x: {
                                        display: !1,
                                        barPercentage: 0.5,
                                        grid: { display: !1, drawBorder: !1 },
                                        ticks: { display: !1 }
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_2").length &&
                        ((t = (n = document
                            .getElementById("chart_widget_2")
                            .getContext("2d")).createLinearGradient(
                            0,
                            0,
                            0,
                            250
                        )).addColorStop(0, "#430b58"),
                        t.addColorStop(1, "#6c2586"),
                        new Chart(n, {
                            type: "bar",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Aug",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dec"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [
                                            65,
                                            59,
                                            80,
                                            81,
                                            56,
                                            55,
                                            40,
                                            88,
                                            45,
                                            95,
                                            54,
                                            76
                                        ],
                                        borderColor: t,
                                        borderWidth: "0",
                                        barThickness: "5",
                                        backgroundColor: t,
                                        hoverBackgroundColor: t
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    y: {
                                        display: !1,
                                        ticks: {
                                            beginAtZero: !0,
                                            display: !1,
                                            max: 100,
                                            min: 0,
                                            stepSize: 10
                                        },
                                        grid: { display: !1, drawBorder: !1 }
                                    },
                                    x: {
                                        display: !1,
                                        barPercentage: 0.1,
                                        grid: { display: !1, drawBorder: !1 },
                                        ticks: { display: !1 }
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_3").length &&
                        ((n = document
                            .getElementById("chart_widget_3")
                            .getContext("2d")),
                        new Chart(n, {
                            type: "bar",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Aug",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dec"
                                ],
                                datasets: [
                                    {
                                        label: "Expense",
                                        backgroundColor: "#ff2c53",
                                        hoverBackgroundColor: "#ff5777",
                                        barThickness: "18",
                                        data: [
                                            "20",
                                            "14",
                                            "18",
                                            "25",
                                            "27",
                                            "22",
                                            "12",
                                            "24",
                                            "20",
                                            "14",
                                            "18",
                                            "16"
                                        ]
                                    },
                                    {
                                        label: "Earning",
                                        backgroundColor: "#F1F3F7",
                                        hoverBackgroundColor: "#F1F3F7",
                                        barThickness: "18",
                                        data: [
                                            "12",
                                            "18",
                                            "14",
                                            "7",
                                            "5",
                                            "10",
                                            "20",
                                            "8",
                                            "12",
                                            "18",
                                            "14",
                                            "16"
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                legend: { display: !1 },
                                title: { display: !1 },
                                tooltips: { mode: "index", intersect: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    x: {
                                        display: !1,
                                        stacked: !0,
                                        barPercentage: 0.2,
                                        ticks: { display: !1 },
                                        grid: { display: !1, drawBorder: !1 }
                                    },
                                    y: {
                                        display: !1,
                                        stacked: !0,
                                        grid: { display: !1, drawBorder: !1 },
                                        ticks: { display: !1 }
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_4").length &&
                        ((t = document
                            .getElementById("chart_widget_4")
                            .getContext("2d")),
                        new Chart(t, {
                            type: "bar",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "one",
                                    "two",
                                    "three",
                                    "four",
                                    "five",
                                    "six",
                                    "seven",
                                    "eight",
                                    "nine",
                                    "ten",
                                    "eleven",
                                    "twelve",
                                    "thirteen",
                                    "forteen",
                                    "fifteen",
                                    "sixteen",
                                    "seventeen",
                                    "eighteen",
                                    "nineteen",
                                    "twenty"
                                ],
                                datasets: [
                                    {
                                        label: "Expense",
                                        backgroundColor: "#430b58",
                                        hoverBackgroundColor: "#6c2586",
                                        barThickness: "10",
                                        data: [
                                            "20",
                                            "14",
                                            "18",
                                            "25",
                                            "27",
                                            "22",
                                            "12",
                                            "24",
                                            "20",
                                            "14",
                                            "18",
                                            "16",
                                            "34",
                                            "32",
                                            "43",
                                            "36",
                                            "56",
                                            "12",
                                            "23",
                                            "34"
                                        ]
                                    },
                                    {
                                        label: "Earning",
                                        backgroundColor: "#F1F3F7",
                                        hoverBackgroundColor: "#F1F3F7",
                                        barThickness: "10",
                                        data: [
                                            "32",
                                            "58",
                                            "34",
                                            "37",
                                            "15",
                                            "41",
                                            "24",
                                            "38",
                                            "52",
                                            "38",
                                            "24",
                                            "19",
                                            "54",
                                            "34",
                                            "23",
                                            "34",
                                            "35",
                                            "22",
                                            "43",
                                            "33"
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                legend: { display: !1 },
                                title: { display: !1 },
                                tooltips: { mode: "index", intersect: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    x: {
                                        display: !1,
                                        stacked: !0,
                                        barPercentage: 1,
                                        barThickness: 5,
                                        ticks: { display: !1 },
                                        grid: { display: !1, drawBorder: !1 }
                                    },
                                    y: {
                                        display: !1,
                                        stacked: !0,
                                        grid: { display: !1, drawBorder: !1 },
                                        ticks: { display: !1, max: 100, min: 0 }
                                    }
                                }
                            }
                        })),
                    l(),
                    g(),
                    0 < jQuery("#chart_widget_7").length &&
                        (c("#chart_widget_7"),
                        (o = (n = document
                            .getElementById("chart_widget_7")
                            .getContext("2d")).createLinearGradient(
                            0,
                            0,
                            0,
                            250
                        )).addColorStop(0, "#ff2c53"),
                        o.addColorStop(1, "#ff2c53"),
                        new Chart(n, {
                            type: "bar",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Aug",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dec"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [
                                            65,
                                            59,
                                            80,
                                            81,
                                            56,
                                            55,
                                            40,
                                            88,
                                            45,
                                            95,
                                            54,
                                            76
                                        ],
                                        borderColor: o,
                                        borderWidth: "0",
                                        backgroundColor: o,
                                        hoverBackgroundColor: o
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    y: {
                                        display: !1,
                                        ticks: {
                                            beginAtZero: !0,
                                            display: !1,
                                            max: 100,
                                            min: 0,
                                            stepSize: 10
                                        },
                                        gridLines: {
                                            display: !1,
                                            drawBorder: !1
                                        }
                                    },
                                    x: {
                                        display: !1,
                                        barPercentage: 0.6,
                                        gridLines: {
                                            display: !1,
                                            drawBorder: !1
                                        },
                                        ticks: { display: !1 }
                                    }
                                }
                            }
                        })),
                    p(),
                    0 < jQuery("#chart_widget_9").length &&
                        ((n = document
                            .getElementById("chart_widget_9")
                            .getContext("2d")),
                        new Chart(n, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "January",
                                    "February",
                                    "March",
                                    "April"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#2780d4",
                                        borderColor: "#2780d4",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        data: [
                                            20,
                                            10,
                                            18,
                                            15,
                                            32,
                                            18,
                                            15,
                                            22,
                                            8,
                                            6,
                                            12,
                                            13,
                                            10,
                                            18,
                                            14,
                                            24,
                                            16,
                                            12,
                                            19,
                                            21,
                                            16,
                                            14,
                                            24,
                                            21,
                                            13,
                                            15,
                                            27,
                                            29,
                                            21,
                                            11,
                                            14,
                                            19,
                                            21,
                                            17
                                        ],
                                        fill: !0
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.15 },
                                    point: { radius: 2, borderWidth: 1 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_10").length &&
                        ((o = document
                            .getElementById("chart_widget_10")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#dashboard_chart_1").length &&
                        ((o = document
                            .getElementById("dashboard_chart_1")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#dashboard_chart_2").length &&
                        ((o = document
                            .getElementById("dashboard_chart_2")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#dashboard_chart_3").length &&
                        ((o = document
                            .getElementById("dashboard_chart_3")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#dashboard_chart_4").length &&
                        ((o = document
                            .getElementById("dashboard_chart_4")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#dashboard_chart_5").length &&
                        ((o = document
                            .getElementById("dashboard_chart_5")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#dashboard_chart_6").length &&
                        ((o = document
                            .getElementById("dashboard_chart_6")
                            .getContext("2d")),
                        new Chart(o, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor: "#FDF6F6",
                                        borderColor: "#BA0000",
                                        pointBackgroundColor: "#2780d4",
                                        pointBorderColor: "#2780d4",
                                        pointHoverBackgroundColor: "#2780d4",
                                        pointHoverBorderColor: "#2780d4",
                                        borderWidth: 1,
                                        fill: !0,
                                        data: [
                                            8,
                                            10,
                                            9,
                                            11,
                                            11,
                                            10,
                                            10,
                                            11,
                                            10,
                                            11,
                                            12,
                                            10
                                        ]
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.7 },
                                    point: { radius: 0, borderWidth: 0 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_11").length &&
                        ((n = document
                            .getElementById("chart_widget_11")
                            .getContext("2d")),
                        new Chart(n, {
                            type: "line",
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ],
                                datasets: [
                                    {
                                        label: "Sales Stats",
                                        backgroundColor:
                                            "rgba(98, 126, 234, .5)",
                                        borderColor: "#145650",
                                        pointBackgroundColor: "#145650",
                                        pointBorderColor: "#145650",
                                        pointHoverBackgroundColor: "#145650",
                                        pointHoverBorderColor: "#145650",
                                        data: [4, 5, 5, 6, 7, 7, 7, 6, 6, 5, 6, 8],
                                        fill: !0,
                                        tension: 0.5
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                title: { display: !1 },
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 5,
                                    yPadding: 5,
                                    caretPadding: 5
                                },
                                legend: { display: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                hover: { mode: "index" },
                                scales: {
                                    x: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Month"
                                        },
                                        ticks: { max: 30, min: 0 }
                                    },
                                    y: {
                                        display: !1,
                                        gridLines: !1,
                                        scaleLabel: {
                                            display: !0,
                                            labelString: "Value"
                                        },
                                        ticks: { beginAtZero: !0 }
                                    }
                                },
                                elements: {
                                    line: { tension: 0.15 },
                                    point: { radius: 2, borderWidth: 1 }
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_14").length &&
                        (((n = document.getElementById(
                            "chart_widget_14"
                        )).height = 200),
                        new Chart(n, {
                            type: "line",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Febr",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [55, 30, 90, 41, 86, 45, 80],
                                        borderColor: "#3693FF",
                                        borderWidth: "2",
                                        backgroundColor: "transparent",
                                        pointBackgroundColor: "#3693FF",
                                        pointRadius: 0,
                                        tension: 0.5
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    y: {
                                        display: !1,
                                        ticks: {
                                            beginAtZero: !0,
                                            max: 100,
                                            min: 0,
                                            stepSize: 20,
                                            padding: 0,
                                            display: !1
                                        },
                                        gridLines: {
                                            drawBorder: !1,
                                            display: !1
                                        }
                                    },
                                    x: {
                                        display: !1,
                                        ticks: { padding: 0, display: !1 },
                                        gridLines: {
                                            display: !1,
                                            drawBorder: !1
                                        }
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_15").length &&
                        (((n = document.getElementById(
                            "chart_widget_15"
                        )).height = 200),
                        new Chart(n, {
                            type: "line",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Febr",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [25, 60, 30, 71, 26, 85, 50],
                                        borderColor: "#2780d4",
                                        borderWidth: "2",
                                        backgroundColor: "transparent",
                                        pointBackgroundColor: "#2780d4",
                                        pointRadius: 0,
                                        tension: 0.5
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                scales: {
                                    y: {
                                        display: !1,
                                        ticks: {
                                            beginAtZero: !0,
                                            max: 100,
                                            min: 0,
                                            stepSize: 20,
                                            padding: 0,
                                            display: !1
                                        },
                                        gridLines: {
                                            drawBorder: !1,
                                            display: !1
                                        }
                                    },
                                    x: {
                                        display: !1,
                                        ticks: { padding: 0, display: !1 },
                                        gridLines: {
                                            display: !1,
                                            drawBorder: !1
                                        }
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_16").length &&
                        (((n = document.getElementById(
                            "chart_widget_16"
                        )).height = 345),
                        new Chart(n, {
                            type: "line",
                            data: {
                                defaultFontFamily: "Poppins",
                                labels: [
                                    "Jan",
                                    "Febr",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul"
                                ],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        data: [25, 60, 30, 71, 26, 85, 50],
                                        borderColor: "rgba(249, 58, 11, 1)",
                                        borderWidth: "2",
                                        backgroundColor: "rgba(249, 58, 11, 1)",
                                        pointBackgroundColor:
                                            "rgba(249, 58, 11, 1)",
                                        pointRadius: 0,
                                        tension: 0.5
                                    }
                                ]
                            },
                            options: {
                                plugins: { legend: !1 },
                                responsive: !0,
                                maintainAspectRatio: !1,
                                tooltips: {
                                    intersect: !1,
                                    mode: "nearest",
                                    xPadding: 10,
                                    yPadding: 10,
                                    caretPadding: 10
                                },
                                scales: {
                                    y: {
                                        display: !1,
                                        ticks: {
                                            beginAtZero: !0,
                                            max: 100,
                                            min: 0,
                                            stepSize: 20,
                                            padding: 0,
                                            display: !1
                                        },
                                        gridLines: {
                                            drawBorder: !1,
                                            display: !1
                                        }
                                    },
                                    x: {
                                        display: !1,
                                        ticks: {
                                            padding: 0,
                                            display: !1,
                                            beginAtZero: !0
                                        },
                                        gridLines: {
                                            display: !1,
                                            drawBorder: !1
                                        }
                                    }
                                }
                            }
                        })),
                    0 < jQuery("#chart_widget_17").length)
                ) {
                    let a = [];
                    function d() {
                        for (
                            0 < a.length && (a = a.slice(1));
                            a.length < 50;

                        ) {
                            var e =
                                (0 < a.length ? a[a.length - 1] : 50) +
                                10 * Math.random() -
                                5;
                            e < 0 ? (e = 0) : 100 < e && (e = 100), a.push(e);
                        }
                        var t = [];
                        for (let e = 0; e < a.length; ++e) t.push([e, a[e]]);
                        return t;
                    }
                    if (0 < jQuery("#chart_widget_17").length) {
                        const s = jQuery.plot("#chart_widget_17", [d()], {
                            colors: ["#430b58"],
                            series: {
                                lines: { show: !0, lineWidth: 0, fill: 0.9 },
                                shadowSize: 0
                            },
                            grid: {
                                borderColor: "transparent",
                                borderWidth: 0,
                                labelMargin: 0
                            },
                            x: {
                                color: "transparent",
                                font: { size: 10, color: "#fff" }
                            },
                            y: {
                                min: 0,
                                max: 100,
                                color: "transparent",
                                font: { size: 10, color: "#fff" }
                            }
                        });
                        !(function e() {
                            s.setData([d()]), s.draw(), setTimeout(e, 1e3);
                        })();
                    }
                }
                0 < jQuery("#widget_sparklinedash").length &&
                    y("#widget_sparklinedash").sparkline(
                        [
                            10,
                            15,
                            26,
                            27,
                            28,
                            31,
                            34,
                            40,
                            41,
                            44,
                            49,
                            64,
                            68,
                            69,
                            72
                        ],
                        {
                            type: "bar",
                            height: "40",
                            width: "40",
                            barWidth: "3",
                            resize: !0,
                            barSpacing: "3",
                            barColor: "rgb(0, 171, 197)"
                        }
                    ),
                    0 < jQuery("#widget_spark-bar").length &&
                        y("#widget_spark-bar").sparkline(
                            [
                                33,
                                22,
                                68,
                                54,
                                8,
                                30,
                                74,
                                7,
                                36,
                                5,
                                41,
                                19,
                                43,
                                29,
                                38
                            ],
                            {
                                type: "bar",
                                height: "40",
                                barWidth: 3,
                                barSpacing: 3,
                                barColor: "rgb(7, 135, 234)"
                            }
                        ),
                    0 < jQuery("#widget_StackedBarChart").length &&
                        y("#widget_StackedBarChart").sparkline(
                            [
                                [1, 4, 2],
                                [2, 3, 2],
                                [3, 2, 2],
                                [4, 1, 2]
                            ],
                            {
                                type: "bar",
                                height: "40",
                                barWidth: 3,
                                barSpacing: 3,
                                stackedBarColor: [
                                    "#36b9d8",
                                    "#4bffa2",
                                    "rgba(68, 0, 235, .8)"
                                ]
                            }
                        ),
                    0 < jQuery("#widget_tristate").length &&
                        y("#widget_tristate").sparkline(
                            [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1],
                            {
                                type: "tristate",
                                height: "40",
                                barWidth: 3,
                                barSpacing: 3,
                                colorMap: [
                                    "#36b9d8",
                                    "#4bffa2",
                                    "rgba(68, 0, 235, .8)"
                                ],
                                negBarColor: "rgba(245, 60, 121, .8)"
                            }
                        ),
                    0 < jQuery("#widget_composite-bar").length &&
                        y("#widget_composite-bar").sparkline(
                            [
                                73,
                                53,
                                50,
                                67,
                                3,
                                56,
                                19,
                                59,
                                37,
                                32,
                                40,
                                26,
                                71,
                                19,
                                4,
                                53,
                                55,
                                31,
                                37,
                                67,
                                10,
                                21
                            ],
                            {
                                type: "bar",
                                height: "40",
                                barWidth: "3",
                                resize: !0,
                                barColor: "rgb(68, 11, 89)",
                                width: "100%"
                            }
                        );
            },
            resize: function () {
                l(), g(), p();
            }
        };
    })();
    jQuery(document).ready(function () {}),
        jQuery(window).on("load", function () {
            e.load();
        }),
        jQuery(window).on("resize", function () {
            setTimeout(function () {
                e.resize();
            }, 500);
        });
})(jQuery);
