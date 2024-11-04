<template>
    <el-pagination
      v-model:current-page="current_page"
      v-model:page-size="page_size"
      :page-sizes="perPage"
      :size="size"
      :background="true"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</template>
  
<script lang="ts">
    import { defineComponent, type PropType } from 'vue';
    export default defineComponent({
        name: 'Pagination',
        props: {
            currentPage: {
                type: Number,
                required: true
            },
            pageSize: {
                type: Number,
                required: true
            },
            perPage: {
                type: Array as PropType<number[]>,
                default: () => [10, 20, 30, 50, 100],
            },
            size: {
                type: String as PropType<'small' | 'large' | 'default'>,
                default: 'small',
            },
            total: {
                type: Number,
                required: true
            },
            layout: {
                type: String,
                default: 'sizes, prev, pager, next',
            },
        },
        data() { return {} },
        methods: {
            handleSizeChange(value: number) {
                console.log('emit back')
                this.$emit('handleSizeChange', value)
            },
            handleCurrentChange(value: number) {
                console.log('emit back')
                this.$emit('handleCurrentChange', value)
            }
        },
        computed: {
            current_page: {
                get() {
                    return this.currentPage;
                },
                set(value: string | number) {
                    this.$emit('update:currentPage', value);
                }
            },
            page_size: {
                get() {
                    return this.pageSize;
                },
                set(value: string | number) {
                    this.$emit('update:pageSize', value);
                }
            }
        },
    });
</script>
  
<style>  
    .el-pagination.is-background .btn-next.is-disabled, .el-pagination.is-background .btn-next:disabled, .el-pagination.is-background .btn-prev.is-disabled, .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .el-pager li.is-disabled, .el-pagination.is-background .el-pager li:disabled {
        background-color: #b7b7b7 !important;
        border: none;
        color: #FFFFFF;
    }
    .el-pagination.is-background .btn-next.is-active, .el-pagination.is-background .btn-prev.is-active, .el-pagination.is-background .el-pager li.is-active {
        background-color: transparent;
        border: 1px solid blue;
        color: blue;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
        background-color: transparent;
        border: 1px solid #d6d6d6;
        color: #000000;
    }
    .el-pagination.is-background .btn-next {
        background-color: transparent;
        border: 1px solid #d6d6d6;
        color: #d6d6d6;
    }
</style>