<template>
  <div class="vuti-page vuti">
    <div class="vuti-page-top">
      <slot name="top"></slot>
    </div>
    <div class="vuti-page-middle">
      <slot></slot>
    </div>
    <div class="vuti-page-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "page"
};
</script>
<style lang="scss" scoped>
@import "./index.css";
</style>
