<template>
  <div id="globalMap"></div>
</template>

<script>
import "echarts/map/js/world";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import worldData from "../utils/worldData";
import partner from "../utils/partnerData";
import { debounce } from "../utils";
export default {
  name: "globalMap",
  mounted() {
    this.$nextTick(() => {
      this.initMapChart();
    });
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener('resize', this.__resizeHandler)
  },
  methods: {
    initMapChart() {
      let geoCoordMap = worldData;
      let data = partner.data;
      let convertData = function(data) {
        let res = [];
        for (var i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      this.chart = echarts.init(document.querySelector("#globalMap"));
      const option = {
        backgroundColor: "#020D49",
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          y: "bottom",
          x: "right",
          data: ["pm2.5"],
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "world",
          label: {
            emphasis: {
              show: false
            }
          },
          zoom: 1.2, //比例
          roam: false, //是否缩放
          itemStyle: {
            normal: {
              areaColor: ["#33D2E1"],
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: [
          {

            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data.sort(function(a, b) {
                return b.value - a.value;
              })
            ),
            encode: {
              value: 2
            },
            symbolSize: function(val) {
              return val[2] * 2;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#FF4D56",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      };
      this.chart.setOption(option);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.__resizeHandler)
  }
};
</script>

<style scoped lang="stylus">
#globalMap
    width 100%
    height 800px
    background-color #020D49
    padding 100px 0 0
</style>
