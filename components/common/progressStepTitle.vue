<template>
    <div class="stepper-container">
        <el-steps :active="activeStep" class="stepper-progress">
            <el-step v-for="(step, index) in steps" :key="index">
                <template v-slot:icon>
                    <span class="custom-icon">{{ step.title }}</span>
                </template>
            </el-step>
        </el-steps>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent, type PropType } from 'vue';
    interface Step {
        title: string;
    }
    export default defineComponent({
        name: 'ProgressStepTitle',
        props: {
            steps: {
                type: Array as PropType<Step[]>,
                required: true
            },
            activeStep: {
                type: Number,
                default: 0
            }
        },
        data() {return {}},
        methods: {
            
        },
        computed: {},
    });
</script>
  
<style>
    .stepper-container {
        margin-top: 45px;
        margin-bottom: 45px;
    }
    .el-step__icon.is-icon {
        width: auto
    }
    .el-step__head.is-finish .el-step__line .el-step__line-inner {
        width: 0% !important;
    }
    .el-step__head.is-finish .el-step__line {
        height: 6px;
        background-color: green;
    }
    .el-step__head.is-process .el-step__line {
        height: 6px;
        background-color: #d1d1d1;
    }
    .el-step__head.is-wait .el-step__line {
        height: 6px;
        background-color: #d1d1d1;
    }
  
    .el-step__head.is-finish .el-step__icon.is-icon .custom-icon {
        font-size: 14px;
        color: #fff;
        background-color: green;
        padding: 10px 35px;
        border-radius: 8px;
    }
    .el-step__head.is-process .el-step__icon.is-icon .custom-icon {
        font-size: 14px;
        color: #fff;
        background-color: blue;
        padding: 10px 35px;
        border-radius: 8px;
    }
    .el-step__head.is-wait .el-step__icon.is-icon .custom-icon {
        font-size: 14px;
        color: #fff;
        background-color: gray;
        padding: 10px 35px;
        border-radius: 8px;
    }
</style>
  