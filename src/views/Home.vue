<template>
  <t-page ref="page">
    <div class="home">
      <my-cell v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :key="item" v-model="isShowContent" class="cell">
        <div>
          <p>展开内容1</p>
          <p>展开内容2</p>
          <p>展开内容3</p>
        </div>
      </my-cell>
      <div class="back-to-top" @click="toTop">👆</div>
    </div>
  </t-page>
</template>

<script>
import MyCell from '../components/MyCell'
import TPage from '../components/tPage/tPage.vue'
export default {
  name: "Home",
  components: {
    MyCell,TPage
  },
  data(){
    return {
      isShowContent: true
    }
  },
  methods: {
    // 递归滚动事件
    scrollToTop(position) {
      // 使用requestAnimationFrame(下一次重绘之前调用callback)，如果没有则使用setTimeOut
      if(!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
          return setTimeout(callback, 20)
        }
      }
      const page = this.$refs.page.$el.childNodes[1]
      // console.dir(page);
      console.log('当前位置距离顶部',page.scrollTop)
      let scrollTopDistance = page.scrollTop
      function smoothScroll() {
        // 滚到顶部，那么position传过来的就是0，下面这个distance肯定就是负值。
        let distance = position - scrollTopDistance;
        // 每次滚动的距离要不一样，制造一个缓冲效果
        scrollTopDistance = scrollTopDistance + distance / 5;
        // console.log('当前位置与目标位置相距', distance);
        // 距离转正数,与目标距离相距小于1时直接到目标位置,否则继续递归
        if(Math.abs(distance) < 1) {
          page.scrollTo(0, position); // 滚动到目标位置
        }else {
          page.scrollTo(0, scrollTopDistance);  // 滚动到下一阶段位置
          requestAnimationFrame(smoothScroll);  // 页面重绘后,递归重新计算下一轮滚动
        }
      }
      smoothScroll();
    },
    toTop() {
      this.scrollToTop(0)
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #eee;
  min-height: 100vh;
  font-size: 14px;
  color: #333;
  .cell{
    margin-bottom: 20px;
  }
  .back-to-top{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: .3);
  }
}
</style>
