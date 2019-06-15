<template>
  <div class="coverage container">
    <div class="row">
      <ul>
        <li
          class="col-md-4 col-sm-6 wow fadeInUp"
          v-for="(item, key) in list"
          :key="key"
          :data-wow-delay="key > 0 ? 0.2 * key + 's' : 0"
        >
          <img class="img-responsive" v-lazy="item" />
        </li>
      </ul>
      <p class="">{{ remark }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "coverage",
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    remark: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="stylus">
.coverage
    margin 34px auto
    ul
        li
            margin 0 0 15px 0
            text-align center
            img
                max-width 294px
                display inline-block
    p
        font-size:19px;
        font-weight:bold;
        text-align center
        color:rgba(51,51,51,1);
</style>
