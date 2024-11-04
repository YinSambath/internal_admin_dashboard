export let
    mneUnitRecentActivity = [{
        user_name: "User",
        title: "Test01",
        sub_title: "CDC",
        percentage: 34,
        dateTime: "October 12, 2024",
        description: "The share of direct investment (FDI)"
    }, {
        user_name: "User",
        title: "Test02",
        sub_title: "CDC",
        percentage: 70,
        dateTime: "October 13, 2024",
        description: "Ease of paying taxes (taxes)"
    }, {
        user_name: "User",
        title: "Test03",
        sub_title: "CDC",
        percentage: 34,
        dateTime: "October 14, 2024",
        description: "Size of private domestic investment"
    }],
    OutcomeChartData = {
        datasets: [{
            data: [32, 50, 30],
            backgroundColor: [
                '#C084FC',
                '#FB923C',
                '#2563EB',
            ],
        }
        ],
    },
    OutcomeOptions = {
        borderWidth: 0,
        cutout: '80%', // Set the cutout percentage here
        plugins: {
            legend: {
                display: false, // You can customize other options here
            },
        },
        plugins: [{
            afterUpdate: function (chart) {
                const arcs = chart.getDatasetMeta(0).data;
                arcs.forEach(function (arc) {
                    arc.round = {
                        x: (chart.chartArea.left + chart.chartArea.right) / 2,
                        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                        radius: (arc.outerRadius + arc.innerRadius) / 2,
                        thickness: (arc.outerRadius - arc.innerRadius) / 2,
                        backgroundColor: arc.options.backgroundColor
                    }
                });
            },
            afterDraw: (chart) => {
                const {
                    ctx,
                    canvas
                } = chart;

                chart.getDatasetMeta(0).data.forEach(arc => {
                    const startAngle = Math.PI / 2 - arc.startAngle;
                    const endAngle = Math.PI / 2 - arc.endAngle;

                    ctx.save();
                    ctx.translate(arc.round.x, arc.round.y);
                    ctx.fillStyle = arc.options.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                });
            }
        }]

    },
    // for mneUnit Statistics
    mneUnitStatisticsSeries = [{
        name: "",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
    }, {
        name: "",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
    }],
    mneUnitStatisticsOptions = {
        chart: {
            height: 336,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",
        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [0, 0],
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["rgba(var(--success-rgb))", "rgba(var(--danger-rgb))"],
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    },
    /*  Status By Line-Ministries chart */

    StatusByLMSeries = [
        {
            name: "Completed",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
            name: "On-going",
            data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        },
        {
            name: "On-going",
            data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        },
    ], StatusByLMOptions = {
        chart: {
            stacked: true,
            type: "bar",
            height: 325,
        },
        grid: {
            borderColor: "#f5f4f4",
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true, // Ensure y-axis grids are shown
                },
            },
        },
        colors: [
            "var(--primary-color)",
            "rgba(var(--primary-rgb), 0.6)",
            "rgba(var(--primary-rgb), 0.3)",
        ],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        {
                            from: -100,
                            to: -46,
                            color: "#ebeff5",
                        },
                        {
                            from: -45,
                            to: 0,
                            color: "#ebeff5",
                        },
                    ],
                },
                columnWidth: "20%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
        },
        yaxis: {
            title: {
                // text: "Growth",
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
            axisBorder: {
                show: true,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            type: "month",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "sep",
                "oct",
                "nov",
                "dec",
            ],
            axisBorder: {
                show: false,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
            },
        },
    };
