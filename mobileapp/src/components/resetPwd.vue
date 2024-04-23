<template>
<!--    当前页面为账号管理——修改密码的vue组件-->
    <div class="box">
<!--        下面依旧是个标题-->
        <div class="text">
            <p style="font-size: 17px;font-weight: bold;margin-left: 15px;padding-top: 10px">修改密码</p>
        </div>
<!--        表单-->
        <div class="area">
            <el-form>
<!--                表单三个部份，账号、密码、确认新密码、都是input输入框-->
                <el-form-item label="账号">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </div>
<!--        下面俩按钮-->
        <div class="submit">
            <el-button type="primary">确定</el-button>
            <el-button>重置</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "resetPwd"
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
.area{
    width: 500px;
    margin: 30px;
}
.submit{
    margin-left: 70px;
    padding-bottom: 30px;
}
</style>