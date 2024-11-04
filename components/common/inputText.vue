<template>
    <div>
        <label class="label-input-form" v-if="labelField"> 
            {{ labelField }} <span style="color: red;" v-if="required">*</span>
        </label>
        <el-input
            v-model="internalModel"
            :placeholder="placeholder"
            :type="type"
            :disabled="disabled"
            :readonly="readonly"
            autosize
            clearable
        />
    </div>
</template>
  
<script lang="ts">
    export default {
        name: 'InputText',
        props: {
            labelField: {
                type: String,
                default: ''
            },
            required: {
                type: Boolean,
                required: true,
                default: true,
            },
            modelValue: {
                type: String,
                required: true,
                default: ''
            },
            placeholder: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: { 
                type: Boolean,
                default: false
            }
        },
        data() { return {} },
        emits: ['update:modelValue'],
        methods: {
        },
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
  
<style>
    .label-input-form {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px
    }
    .el-input__wrapper {
        border-radius: 8px;
        padding: 12px 25px;
        height: 36px;
        margin-bottom: 8px;
        background-color: var(--default-border);
    }
    .el-input__inner {
        font-size: 14px;
        line-height: 24px;
    }
    .el-input__inner::placeholder {
        color: #d6d6d6;
    }
    .el-textarea__inner {
        border-radius: 8px;
        padding: 8px 25px;
    }
    .el-textarea__inner::placeholder {
        color: #000000;
    }
</style>
  