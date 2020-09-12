<template>
  <div class="home">
    <my-cell />
  </div>
</template>

<script>
import MyCell from '../components/MyCell'
export default {
  name: "Home",
  components: {
    MyCell
  },
  data(){
    return {
      isShowContent: false
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #eee;
  min-height: 100vh;
  font-size: 14px;
  color: #333;
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
}
</style>
