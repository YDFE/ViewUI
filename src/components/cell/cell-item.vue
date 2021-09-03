<template>
    <div class="ivu4-cell-item">
        <div class="ivu4-cell-icon">
            <slot name="icon"></slot>
        </div>
        <div class="ivu4-cell-main">
            <div class="ivu4-cell-title"><slot>{{ title }}</slot></div>
            <div class="ivu4-cell-label"><slot name="label">{{ label }}</slot></div>
        </div>
        <div class="ivu4-cell-footer">
            <span class="ivu4-cell-extra"><slot name="extra">{{ extra }}</slot></span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            extra: {
                type: String,
                default: ''
            },
        }
    };
</script>