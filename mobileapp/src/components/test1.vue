<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="姓名">
            <template #default="{ row }">
                <span v-if="!row.editable" @click="enableEdit(row)">{{ row.name }}</span>
                <el-input v-else v-model="row.name" @blur="saveData(row)"></el-input>
            </template>
        </el-table-column>
        <!-- 其他列 -->
    </el-table>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "test1",
    data() {
        return {
            tableData: [
                { name: '张三', editable: false },
                { name: '李四', editable: false },
                { name: '王五', editable: false },
            ]
        }
    },
    methods: {
        enableEdit(row) {
            this.tableData.forEach(item => {
                item.editable = false;
            });
            row.editable = true;
        },
        saveData(row) {
            row.editable = false;
            // 在这里处理保存数据的逻辑
        }
    }
}
</script>

<style scoped>

</style>