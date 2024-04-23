<template>
<!--    当前页面为店铺管理页面的vue组件-->
    <div class="box">
<!--        下面的text依旧是标题-->
        <div class="text">
            <p style="font-size: 17px;font-weight: bold;margin-left: 15px;padding-top: 10px">商品添加</p>
            <div class="button">
                <el-button type="primary">保存</el-button>
            </div>
        </div>
<!--        下面才是当前页面的form表单-->
        <div class="box_form">
<!--            通过:model跟js里面的form[]进行双向数据绑定-->
            <el-form :model="form" ref="form">
                <el-form-item label="店铺名称">
<!--                    每一个输入部分都用了双向数据绑定跟form[]进行键值对-->
                    <el-input type="text" v-model="form.name">{{form.name}}</el-input>
                </el-form-item>
                <el-form-item label="店铺公告">
                    <el-input type="textarea" v-model="form.note">{{form.note}}</el-input>
                </el-form-item>
                <el-form-item label="店铺头像">
                    <div class="demo-image">
                        <el-image style="width: 100px;height: 100px;" :src="require('@/assets/img/670.jpg')" :fit="cover"></el-image>
                    </div>
                </el-form-item>
                <el-form-item label="店铺图片">
<!--                    在展示店铺图片这儿份为两部分，第一部分是图片墙，和下面的fileList进行图片展示-->
                    <el-upload
                        v-model:file-list="fileList"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                    >
                        <el-icon><Plus /></el-icon>
                    </el-upload>

                    <el-dialog v-model="dialogVisible">
                        <img :src="dialogImageUrl" alt="Preview Image" />
                    </el-dialog>
                </el-form-item>
<!--                以下都是些输入框，展示内容都是双向数据绑定了的，在js的form[]里面-->
                <el-form-item label="配送费">
                    <el-input type="text" v-model="form.giveMoney">{{form.giveMoney}}</el-input>
                </el-form-item>
                <el-form-item label="配送时间">
                    <el-input type="text" v-model="form.giveTime">{{form.giveTime}}</el-input>
                </el-form-item>
                <el-form-item label="配送描述">
                    <el-input type="text" v-model="form.giveNote">{{form.giveNote}}</el-input>
                </el-form-item>
                <el-form-item label="店铺评分">
                    <el-input type="text" v-model="form.storeScore">{{form.storeScore}}</el-input>
                </el-form-item>
                <el-form-item label="销量">
                    <el-input type="text" v-model="form.sellNum">{{form.sellNum}}</el-input>
                </el-form-item>
                <el-form-item label="活动">
<!--                    下面是一个多选框-->
                    <el-checkbox-group v-model="form">
                        <el-checkbox label="在线支付满28减5" />
                        <el-checkbox label="VC无限橙果汁全场8折" />
                        <el-checkbox label="单人精彩套餐" />
                        <el-checkbox label="特价饮品8折抢购"/>
                        <el-checkbox label="单人特色套餐" disabled />
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="营业时间">
                    <div class="demo_range">
<!--                        这是一个时间选择器-->
                        <el-time-picker
                            v-model="value1"
                            is-range
                            range-separator="To"
                            start-placeholder="Start time"
                            end-placeholder="End time"
                        />
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

import {Plus} from "@element-plus/icons-vue";
// import {UploadProps,UploadUserFile} from "element-plus";

export default {
    name: "storeMange",
    components: {Plus,},
    data(){
        return {
            form: {
                    name:"粥品香坊（天府新谷）",
                    note:"粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然......",
                    giveMoney:4,
                    giveTime:"38",
                    giveNote:"蜂鸟专送",
                    storeScore:4.5,
                    sellNum:100,
                },
            fileList:[
                {
                    name:'670.jpg',
                    url:require('@/assets/img/670.jpg')
                },
                {
                    name:'670.jpg',
                    url:require('@/assets/img/670.jpg')
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
    height: 100%;
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
    margin-left: 980px;
    margin-top: 25px;
}
    .demo_range{
        margin: 8px;
    }
    .el-date-editor{
        margin: 8px;
    }
.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}
.demo-image .block:last-child {
    border-right: none;
}
.demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
.box_form {
    width: 520px;
    /*border: 1px solid black;*/
    margin-top: 20px;
    margin-left: 20px;
}
</style>