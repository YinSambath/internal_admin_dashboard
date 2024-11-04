export let
    kpiChartData = {
        datasets: [{
            data: [74, 10, 16],
            backgroundColor: [
                'rgba(38, 191, 148)',
                '#FB923C',
                '#2563EB',
            ],
        }
        ],
    },
    kpiOptions = {
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
    inSightfulChartData = {
        datasets: [{
            data: [10, 76],
            backgroundColor: [
                'rgb(230, 83, 60)',
                '#2563EB',
            ],
        }
        ],
    },
    inSightfulOptions = {
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
    // for improvement Statistics
    improvementStatisticsSeries = [{
        name: "",
        data: [20, 38, 38, 72, 55, 63, 43, 76]
    }, {
        name: "",
        data: [85, 65, 75, 38, 85, 35, 62, 40]
    }],
    improvementStatisticsOptions = {
        chart: {
            height: 336,
            type: 'line',
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
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
        // dataLabels: {
        //     enabled: false
        // },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["rgba(var(--success-rgb))", "rgba(var(--danger-rgb))"],
        yaxis: {
            min: 0,
            show: false
            // title: {
            //     style: {
            //         color: '#adb5be',
            //         fontSize: '14px',
            //         fontFamily: 'poppins, sans-serif',
            //         fontWeight: 600,
            //         cssClass: 'apexcharts-yaxis-label',
            //     },
            // },
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            // type: 'month',
            // // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            // axisBorder: {
            //     show: true,
            //     color: 'rgba(119, 119, 142, 0.05)',
            //     offsetX: 0,
            //     offsetY: 0,
            // },
            // axisTicks: {
            //     show: true,
            //     borderType: 'solid',
            //     color: 'rgba(119, 119, 142, 0.05)',
            //     width: 6,
            //     offsetX: 0,
            //     offsetY: 0
            // },
            // labels: {
            //     rotate: -90
            // }
        }
    }