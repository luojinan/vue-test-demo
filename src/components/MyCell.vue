<template>
<div class="cell-wrapper">
  <div class="cell" @click="isShowContent=!isShowContent">标题</div>
  <div class="cell-content" :class="isShowContent?'animate':''">
    <p>展开内容</p>
    <p>展开内容</p>
    <p>展开内容</p>
  </div>
</div>
</template>

<script>
export default {
  name: "cell",
  props:{
      isShowContent:{
          type:Boolean,
          default:false
      }
  },
};
</script>
<style lang="scss" scoped>
.cell-wrapper{
  .cell{
    background-color: #fff;
    padding: 10px 20px;
    font-size: 16px;
  }
  .cell-content {
    padding: 0 20px;
    background-color: #fff;
    color: #666;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
}
</style>
