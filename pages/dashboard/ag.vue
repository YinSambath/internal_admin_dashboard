<script lang="ts">
import * as agData from '@/data/dashboards/ag.js';
import Pageheader from '~/components/common/pageheader.vue';
import auth from '@/middleware/auth';
import SelectDropdown from '~/components/common/selectDropdown.vue';
import Datatable from "~/components/common/datatable.vue";
import { DoughnutChart} from 'vue-chart-3';
export default {
    setup() {
        const { t } = useI18n();
        definePageMeta({
            middleware: [auth],
        });
        return {
            t
        }
    },
    components: {
        Pageheader,
        SelectDropdown,
        DoughnutChart,
        Datatable
        
    },
    data() {
        return {
            dataToPass: {
                current: 'AG Dashboard',
                list: ['Dashboard', 'AG Dashboard']
            },
            agData: agData,
            dropdownData: {
                policyMeasureID: '',
                status: '',
                dataSource: '',
                agriKpi: '',
                outputType: '',
                deadline: '',
                progressStatus: '',
                primaryAgency: '',
            },
            policy_measure: agData.policy_measure.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
            status: agData.status.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
            data_source: agData.data_source.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
            agri_kpi: agData.agri_kpi.map(item => ({ id: item.id, label: item.year.toString(), value: item.id })),
            output_type: agData.output_type.map(item => ({ id: item.id, label: item.status, value: item.id })),
            deadline: agData.deadline.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
            progress_status: agData.progress_status.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
            primary_agency: agData.primary_agency.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
            tableData: [
                {
                    policyName: 'National Agri Development Policy',
                    objective: '1. Modernizing and commercializing the agricultural value chain',
                    policyMeasureGroup: '1.1 Increase productivity and value addition of crop value   chain',
                    policyMeasure: '1.1.1.   Improve productivity priority crops (paddy rice, vegetables, bananas, mangos,   dragon fruit, longan, ornamental plants, cassava, maize, cashews, pepper,   sugarcane, durian, sweet po- tato, chilly and pineapple).',
                    start_year: 2024,
                    end_year: 2025,
                    progress: 'pending'
                }
            ],
            columns: [ // column header and prop for table
                { prop: 'policyName', label: this.$t('title_name.policy_name_title') },
                { prop: 'objective', label: this.$t('title_name.objective_title') },
                { prop: 'policyMeasureGroup', label: this.$t('title_name.policy_measure_group_title') },
                { prop: 'policyMeasure', label: this.$t('title_name.policy_measure_title'), width: '250px' },
                { prop: 'start_year', label: this.$t('title_name.start_year_title'), width: '100px' },
                { prop: 'end_year', label: this.$t('title_name.end_year_title'), width: '100px' },
                { prop: 'agency', label: this.$t('title_name.agency_title'), width: '100px' },
                { prop: 'progress', label: this.$t('title_name.progress_title'), useTag: true, width: '100px'}
            ],
            currentPage: 1,
            pageSize: 10,
        }
    },
    methods: {
        handlePolicyMeasure(value: string | number) { },
        handleStatusChange(value: string | number) { },
        handleDataSource(value: string | number) { },
        handleAgriKpi(value: string | number) { },
        handleOutputType(value: string | number) { },
        handleDeadline(value: string | number) { },
        handleProgressStatus(value: string | number) { },
        handlePrimaryAgency(value: string | number) { },
    }
}
</script>

<template>
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.policyMeasureID" :items="policy_measure" placeholder="Policy Measure"
                @handleChange="handlePolicyMeasure" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.status" :items="status" placeholder="Status"
                @handleChange="handleStatusChange" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.dataSource" :items="data_source" placeholder="Data Source"
                @handleChange="handleDataSource" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.agriKpi" :items="agri_kpi" placeholder="Agri KPIs"
                @handleChange="handleAgriKpi" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.outputType" :items="output_type" placeholder="Output Type"
                @handleChange="handleOutputType" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.deadline" :items="deadline" placeholder="Deadline"
                @handleChange="handleDeadline" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.progressStatus" :items="progress_status" placeholder="Progress Status"
                @handleChange="handleProgressStatus" />
        </div>
        <div class="col my-2">
            <SelectDropdown v-model="dropdownData.primaryAgency" :items="primary_agency" placeholder="Primary Agency"
                @handleChange="handlePrimaryAgency" />
        </div>
    </div>
    <!-- End::row-1 -->
    <!-- Start::row-2 -->
    <div class="row mb-2">
        <div class="col-xxl-9 col-xl-9 col-lg-9 col-sm-9">
            <div class="card custom-card h-100">
                <div class="card-header">
                    <div class="card-title">
                        Primary Agency
                    </div>
                </div>
                <div class="card-body">
                    <apexchart height="325px" type="bar" :options="agData.primaryAgencyOptions"
                        :series="agData.primaryAgencySeries">
                    </apexchart>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-sm-3">
            <div class="card custom-card h-100">
                <div class="card-body"></div>

            </div>
        </div>
    </div>
    <!-- End::row-2 -->
    <!-- End::row-3 -->
    <div class="row mb-2">
        <div class="col">
            <!-- Start::inner-row-s1 -->
            <div class="row">
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Deadline of Implementation
                            </div>
                        </div>
                        <div class="card-body">
                            <apexchart height="325px" type="bar" :options="agData.DeadlineOptions"
                                :series="agData.DeadlineSeries">
                            </apexchart>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Data Source
                            </div>
                        </div>
                        <div class="card-body">
                            <apexchart height="325px" type="bar" :options="agData.DataSourceOptions"
                                :series="agData.DataSourceSeries">
                            </apexchart>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End::inner-row-1 -->
            <!-- Start::inner-row-2 -->
            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-sm-4">
                    <div class="row">
                        <div class="card custom-card">
                            <div class="card-header">
                                <div class="card-title">
                                    Status of Policy Measure
                                </div>
                            </div>
                            <div class="card-body">
                                <DoughnutChart class="chartjs-chart pb-4 px-4" :width="240" :height="240"
                                    :chartData="agData.StatusChartData" :options="agData.StatusOptions" />
                                <div class="row my-2">
                                    <div class="statusChart completed fs-10 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">Completed</div>
                                    <div class="statusChart in-progress fs-10 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">In-Progress</div>
                                    <div class="statusChart delayed fs-10 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">Delayed</div>
                                </div>
                            </div>
                        </div>
                        <div class="card custom-card">
                            <div class="card-header">
                                <div class="card-title">
                                    Status of Implementation
                                </div>
                            </div>
                            <div class="card-body">
                                <DoughnutChart class="chartjs-chart pb-4 px-4" :width="240" :height="240"
                                    :chartData="agData.StatusChartData" :options="agData.StatusOptions" />
                                <div class="row my-2">
                                    <div class="statusChart completed fs-10 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">10%</div>
                                    <div class="statusChart in-progress fs-10 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">60%</div>
                                    <div class="statusChart delayed fs-10 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">30%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card h-100">
                        <div class="card-header">
                            <div class="card-title">
                                Agri PS1-KPI
                            </div>
                        </div>
                        <div class="card-body">
                            <apexchart height="500px" type="pie" :options="agData.AgriKpiOptions"
                            :series="agData.AgriKpiChartData"></apexchart>
                            <!-- <PieChart :chartData="agData.AgriKpiChartData" :options="agData.AgriKpiOptions" /> -->
                            <!-- <DoughnutChart class="chartjs-chart pb-4 px-4" :width="240" :height="240"
                                :chartData="" :options="" /> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End::inner-row-2 -->
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div class="card custom-card h-100">
                <div class="card-header">
                    <div class="card-title">
                        Policy Measure 16
                    </div>
                </div>
                <div class="card-body"></div>
            </div>
        </div>
    </div>
    <!-- End::row-3 -->
    <!-- Start::row-4 -->
    <div class="row">
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
</template>
<style scoped lang="scss">
.statusChart {
    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        inset-block-start: 0.2rem;
        inset-inline-start: -0.1rem;
    }

    &.completed:before {
        background-color: rgba(38, 191, 148);
    }

    &.in-progress:before {
        background-color: #FB923C;
    }

    &.delayed:before {
        background-color: #FBD13C;
    }
}
</style>