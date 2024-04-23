<template>
<!--    这个link是谷歌的标签库，用CDN的方式引入来使用的-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!--   这里采用了elementplus的Container布局容器，将页面分为header、aside、main三部分，分别是顶部导航栏el-header，左边侧边手风琴式的菜单栏el-aside，和中间的展示栏el-main -->
    <div class="common-layout" style="height: 100vh; border: 1px #304156 solid">
        <el-container style="height: 100%">
<!--            下面的el-header就是顶栏容器，里面放了logo、顶部导航、用户下拉框，用户头像-->
            <el-header style="background: linear-gradient( to right,#304156 200px, white 200px)">
<!--                我将el-header通过layout布局分成了20份，其中nav_box顶部导航栏占了14分，用户头像加用户下拉框占了6分-->
                <el-row :gutter="20">
<!--                    下面的logo块级元素就是我顶部的MIS的logo放置的地方，设置了一个点击就恢复首页的方法goHome但还未实现-->
                    <div class="logo" style="width: 190px;height: 60px" @click="goHome">
<!--                        <img src="@/assets/img/misIndex.png" class="logo" alt="管理系统">-->
                        <h1 style="color: white">Logo</h1>
                    </div>
<!--                    <el-col :span="3" style="border: 1px solid black;">-->
<!--                        <img src="../assets/logo.png" class="logo" alt="管理系统">-->
<!--                    </el-col>-->
<!--                    下面占14份区域就是顶部导航栏放置的区域-->
                    <el-col :span="14" class="col1" >
                        <div class="nav_box">
                            <div class="nav_1"  style="color: #1296DB"><p>首页</p></div>
<!--                            <div class="nav_2"><p style="color: white">系统概述</p></div>-->
<!--                            <div class="nav_3"><p style="color: white">系统功能</p></div>-->
<!--                            <div class="nav_4" ><p style="color: white">个人申请</p></div>-->
                        </div>
                    </el-col>
<!--                    下面占6份区域的就是用户下拉栏和用户头像的区域-->
                    <el-col :span="6">
<!--                        <el-dropdown>-->
<!--                              <span class="el-dropdown-link">-->
<!--                                  <p>admin</p>-->
<!--                                  <i class="material-icons">keyboard_arrow_down</i>-->

<!--                                <el-icon class="el-icon&#45;&#45;right">-->
<!--                                  <arrow-down />-->
<!--                                </el-icon>-->
<!--                              </span>-->
<!--                            <template #dropdown>-->
<!--                                <el-dropdown-menu>-->
<!--                                    <el-dropdown-item>个人资料</el-dropdown-item>-->
<!--                                    <el-dropdown-item>账号管理</el-dropdown-item>-->
<!--                                    <el-dropdown-item>设置</el-dropdown-item>-->
<!--                                    <el-dropdown-item divided @click="logout">退出系统</el-dropdown-item>-->
<!--                                </el-dropdown-menu>-->
<!--                            </template>-->
<!--                        </el-dropdown>-->
                        <div class="admin">
<!--                            <p>欢迎您，670</p>-->
                            <el-dropdown style="margin-right: 20px">
                                <span class="el-dropdown-link">
                                  欢迎你，670.
                                  <el-icon class="el-icon--right">
                                    <arrow-down />
                                  </el-icon>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                            <div class="admin_img">
                                <img src="@/assets/img/670.jpg"  alt="" style="width: 50px;border-radius: 50%; padding-top: 5px;">
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
<!--            下面的就是el-aside侧栏容器，里面就是实现的侧边手风琴式的菜单，使用了element plus的menu组件实现-->
            <el-container>
                <el-aside width="200px" style="height: 100%;background-color: #304156" >
                    <el-menu ref="menu"
                            :default-active="$route.path"
                             :active="activeIndex"
                             class="el-menu-vertical-demo"
                             active-text-color=" #1296DB"
                             background-color="#304156"
                             text-color="#fff"
                             @open="handleOpen"
                             @close="handleClose"
                             @select="handleMenuClick"
                             accordion>
<!--                        这个el-sub-menu里面的index属性就是用来实现SPA单页面应用的，比如当点击1-1，在el-main里面就显示1-1对应的vue组件-->
                        <el-sub-menu index="1">
                            <template #title>
<!--                                <i class="el-icon-location"></i>-->
<!--                                <el-icon><House /></el-icon>-->
                                <el-icon><HomeFilled /></el-icon>
                                <span>后台首页</span>
                            </template>
                            <el-menu-item index="1-1" style="background-color: #202F3F">首页</el-menu-item>

                            <!--                            <el-menu-item index="1-1" style="background-color: #202F3F">菜单1-1</el-menu-item>-->
<!--                            <el-menu-item index="1-2" style="background-color: #202F3F">菜单1-2</el-menu-item>-->
<!--                            <el-menu-item index="1-3" style="background-color: #202F3F">菜单1-3</el-menu-item>-->
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
<!--                                <i class="el-icon-menu"></i>-->
                                <el-icon><List /></el-icon>
                                <span>订单管理</span>
                            </template>
                            <el-menu-item index="2-1" style="background-color: #202F3F">订单管理</el-menu-item>

                        </el-sub-menu>
                        <el-sub-menu index="3">
                            <template #title>
<!--                                <i class="el-icon-menu"></i>-->
                                <el-icon><GoodsFilled /></el-icon>
                                <span>商品管理</span>
                            </template>
                            <el-menu-item index="3-1" style="background-color: #202F3F">商品列表</el-menu-item>
                            <el-menu-item index="3-2" style="background-color: #202F3F">商品添加</el-menu-item>
                            <el-menu-item index="3-3" style="background-color: #202F3F">商品分类</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="4">
                            <template #title>
<!--                                <i class="el-icon-menu"></i>-->
                                <el-icon><Shop /></el-icon>
                                <span>店铺管理</span>
                            </template>
                            <el-menu-item index="4-1" style="background-color: #202F3F">店铺管理</el-menu-item>
<!--                            <el-menu-item index="2-2" style="background-color: #202F3F">菜单2-2</el-menu-item>-->
                        </el-sub-menu>
                        <el-sub-menu index="5">
                            <template #title>
<!--                                <i class="el-icon-menu"></i>-->
<!--                                <el-icon><Avatar /></el-icon>-->
                                <el-icon><UserFilled /></el-icon>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item index="5-1" style="background-color: #202F3F">账号列表</el-menu-item>
                            <el-menu-item index="5-2" style="background-color: #202F3F">添加账号</el-menu-item>
                            <el-menu-item index="5-3" style="background-color: #202F3F">修改密码</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="6">
                            <template #title>
<!--                                <i class="el-icon-menu"></i>-->
<!--                                <el-icon><Histogram /></el-icon>-->
<!--                                <el-icon><UserFilled /></el-icon>-->
                                <el-icon><Histogram /></el-icon>
                                <span>销售统计</span>
                            </template>
                            <el-menu-item index="6-1" style="background-color: #202F3F">商品统计</el-menu-item>
                            <el-menu-item index="6-2" style="background-color: #202F3F">订单统计</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
<!--                这个el-main里面通过el-aside里面的侧边菜单控制显示对应的内容，通过单机的选项对应的index来控制，里面显示的内容就是<component>里面的内容，也就是currentComponent这个变量所指向的vue组件，通过js里面的handleMenuClick()方法实现-->
                <el-main style="height: 100%;background-color: #EDEFF1" ><component :is="showEcharts ? 'echartsOne' : currentComponent"></component></el-main>
            </el-container>
        </el-container>
    </div>



</template>

<script>
import {ElMain} from "element-plus";
import {ElIcon} from "element-plus";
import {ElSubMenu} from "element-plus";
import echartsOne from "@/components/echartsOne.vue";
import ordersManage from "@/components/ordersManage.vue";
import goodsList from "@/components/goodsList.vue";
import goodsAdd from "@/components/goodsAdd.vue";
import {
    ArrowDown,
    Avatar,
    GoodsFilled,
    Histogram,
    HomeFilled,
    House,
    List,
    Shop,
    UserFilled
} from "@element-plus/icons-vue";
import goodsClassify from "@/components/goodsClassify.vue";
import storeMange from "@/components/storeMange.vue";
import accountList from "@/components/accountList.vue";
import addAccount from "@/components/addAccount.vue";
import resetPwd from "@/components/resetPwd.vue";
import goodsStatistics from "@/components/goodsStatistics.vue";
import ordersStatistics from "@/components/ordersStatistics.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "index",
    data(){
        return{
            currentComponent:'echartsOne',
            showEcharts:false,
            activeIndex:'1',
        }
    },
    components: {
        UserFilled,
        Histogram,
        Avatar,
        Shop,
        GoodsFilled,
        HomeFilled,
        List,
        House,
        ArrowDown,
        // eslint-disable-next-line vue/no-unused-components
        ElMain, ElIcon, ElSubMenu,echartsOne,ordersManage,goodsList,goodsAdd,goodsClassify,
        storeMange,accountList,addAccount,resetPwd,goodsStatistics,ordersStatistics
    },
    methods: {
        // 这个handleMenuClick方法就是实现SPA的逻辑方法，通过点击侧边菜单栏对应的选项获取到index传入到这个方法，然后选择结构就会给对应的currentComponent赋对应的vue组件的路径名
        handleMenuClick(index) {
            switch (index) {
                case '1-1':
                    this.currentComponent = 'echartsOne'
                    break
                case '2-1':
                    this.currentComponent='ordersManage'
                    break
                case '3-1':
                    this.currentComponent='goodsList'
                    break
                case '3-2':
                    this.currentComponent='goodsAdd'
                    break
                case '3-3':
                    this.currentComponent='goodsClassify'
                    break
                case '4-1':
                    this.currentComponent='storeMange'
                    break
                case '5-1':
                    this.currentComponent='accountList'
                    break
                case '5-2':
                    this.currentComponent='addAccount'
                    break
                case '5-3':
                    this.currentComponent='resetPwd'
                    break
                case '6-1':
                    this.currentComponent='goodsStatistics'
                    break
                case '6-2':
                    this.currentComponent='ordersStatistics'
                    break
            }
        },
        // goHome(){
        //     // this.$router.push('/echartsOne')
        //     this.showEcharts=true;
        //     this.activeIndex='1';
        // }
    }
}
</script>

<style scoped>
.el-row{
    height: 60px;
}
.logo{
    /*width: 45px;*/
    height: 45px;
    /*margin: auto;*/
    /*margin-left: 30%;*/
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav_box{
    /*background-color: gray;*/
    display: flex;
    flex-direction: row;
    /*border: 1px black solid;*/
    width: 400px;
    text-align: center;
    height: 58px;
}
.nav_box > div{
    flex: 1;
}
.nav_box > div:hover{
    background-color: #434A50;
}
.col1{
    color: #F6F8FA;
}
.el-dropdown-link {
    color: #304156;
    /*text-align: center;*/
    display: flex;
    flex-direction: row;
}
/*.el-dropdown-link > i{*/
/*    flex: 1;*/
/*}*/
/*.el-dropdown-link > p{*/
/*    flex: 1;*/
/*    margin-top: 5px;*/
/*}*/
.el-menu-vertical-demo {
    width: 100%;
    border-radius: 0;
}
.admin{
    display: flex;
    flex-direction: row;
    /*text-align: left;*/
    justify-content: right;

}
.admin_img{
    display: flex;
    justify-content: center;
    align-items: center;
}
.example-showcase{
    cursor: pointer;
    color: var(--el-color-primary);
    /*color: black;*/
    display: flex;
    align-items: center;
}
.el-dropdown-link {
    cursor: pointer;
    /*color: var(--el-color-primary);*/
    color: #1296DB;
    /*color: black;*/
    display: flex;
    align-items: center;
}
</style>