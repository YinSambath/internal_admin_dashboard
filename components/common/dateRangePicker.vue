<template>
    <div>
        <label class="label-input-form"> {{ labelField }} </label>
        <el-date-picker
        v-model="dateRange"
        type="daterange"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :default-value="defaultValue"
        @change="handleDateChange"
        />
    </div>
</template>
  
<script>
    export default {
        name: "DateRangePicker",
        props: {
            labelField: {
                type: String,
                default: ''
            },
            modelValue: {
                type: Array,
                default: () => [],
            },
            startPlaceholder: {
                type: String,
                default: "",
            },
            endPlaceholder: {
                type: String,
                default: "",
            },
            defaultValue: {
                type: Array,
                default: () => [new Date(2010, 9, 1), new Date(2010, 10, 1)],
            },
        },
        computed: {
            dateRange: {
                get() {
                return this.modelValue;
                },
                set(value) {
                this.$emit("update:modelValue", value);
                },
            },
        },
        methods: {
            handleDateChange(value) {
                this.$emit("change", value);
            },
        },
    };
</script>
<style>
    .label-input-form {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    .el-range-editor.el-input__wrapper {
        width: 100%;
        border-radius: 8px;
        padding: 12px 25px;
        height: 36px;
        margin-bottom: 8px;
    }
</style>
  