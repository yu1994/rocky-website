<template>
  <div id="map"></div>
</template>

<script>
//import echarts from "echarts";
import "echarts/map/js/world";
// import echarts from "echarts/lib/chart/map"
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
// require('echarts/theme/macarons') // echarts theme
import worldData from "../utils/worldData";
import partner from "../utils/partnerData";
export default {
  name: "echartsMap",
  mounted() {
    this.$nextTick(() => {
      this.initMapChart();
    });
  },
  methods: {
    initMapChart() {
      let geoCoordMap = worldData;
      let BJData = partner.data;
      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord]
            });
          }
        }
        return res;
      };
      const mapColor = [ "#ffffff", "#33D2E2", "#FF4D56" ];
      var series = [];
      [["杭州", BJData]].forEach(function(item, i) {
        series.push(
          {
            name: item[0],
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              // color: "#fff",
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                // color: color[3],
                width: 0,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0],
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: mapColor[2],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0],
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: function(val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: mapColor[0]
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name]
              };
            })
          }
        );
      });
      this.chart = echarts.init(document.querySelector("#map"));
      const option = {
        backgroundColor: "#020D49",
        // title: {
        //   text: "全球战略地图",
        //   left: "center",
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
        // tooltip : {
        //   trigger: 'item'
        // },
        geo: {
          map: "world",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          zoom: 1.2,
          itemStyle: {
            normal: {
              areaColor: ["#33D2E1"],
              borderColor: "#404a59"
            },
            emphasis: {  /*选中的时候*/
              areaColor: "#FF9100"
            }
          }
          // regions: [
          //   {
          //     name: "安哥拉",
          //     itemStyle: {
          //       areaColor: "#ffffff",
          //       color: "#ffffff"
          //     }
          //   }
          // ]
        },
        series: series
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style scoped lang="stylus">
#map
  width 100%
  height 800px
  background-color #020D49
  padding 100px 0 0
</style>
