<template>
<!--    当前页面为商品管理——商品列表的vue组件-->
    <div class="box">
<!--        下面的p是商品列表的标题-->
        <p style="font-size: 17px;font-weight: bold;margin-left: 10px">商品列表</p>
<!--        下面的table类是数据展示部分-->
        <div class="table">
<!--            依旧是通过:data跟js里面的数据进行双向数据绑定-->
            <el-table :data="tableData" :border="parentBorder" style="width: 100%;font-size: 13px">
<!--                下面的这个column通过type属性设置了一个expand表示这个数据表是列可折叠的样式-->
                <el-table-column type="expand">
<!--                    下面就是每一行数据被折叠的部分里面显示的数据-->
                    <template #default="props">
                        <div style="display: flex">
<!--                            左右两部分展示，设置了一个弹性布局-->
                            <div m="5" style="margin-left: 50px;margin-right: 300px">
<!--                                下面的每一个p标签里面都通过vue特有的声明式渲染跟table里面的prop进行绑定-->
                                <p m="t-0 b-2">商品 ID： {{ props.row.goodsID }}</p>
                                <p m="t-0 b-2">所属分类： {{ props.row.goodsType }}</p>
                                <p m="t-0 b-2">商品图片： {{ props.row.goodsPicture }}</p>
                                <p m="t-0 b-2">商品评价： {{ props.row.goodsTell }}</p>
                                <p m="t-0 b-2">商品描述: {{ props.row.goodsNote }}</p>
                            </div>
                            <div m="4">
                                <p m="t-0 b-2">商品名称： {{ props.row.goodsName }}</p>
                                <p m="t-0 b-2">商品价格： {{ props.row.goodsPrice }}</p>
                                <p m="t-0 b-2">创建时间： {{ props.row.goodsFoundTime }}</p>
                                <p m="t-0 b-2">商品销量： {{ props.row.goodsSell }}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
<!--                后面的column依旧是通过prop跟tableData[]里面的数据进行键值对的绑定-->
                <el-table-column label="商品名称" prop="goodsName" />
                <el-table-column label="所属分类" prop="goodsType" />
                <el-table-column label="商品价格" prop="goodsPrice" />
                <el-table-column label="商品图片" prop="goodsPicture" />
                <el-table-column label="商品描述" prop="goodsNote" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button  type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
<!--        下面是一个分页组件-->
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
            tableData:[
                {
                    goodsID:41,
                    goodsName:"田园蔬菜粥",
                    goodsType:"特色粥品",
                    goodsPrice:16,
                    goodsPicture:16,
                    goodsFoundTime:"2020-05-02 06:35:39",
                    goodsTell:100,
                    goodsSell:288,
                    goodsNote:"一碗皮蛋瘦肉粥，总是"
                },
                {
                    goodsID:41,
                    goodsName:"田园蔬菜粥",
                    goodsType:"特色粥品",
                    goodsPrice:16,
                    goodsPicture:16,
                    goodsFoundTime:"2020-05-02 06:35:39",
                    goodsTell:100,
                    goodsSell:288,
                    goodsNote:"一碗皮蛋瘦肉粥，总是"
                },
                {
                    goodsID:41,
                    goodsName:"田园蔬菜粥",
                    goodsType:"特色粥品",
                    goodsPrice:16,
                    goodsPicture:16,
                    goodsFoundTime:"2020-05-02 06:35:39",
                    goodsTell:100,
                    goodsSell:288,
                    goodsNote:"一碗皮蛋瘦肉粥，总是"
                },
                {
                    goodsID:41,
                    goodsName:"田园蔬菜粥",
                    goodsType:"特色粥品",
                    goodsPrice:16,
                    goodsPicture:16,
                    goodsFoundTime:"2020-05-02 06:35:39",
                    goodsTell:100,
                    goodsSell:288,
                    goodsNote:"一碗皮蛋瘦肉粥，总是"
                },
                {
                    goodsID:41,
                    goodsName:"田园蔬菜粥",
                    goodsType:"特色粥品",
                    goodsPrice:16,
                    goodsPicture:16,
                    goodsFoundTime:"2020-05-02 06:35:39",
                    goodsTell:100,
                    goodsSell:288,
                    goodsNote:"一碗皮蛋瘦肉粥，总是"
                },
            ]
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

</style>