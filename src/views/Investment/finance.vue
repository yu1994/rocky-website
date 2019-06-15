<template>
  <section class="financeDetail">
    <div class="container">
      <breadcrumb></breadcrumb>
      <div>
        <more-title :title="'财务报告'"></more-title>
        <finance-temp :finance-config="financeConfig"></finance-temp>
      </div>
    </div>
  </section>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import moreTitle from "@/components/moreTitle";
import financeTemp from '@/components/financeTemp'
export default {
  name: "finance",
  data() {
    return {
      financeConfig: {
        status: 1,
        type: 3,
        page: 1,
        rows: 100
      }
    };
  },
  components: { breadcrumb, moreTitle, financeTemp }
};
</script>

<style scoped lang="stylus">
.financeDetail
    margin-bottom 100px
</style>
