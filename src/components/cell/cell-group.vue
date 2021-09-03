<template>
    <div class="ivu4-cell-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'CellGroup',
        provide () {
            return {
                cellGroup: this
            };
        },
        methods: {
            handleClick (name) {
                this.$emit('on-click', name);
            }
        }
    };
</script>