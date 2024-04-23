<template>
    <div class="box">
<!--        <h1>注册表</h1>-->
        <div class="register_box">
            <h3>注册表</h3>
            <el-form :model="form">
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别：" prop="sex">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="男">男</el-radio>
                        <el-radio label="女">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="爱好:" prop="hobby">
                    <el-checkbox-group v-model="form.hobbyList">
                        <el-checkbox label="游戏">游戏</el-checkbox>
                        <el-checkbox label="睡神">睡神</el-checkbox>
                        <el-checkbox label="吃货">吃货</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="技能：" prop="skill">
                    <el-select v-model="form.skillList">
                        <el-option label="java" value="java">java</el-option>
                        <el-option label="python" value="python">python</el-option>

                    </el-select>
                </el-form-item>
                <el-form-item label="信息介绍：" prop="info"></el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>


export default {
    name: "registerHomework",
    data(){
        return{
            form:{
                name:'',
                pwd:'',
                sex:'',
                hobbyList:[],
                skillList:[],
            },
        }
    }
}
</script>

<style scoped>
.box{
    /*text-align: center;*/
    /*margin-left: 800px;*/
    display: flex;
    justify-content: center;
    align-items: center;
}
.register_box{
    margin-top: 50px;
    border: 1px solid black;
    height: 500px;
    width: 400px;
    text-align: center;

}
</style>