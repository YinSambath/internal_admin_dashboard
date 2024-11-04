<template>
    <div>
        <VueApexCharts :width="width || '100%'" :ref="ref || 'apexchart'" :height="height" :type="type" :options="options" :series="series" />
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    props: ['width', 'height', 'type', 'options', 'series', 'ref'],
    components: {
        VueApexCharts
    }
}
</script>