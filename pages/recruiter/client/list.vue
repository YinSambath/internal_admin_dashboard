<script lang="ts">
    import * as kpiData from '@/data/dashboards/kpis.js';
    import auth from '@/middleware/auth';
    import PageHeader from "@/components/common/pageheader.vue";
    import SelectDropdown from '~/components/common/selectDropdown.vue';
    import DataTable from '~/components/common/datatable.vue';
    import Pagination from '~/components/common/pagination.vue';
    import { useTestStore } from '~/stores/modules/test';
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
            SelectDropdown,
            DataTable,
            Pagination
        },
        data() {
            return {
                dataToPass: {
                    current: this.$t('indicator_kpi'),
                    list: [this.$t('dashboard'), this.$t('indicator_kpi')],
                },
                testStore: reactive(useTestStore()),
                body: {
                    ministryId: "",
                    frameworkId: "",
                    kpiLevelId: "",
                    practiceYearId: "",
                    statusId: "",
                    frequencyId: "",
                    keyword: null,
                },
                ministries: [] as Array<any>,
                frameworks: []as Array<any>,
                kpi_levels: kpiData.kpi_levels.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                practice_year: kpiData.practice_year.map(item => ({ id: item.id, label: item.year.toString(), value: item.id })),
                status: kpiData.status.map(item => ({ id: item.id, label: item.status, value: item.status })),
                frequencies: kpiData.frequencies.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                kpis: [] as Array<any>,
                btnActionItems: { // show button action by set them to true
                    showAdd: {
                        type: false,
                        link: ''
                    },
                    showDocument: {
                        type: false,
                        link: ''
                    },
                    showUpdate: {
                        type: true,
                        link: '/client/kpi/update'
                    },
                    showView: {
                        type: true,
                        link: '/client/kpi/view'
                    },
                    showDelete: true,
                },
                columns: [ // column header and prop for table
                    { prop: 'code', label: this.$t('title_name.code_title'), sortable: true },
                    { prop: 'nameKh', label: this.$t('title_name.name_title'), sortable: true, width: '400px' },
                    { prop: 'groupId', label: this.$t('title_name.group'), width: '75px' },
                    { prop: 'status', label: this.$t('title_name.status_title'), useTag: true}
                ],
                currentPage: 1,
                pageSize: 10,
            }
        },
        mounted() {
            this.kpis = this.testStore.listKpis();
            this.ministries = this.testStore.ministries.map(item => ({ id: item.id, label: item.nameKh, value: item.id }));
            this.frameworks = this.testStore.frameworks.map(item => ({ id: item.id, label: item.frameworkNameKh, value: item.id }));
        },
        methods: {
            handleMinistryChange(value: string | number) {
                console.log("Selected Ministry ID:", value);
            },
            handleFrameworkChange(value: string | number) {
                console.log("Selected Framework ID:", value);
            },
            handleKpiLevelChange(value: string | number) {
                console.log("Selected KPI Level ID:", value);
            },
            handlePracticeYearChange(value: string | number) {
                console.log("Selected Practice ID:", value);
            },
            handleStatusChange(value: string | number) {
                console.log("Selected Status ID:", value);
            },
            handleFrequencyChange(value: string | number) {
                console.log("Selected Frequency ID:", value);
            },
            selectable(row: any) {
                return row.id !== null;
            },
            handleSelectionChange(selectedRows: any) {
                console.log(selectedRows);
            },
            handleActionDelete(row: any) {
                console.log('Edit delete clicked', row);
            },
            handleActionView(row: any) {
                console.log('Edit view clicked', row);
            },
            handleSizeChange(newSize: number) {
                console.log(newSize)
            },
            handleCurrentChange(newPage: number) {
                console.log(newPage)
            },
        },
    }                          
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <div class="row">
        <div class="col-12">
            <div class="kpis-filter">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4 mr-10 ">
                                <SelectDropdown 
                                    v-model="body.ministryId" 
                                    :items="ministries" 
                                    placeholder="Ministry" 
                                    @handleChange="handleMinistryChange"
                                />
                            </div>
                            <div class="col ">
                                <SelectDropdown 
                                    v-model="body.frameworkId" 
                                    :items="frameworks" 
                                    placeholder="Framework" 
                                    @handleChange="handleFrameworkChange"
                                />
                            </div>
                            <div class="col ">
                                <SelectDropdown 
                                    v-model="body.kpiLevelId" 
                                    :items="kpi_levels" 
                                    placeholder="KPI Level" 
                                    @handleChange="handleKpiLevelChange"
                                />
                            </div>
                            <div class="col ">
                                <SelectDropdown 
                                    v-model="body.practiceYearId" 
                                    :items="practice_year" 
                                    placeholder="Practice Year" 
                                    @handleChange="handlePracticeYearChange"
                                />
                            </div>
                            <div class="col ">
                                <SelectDropdown 
                                    v-model="body.statusId" 
                                    :items="status" 
                                    placeholder="Status" 
                                    @handleChange="handleStatusChange"
                                />
                            </div>
                            <div class="col  pr-2">
                                <SelectDropdown 
                                    v-model="body.frequencyId" 
                                    :items="frequencies" 
                                    placeholder="Frequency" 
                                    @handleChange="handleFrequencyChange"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="kpis-search">
                <div class="row justify-content-between my-3">
                    <div class="col-8 ">
                        <el-input class="input-search" v-model="body.keyword" placeholder="Please Input">
                            <template #prefix>
                                <!-- svg icon here -->
                            </template>
                        </el-input>
                    </div>
                    <div class="col-auto">
                        <div class="btn-group">
                            <div class="row">
                                <div class="col-6">
                                    <el-button type="primary">Search</el-button></div>
                                <div class="col-6">
                                    <Nuxt-link to="create"> 
                                        <el-button class="btn-primary px-8" plaint>Create new</el-button>
                                    </Nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <DataTable 
                        row-key="id"
                        :tableData="kpis"
                        :columns="columns"
                        :treeProps="({children: 'children'})"
                        :selectable="selectable"
                        :btnActionItems="btnActionItems"
                        @actionDelete="handleActionDelete"
                        @actionView="handleActionView"
                    >
                    </DataTable>
                    <div class="kpi-pagination my-2 float-right">
                        <Pagination 
                            :current-page="currentPage"
                            :pageSize="pageSize"
                            :total="kpis.length"
                            @handleSizeChange="handleSizeChange"
                            @handleCurrentChange="handleCurrentChange"
                        ></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        margin-block-end: 0 !important;
    }
    .rounded-border {
        border-radius: 4px;
    }
    .el-input {
        height: 3.2rem;
        color: #000;
    }
    :deep(.input-search .el-input__wrapper) {
        height: 100%;
    }
    :deep(.el-input__inner::placeholder) {
        color: #000
    }
    :deep(.el-input__wrapper) {
        background-color: #F8F8F8 !important;
        border-radius: 8px;
        border: none;
    }
    .btn-group {
        height: 100%;
    }
    .el-button {
        height: 100%;
        width: 100%
    }
    .kpis-search {
        /* margin-top: -26px; */
    }
</style>
