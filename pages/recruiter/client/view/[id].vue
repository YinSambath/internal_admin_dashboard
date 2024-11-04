<script lang="ts">
    import auth from '@/middleware/auth';
    import PageHeader from "@/components/common/pageheader.vue";
    import { useTestStore } from '~/stores/modules/test';
    const route = useRoute();
    const kpiId = route.params.id;
    interface kpi {
        calculationMethod: boolean,
        children: Array<children>,
        code: string,
        dependance: string,
        formular: string,
        framworkId: number,
        frequencyId: number,
        groupId: number,
        id: number,
        logicalFrameworkId: number,
        ministry: [],
        ministryLead: {},
        nameEn: string,
        nameKh: string,
        status: string,
        weight: string,
        typeId: number,
    }
    interface children extends kpi {
        problem: string,
        solution: string,
        recommandation: string
    }
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
                testStore: reactive(useTestStore()),
                kpi: {} as kpi,
                children: {} as children
            }
        },
        mounted () {
            let kpi = this.testStore.getKpi(+kpiId);
            this.kpi = kpi;
            this.handleSwitchChildren(kpi.children[0].id)
        },
        methods: {
            handleSwitchChildren(id: number) {
               this.children = this.kpi.children.find(x => x.id === id) as children;
               console.log(this.kpi)
            }
        },
        computed: {}
    };
</script>
<template>
    <PageHeader :propData="dataToPass" />
    <div class="card">
        <div class="card-body">
            <div class="row py-3 px-4">
                <div class="col-lg-4">
                    <div class="title-header">
                        <h5>សេចក្តីលម្អិត</h5>
                    </div>
                    <h6><b> {{ kpi.id + `. ` + kpi.nameEn}}</b></h6>
                    <div class="left-content">
                        <div class="d-flex align-items-center gap-1 mb-1">
                            <h6 class="m-0 font-weight-bold">{{ t('title_name.price_title') }}:</h6>
                            <svg width="20" height="20" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.525 18.6875L5.8625 15.8875L2.7125 15.1875L3.01875 11.95L0.875 9.5L3.01875 7.05L2.7125 3.8125L5.8625 3.1125L7.525 0.3125L10.5 1.58125L13.475 0.3125L15.1375 3.1125L18.2875 3.8125L17.9812 7.05L20.125 9.5L17.9812 11.95L18.2875 15.1875L15.1375 15.8875L13.475 18.6875L10.5 17.4187L7.525 18.6875ZM8.26875 16.4562L10.5 15.4937L12.775 16.4562L14 14.3562L16.4062 13.7875L16.1875 11.3375L17.8062 9.5L16.1875 7.61875L16.4062 5.16875L14 4.64375L12.7312 2.54375L10.5 3.50625L8.225 2.54375L7 4.64375L4.59375 5.16875L4.8125 7.61875L3.19375 9.5L4.8125 11.3375L4.59375 13.8313L7 14.3562L8.26875 16.4562ZM9.58125 12.6062L14.525 7.6625L13.3 6.39375L9.58125 10.1125L7.7 8.275L6.475 9.5L9.58125 12.6062Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div class="left-content">
                        <div class="d-flex align-items-center gap-1 mb-1">
                            <h6 class="m-0 font-weight-bold">{{ t('title_name.problem_title') }}:</h6>
                            <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99992 14.3233C10.236 14.3233 10.4339 14.2435 10.5937 14.0837C10.7534 13.924 10.8333 13.7261 10.8333 13.49C10.8333 13.2539 10.7534 13.056 10.5937 12.8962C10.4339 12.7365 10.236 12.6567 9.99992 12.6567C9.76381 12.6567 9.56589 12.7365 9.40617 12.8962C9.24645 13.056 9.16659 13.2539 9.16659 13.49C9.16659 13.7261 9.24645 13.924 9.40617 14.0837C9.56589 14.2435 9.76381 14.3233 9.99992 14.3233ZM9.16659 10.99H10.8333V5.98999H9.16659V10.99ZM9.99992 19.5733L7.20825 16.8233H3.33325V12.9483L0.583252 10.1567L3.33325 7.36499V3.48999H7.20825L9.99992 0.73999L12.7916 3.48999H16.6666V7.36499L19.4166 10.1567L16.6666 12.9483V16.8233H12.7916L9.99992 19.5733ZM9.99992 17.24L12.0833 15.1567H14.9999V12.24L17.0833 10.1567L14.9999 8.07332V5.15666H12.0833L9.99992 3.07332L7.91659 5.15666H4.99992V8.07332L2.91659 10.1567L4.99992 12.24V15.1567H7.91659L9.99992 17.24Z" fill="black"/>
                            </svg>
                        </div>
                        <div class="text-content">
                            <p class="text-content">{{ children.problem }}</p>
                        </div>
                    </div>
                    <div class="left-content">
                        <div class="d-flex align-items-center gap-1 mb-1">
                            <h6 class="m-0 font-weight-bold">{{ t('title_name.solution_title') }}:</h6>
                            <svg width="17" height="20" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875 18.2739V14.7739C0.875 14.2781 1.04635 13.8625 1.38906 13.5271C1.73177 13.1916 2.14375 13.0239 2.625 13.0239H5.49062C5.78229 13.0239 6.05937 13.0968 6.32188 13.2427C6.58437 13.3885 6.79583 13.5854 6.95625 13.8333C7.37917 14.4021 7.90052 14.8468 8.52031 15.1677C9.1401 15.4885 9.8 15.6489 10.5 15.6489C11.2146 15.6489 11.8818 15.4885 12.5016 15.1677C13.1214 14.8468 13.6354 14.4021 14.0437 13.8333C14.2333 13.5854 14.4557 13.3885 14.7109 13.2427C14.9661 13.0968 15.2323 13.0239 15.5094 13.0239H18.375C18.8708 13.0239 19.2865 13.1916 19.6219 13.5271C19.9573 13.8625 20.125 14.2781 20.125 14.7739V18.2739H14V16.2833C13.4896 16.6479 12.9391 16.925 12.3484 17.1146C11.7578 17.3041 11.1417 17.3989 10.5 17.3989C9.87292 17.3989 9.26042 17.3005 8.6625 17.1036C8.06458 16.9067 7.51042 16.626 7 16.2614V18.2739H0.875ZM10.5 14.7739C9.94583 14.7739 9.42083 14.6463 8.925 14.3911C8.42917 14.1359 8.01354 13.7823 7.67812 13.3302C7.43021 12.9656 7.12031 12.6776 6.74844 12.4661C6.37656 12.2547 5.97187 12.1489 5.53437 12.1489C5.85521 11.6093 6.53333 11.1828 7.56875 10.8692C8.60417 10.5557 9.58125 10.3989 10.5 10.3989C11.4187 10.3989 12.3958 10.5557 13.4312 10.8692C14.4667 11.1828 15.1448 11.6093 15.4656 12.1489C15.0427 12.1489 14.6417 12.2547 14.2625 12.4661C13.8833 12.6776 13.5698 12.9656 13.3219 13.3302C13.001 13.7968 12.5927 14.1541 12.0969 14.4021C11.601 14.65 11.0687 14.7739 10.5 14.7739ZM3.5 12.1489C2.77083 12.1489 2.15104 11.8937 1.64062 11.3833C1.13021 10.8729 0.875 10.2531 0.875 9.52393C0.875 8.78018 1.13021 8.15674 1.64062 7.65361C2.15104 7.15049 2.77083 6.89893 3.5 6.89893C4.24375 6.89893 4.86719 7.15049 5.37031 7.65361C5.87344 8.15674 6.125 8.78018 6.125 9.52393C6.125 10.2531 5.87344 10.8729 5.37031 11.3833C4.86719 11.8937 4.24375 12.1489 3.5 12.1489ZM17.5 12.1489C16.7708 12.1489 16.151 11.8937 15.6406 11.3833C15.1302 10.8729 14.875 10.2531 14.875 9.52393C14.875 8.78018 15.1302 8.15674 15.6406 7.65361C16.151 7.15049 16.7708 6.89893 17.5 6.89893C18.2437 6.89893 18.8672 7.15049 19.3703 7.65361C19.8734 8.15674 20.125 8.78018 20.125 9.52393C20.125 10.2531 19.8734 10.8729 19.3703 11.3833C18.8672 11.8937 18.2437 12.1489 17.5 12.1489ZM10.5 9.52393C9.77083 9.52393 9.15104 9.26872 8.64062 8.7583C8.13021 8.24788 7.875 7.62809 7.875 6.89893C7.875 6.15518 8.13021 5.53174 8.64062 5.02861C9.15104 4.52549 9.77083 4.27393 10.5 4.27393C11.2437 4.27393 11.8672 4.52549 12.3703 5.02861C12.8734 5.53174 13.125 6.15518 13.125 6.89893C13.125 7.62809 12.8734 8.24788 12.3703 8.7583C11.8672 9.26872 11.2437 9.52393 10.5 9.52393Z" fill="black"/>
                            </svg>
                        </div>
                        <p class="text-content">{{ children.solution }}</p>
                    </div>
                    <div class="left-content">
                        <div class="d-flex align-items-center gap-1 mb-1">
                            <h6 class="m-0 font-weight-bold">{{ t('title_name.recommandation_title') }}:</h6>
                            <svg width="17" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4566 14.7219L18.7848 7.39375L17.6473 6.25625L10.3191 13.5844L11.4566 14.7219ZM5.74727 16.625C4.28893 16.5521 3.20247 16.2458 2.48789 15.7063C1.77331 15.1667 1.41602 14.3865 1.41602 13.3656C1.41602 12.4177 1.80612 11.6484 2.58633 11.0578C3.36654 10.4672 4.44935 10.1135 5.83477 9.99687C6.40352 9.95312 6.83008 9.86198 7.11445 9.72344C7.39883 9.5849 7.54102 9.39167 7.54102 9.14375C7.54102 8.76458 7.32591 8.48021 6.8957 8.29062C6.46549 8.10104 5.75456 7.9625 4.76289 7.875L4.91602 6.125C6.4181 6.24167 7.52279 6.54427 8.23008 7.03281C8.93737 7.52135 9.29102 8.225 9.29102 9.14375C9.29102 9.91667 9.01029 10.5219 8.44883 10.9594C7.88737 11.3969 7.05977 11.6594 5.96602 11.7469C5.03268 11.8198 4.33268 11.9911 3.86602 12.2609C3.39935 12.5307 3.16602 12.899 3.16602 13.3656C3.16602 13.876 3.37018 14.2443 3.77852 14.4703C4.18685 14.6964 4.87227 14.8313 5.83477 14.875L5.74727 16.625ZM11.8723 16.7781L8.26289 13.1687L16.6191 4.8125C16.9108 4.52083 17.2572 4.375 17.6582 4.375C18.0592 4.375 18.4056 4.52083 18.6973 4.8125L20.2285 6.34375C20.5202 6.63542 20.666 6.98177 20.666 7.38281C20.666 7.78385 20.5202 8.13021 20.2285 8.42188L11.8723 16.7781ZM8.39414 17.5C8.14622 17.5583 7.92747 17.4927 7.73789 17.3031C7.54831 17.1135 7.48268 16.8948 7.54102 16.6469L8.26289 13.1687L11.8723 16.7781L8.39414 17.5Z" fill="black"/>
                            </svg>
                        </div>
                        <p class="text-content">{{ children.recommandation }}</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="title-header">
                        <h5>ប្រវត្ដិសកម្មភាព</h5>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <h6><b>សកម្មភាព</b></h6>
                        <el-tag>កូដ: {{ children.code }}</el-tag>
                    </div>
                    <div class="kpi-item-container">
                        <div class="kpi-item py-3 px-4" v-for="(item,index) in kpi.children" :key="index" @click="handleSwitchChildren(item.id)">
                            <div class="top-content">
                                <div class="d-flex justify-content-between align-items-base-line">
                                    <p><b>{{ item.nameEn }} = 123</b></p>
                                    <el-tag class="tag-status">{{ item.status }}</el-tag>
                                </div>
                            </div>
                            <div class="bottom-content">
                                <div class="d-flex align-items-center justify-content-start gap-3">
                                    <el-tag type="info">
                                        <span class="tag-name">បង្កើតដោយ: Admin 1</span>
                                    </el-tag>
                                    <span class="date-text">05 Mar 2024, 10:30 am</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="title-header">
                        <h5>លទ្ធផល</h5>
                    </div>
                    <div class="right-content">
                        <div class="d-flex justify-content-between">
                            <h6><b>ពិន្ទុសរុបរបស់សូចនាករ</b></h6>
                            <span class="total-text">234 ពិន្ទុ</span>
                        </div>
                    </div>
                    <div class="right-content">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h6><b>ទំហំលទ្ធផលសម្រេចបាន</b></h6>
                                <div style="width: 100%; text-align: center; padding: 8px; background-color: #FF9E01; border-radius: 6px;">
                                    Average 
                                </div>
                            </div>
                            <span class="total-text">35% </span>
                        </div>
                    </div>
                    <div class="right-content">
                        <div class="d-flex justify-content-between">
                            <h6><b>បន្ទាត់មូលដ្ឋាន</b></h6>
                            <span class="total-text">2.50%</span>
                        </div>
                    </div>
                    <div class="note-detail m-3">
                        <label>{{ t('note') }}</label>
                        <ul>
                            <li>0%  - 25% is under average *</li>
                            <li>26% - 49% is average *</li>
                            <li>50% - 74% is acceptable *</li>
                            <li>75% - 100% is good *</li>
                        </ul>
                    </div>
                    <div class="btn-group d-flex justify-content-end gap-2">
                        <Nuxt-link to="/framework/kpi/list"> 
                            <el-button class="btn-danger">{{ t('page_btn.cancel_btn') }}</el-button>
                        </Nuxt-link>
                        <Nuxt-link to="/framework/kpi/create"> 
                            <el-button class="btn-primary">{{ t('page_btn.create_btn') }}</el-button>
                        </Nuxt-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
</template>
<style scoped>
    .title-header {
        height: 48px;
        width: 100%;
        background-color: var(--primary-color);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
    }
    .title-header h5 {
        color: white;
        margin: 0
    }
    .left-content {
        padding: 12px 0;
        margin: 8px 0;
        border-bottom: 1px solid #dfdbdb;

    }
    .text-content {
        color: #808080;
    }
    .el-tag {
        border-radius: 24px;
    }
    .kpi-item-container {
        overflow-y: auto;
        max-height: 600px;
    }
    .kpi-item {
        border: 1px solid #F8F8F8;
        border-radius: 12px;
        background-color: #F8F8F8;
        margin-bottom: 12px;
    }
    .kpi-item:hover {
        cursor: pointer;
        box-shadow: 2px 4px 6px rgba(0,0,0,.08);
        border-radius: 12px;
    }
    .tag-status {
        font-weight: 700;
    }
    .tag-name {
        font-size: 9px;
    }
    .date-text {
        margin: 0;
        font-size: 10px;
        line-height: 10px;
        color: #808080;
    }
    .right-content {
        border: 1px solid #F8F8F8;
        border-radius: 12px;
        background-color: #F8F8F8;
        margin-bottom: 12px;
        padding: 24px;
    }
    .total-text {
        font-size: 28px;
        font-weight: 700;
        align-self: center;
        color: #2463AF;
    }
    .btn-group .el-button {
        padding: 12px 32px;
    }
</style>
  