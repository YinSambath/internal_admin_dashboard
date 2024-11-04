<!-- components/common/SelectDropdown.vue -->
<template>
    <div>
        <label class="label-input-form" v-if="labelField"> {{ labelField }} <span style="color: red;" v-if="required">*</span> </label>
        <el-select
            v-model="internalModel"
            clearable
            :placeholder="placeholder"
            @change="handleChange"
            :multiple="multiple"
            :filterable="filterable"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="2"
        >
            <el-option
                v-for="(item, key) in items"
                :key="item.id"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>
  
<script lang="ts">
    interface SelectOption {
        id: string | number; 
        label: string;
        value: string | number;
    }
    export default {
        name: 'SelectDropdown',
        props: {
            labelField: {
                type: String,
                default: '',
            },
            required: {
                type: Boolean,
                default: true
            },
            modelValue: {
                type: [String, Number, Array],
                required: true,
                default: ''
            },
            items: {
                type: Array as PropType<SelectOption[]>,
                required: true,
            },
            placeholder: {
                type: String,
                default: '',
            },
            multiple: {
                type: Boolean,
                defaault: false,
            },
            filterable: {
                type: Boolean,
                default: false
            }
        },
        data() { return {} },
        methods: {
            handleChange(value: string | number | []) {
                this.$emit('handleChange', value);
            },
        },
        emits: ['update:modelValue', 'handleChange'],
        computed: {
            internalModel: {
                get() {
                    return this.modelValue;
                },
                set(value: string | number) {
                    this.$emit('update:modelValue', value);
                }
            }
        },
    };
</script>
  
<style >
    .label-input-form {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px
    }
    .el-select {
        width: 100%;
        margin-bottom: 8px;        
    }
    .el-select__wrapper {
        border-radius: 8px;
        padding: 4px 25px;
        min-height: 36px;
        background-color: var(--default-border);
    }
    .el-select .el-icon svg {
        color: #000000;
    }
    @media screen and (width <= 990px) {
        .el-select {
            min-width: 160px;
        }
    }
</style>
  