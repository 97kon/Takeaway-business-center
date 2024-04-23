<template>
<!--    当前页面是商品管理——商品添加的页面展示-->
    <div class="box">
<!--        下面的text块级元素是标题样式-->
        <div class="text">
            <p style="font-size: 17px;font-weight: bold;margin-left: 15px;padding-top: 10px">商品添加</p>
        </div>
<!--        下面的addArea就是表单-->
        <div class="addArea">
<!--            使用了elementplus的表单组件，:model和js里面的data进行双向数据绑定-->
            <el-form :model="form" ref="form">
<!--                第一个表单元素lable是标题，下面是一个input输入框-->
                <el-form-item label="商品名称">
                    <el-input type="text" placeholder="商品名称"></el-input>
                </el-form-item>
<!--                第二个表单元素是一个select选择框，有三个option选择-->
                <el-form-item label="商品分类">
                    <el-select placeholder="商品分类">
                        <el-option label="分类一">分类一</el-option>
                        <el-option label="分类二">分类二</el-option>
                        <el-option label="分类三">分类三</el-option>
                    </el-select>
                </el-form-item>
<!--                第三个表单元素是一个数字选择器，最小min为0，步长step为1-->
                <el-form-item label="商品价格">
                    <el-input-number v-model="quantity" :min="0" :step="1"></el-input-number>
                </el-form-item>
<!--                第四个表单元素是一个文件上传区域-->
                <el-form-item label="商品图片">
                    <el-upload
                        class="avatar-uploader"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar"  alt=""/>
                        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                    </el-upload>
                </el-form-item>
<!--                第五个表单元素是一个input输入框，但是type设置的textarea说明是一个多行输入框-->
                <el-form-item label="商品描述">
                    <el-input type="textarea"></el-input>
                </el-form-item>
<!--                <el-button type="primary">添加商品</el-button>-->
            </el-form>
            <el-button  style="margin-left: 70px;" type="primary">添加商品</el-button>
        </div>
    </div>
</template>

<script>
import {Plus} from "@element-plus/icons-vue";

export default {
    name: "goodsAdd",
    components: {Plus},
    data(){
        return {
            quantity:0,
            fileList:[],
        }
    },
    methods:{
        // 这个beforeUpload方法是文件上传的函数实现
        beforeUpload(file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJpgOrPng) {
                this.$message.error('只能上传jpg/png文件！');
            }
            if (!isLt2M) {
                this.$message.error('文件大小不能超过2MB！');
            }

            return isJpgOrPng && isLt2M;
        },
        onSuccess(response, file) {
            this.fileList.push(file);
            this.$message.success('上传成功！');
        },
        onError() {
            this.$message.error('上传失败！');
        },
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
.text{
    /*margin: 10px;*/
    /*border: 1px solid black;*/
    border-bottom: 2px solid lightgray;
}
.addArea{
    margin: 30px;
    width: 500px;
    padding-bottom: 20px;
}

.avatar-uploader {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar{
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}
.el-upload{
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader  {
    border-color: var(--el-color-primary);
}
.el-upload:hover{
    border-color: var(--el-color-primary);

}
.el-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
.avatar-uploader-icon{
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>