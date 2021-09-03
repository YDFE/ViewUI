<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu4-layout';
    export default {
        name: 'Footer',
        computed: {
            wrapClasses () {
                return `${prefixCls}-footer`;
            }
        }
    };
</script>