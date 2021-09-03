<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu4-layout';
    export default {
        name: 'Content',
        computed: {
            wrapClasses () {
                return `${prefixCls}-content`;
            }
        }
    };
</script>