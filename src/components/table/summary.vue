<template>
    <div style="overflow:hidden;">
        <table class="ivu4-table-summary" cellspacing="0" cellpadding="0" border="0" :style="styleObject">
            <colgroup>
                <col v-for="(column, index) in columns" :width="setCellWidth(column)">
            </colgroup>
            <tbody :class="[prefixCls + '-tbody']">
                <tr class="ivu4-table-row">
                    <td v-for="(column, index) in columns" :class="alignCls(column)">
                        <div class="ivu4-table-cell" :class="cellCls(column)">
                            <span>{{ data[column.key].value }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Mixin from './mixin';

    export default {
        name: 'TableSummary',
        mixins: [ Mixin ],
        props: {
            prefixCls: String,
            styleObject: Object,
            columns: Array,
            data: Object,    // rebuildData
            columnsWidth: Object,
            fixed: {
                type: [Boolean, String],
                default: false
            },
        },
        methods: {
            cellCls (column) {
                return [
                    {
                        ['ivu4-table-hidden']: (this.fixed === 'left' && column.fixed !== 'left') || (this.fixed === 'right' && column.fixed !== 'right') || (!this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'))
                    }
                ];
            }
        }
    };
</script>
