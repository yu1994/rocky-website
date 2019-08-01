<template>
  <nav aria-label="Page navigation" v-if="totalPage > 0">
    <ul class="pagination pagination-lg">
      <li>
        <a href="javascript:void 0" aria-label="Previous" @click="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="(item, key) in totalPage"
        :key="key"
        :class="{ active: item == active }"
      >
        <a href="javascript:void 0" @click="$emit('clientPage', item)">{{
          item
        }}</a>
      </li>
      <li>
        <a href="javascript:void 0" aria-label="Next" @click="next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  props: {
    totalPage: {
      type: Number
    },
    active: {
      type: Number
    }
  },
  methods: {
    Previous() {
      this.prevNum = this.active;
      if (this.active > 1) {
        this.prevNum--;
        this.$emit("clientPage", this.prevNum);
      }
    },
    next() {
      this.nextNum = this.active;
      if (this.active < this.totalPage) {
        this.nextNum++;
        this.$emit("clientPage", this.nextNum);
      }
    }
  }
};
</script>

<style scoped>
.pagination > li > a,
.pagination > li > span {
  border: none;
  color: #333333;
  background-color: transparent;
}
.pagination > .active > a {
  color: #5695f2;
  background-color: transparent;
}
</style>
