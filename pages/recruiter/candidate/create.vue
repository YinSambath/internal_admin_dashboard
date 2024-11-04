<script lang="ts">
    import { defineComponent, reactive } from 'vue';
    import auth from '@/middleware/auth';
    import * as kpiData from '@/data/dashboards/kpis.js';
    import PageHeader from "@/components/common/pageheader.vue";
    import InputText from '~/components/common/inputText.vue';
    import InputNumber from '~/components/common/inputNumber.vue';
    import DateRangePicker from "@/components/common/dateRangePicker.vue";
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
    import { CircleCheckFilled } from '@element-plus/icons-vue';
    import { useTestStore } from '~/stores/modules/test'
    export default {
        setup() {
            const { t } = useI18n();
            definePageMeta({
                middleware: [auth],
            });
            return {
                t,
            };
        },
        components: {
            InputText,
            InputNumber,
            PageHeader,
            DateRangePicker,
            CircleCheckFilled
        },
        data() {
            return {
                dataToPass: {
                    current: this.$t('create_framework'),
                    list: [this.$t('dashboard'), this.$t('framework'), this.$t('create_framework')],
                },
                testStore: reactive(useTestStore()),
                kpiData: kpiData,
                operationyear: "",
                body: {
                    id: 0,
                    code: 'PS-P',
                    frameworkNameEn: '',
                    frameworkNameKh: '',
                    moto: '',
                    kp: '',
                    stategic_goal: '',
                    start_year: '', 
                    end_year: '',
                    approach: '',
                    status: 'in processing',
                    line_ministry: {
                        id: 4,
                        nameEn: 'FSA',
                        nameKh: 'អ.ស.ហ',
                        url: 'https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png'
                    },
                    logicalFramework: [] as Array<any>
                },
                errors: {} as { [key: string]: string },
            };
        },
        methods: {
            onChangeYear() {
                if (this.operationyear) {
                    this.body.start_year = this.operationyear[0];
                    this.body.end_year = this.operationyear[1];
                }
            },
            submitForm() {
                // console.log(this.body.logicalFramework)
                let validateMsg = this.validateForm;
                if (validateMsg === 'ok') {
                    this.body.id = this.testStore.frameworks.length + 1;
                    this.body.code = this.body.code + (this.testStore.frameworks.length + 1);
                    const respond = this.testStore.createFramework(this.body);
                    if (respond === 'ok') {
                        // clear form
                        this.body = {
                            id: 0,
                            code: 'PS-P',
                            frameworkNameEn: '',
                            frameworkNameKh: '',
                            moto: '',
                            kp: '',
                            stategic_goal: '',
                            start_year: '',
                            end_year: '',
                            approach: '',
                            status: 'in processing',
                            line_ministry: {
                                id: 4,
                                nameEn: 'FSA',
                                nameKh: 'អ.ស.ហ',
                                url: 'https://fintech.fsa.gov.kh/img/regulatorV1/fsa-logo.png'
                            },
                            logicalFramework: [] as Array<any>
                        },
                        toast(this.t('validation.success'), {
                            dangerouslyHTMLString: true,
                            type: 'success',
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            transition: 'bounce',
                            position: 'top-right',
                        });
                    } else {
                        toast(this.t('validation.create_failed'), {
                            dangerouslyHTMLString: true,
                            type: 'error',
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            transition: 'bounce',
                            position: 'top-right',
                        });
                    }
                } else {
                    toast(this.t('validation.required'), {
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
            logicalFrameworks() {
                return this.testStore.logicalFramworks;
            },
            frameworks() {
                return this.testStore.frameworks;
            },
            validateForm() {
                this.errors = {};
                if (!this.body.frameworkNameKh) this.errors.frameworkNameKh = this.t('validation.required');
                if (!this.body.frameworkNameEn) this.errors.frameworkNameEn = this.t('validation.required');
                if (!this.body.moto) this.errors.moto = this.t('validation.required');
                if (!this.body.kp) this.errors.kp = this.t('validation.required');
                if (!this.body.stategic_goal)  this.errors.stategic_goal = this.t('validation.required');
                // if (!this.body.start_year) this.errors.start_year = this.t('validation.required');
                if (!this.operationyear) this.errors.operationyear = this.t('validation.required');
                if (!this.body.approach) this.errors.approach = this.t('validation.required');
                if (!this.body.logicalFramework[0]) this.errors.logicalFramework = this.t('validation.required');

                if (Object.keys(this.errors).length === 0) {
                    return "ok";
                }
            }
        }
    };
</script>
<template>
    <PageHeader :propData="dataToPass" />
        <div class="framework-section">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="frame-work-input">
                                <InputText
                                    :required="true" 
                                    v-model="body.frameworkNameKh"
                                    :labelField="t('title_name.khmer_name_title')"
                                ></InputText>
                                <div class="error-validation" v-if="errors.frameworkNameKh">{{ errors.frameworkNameKh }}</div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="frame-work-input">
                                <InputText
                                    :required="true" 
                                    v-model="body.frameworkNameEn"
                                    :labelField="t('title_name.english_name_title')"
                                ></InputText>
                                <div class="error-validation" v-if="errors.frameworkNameEn">{{ errors.frameworkNameEn }}</div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="frame-work-input">
                                <InputText
                                    :required="true" 
                                    v-model="body.moto"
                                    :labelField="t('title_name.moto_title')"
                                ></InputText>
                                <div class="error-validation" v-if="errors.moto">{{ errors.moto }}</div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="frame-work-input">
                                <InputText
                                    :required="true" 
                                    v-model="body.kp"
                                    :labelField="t('title_name.key_priority_title')"
                                ></InputText>
                                <div class="error-validation" v-if="errors.kp">{{ errors.kp }}</div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="frame-work-input">
                                <InputText
                                    :required="true" 
                                    v-model="body.stategic_goal"
                                    :labelField="t('title_name.stategic_goal_title')"
                                ></InputText>
                                <div class="error-validation" v-if="errors.stategic_goal">{{ errors.stategic_goal }}</div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="frame-work-input">
                                <label class="label-input-form"> {{ t('title_name.operation_year_title') }} <span style="color: red;">*</span> </label>
                                <el-date-picker
                                    v-model="operationyear"
                                    value-format="YYYY"
                                    @change="onChangeYear"
                                    type="yearrange"
                                    range-separator="To"
                                    :start-placeholder="t('title_name.start_year_title')"
                                    :end-placeholder="t('title_name.end_year_title')"
                                />
                                <div class="error-validation" v-if="errors.operationyear">{{ errors.operationyear }}</div>

                                <!-- <div class="frame-work-input">
                                <InputNumber
                                    :required="true" 
                                    v-model="body.start_year"
                                    :labelField="t('title_name.start_year_title')"
                                ></InputNumber>
                                <div class="error-validation" v-if="errors.start_year">{{ errors.start_year }}</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-3">
                            <div class="frame-work-input">
                                <div class="frame-work-input">
                                    <InputNumber
                                        :required="true" 
                                        v-model="body.end_year"
                                        :labelField="t('title_name.end_year_title')"
                                    ></InputNumber>
                                    <div class="error-validation" v-if="errors.end_year">{{ errors.end_year }}</div>
                                </div> -->
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="frame-work-input">
                                <InputText
                                    :required="true" 
                                    v-model="body.approach"
                                    :labelField="t('title_name.approach_title')"
                                ></InputText>
                                <div class="error-validation" v-if="errors.approach">{{ errors.approach }}</div>
                            </div>
                        </div>
                        <div class="col-12">
                            <h4>
                                {{ t('title_name.logical_framework_selection_title') }} 
                            </h4>
                            <span class="error-validation" v-if="errors.logicalFramework">
                                {{ errors.logicalFramework }}
                            </span>
                        </div>
                        <div class="col-12">
                            <el-checkbox-group v-model="body.logicalFramework" class="select-logical-container d-flex flex-wrap justify-content-between">
                                <div class="card" v-for="item in logicalFrameworks" :key="item.id">
                                    <div class="card-body" style="border-radius: 16px; box-shadow: 2px 4px 16px rgba(0,0,0,.08);">
                                        <div class="d-flex flex-row justify-content-between align-items-center h-100 px-3">
                                            <div class="fs-14 fw-bold">
                                            <el-checkbox :label="item.nameEn" :value="item.id"></el-checkbox>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-checkbox-group>
                        </div>
                        <div class="col-12">
                            <div class="btn-section float-right">
                                <el-button @click="" type="danger" class="btn-create">{{ t('page_btn.cancel_btn') }}</el-button>
                                <el-button @click="submitForm" type="success" class="btn-create">{{ t('page_btn.request_btn') }}</el-button>
                            </div>
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
    }
    .frame-work-input {
        margin-bottom: 12px;
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
    .select-logical-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 60px;
        padding: 15px 0 0 0;
    }

    .select-logical-container .card {
        cursor: pointer;
        height: 50px;
        margin: 0;
        border-radius: 16px;
        flex: 1 1 calc(33.33% - 60px); 
    }
    .select-logical-container .card-body {
        padding: 0
    }
    .error-validation {
        color: red;
    }
    :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
    }
    :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
        color: var(--primary-color);
    }

</style>
  