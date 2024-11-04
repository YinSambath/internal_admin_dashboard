<!-- components/common/DataTable.vue -->
<template>
    <el-table
        :data="tableData"
        row-key="id"
        :tree-props="treeProps"
        @selection-change="handleSelectionChange"
    >
        <el-table-column v-if="selection" type="selection"></el-table-column>
        <el-table-column
            v-for="(column,index) in columns"
            :key="index"
            :prop="column.prop" 
            :label="column.label" 
            :sortable="column.sortable || false"
            :width="column.width"
        >
            <template #default="{ row }">
                <!-- Check if the column should display a logo -->
                <el-avatar v-if="column.useLogo" style="margin: auto;" :src="row[column.prop].url"></el-avatar>
                <!-- Check if the column should display a badge -->
                <el-tag v-else-if="column.useTag">{{ row[column.prop] }}</el-tag>
                <!-- Default text for other columns -->
                <span v-else>{{ row[column.prop] }}</span>
            </template>
        </el-table-column>
        <el-table-column v-if="btnAction" label="Actions">
            <template #default="{ row }">
                <Nuxt-link :to="btnActionItems.showDocument.link + `/${row.id}`" v-if="btnActionItems.showDocument.type"> 
                    <el-button class="btn-create-new" type="success" :icon="Document" @click="handleEdit(row)" circle ></el-button>
                </Nuxt-link>
                <Nuxt-link :to="btnActionItems.showAdd.link + `/${row.id}`" v-if="btnActionItems.showAdd.type"> 
                    <el-button class="btn-create-new" type="success" :icon="Add" @click="handleEdit(row)" circle ></el-button>
                </Nuxt-link>
                <Nuxt-link :to="btnActionItems.showUpdate.link + `/${row.id}`" v-if="btnActionItems.showUpdate.type"> 
                    <el-button class="btn-create-new" type="primary" :icon="Update" @click="handleEdit(row)" circle ></el-button>
                </Nuxt-link>
                <el-button v-if="btnActionItems.showDelete" class="btn-create-new" type="danger" :icon="Delete" @click="handleDelete(row)" circle ></el-button>
                <Nuxt-link :to="btnActionItems.showView.link + `/${row.id}`" v-if="btnActionItems.showView.type"> 
                    <el-button class="btn-create-new" type="warning" :icon="View" @click="handleView(row)" circle ></el-button>
                </Nuxt-link>
            </template>
        </el-table-column>
    </el-table>
</template>
  
<script lang="ts">
    import { defineComponent, type PropType, markRaw } from 'vue';
    import {
        Delete as DeleteIcon,
        Edit as EditIcon,
        View as ViewIcon,
        Plus as AddIcon,
        Document as DocumentIcon
    } from '@element-plus/icons-vue';
    interface Column {
        prop: string;
        label: string;
        sortable?: boolean;
        useLogo?: boolean;
        useTag?: boolean;
        width?: string;
        profileUrl?: string
    }
    interface TreeProps {
        children: string;
    }
    interface BtnAction {
        showAdd: {
            type: boolean,
            link: string
        },
        showDocument: {
            type: boolean,
            link: string
        },
        showUpdate: {
            type: boolean,
            link: string
        },
        showView: {
            type: boolean,
            link: string
        },
        showDelete: boolean,
    }
    export default defineComponent({
        name: 'DataTable',
        props: {
            tableData: {
                type: Array,
                required: true,
            },
            selection: {
                type: Boolean,
                default: true
            },
            btnAction: {
                type: Boolean,
                default: true
            },
            btnActionItems: {
                type: Object as PropType<BtnAction>,
                default: () => ({
                    showAdd: {
                        type: false,
                        link: ''
                    },
                    showDocument: {
                        type: false,
                        link: ''
                    },
                    showUpdate: {
                        type: false,
                        link: ''
                    },
                    showView: {
                        type: false,
                        link: ''
                    },
                    showDelete: false,
                })
            },
            columns: {
                type: Array as PropType<Column[]>,
                required: true,
            },
            treeProps: {
                type: Object as PropType<TreeProps>, // Tree props to be passed dynamically
                required: false,
                default: () => ({ children: 'children' }), // Default tree props
            },
        },
        data() {
            return {
                Delete: markRaw(DeleteIcon),
                Update: markRaw(EditIcon),
                View: markRaw(ViewIcon),
                Add: markRaw(AddIcon),
                Document: markRaw(DocumentIcon),
            }
        },
        emits: ['selection-change', 'actionEdit', 'actionDelete', 'actionView', 'actionAdd'],
        methods: {
            handleSelectionChange(selectedRows: any) {
                console.log(selectedRows)
                this.$emit('selection-change', selectedRows);
            },
            handleAdd(row: any) {
                this.$emit('actionAdd', row);
            },
            handleEdit(row: any) {
                this.$emit('actionEdit', row);
            },
            handleDelete(row: any) {
                this.$emit('actionDelete', row);
            },
            handleView(row: any) {
                this.$emit('actionView', row);
            }
        },
    });
</script>
  
<style> 
    .el-table th.el-table__cell {
        background-color: rgb(var(--primary-rgb)) !important;
        color: #FFFFFF;
    }
    .btn-create-new {
        margin: 0 4px;
    }
</style>
  