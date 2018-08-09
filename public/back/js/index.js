$(function(){

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector('.echarts_1'));
  
  // 指定图表的配置项和数据
  var option = {
    //大标题
      title: {
          text: '2017年注册人数'
      },
      //提示框组件
      tooltip: {},
      //图例
      legend: {
          data:['销量']
      },
      //x轴刻度
      xAxis: {
          data: ["1月","2月","3月","4月","5月","6月"]
      },
      //y轴刻度 应该根据数据动态生成
      yAxis: {},
      series: [{
          name: '人数',
          type: 'bar',
          data: [1500, 2000, 2500, 3000, 1800, 2300]
      }]
  };
  
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);







   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.querySelector('.echarts_1'));
  
   // 指定图表的配置项和数据
   var option = {
     //大标题
       title: {
           text: '2017年注册人数'
       },
       //提示框组件
       tooltip: {},
       //图例
       legend: {
           data:['销量']
       },
       //x轴刻度
       xAxis: {
           data: ["1月","2月","3月","4月","5月","6月"]
       },
       //y轴刻度 应该根据数据动态生成
       yAxis: {},
       series: [{
           name: '人数',
           //line 折线图 pie 饼状图 
           type: 'bar',
           data: [1500, 2000, 2500, 3000, 1800, 2300]
       }]
};
   
   // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);



   //柱状图
   // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector('.echarts_1'));
  
  // 指定图表的配置项和数据
  var option = {
    //大标题
      title: {
          text: '2017年注册人数'
      },
      //提示框组件
      tooltip: {},
      //图例
      legend: {
          data:['销量']
      },
      //x轴刻度
      xAxis: {
          data: ["1月","2月","3月","4月","5月","6月"]
      },
      //y轴刻度 应该根据数据动态生成
      yAxis: {},
      series: [{
          name: '人数',
          type: 'bar',
          data: [1500, 2000, 2500, 3000, 1800, 2300]
      }]
  };
  
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);







   // 基于准备好的dom，初始化echarts实例
   var myChart2 = echarts.init(document.querySelector('.echarts_2'));
  
   // 指定图表的配置项和数据
   var option2 ={
    title : {
        text: '热门品牌销售',
        subtext: '2017年6月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    //图例
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪','新百伦','李宁','阿迪王']
    },
    series : [
        {
            name: '品牌',
            type: 'pie',
            //配置直径
            radius : '60%',
            //圆心位置
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'阿迪'},
                {value:234, name:'新百伦'},
                {value:135, name:'李宁'},
                {value:1548, name:'阿迪王'}
            ],
            //添加阴影效果
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

   
   // 使用刚指定的配置项和数据显示图表。
   myChart2.setOption(option2);
})