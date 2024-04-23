<template>
<!--    当前页面为销售统计——商品统计的vue组件页-->
    <div class="box">
<!--        head块里面是一个时间选择器-->
        <div class="head">
            <p>选择时间</p>
            <div class="demo_range">
                <el-time-picker
                    v-model="value1"
                    is-range
                    range-separator="To"
                    start-placeholder="Start time"
                    end-placeholder="End time"
                />
            </div>
            <el-button  style="margin-top: 8px;" type="primary ">查询</el-button>
        </div>
<!--        下面为echarts图表-->
        <div class="echarts_index" style="background-color: white">
            <div ref="chart" style="width: 100%;height: 400px"></div>
        </div>
    </div>
</template>

<script>
//引入echarts图表
import * as echarts from 'echarts'
export default {
    name: "goodsStatistics",
    // 通过钩子函数将图表挂载到当前组件的生命周期中
    mounted() {
        this.initChart();
    },
    methods:{
        // 以下就是图表的配置
        initChart(){
            const chartDom = this.$refs.chart;
            const myChart = echarts.init(chartDom);
            const option = {
                // 图例
                legend:{
                    data:['邮件销售','联盟广告','视频广告','直接访问','搜索引擎']
                },
                // 标题
                title:{
                    text:'堆叠区域图'
                },
                tooltip:{},
                // x轴
                xAxis:{
                    data:['周一','周二','周三','周四','周五','周六','周日'],
                },
                // y轴
                yAxis:{},
                // 数据
                series:[
                    {
                        name:'邮件销售',
                        type:'line',
                        areaStyle:{},
                        // stack: 'x',
                        data:[100,150,120,180,160,170,180]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        areaStyle:{},
                        // stack: 'x',
                        data:[380,400,420,450,350,370,360]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        areaStyle:{},
                        // stack: 'x',
                        data:[500,520,530,500,550,700,900]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        areaStyle:{},
                        // stack: 'x',
                        data:[800,850,800,900,950,1200,1400]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        areaStyle:{},
                        // stack: 'x',
                        data:[1600,1800,1750,1780,2200,2500,2550]
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
    /*height: 100%;*/
    width: 100%;
    /*border: 1px solid black;*/
    background-color: white;
    /*margin: 20px;*/
}
.head{
    padding-bottom: 20px;
    display: flex;
    /*margin-left: 30px;*/
    background-color: #EDEFF1;
}
.head > p{
    width: 60px;
    text-align: left;
    font-size: 13px;
    padding-top: 5px;
    font-weight: bold;
}
.demo_range{
    margin: 8px;
}
.el-date-editor{
    margin: 8px;
}
.echarts_index{
    /*width: 100%;*/
    /*border: 1px solid black;*/
    margin: 10px;
    background-color: white;

}
</style>