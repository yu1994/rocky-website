<template>
  <div class="tab">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{ name: 'home' }">{{ $t("nav.home") }}</router-link>
      </li>
      <li v-for="(item, index) in list" :key="index">
        <router-link
          :to="{ name: item.name }"
          :class="{ active: index == list.length - 1 && essay === '' }"
          >{{ $t(item.meta.name) }}</router-link
        >
      </li>
      <li v-if="essay !== '' ">
        <a class="active" href="javascript: void 0">{{essay}}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: {
    essay: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    for (let i = 0, len = this.$route.matched.length; i < len; i++) {
      if (this.$route.matched[i].meta.name) {
        this.list.push(this.$route.matched[i]);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
.tab
  margin 30px auto
.breadcrumb
    padding 8px 0;
    background-color transparent
    text-align left
    margin-bottom 0
    li
      font-size 16px
      color #464646
    a
        font-size 16px
        color #464646
    .active
        font-size 16px
        color #5695F2
</style>
