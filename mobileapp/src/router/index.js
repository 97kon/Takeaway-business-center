import {createRouter, createWebHashHistory} from 'vue-router';
import test1 from "@/components/test1.vue";
import test2 from "@/components/test2.vue";
import echartsOne from "@/components/echartsOne.vue";
import registerHomework from "@/pages/registerHomework.vue";
import ordersManage from "@/components/ordersManage.vue";
// import index from "vuex";
import index from "@/pages/index.vue";
import myMusicPlayer from "@/pages/myMusicPlayer.vue";
import goodsAdd from "@/components/goodsAdd.vue";
import goodsList from "@/components/goodsList.vue";
import goodsClassify from "@/components/goodsClassify.vue";
import storeMange from "@/components/storeMange.vue";
import accountList from "@/components/accountList.vue";
import addAccount from "@/components/addAccount.vue";
import resetPwd from "@/components/resetPwd.vue";
import goodsStatistics from "@/components/goodsStatistics.vue";
import ordersStatistics from "@/components/ordersStatistics.vue";
import login from "@/pages/login.vue";
import demo from "@/components/demo.vue";
//将路由暴露出来
const routes = [
    {
        path: '/test1',
        name: 'test1',
        component: test1
    },
    {
        path: '/myMusicPlayer',
        name: 'myMusicPlayer',
        component: myMusicPlayer
    },
    {
        path: '/test2',
        name: 'test2',
        component: test2
    },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/echartsOne',
        name: 'echartsOne',
        component: echartsOne
    },
    {
        path: '/registerHomework',
        name: 'registerHomework',
        component: registerHomework
    },
    {
        path: '/ordersManage',
        name: 'ordersManage',
        component: ordersManage
    },
    {
        path:'/goodsList',
        name:'goodsList',
        component: goodsList
    },
    {
        path: '/goodsAdd',
        name: 'goodsAdd',
        component: goodsAdd
    },
    {
        path: '/goodsClassify',
        name: 'goodsClassify',
        component: goodsClassify
    },
    {
        path: '/storeMange',
        name: 'storeMange',
        component: storeMange
    },
    {
        path: '/accountList',
        name: 'accountList',
        component: accountList
    },
    {
        path: '/addAccount',
        name: 'addAccount',
        component: addAccount
    },
    {
        path: '/resetPwd',
        name: 'resetPwd',
        component: resetPwd
    },
    {
        path: '/goodsStatistics',
        name: 'goodsStatistics',
        component: goodsStatistics
    },
    {
        path: '/ordersStatistics',
        name: 'ordersStatistics',
        component: ordersStatistics
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        redirect:'/login'
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo
    }

];
//  创建一个路由器，History()模式
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
});

export default router
