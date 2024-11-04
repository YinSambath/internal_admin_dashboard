<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';
import { DoughnutChart } from 'vue-chart-3';
import * as mneUnit from '~/data/dashboards/mne-unit.js';
import * as kpiData from '@/data/dashboards/kpis.js';
import Datatable from "~/components/common/datatable.vue";

export default {
  setup() {
    const { t } = useI18n();
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
        current: this.t('mne_dashboard'),
        list: [
          'Dashboards', 'M&E Unit Dashboard'
        ]
      },
      mneUnit: mneUnit,
      tableData: kpiData.kpis,
      columns: [ // column header and prop for table
        { prop: 'code', label: this.$t('title_name.code_title'), sortable: true, width: '200px' },
        { prop: 'name', label: this.$t('title_name.name_title'), sortable: true },
        { prop: 'status', label: this.$t('title_name.status_title'), useTag: true, width: '200px'}
      ],
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleDownload() {},
  }
};
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row mb-2">
    <div class="col-xxl-3 col-xl-4 col-lg-4 col-sm-4">
      <div class="card custom-card h-100">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Outcome Archievement
          </div>
        </div>
        <div class="card-body p-0 overflow-hidden">
          <div class="leads-source-chart d-flex align-items-center justify-content-center">
            <DoughnutChart class="chartjs-chart pb-4 px-4" :width="240" :height="240"
              :chartData="mneUnit.OutcomeChartData" :options="mneUnit.OutcomeOptions" />
            <div class="lead-source-value">
              <span class="d-block fs-14">Total</span>
              <span class="d-block fs-25 fw-bold">4,145</span>
            </div>
          </div>
          <div class="row p-0">
            <div class="col ps-4 pe-3 ms-4 mb-2 border-end border-inline-end-dashed">
              <span class="text-muted fs-12 mb-1 ocmChart outgoing d-inline-block">Outgoing
              </span>
            </div>
            <div class="col"><span class="fs-16 fw-semibold">1,624</span>
            </div>
          </div>
          <div class="row p-0">
            <div class="col ps-4 pe-3 ms-4 mb-2 border-end border-inline-end-dashed">
              <span class="text-muted fs-12 mb-1 ocmChart waiting1 d-inline-block">Waiting
              </span>
            </div>
            <div class="col"><span class="fs-16 fw-semibold">1,267</span></div>
          </div>
          <div class="row p-0">
            <div class="col ps-4 pe-3 ms-4 mb-2 border-end border-inline-end-dashed">
              <span class="text-muted fs-12 mb-1 ocmChart waiting2 d-inline-block">Waiting
              </span>
            </div>
            <div class="col"><span class="fs-16 fw-semibold">679</span></div>
          </div>
          <!-- <div class="row row-cols-12 border-top border-block-start-dashed">
          </div> -->
        </div>
      </div>
    </div>
    <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-sm-8">
      <div class="card custom-card h-100">
        <div class="card-header justify-content-between flex-wrap">
          <div class="card-title">
            Impact Overview
          </div>
        </div>
        <div class="card-body p-0">
          <div class="p-3">
            <apexchart height="320px" type="line" :options="mneUnit.mneUnitStatisticsOptions"
              :series="mneUnit.mneUnitStatisticsSeries"></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
  <!--Start::row-2 -->
  <div class="row mb-3">
    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 h-100">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Recent Activity
          </div>
          <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light ms-auto"
            data-bs-toggle="dropdown">
            <i class="fe fe-more-vertical"></i>
          </a>
          <div class="dropdown">
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div>
            <ul v-for="item in mneUnit.mneUnitRecentActivity" class="mb-2 list-unstyled mb-0">
              <li class="ms-3">
                <div class="d-flex align-items-top">
                  <div class="me-3">
                    <div class="toggle-logo">
                      <i class="bi bi-image-fill"></i>
                    </div>
                  </div>
                  <div>
                    <span class="d-block fw-semibold">{{ item.user_name }}-{{ item.title }}</span>
                    <span class="d-block text-muted">{{ item.sub_title }}</span>
                  </div>
                  <div class="flex-fill text-end">
                    <span class="d-block text-red">{{ item.percentage }}%</span>
                    <span class="d-block text-muted">{{ item.dateTime }}</span>
                    <span class="d-block text-muted">{{ item.description }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-sm-12 col-md-6 col-xxl-7 col-xl-7">
      <div class="card custom-card h-100">
        <div class="card-header">
          <div class="card-title">
            Status by Line-Ministries
          </div>
        </div>
        <div class="card-body">
          <apexchart height="325px" type="bar" :options="mneUnit.StatusByLMOptions" :series="mneUnit.StatusByLMSeries">
          </apexchart>
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
          <div class="title-table d-flex justify-content-between pt-2 pb-4">
            <h5>{{ t('title_name.kpi_list_ministry_title') }}</h5>
            <el-button type="primary" @click="handleDownload" style="padding-left: 30px; padding-right: 30px;">{{ t('page_btn.download_btn') }}</el-button>
          </div>
          <div class="kpi-datatable">
            <Datatable 
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
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 0.5rem;
    inset-block-start: 0.375rem;
    inset-inline-start: -0.625rem;
  }

  &.outgoing:before {
    background-color: #C084FC;
  }

  &.waiting1:before {
    background-color: #FB923C;
  }

  &.waiting2:before {
    background-color: #2563EB;
  }
}
</style>
