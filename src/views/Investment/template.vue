<template>
  <div class="investment">
    <section class="aboveBg">
      <above-bg>
        <img slot="bg" src="../../assets/investment/aboveBg.png" width="100%" />
        <div slot="sign">
          <p>投资关系</p>
          <p class="en">Investment relationship</p>
        </div>
      </above-bg>
    </section>
    <router-view></router-view>
  </div>
</template>
<script>
import aboveBg from "@/components/aboveBg";
export default {
  name: "Investment",
  data() {
    return {
      analyzeList: [
        {
          organization: "巴莱克银行",
          person: "赵晓光",
          tel: "+1(212)526-2268"
        },
        {
          organization: "美国银行美林",
          person: "梁伟亮",
          tel: "(852)21617189"
        },
        { organization: "中银国际", person: "张译文", tel: "+1(212)526-2268" },
        {
          organization: "巴莱克银行",
          person: "赵晓光",
          tel: "+1(212)526-2268"
        },
        {
          organization: "巴莱克银行",
          person: "赵晓光",
          tel: "+1(212)526-2268"
        },
        {
          organization: "巴莱克银行",
          person: "赵晓光",
          tel: "+1(212)526-2268"
        },
        { organization: "巴莱克银行", person: "赵晓光", tel: "+1(212)526-2268" }
      ]
    };
  },
  components: { aboveBg }
};
</script>
