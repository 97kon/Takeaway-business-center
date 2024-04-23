<template>
    <div class="box">
        <h1>这是上课demo</h1>
        <div class="form">
            <el-form >
                <el-form-item label="姓名：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                    <el-input v-model="form.sex"></el-input>
                </el-form-item>
                <el-form-item label="年龄：">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="getData()">提交</el-button>
            <el-button type="danger" @click="deleteData()">删除</el-button>
            <p v-show="isShow">{{form.name}}</p>
            <p v-show="isShow">{{form.sex}}</p>
            <p v-show="isShow">{{form.age}}</p>
            <p v-show="isShow">{{form.phone}}</p>
        </div>
    </div>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "demo",
    data(){
        return {
            isShow:false,
            form:{
                name:"",
                sex:"",
                age:'',
                phone:""
            }
        }
    },
    methods:{
        getData(){
          this.isShow = true
        },
        deleteData(){
            this.isShow = false
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
}
</style>