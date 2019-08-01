<template>
  <ul class="financeList clearfix" v-if="show">
    <li class="col-md-6" v-for="(item, key) in financeList" :key="key">
      <div class="year">
        <i class="line">{{ key }}</i>
      </div>
      <ol class="pdf clearfix row">
        <li class="col-xs-6" v-for="(val, index) in item" :key="index">
          <button @click="pdfHandle(val)">
            <i></i><span>{{ val.title }}</span>
          </button>
        </li>
      </ol>
    </li>
  </ul>
</template>

<script>
import { financeAPI } from "../api/investmentAPI";
export default {
  name: "financeTemp",
  props: {
    financeConfig: {
      type: Object
    }
  },
  data() {
    return {
      financeList: {},
      show: false
    };
  },
  created() {
    this.getFinanceAPI();
  },
  methods: {
    getFinanceAPI() {
      /*  参数 status传1 type 3财务报表 page,rows当前面及多少条。  */
      financeAPI(this.financeConfig).then(res => {
        if (res.data.list) {
          for (let i = 0, len = res.data.list.length; i < len; i++) {
            if (this.financeList[res.data.list[i].fileYear]) {
              this.financeList[res.data.list[i].fileYear].push(
                res.data.list[i]
              );
            } else {
              this.financeList[res.data.list[i].fileYear] = [];
              this.financeList[res.data.list[i].fileYear].push(
                res.data.list[i]
              );
            }
          }
          this.show = true;
        }
        console.log(this.financeList);
      });
    },
    pdfHandle(item) {
      window.open(item.filePath);
    }
  }
};
</script>

<style scoped lang="stylus">
.financeList
    margin-bottom 0
    ol
        margin-bottom 0
    .year
        position relative
        width 100%
        border-bottom 1px solid rgba(191,191,191,1)
        margin 39px 0 28px
        text-align left
        i
            position absolute
            left 0
            top 50%
            background-color #ffffff
            font-size:18px;
            padding-right 10px
            font-style normal
            color:rgba(86,149,242,1);
            transform translateY(-50%)
    .pdf
        li
          margin-bottom 15px
        li
            @media (max-width: 768px){
                button {
                    width 100% !important
                }
            }
            button
                width 209px
                height 52px
                line-height 52px
                outline none
                background-color #ffffff
                border:1px solid rgba(191,191,191,1);
                border-radius:5px;
                font-size 0
                overflow hidden
                white-space nowrap
                &:hover
                    background-color #5695F2
                span
                    display inline-block
                    vertical-align middle
                    font-size:16px;
                    /*font-weight:bold;*/
                    color:rgba(51,51,51,1);
                i
                    display inline-block
                    vertical-align middle
                    width 13px
                    height 16px
                    margin-right 7px
                    background url("../assets/investment/icon .png") no-repeat
</style>
