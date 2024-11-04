import { color } from "echarts";
import { backgroundColors } from "../prismCode/ui-elements/breadcrumb";
import { alignmentOptions } from "../prismCode/ui-elements/dropdown";

export let
    policy_measure = [],
    status = [],
    data_source = [],
    agri_kpi = [],
    output_type = [],
    deadline = [],
    progress_status = [],
    primary_agency = [],

    /*  Primary Agency chart */
    primaryAgencySeries = [
        {
            name: "Completed",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
            name: "On-going",
            data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        },
        {
            name: "Delayed",
            data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        },
    ], primaryAgencyOptions = {
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
            "#FF9E01",
            "#56BD4D",
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
    },
    /*  Deadine of Implemenetation chart */
    DeadlineSeries = [
        {
            name: "Completed",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        }
    ], DeadlineOptions = {
        chart: {
            // stacked: true,
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
        ],
        plotOptions: {
            bar: {
                columnWidth: "50%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "bottom",
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
            // type: "month",
            // categories: [
            //     "Jan",
            //     "Feb",
            //     "Mar",
            //     "Apr",
            //     "May",
            //     "Jun",
            //     "Jul",
            //     "Aug",
            //     "sep",
            //     "oct",
            //     "nov",
            //     "dec",
            // ],
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
    },
    /*  Data Source chart */
    DataSourceSeries = [
        {
            name: "Completed",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        }
    ], DataSourceOptions = {
        chart: {
            // stacked: true,
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
            "#FF9E01",
        ],
        plotOptions: {
            bar: {
                columnWidth: "50%",
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
            // type: "month",
            // categories: [
            //     "Jan",
            //     "Feb",
            //     "Mar",
            //     "Apr",
            //     "May",
            //     "Jun",
            //     "Jul",
            //     "Aug",
            //     "sep",
            //     "oct",
            //     "nov",
            //     "dec",
            // ],
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
    },
    // Status Chart
    StatusChartData = {
        // labels: ['Completed', 'In-progress', 'Delayed'],
        datasets: [{
            data: [32, 50, 30],
            backgroundColor: [
                '#56BD4D',
                '#FBD13C',
                '#FF9E01',
            ],
        }
        ],
    },
    StatusOptions = {
        borderWidth: 0,
        cutout: '60%', // Set the cutout percentage here
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "start"
            }
        },
        plugins: [
            {
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
    // AgriKpi Chart
    AgriKpiChartData = [44, 55, 13, 43],
    AgriKpiOptions = {
        labels: ['1. Proportion of processed agricultural products compared to cross agriculture production(Agri PS1-KPI)',
            '2. Agricultural trade balance (Agri PS1-KPI)', '3. Self-Sufficiency Ratio (SSR) (Agri PS1-KPI)', '4. Deployment of Commune/Sangkat Agriculture Officers (Agri PS1-KPI)'],
        chart: {
            type: "pie",
            height: 500,
        },
        colors: [
            '#8AE08A',
            '#3B98DC',
            '#FFD966',
            '#6FA76F',
        ],
        dataLabels: {
            enabled: true
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: 'left',
        },
    }
