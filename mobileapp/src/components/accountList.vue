<template>
<!--    当前页面为账号管理——账号列表的vue组件-->
    <div class="box">
<!--        下面的text依旧是标题-->
        <div class="text">
            <p style="font-size: 17px;font-weight: bold;margin-left: 15px;padding-top: 10px">账号列表</p>
        </div>
<!--        下面是数据展示部分-->
        <div class="tableList">
            <el-table :data="tableData">
<!--                下面这个column里面设置了一个type为selection，说明这个列前面有勾选框-->
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="账号" prop="account"></el-table-column>
                <el-table-column label="用户名" prop="userGroup"></el-table-column>
                <el-table-column label="创建时间" prop="time"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                        >Edit</el-button
                        >
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                        >Delete</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
<!--                这是一个分页组件-->
                <el-pagination
                    :page-size="5"
                    :page-count="5"
                    layout="total,prev, pager, next,jumper"
                    :total="50"
                />
            </div>
            <div class="button">
<!--                俩按钮通过flex布局水平展示-->
                <el-button type="danger">批量删除</el-button>
                <el-button type="primary">取消选择</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "accountList",
    data(){
        return {
            tableData:[
                {
                    account:"小貂禅",
                    userGroup:"超级管理员",
                    time:"2019/10/19",
                },
                {
                    account:"李寻欢",
                    userGroup:"超级管理员",
                    time:"2019/10/19",
                },
                {
                    account:"赵子龙",
                    userGroup:"超级管理员",
                    time:"2019/10/19",
                },
                {
                    account:"admin",
                    userGroup:"超级管理员",
                    time:"2019/10/19",
                },
                {
                    account:"guest",
                    userGroup:"超级管理员",
                    time:"2019/10/19",
                },
            ]
        }
    }
}
</script>

<style scoped>
.box{
    margin: 0;
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
    /*display: flex;*/
}
.tableList{
    margin-top: 20px;
    margin-left: 20px;
}
.pagination{
    /*margin: 20px;*/
    margin-top: 20px;
    margin-bottom: 20px;
}
.button{
    padding-bottom: 30px;
}
</style>