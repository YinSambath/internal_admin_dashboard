<script lang="ts">
    import auth from '@/middleware/auth';
    import PageHeader from "@/components/common/pageheader.vue";
    const route = useRoute();
    const kpiId = route.params.id;
    export default {
        setup() {
            const { t } = useI18n();
            definePageMeta({
                middleware: [auth],
            });
            return {
                t
            };
        },
        components: {
            PageHeader,
        },
        data() {
            return {
                dataToPass: {
                    current: "Create KPIs",
                    list: ["Dashboards", "kpi", "Create KPIs"],
                },
            }
        },
        methods: {},
        mounted () {
            console.log(kpiId);
        },
    };
</script>
<template>
    <PageHeader :propData="dataToPass" />
    
</template>
<style scoped>
    
</style>
  