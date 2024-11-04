<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';
import { DoughnutChart } from 'vue-chart-3';
import * as lmData from '@/data/dashboards/lm.js';
import Datatable from "~/components/common/datatable.vue";

export default {
    setup() {
        const { t} = useI18n();
        definePageMeta({
            middleware: [auth],
        })
        return {t}
    },
    components: {
        PageHeader,
        DoughnutChart,
        Datatable
    },
    data() {
        return {
            dataToPass: {
                current: this.t('lm_dashboard'),
                list: [
                    'Dashboards', 'LM Dashboard'
                ]
            },
            lmData: lmData,
            tableData: [
                {
                    policyName: 'National Agri Development Policy',
                    objective: '1. Modernizing and commercializing the agricultural value chain',
                    policyMeasureGroup: '1.1 Increase productivity and value addition of crop value   chain',
                    policyMeasure: [
                        '1.1.1.   Improve productivity priority crops (paddy rice, vegetables, bananas, mangos,   dragon fruit, longan, ornamental plants, cassava, maize, cashews, pepper,   sugarcane, durian, sweet po- tato, chilly and pineapple).',
                        '1.1.2.   Improve productivity priority crops (paddy rice, vegetables, bananas, mangos,   dragon fruit, longan, ornamental plants, cassava, maize, cashews, pepper,   sugarcane, durian, sweet po- tato, chilly and pineapple).',
                        '1.1.3.   Improve productivity priority crops (paddy rice, vegetables, bananas, mangos,   dragon fruit, longan, ornamental plants, cassava, maize, cashews, pepper,   sugarcane, durian, sweet po- tato, chilly and pineapple).',
                        '1.1.4.   Improve productivity priority crops (paddy rice, vegetables, bananas, mangos,   dragon fruit, longan, ornamental plants, cassava, maize, cashews, pepper,   sugarcane, durian, sweet po- tato, chilly and pineapple).',
                        '1.1.5.   Improve productivity priority crops (paddy rice, vegetables, bananas, mangos,   dragon fruit, longan, ornamental plants, cassava, maize, cashews, pepper,   sugarcane, durian, sweet po- tato, chilly and pineapple).'
                    ],
                    start_year: 2024,
                    end_year: 2025,
                    progress: 'pending'
                }
            ],
            columns: [ // column header and prop for table
                { prop: 'policyName', label: this.$t('title_name.policy_name_title') },
                { prop: 'objective', label: this.$t('title_name.objective_title') },
                { prop: 'policyMeasureGroup', label: this.$t('title_name.policy_measure_group_title') },
                { prop: 'policyMeasure', label: this.$t('title_name.policy_measure_title'), width: '250px', useArray: true, },
                { prop: 'start_year', label: this.$t('title_name.start_year_title'), width: '100px' },
                { prop: 'end_year', label: this.$t('title_name.end_year_title'), width: '100px' },
                { prop: 'agency', label: this.$t('title_name.agency_title'), width: '100px' },
                { prop: 'progress', label: this.$t('title_name.progress_title'), useTag: true, width: '100px'}
            ],
            currentPage: 1,
            pageSize: 10,
            evaluatingData: [
                { id: 'ACT002', description: '12. Improved economic diversification, investment climate and competitiveness' },
                { id: 'ACT003', description: '12. Improved economic diversification, investment climate and competitiveness' },
                { id: 'ACT004', description: '12. Improved economic diversification, investment climate and competitiveness' },
            ],
            selectedScores: {
                ACT002: 'Average',
                ACT003: 'Acceptable',
            } as any,
            evaluatingHeader: [
                {
                    name: 'under-average'
                },
                {
                    name: 'Average'
                },
                {
                    name: 'Acceptable'
                },
                {
                    name: 'Good'
                }
            ]
        };
    },
    methods: {
        handleEvaluating(rowId: any, ratingName: any) {
            if (this.selectedScores[rowId] === ratingName) {
                return delete this.selectedScores[rowId];
            }
            // Otherwise, set the selected rating
            this.selectedScores[rowId] = ratingName;
            console.log(this.selectedScores)
        },
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-between align-items-between">
                        <div class=" fs-14 fw-bold">Total KPI</div>
                        <span class="fs-14">30</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-between">
                        <div class=" fs-14 fw-bold">Total Completed KPIs</div>
                        <span class="fs-14">45</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-between">
                        <div class=" fs-14 fw-bold">On-going KPI</div>
                        <div class="fs-14">12</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="fs-14 fw-bold">Archievement Statistics</div>
                        <div class="fs-14">56%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col-xxl-3 col-xl-4 col-lg-4 col-sm-4 mb-2">
            <div class="card  custom-card h-100">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        KPI
                    </div>
                </div>
                <div class="card-body p-0 overflow-hidden">
                    <div class="leads-source-chart d-flex align-items-center justify-content-center">
                        <DoughnutChart class="chartjs-chart pb-4 px-4" :width="240" :height="240"
                            :chartData="lmData.kpiChartData" :options="lmData.kpiOptions" />
                        <div class="lead-source-value">
                            <span class="d-block fs-14">Total</span>
                            <span class="d-block fs-25 fw-bold">30</span>
                        </div>
                    </div>
                    <div class="d-flex flex-row p-0">
                        <div class="d-flex flex-column ms-4 mb-2 border-end border-inline-end-dashed">
                            <div class="text-muted fs-12 mb-1 ocmChart outgoing d-inline-block">Completed
                            </div>
                            <div><span class="fs-16 fw-semibold">74%</span>
                            </div>
                        </div>
                        <div class="d-flex flex-column ms-4 mb-2 border-end border-inline-end-dashed">
                            <div class="text-muted fs-12 mb-1 ocmChart waiting1 d-inline-block">In-progress
                            </div>
                            <div><span class="fs-16 fw-semibold">10%</span>
                            </div>
                        </div>
                        <div class="d-flex flex-column ms-4 mb-2 border-end border-inline-end-dashed">
                            <div class="text-muted fs-12 mb-1 ocmChart waiting2 d-inline-block">Delayed
                            </div>
                            <div><span class="fs-16 fw-semibold">16%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4 col-lg-4 col-sm-4 mb-2">
            <div class="card  custom-card h-100">
                <div class="card-header justify-content-between flex-wrap">
                    <div class="card-title">
                        Insightful
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="leads-source-chart d-flex align-items-center justify-content-center">
                        <DoughnutChart class="chartjs-chart pb-4 px-4" :width="240" :height="240"
                            :chartData="lmData.inSightfulChartData" :options="lmData.inSightfulOptions" />
                        <div class="lead-source-value">
                            <span class="d-block fs-25 fw-bold">7.2/10</span>
                        </div>
                    </div>
                    <div class="row mb-2 border-end border-inline-end-dashed align-items-center">
                        <div class="fw-bold text-center mb-1 d-inline-block">Overall Score
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-4 col-lg-8 col-md-4 col-sm-12 mb-2">
            <div class="card  custom-card h-100">
                <div class="card-header justify-content-between flex-wrap">
                    <div class="card-title">
                        Improved economic diversification, investment climate and competitiveness
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="p-3">
                        <apexchart height="320px" type="line" :options="lmData.improvementStatisticsOptions"
                            :series="lmData.improvementStatisticsSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
    <!--Start::row-2 -->
    <div class="row mb-2">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <el-table :data="evaluatingData" style="width: 100%">
                        <!-- Other columns (e.g., ID, Name, etc.) -->
                        <el-table-column prop="id" label="ID" width="120"></el-table-column>
                        <el-table-column prop="description" label="Description" width="550px"></el-table-column>

                        <el-table-column :label="item.name" v-for="item, index in evaluatingHeader" :key="index">
                            <template #default="scope">
                                <input class="form-check-input" 
                                    :class="(index === 0) ? 'low' : (index === 1) ? 'average' : (index === 2) ? 'acceptable' : 'good'"
                                    type="radio" 
                                    v-model="selectedScores[scope.row.id]"
                                    :value="item.name"
                                    @click="handleEvaluating(scope.row.id, item.name)"
                                    id="flexCheckIndeterminate">
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-2 -->
    <!--Start::row-3 -->
    <div class="row mb-2">
        <div class="col">
            <div class="card">
                <div class="card-body">
                <div class="kpi-datatable">
                    <Datatable 
                        class="table-text-center"
                        row-key="id"
                        :tableData="tableData"
                        :columns="columns"
                        :treeProps="({children: 'children'})"
                        :btnAction="false"
                        :selection="false"
                    >
                    </DataTable>
                    <!-- <div class="kpi-pagination my-2 float-right">
                        <Pagination 
                            :current-page="currentPage"
                            :pageSize="pageSize"
                            :total="tableData.length"
                            @handleSizeChange="handleSizeChange"
                            @handleCurrentChange="handleCurrentChange"
                        ></Pagination>
                    </div> -->
                </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-3 -->
</template>

<style scoped lang="scss">
.ocmChart {
    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        inset-block-start: 0.2rem;
        inset-inline-start: -0.7rem;
    }

    &.outgoing:before {
        background-color: rgba(38, 191, 148);
    }

    &.waiting1:before {
        background-color: #FB923C;
    }

    &.waiting2:before {
        background-color: #2563EB;
    }
}
    .form-check-input {
        width: 28px;
        height: 28px
    }
    .low.form-check-input:checked {
        background-color: #dc3545 !important;
        border-color: #dc3545 !important;
    }
    .average.form-check-input:checked {
        background-color: #ffc107 !important;
        border-color: #ffc107 !important;
    }
    .acceptable.form-check-input:checked {
        background-color: #007bff !important;
        border-color: #007bff !important;
    }
    .good.form-check-input:checked {
        background-color: #28a745 !important;
        border-color: #28a745 !important;
    }
</style>
