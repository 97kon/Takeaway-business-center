<template>
<!--    当前页面为账号管理——添加账号的vue组件-->
    <div class="box">
<!--        下面依旧是text标题样式-->
        <div class="text">
            <p style="font-size: 17px;font-weight: bold;margin-left: 15px;padding-top: 10px">添加账号</p>
        </div>
<!--        下面就是表单-->
        <div class="area">
            <el-form>
<!--                form表单三个部分，账号、密码、用户组select选择器-->
                <el-form-item label="账号">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="用户组">
                    <el-select >
                        <el-option></el-option>
                        <el-option></el-option>
                        <el-option></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
<!--        下面就是俩按钮-->
        <div class="submit">
            <el-button type="primary">添加</el-button>
            <el-button>重置</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "addAccount",
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
.area{
    width: 500px;
    margin: 30px;
}
.submit{
    margin-left: 70px;
    padding-bottom: 30px;
}
</style>