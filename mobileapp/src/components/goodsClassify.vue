<template>
<!--    当前页面为商品管理——商品分类的vue组件-->
    <div class="box">
<!--        以下的text的块级元素是标题，后面还有个button按钮-->
        <div class="text">
            <p style="font-size: 17px;font-weight: bold;margin-left: 15px;padding-top: 10px">商品分类</p>
            <div class="button">
                <el-button type="primary">添加分类</el-button>
            </div>
        </div>
<!--        下面就是本页的数据展示部分-->
        <div class="table_gc">
<!--            依旧是通过:data跟js中的tableData[]进行双向数据绑定-->
            <el-table :data="tableData" >
                <el-table-column prop="ID" label="序号" />
                <el-table-column label="分类名称">
<!--                    在分类名称这个列里面要实现可更改单元格，实现的思路是
                        1.在模板中，给单元格添加点击事件，并在事件处理函数中设置相关逻辑。
                        2.在点击事件处理函数中，将当前单元格的编辑状态设置为true，并将其他单元格的编辑状态设置为false，以确保只有一个单元格处于编辑状态。
                        3.使用v-if指令根据编辑状态显示相应的组件，这里使用input组件进行编辑，再使用span标签显示普通文本
                        当我们点击单元格时，会调用enableEdit方法，将被点击单元格的editable属性设置为true，从而触发显示编辑的输入框。当输入框失去焦点时，会调用saveData方法保存编辑后的数据，并将editable属性设置为false，从而显示普通文本-->
                    <template #default="{ row }">
                        <span v-if="!row.editable" @click="enableEdit(row)">{{ row.name }}</span>
                        <el-input v-else v-model="row.name" @blur="saveData(row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="tfUse" label="是否启用">
                    <template #default>
                        <el-switch
                            v-model="value2"
                            class="ml-2"
                            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                        />
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                        >
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination" style="margin-top: 30px;padding-bottom: 20px;padding-left: 15px">
            <el-pagination
                :page-size="5"
                :page-count="5"
                layout="total,prev, pager, next,jumper"
                :total="50"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "goodsClassify",
    data(){
        return {
            value2: true,
            tableData:[
                {
                    ID:1,
                    name:"热销榜",
                    editable: false
                },
                {
                    ID:2,
                    name: "单人精彩套餐",
                    editable: false
                },
                {
                    ID:3,
                    name: "冰爽饮品限时特惠",
                    editable: false
                },
                {
                    ID:4,
                    name: "精选热菜",
                    editable: false
                },
                {
                    ID:5,
                    name: "爽口凉菜",
                    editable: false
                }
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
.box{
    /*margin: 0;*/
    padding: 0;
    /*height: 100%;*/
    width: 100%;
    /*border: 1px solid black;*/
    background-color: white;
    /*margin: 20px;*/
}
.text {
    /*margin: 10px;*/
    /*border: 1px solid black;*/
    border-bottom: 2px solid lightgray;
    display: flex;
}
.button{
    margin-left: 940px;
    margin-top: 25px;
}
</style>