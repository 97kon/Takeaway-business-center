<template>
<!--    当前页面为销售统计——订单统计-->
    <div class="box">
<!--        以下是一个时间选择器-->
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
            <el-button  style="margin-top: 8px;" type="primary">查询</el-button>
        </div>
<!--        以下是echarts图表-->
        <div class="echarts_index" style="background-color: white">
            <div ref="chart" style="width: 100%;height: 400px"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: "ordersStatistics",
    // 将图表挂载到这个组件的生命周期中
    mounted() {
        this.initChart();
    },
    methods:{
        initChart(){
            const chartDom = this.$refs.chart;
            const myChart = echarts.init(chartDom);
            const option = {
                // 图例
                legend:{
                    data:['蒸发量','降水量']
                },
                // 标题
                title:{
                    text:''
                },
                tooltip:{},
                // x轴
                xAxis:{
                    data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                },
                yAxis:{},
                // 数据
                series:[
                    {
                        name:'蒸发量',
                        type:'bar',
                        // areaStyle:{},
                        // stack: 'x',
                        data:[10,13,16,18,19,21,50,120,160,100,80,50]
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        // areaStyle:{},
                        // stack: 'x',
                        data:[10,13,16,18,19,21,50,120,160,100,80,50]
                    },
                    {
                        name:'平均温度',
                        type:'line',
                        // areaStyle:{},
                        // stack: 'x',
                        // data:[,13,16,18,19,21,50,120,160,100,80,50]
                    },

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