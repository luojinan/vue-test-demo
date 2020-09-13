<template>
<div class="cell-wrapper">
  <div class="cell" @click="handelCell">标题</div>
  <div class="cell-content" :class="value?'animate':''">
    <slot />
  </div>
</div>
</template>

<script>
export default {
  name: "cell",
  props:{
      value:{
        type:Boolean,
        default:false
      }
  },
  methods:{
    handelCell(){
      this.$emit('input',!this.value)
    }
  }
};
</script>
<style lang="scss" scoped>
.cell-wrapper{
  .cell{
    background-color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
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
