<template>
<!--    当前页面为订单管理的vue组件-->
    <div class="box">
<!--        下面的head_one是筛选模块的第一行的内容（订单号、收货人、手机号，订单状态）-->
        <div class="head_one">
<!--            下面的每一个head_box的块级元素都用的flex弹性布局让其里面水平-->
            <div class="head_box">
                <p>订单号</p>
                <el-input type="text" placeholder="订单号" ></el-input>
            </div>
            <div class="head_box">
                <p>收货人</p>
                <el-input type="text" placeholder="收货人"></el-input>
            </div>
            <div class="head_box">
                <p>手机号</p>
                <el-input type="text" placeholder="手机号"></el-input>
            </div>
            <div class="head_box">
                <p>订单状态</p>
<!--                <el-input ></el-input>-->
                <el-select :id="status" placeholder="订单状态" style="height: 35px">
                    <el-option value="1">状态1</el-option>
                    <el-option value="2">状态2</el-option>
                    <el-option value="3">状态3</el-option>

                </el-select>
            </div>
        </div>
<!--        下面的head_two是筛选模块的第二行的内容（选择时间）-->
        <div class="head_two">
            <p>选择时间</p>
            <div class="demo_range">
<!--                这里用的elementplus的组件——时间选择器-->
                <el-time-picker
                    v-model="value1"
                    is-range
                    range-separator="To"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                />
            </div>
            <el-button type="primary"  style="margin-top: 8px;">查询</el-button>
        </div>
<!--        下面的table就是数据表了-->
        <div class="table">
<!--            :data属性双向绑定了js里面的tableData[]这个数组里面的数据-->
            <el-table :data="tableData" border style="width: 100%;font-size: 13px;">
<!--                下面的Column是数据表的每一列，通过prop的属性名和tableData[]里面的数据进行键值对的对应-->
                <el-table-column fixed prop="orderID" label="订单号" width="120" />
                <el-table-column prop="orderTime" label="下单时间" width="100" />
                <el-table-column prop="phone" label="手机号" width="120" />
                <el-table-column prop="person" label="收货人" width="80" />
                <el-table-column prop="address" label="配送地址" width="250" />
                <el-table-column prop="arriveTime" label="送达时间" width="100" />
                <el-table-column prop="userNote" label="用户备注" width="80" />
                <el-table-column prop="orderMoney" label="订单金额" width="80" />
                <el-table-column prop="orderStatus" label="订单状态" width="120" />

                <el-table-column fixed="right" label="Operations" width="120">
<!--                    这个column用了elementplus里面的模板展示，让这个列里面可以插入一切其他样式组件（比如：按钮）-->
                    <template #default>
<!--                        第一个查看按钮通过@click绑定了一个handleClick方法，但是在js的methods里面还没有实现这个方法-->
                        <el-button link type="primary"  size="small" @click="handleClick">查看</el-button>
                        <el-button link type="primary"  size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
<!--        下面是这个页面的分页设置-->
        <div class="pagination" style="padding-bottom: 30px;padding-left: 15px">
<!--            直接使用的elementplus里面的分页组件-->
            <el-pagination
                :page-size="5"
                :highlight-class="'selected-page'"
                :page-count="5"
                layout="total,prev, pager, next,jumper"
                :total="50"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "ordersManage",
    data(){
        return {
            // 这个数据就是和当前页面的table进行双向数据绑定的tableData的数据，里面的值通过键值对进行显示
            tableData:[
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
                },
                {
                    orderID:14214314,
                    orderTime:'19:00:00',
                    phone:18181358998,
                    person:"小貂禅",
                    address:"成都市武侯区天府新谷1518弄",
                    arriveTime:'19:32:00',
                    userNote:"微辣",
                    orderMoney:108,
                    orderStatus:"已受理",
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
.selected-page{
    color: purple;
}
.head_one{
    /*margin: 10px;*/
    /*width: 1000px;*/
    padding: 10px;
    /*border: 1px solid black;*/
    display: flex;
    flex-direction: row;
    /*margin: 10px;*/
}
.head_two{
    display: flex;
    margin-left: 30px;
}
.head_two > p{
    width: 50px;
    text-align: left;
    font-size: 12px;
    padding-top: 5px;
}
.head_box{
    display: flex;
    flex-direction: row;
    justify-content: right;
    font-size: 12px;
    margin: 10px;
    /*border: 1px solid black;*/
    /*width: 300px;*/
}
.head_box > p{
    /*border: 1px solid black;*/
    /*text-align: left;*/
    width: 80px;
    text-align: center;
    /*line-height: 50px;*/
    /*padding-top: 1px;*/
}
.el-input{
    height: 35px;
    /*justify-content: right;*/
    /*width: 50px;*/
}
.demo_range{
    margin: 8px;
}
.el-date-editor{
    margin: 8px;
}
.table{
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>