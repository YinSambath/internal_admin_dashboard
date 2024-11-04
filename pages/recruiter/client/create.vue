<script lang="ts">
    import { defineComponent, reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import auth from '@/middleware/auth';
    import * as kpiData from '@/data/dashboards/kpis.js';
    import progressStepTitle from '~/components/common/progressStepTitle.vue';
    import PageHeader from "@/components/common/pageheader.vue";
    import SelectDropdown from '~/components/common/selectDropdown.vue';
    import InputText from '~/components/common/inputText.vue';
    import InputNumber from '~/components/common/inputNumber.vue';
    import DataTable from '~/components/common/datatable.vue';
    import Pagination from '~/components/common/pagination.vue';
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
    import { useTestStore } from '~/stores/modules/test'
    export default defineComponent({
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
            SelectDropdown,
            InputText,
            InputNumber,
            PageHeader,
            progressStepTitle,
            DataTable,
            Pagination
        },
        data() {
            return {
                dataToPass: {
                    current: this.$t('create_kpi'),
                    list: [this.$t('dashboards'), this.$t('indicator_kpi'), this.$t('create_kpi')],
                },
                testStore: useTestStore(),
                steps: [
                    { title: 'KPI-Form' },
                    { title: 'Calculation Methodology' },
                ],
                calculationForm: false,
                activeStep: 0,
                kpiData: kpiData,
                frameworks: kpiData.frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                logical_frameworks: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                frequencies: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                resources: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                types: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                ministries: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                practiceYears: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                groups: kpiData.logical_frameworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id })),
                parents: [] as Array<any>,
                body: {
                    id: 0,
                    code: 'ACT00',
                    frameworkId: '',
                    logicalFrameworkId: '',
                    nameKh: '',
                    nameEn: '',
                    weight: 'Test',
                    frequencyId: 1,
                    resourceId: 1,
                    typeId: 1,
                    ministryLeadId: 1,
                    ministry: [] as Array<any>,
                    practiceYearID: 1,
                    groupId: 1,
                    parentId: 1,
                    calculationMethod: false,
                    dependance: false,
                    numberVariable: [] as Array<any>,
                    formular: '',
                    status: "In processing", 
                    children: []
                },
                numberVariable: [
                    {
                        name: '',
                        as: 'X1',
                        minVal: '',
                        maxVal: ''
                    },
                    {
                        name: '',
                        as: 'X2',
                        minVal: '',
                        maxVal: ''
                    }
                ],
                tableData: kpiData.kpis,
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
                        link: '/framework/kpi/update'
                    },
                    showView: {
                        type: true,
                        link: '/framework/kpi/view'
                    },
                    showDelete: true,
                },
                columns: [ // column header and prop for table
                    { prop: 'code', label: this.$t('title_name.code_title'), sortable: true },
                    { prop: 'nameKh', label: this.$t('title_name.name_title'), sortable: true, width: '400px' },
                    { prop: 'groupId', label: this.$t('title_name.group'), width: '75px' },
                    { prop: 'status', label: this.$t('title_name.status_title'), useTag: true}
                ],
                formular: '',
                currentPage: 1,
                pageSize: 10,
                selectedValue: '',
                selectError: '',
                errors: {} as { [key: string]: string },
                errorsCalculation: {} as { [key: string]: string },
                kpis: [] as Array<any>
            };
        },
        mounted() {
            this.ministries = this.testStore.ministries.map(item => ({ id: item.id, label: item.nameKh, value: item.id }));
            this.logical_frameworks = this.testStore.logicalFramworks.map(item => ({ id: item.id, label: item.nameKh, value: item.id }));
            this.frameworks = this.testStore.frameworks.map(item => ({ id: item.id, label: item.frameworkNameKh, value: item.id }));
            this.kpis = this.testStore.listKpis();
            this.parents = this.kpis.map(item => ({ id: item.id, label: item.id + ". " + item.nameKh, value: item.id }));
        },
        methods: {
            handleSelectFramework() {
                this.body.logicalFrameworkId = '';
                if (this.body.frameworkId) {
                    const frameworkIndex = this.frameworks.findIndex(item => +item.id === +this.body.frameworkId);
                    this.logical_frameworks = this.testStore.geLogicalFramework(frameworkIndex).map((item: any) => ({ id: item.id, label: item.nameKh, value: item.id }));
                } else {
                    this.logical_frameworks = this.testStore.logicalFramworks.map((item: any) => ({ id: item.id, label: item.nameKh, value: item.id }));
                }
            },
            handleSelectParent() {},
            handleRemoveVariable(index: number) {
                this.numberVariable.splice(index, 1);
                for (let i=0; i<=this.numberVariable.length-1; i++) {
                    this.numberVariable[i].as = 'X' + (i+1)
                }
            },
            handleAddVariable(index: number) {
                const newVariable = {
                    name: '',
                    as: 'X' + (index + 2),
                    minVal: '',
                    maxVal: ''
                };
                this.numberVariable.push({
                    ...newVariable
                })
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
            handleNextAction() {
                let validateMsg = this.validateForm;
                if (this.body.calculationMethod) { // check if calculation is checked?
                    if (this.activeStep + 1 <= this.steps.length - 1) { // switch step progress
                        this.activeStep += 1;
                    }
                    this.calculationForm = true;
                } else {
                    if (validateMsg === 'ok' ) { // check validation for main form 
                        this.body.id = this.kpis.length + 1;
                        this.testStore.createKpi(this.body)
                        return toast(this.t('validation.create_success'), {
                            dangerouslyHTMLString: true,
                            type: 'success',
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            transition: 'bounce',
                            position: 'top-right',
                        });
                    } else {
                        return toast(this.t('main_dashboard'), {
                            dangerouslyHTMLString: true,
                            type: 'error',
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            transition: 'bounce',
                            position: 'top-right',
                        });
                    }
                }
            },
            handleOnCreate() {
                let validateMsg = this.validateForm;
                let validateCalculationMsg = this.validateCalculation;
                if (validateCalculationMsg === 'ok' && validateMsg === 'ok') { // check validation for calculation form input
                    this.body.id = this.kpis.length + 1;
                    this.body.code = this.body.code + (this.kpis.length + 1);
                    this.body.numberVariable = this.numberVariable;
                    this.testStore.createKpi(this.body)
                    return toast(this.t('validation.create_success'), {
                        dangerouslyHTMLString: true,
                        type: 'success',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        transition: 'bounce',
                        position: 'top-right',
                    });
                } else {
                    return toast(this.t('validation.required'), {
                        dangerouslyHTMLString: true,
                        type: 'error',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        transition: 'bounce',
                        position: 'top-right',
                    });
                }
            },
        },
        computed: {
            validateForm() {
                this.errors = {};
                if (!this.body.frameworkId) this.errors.frameworkId = this.t('validation.required');
                if (!this.body.logicalFrameworkId) this.errors.logicalFrameworkId = this.t('validation.required');
                if (!this.body.nameKh) this.errors.nameKh = this.t('validation.required');
                if (!this.body.nameEn) this.errors.nameEn = this.t('validation.required');
                if (!this.body.weight)  this.errors.weight = this.t('validation.required');
                if (!this.body.ministry[0]) this.errors.ministry = this.t('validation.required');
                if (!this.body.ministryLeadId) this.errors.ministryLead = this.t('validation.required');
                if (!this.body.typeId) this.errors.typeId = this.t('validation.required');
                if (!this.body.resourceId) this.errors.resource = this.t('validation.required');
                if (!this.body.frequencyId) this.errors.frequency = this.t('validation.required');
                if (!this.body.groupId) this.errors.group = this.t('validation.required');
                if (!this.body.practiceYearID) this.errors.practiceYear = this.t('validation.required');
                if (Object.keys(this.errors).length === 0) {
                    return "ok";
                }
            },
            validateCalculation() {
                this.errorsCalculation = {};
                if (!this.body.formular) this.errorsCalculation.formular = this.t('validation.required');
                this.numberVariable.forEach((item, index) => {
                    if (!item.name) this.errorsCalculation[`variable` + (index+1)] = this.t('validation.required')
                })
                if (Object.keys(this.errorsCalculation).length === 0) {
                    return "ok";
                }
            }
        },
        updated() {
            console.log("Page/component re-rendered!");
        },
    });
</script>
<template>
    <PageHeader :propData="dataToPass" />
    <div class="row">
        <div class="card">
            <div class="card-body">
                <div class="col-12">
                    <div class="framework-section">
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <div class="frame-work-input">
                                    <SelectDropdown
                                        :required="true"
                                        :labelField="t('title_name.framework_title')"
                                        v-model="body.frameworkId" 
                                        :items="frameworks" 
                                        :placeholder="`${t('placeholder.select_placeholder')}`" 
                                        @handleChange="handleSelectFramework()"
                                    />
                                    <div class="error-validation" v-if="errors.logicalFrameworkId">{{ errors.logicalFrameworkId }}</div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="frame-work-input">
                                    <SelectDropdown
                                        :required="true"
                                        :labelField="t('title_name.logical_framework_title')"
                                        v-model="body.logicalFrameworkId" 
                                        :items="logical_frameworks" 
                                        :placeholder="`${t('placeholder.select_placeholder')}`"
                                    />
                                    <div class="error-validation" v-if="errors.logicalFrameworkId">{{ errors.logicalFrameworkId }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="kpi-form mb-3">
                        <div class="row">
                            <div class="col-12">
                                <div class="stepper mx-auto">
                                    <progressStepTitle
                                        :steps="steps"
                                        :activeStep="activeStep"
                                    ></progressStepTitle>
                                </div>
                            </div>
                            <div class="switch-class" v-if="!calculationForm">
                                <div class="row">
                                    <div class="col-md-12 col-lg-6">
                                        <div class="frame-work-input">
                                            <InputText 
                                                :required="true"
                                                v-model="body.nameKh"
                                                :labelField="t('title_name.kh_name')"
                                            ></InputText>
                                            <div class="error-validation" v-if="errors.nameKh">{{ errors.nameKh }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="frame-work-input">
                                            <InputText 
                                                :required="true"
                                                v-model="body.nameEn"
                                                :labelField="t('title_name.en_name')"
                                            ></InputText>
                                            <div class="error-validation" v-if="errors.nameEn">{{ errors.nameEn }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true" 
                                                :labelField="t('title_name.frequency_title')"
                                                v-model="body.frequencyId" 
                                                :items="frequencies" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`"
                                            />
                                            <div class="error-validation" v-if="errors.frequencyId">{{ errors.logicalFrameworkId }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <InputText 
                                                :required="true"
                                                v-model="body.weight"
                                                :labelField="t('title_name.weight_title')"
                                            ></InputText>
                                            <div class="error-validation" v-if="errors.weight">{{ errors.weight }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true" 
                                                :labelField="t('title_name.resource_title')"
                                                v-model="body.resourceId" 
                                                :items="resources" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`"
                                            />
                                            <div class="error-validation" v-if="errors.resourceId">{{ errors.resourceId }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true" 
                                                :labelField="t('title_name.type_title')"
                                                v-model="body.typeId" 
                                                :items="types" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`"
                                            />
                                            <div class="error-validation" v-if="errors.typeId">{{ errors.typeId }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true"
                                                :labelField="t('title_name.ministry_lead_title')"
                                                v-model="body.ministryLeadId" 
                                                :items="ministries" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`"
                                            />
                                            <div class="error-validation" v-if="errors.ministryLeadId">{{ errors.ministryLeadId }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true"
                                                :labelField="t('title_name.line_ministry')"
                                                v-model="body.ministry" 
                                                :items="ministries" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`" 
                                                :multiple="true"
                                            />
                                            <div class="error-validation" v-if="errors.ministry">{{ errors.ministry }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true"
                                                :labelField="t('title_name.operation_year_title')"
                                                v-model="body.practiceYearID" 
                                                :items="practiceYears" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`"
                                            />
                                            <div class="error-validation" v-if="errors.practiceYearID">{{ errors.practiceYearID }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="true"
                                                :labelField="t('title_name.group_title')"
                                                v-model="body.groupId" 
                                                :items="groups" 
                                                :placeholder="t('placeholder.select_placeholder')" 
                                            />
                                            <div class="error-validation" v-if="errors.konsormId">{{ errors.konsormId }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <el-checkbox v-model="body.dependance">{{ t('title_name.dependance_title') }}</el-checkbox>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-3">
                                        <div class="frame-work-input">
                                            <el-checkbox v-model="body.calculationMethod">{{ t('title_name.calculation_method_title') }}</el-checkbox>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <div class="frame-work-input">
                                            <SelectDropdown
                                                :required="false"
                                                :labelField="t('title_name.parent_title')"
                                                v-model="body.parentId" 
                                                :items="parents" 
                                                :placeholder="`${t('placeholder.select_placeholder')}`"
                                                @handleChange="handleSelectParent()"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="calculation-methodology" v-else>
                                <div class="row">
                                    <div class="col-12" v-for="(variable, index) in numberVariable" :key="index">
                                        <div class="frame-work-input">
                                            <div class="row">
                                                <label class="label-variable col-xs-12 col-md-2"> {{ t('title_name.variable') }} ({{ variable.as }}) : </label>
                                                <div class="col-xs-12 col-md-10 col-lg-6">
                                                    <div class="name-section">
                                                        <InputText class="flex-grow-1" 
                                                        :required="true"
                                                            v-model="variable.name"
                                                        ></InputText>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-md-10 col-lg-4">
                                                    <div class="min-max-section row justify-content-center align-items-center gap-2">
                                                        <div class="col-5">
                                                            <InputNumber
                                                                class="min-max"
                                                                :required="true"
                                                                v-model="variable.minVal"
                                                                :placeholder="`min-Val`"
                                                            ></InputNumber>
                                                        </div>
                                                        <div class="col-auto">
                                                            <label class="label-variable"> - </label>
                                                        </div>
                                                        <div class="col-5">
                                                            <InputNumber
                                                                class="min-max"
                                                                :required="true"
                                                                v-model="variable.maxVal"
                                                                :placeholder="`max-Val`"
                                                            ></InputNumber>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <el-button class="btn-add-remove" v-if="(index !== 0) && (index !== numberVariable.length - 1)" @click="handleRemoveVariable(index)">-</el-button>
                                            <el-button class="btn-add-remove" v-if="index === numberVariable.length - 1" @click="handleAddVariable(index)">+</el-button>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-xs-12 col-md-2">
                                                <label class="label-variable "> Formular: </label>
                                            </div>
                                            <div class="col-xs-12 col-md-6">
                                                    <div class="name-section">
                                                        <InputText 
                                                            :required="true"
                                                            class="formular-input"
                                                            v-model="body.formular"
                                                        ></InputText>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="btn-section float-right">
                            <el-button v-if="calculationForm === false" @click="handleNextAction" type="success" class="btn-create">{{ t('page_btn.next_btn') }}</el-button>
                            <el-button v-if="calculationForm" @click="calculationForm = false" type="info" class="btn-create">Back</el-button>
                            <el-button v-if="calculationForm" @click="handleOnCreate" type="success" class="btn-create">Create</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="col-12">
                    <DataTable 
                        row-key="id"
                        :tableData="kpis"
                        :columns="columns"
                        :treeProps="({children: 'children'})"
                        :selectable="selectable"
                        :btnActionItems="btnActionItems"
                        @selection-change=""
                        @actionDelete="handleActionDelete"
                        @actionView="handleActionView"
                    >
                    </DataTable>
                    <div class="kpi-pagination my-4 float-right">
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
    .kpi-form {
        background-color: #ECF5FB;
        padding: 0 12px 12px;
        border-radius: 8px;
    }
    .calculation-methodology {
        background-color: #ECF5FB;
        padding: 0 24px;
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .frame-work-input {
        margin: 12px 0;
        position: relative;
    }
    .btn-create {
        padding: 8px 48px !important;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .label-variable {
        white-space: nowrap;
        word-break: unset;
        align-self: center;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
        line-height: 36px;
    }
    :deep(.formular-input .el-input__wrapper) {
        height: 150px;
    }
    .btn-add-on-section {
        margin-right: -35px;
    }
    .btn-add-remove {
        width: 35px;
        height: 36px;
        position: absolute;
        top: 0;
        right: -40px;
    }
    :deep(.min-max .el-input__wrapper) {
        padding-right: 10px;
    }
    .error-validation {
        color: red;
    }
    @media screen and (width > 768px) {
        .stepper {
            max-width: 75%;
        }
    }
    @media screen and (width > 1200px) {
        .calculation-methodology {
            max-width: 85%;
        }
    }
</style>
  