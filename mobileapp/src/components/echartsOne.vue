<template>
<!--    该vue组件是后台首页的页面-->
    <div class="box">
<!--        下面这个data_show的块级元素用了一个弹性布局让下面四个块水平排列-->
        <div class="data_show">
<!--            下面的每一个show的块级元素也都是flex弹性布局，让show_icon（这里的图标用的elementplus里面的图标库）和show_text水平排列-->
            <div class="show">
                <div class="show_icon">
                    <el-icon :size="70" color="#0099FF"><Tickets /></el-icon>
                </div>
                <div class="show_text">
                    <h4 style="color: #CCCCCC">总订单</h4>
                    <h4>102,400</h4>
                </div>
            </div>
            <div class="show">
                <div class="show_icon">
                    <el-icon :size="70" color=" #CC66CC"><Coin /></el-icon>
                </div>
                <div class="show_text">
                    <h4 style="color: #CCCCCC">总销售额</h4>
                    <h4>102,400</h4>
                </div>
            </div>
            <div class="show">
                <div class="show_icon">
<!--                    <el-icon :size="70" color="#0099FF"><Tickets /></el-icon>-->
                    <el-icon :size="70" color="#0066CC"><Document /></el-icon>
                </div>
                <div class="show_text">
                    <h4 style="color: #CCCCCC">今日订单数</h4>
                    <h4>102,400</h4>
                </div>
            </div>
            <div class="show">
                <div class="show_icon">
<!--                    <el-icon :size="70" color="#0099FF"><Tickets /></el-icon>-->
                    <el-icon :size="70" color="#00FF33"><Money /></el-icon>
                </div>
                <div class="show_text">
                    <h4 style="color: #CCCCCC">今日销售额</h4>
                    <h4>102,400</h4>
                </div>
            </div>
        </div>
<!--        这里整合的echarts图表，图表的配置在js里面-->
        <div class="echarts_index">
            <div ref="chart" style="width: 100%;height: 400px"></div>
        </div>
    </div>
</template>

<script>
//下面是echarts插件引入
import * as echarts from 'echarts'
import {Coin, Document, Money, Tickets} from "@element-plus/icons-vue";
export default {
    name: "echartsOne",
    components:{
        Money,
        Document,
        Coin,
        Tickets
    },
    // 用钩子函数将echarts的配置挂载到这个vue组件的生命周期上
    mounted() {
        this.initChart();
    },
    methods:{
        // 这里就是当前vue组件的echarts图表的配置方法
        initChart(){
            const chartDom = this.$refs.chart;
            const myChart = echarts.init(chartDom);
            // 下面的option就是图表的样式配置
            const option = {
                // legend是配置的图例
                legend:{
                    data:['订单','销售额', '注册人数', '管理员人数']
                },
                // title是这个图表的标题
                title:{
                    text:'数据统计'
                },
                tooltip:{},
                // xAxis是这个图表的X轴
                xAxis:{
                    data:['2023/7/15','2023/7/16','2023/7/17','2023/7/18','2023/7/19'],
                },
                // yAxis是这个图表的y轴，但是当前图表并没有写死y轴，y轴的数据刻度根据数据的大小会进行自适应
                yAxis:{},
                // series是这个图表的数据了，每一条数据的name都要和图例里面的相匹配
                series:[
                    {
                        // 和图例里面的相匹配
                        name:'订单',
                        // 样式，当前表示也折现图
                        type:'line',
                        // stack: 'x',
                        // 参数的个数和x轴的个数相匹配
                        data:[50,55,52,60,61]
                    },
                    {
                        name:'销售额',
                        type:'line',
                        // stack: 'x',
                        data:[1000,1150,800,1750,1200]
                    },
                    {
                        name:'注册人数',
                        type:'line',
                        // stack: 'x',
                        data:[150,160,120,100,180]
                    },
                    {
                        name:'管理员人数',
                        type:'line',
                        // stack: 'x',
                        data:[155,56,74,36,81]
                    }
                ]
            }
            myChart.setOption(option)
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
    background-color: #EDEFF1;
    /*margin: 20px;*/
}
.data_show{
    display: flex;
    justify-content: center;
    align-items: center;
}
.show{
    height: 100px;
    /*width: 200px;*/
    width: 25%;
    background-color: white;
    /*border: 1px solid black;*/
    margin: 10px;
    display: flex;
    flex-direction: row;
}
.show_icon{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.show_text{
    flex: 1;
    text-align: center;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
}
.echarts_index{
    /*width: 100%;*/
    /*border: 1px solid black;*/
    margin: 10px;
    background-color: white;

}
</style>