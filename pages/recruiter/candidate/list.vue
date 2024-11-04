<script lang="ts">
    import * as kpiData from '@/data/dashboards/kpis.js';
    import auth from '@/middleware/auth';
    import PageHeader from "@/components/common/pageheader.vue";
    import SelectDropdown from '~/components/common/selectDropdown.vue';
    import DataTable from '~/components/common/datatable.vue';
    import Pagination from '~/components/common/pagination.vue';
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
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
                    current: this.$t('framework'),
                    list: [this.$t('dashboard'), this.$t('framework')],
                },
                testStore: reactive(useTestStore()),
                kpiData: kpiData,
                filter: {
                    ministryId: "",
                    frameworkId: "",
                    kpiLevelId: "",
                    practiceYearId: "",
                    statusId: "",
                    frequencyId: "",
                    keyword: null,
                },                
                ministries: kpiData.ministries.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                frameworks: kpiData.frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                kpi_levels: kpiData.kpi_levels.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                practice_year: kpiData.practice_year.map(item => ({ id: item.id, label: item.year.toString(), value: item.id })),
                status: kpiData.status.map(item => ({ id: item.id, label: item.status, value: item.status })),
                situations: kpiData.situations.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                frequencies: kpiData.frequencies.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                tableData: [] as Array<any>,
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
                        link: '/recruiter/client/update'
                    },
                    showView: {
                        type: true,
                        link: '/client/kpi/view'
                    },
                    showDelete: true,
                },
                columns: [ // column header and prop for table
                    { prop: 'code', label: this.$t('title_name.code_title'), sortable: true },
                    { prop: 'frameworkNameKh', label: this.$t('title_name.name_title'), sortable: true, width: '400px' },
                    // { prop: 'duration', label: this.$t('title_name.duration'), width: '125px' },
                    { prop: 'status', label: this.$t('title_name.status_title'), useTag: true}
                ],
                currentPage: 1,
                pageSize: 10,
            }
        },
        mounted() {
            this.tableData = this.testStore.frameworks;
        },
        methods: {
            handleSearch() {
                return this.tableData = this.testStore.searchBy(this.filter.keyword);
            },
            handlePracticeYearChange(value: string | number) {
                // return this.tableData = this.testStore.filterFrameworkBy(this.filter.keyword)
            },
            handleStatusChange(value: string | number) {
                if (value === undefined) {
                    this.tableData = this.testStore.frameworks;
                } else {
                    this.tableData = this.testStore.filterFrameworkBy(value)
                }
                console.log(this.tableData)
            },
            handleFrequencyChange(value: string | number) {
                // return this.tableData = this.testStore.filterFrameworkBy(this.filter.keyword)
            },
            selectable(row: any) {
                return row.id !== null;
            },
            handleSelectionChange(selectedRows: any) {
                console.log(selectedRows);
            },
            handleActionDelete(row: any) {
                // this.testStore.deleteFramework(row.id)
                this.tableData = this.tableData.filter(item => item.id !== row.id);
                // console.log(this.tableData[0].id === row.id)
                return toast(this.t('validation.success'), {
                    dangerouslyHTMLString: true,
                    type: 'success',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    transition: 'bounce',
                    position: 'top-right',
                });
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
            <div class="card">
                <div class="card-body">
                    <div class="kpis-search">
                        <div class="row justify-content-between">
                            <div class="col-5">
                                <el-input class="input-search" v-model="filter.keyword" placeholder="Please Input">
                                    <template #prefix>
                                        <!-- svg icon here -->
                                    </template>
                                </el-input>
                            </div>
                            <div class="col">
                                <SelectDropdown
                                    :required="true"
                                    v-model="filter.practiceYearId" 
                                    :items="practice_year" 
                                    placeholder="Practice Year" 
                                    @handleChange="handlePracticeYearChange"
                                />
                            </div>
                            <div class="col">
                                <SelectDropdown
                                    :required="true"
                                    v-model="filter.statusId" 
                                    :items="status" 
                                    placeholder="Status" 
                                    @handleChange="handleStatusChange"
                                />
                            </div>
                            <div class="col">
                                <SelectDropdown 
                                    :required="true"
                                    v-model="filter.frequencyId" 
                                    :items="frequencies" 
                                    placeholder="Frequency" 
                                    @handleChange="handleFrequencyChange"
                                />
                            </div>
                            <div class="col-auto">
                                <div class="btn-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <el-button type="primary" @click="handleSearch">Search</el-button></div>
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
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <DataTable 
                        row-key="id"
                        :tableData="tableData"
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
                            :total="tableData.length"
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
    .kpis-filter {
        background-color: #f8f8f8;
        padding: 12px;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
    }
    .rounded-border {
        border-radius: 4px;
    }
    .el-input { 
        color: #000;
    }
    :deep(.el-input__inner::placeholder) {
        color: #000
    }
    :deep(.el-input__wrapper) {
        background-color: #F8F8F8 !important;
        border-radius: 8px;
        border: none;
    }
    .el-button {
        height: 36px;
        width: 100%
    }
</style>
