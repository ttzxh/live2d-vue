<template>
  <div>
    <slot
      ><span
        v-for="(item, index) in className"
        :key="index"
        :class="[item]"
        @mouseenter="testEnter(index)"
        @click="testClick(index)"
      ></span
    ></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: ["className"],
  methods: {
    testClick(index) {
      this.$emit("itemClick", index, 1000);
    },
    testEnter(index) {
      this.$emit("itemEnter", index);
    },
  },
};
</script>

<style scoped="scoped">
span {
  cursor: pointer;
  display: block;
  line-height: 30px;
  text-align: center;
  transition: color 0.3s;
}
span:hover {
  color: #0684bd; /* #34495e */
}
</style>
