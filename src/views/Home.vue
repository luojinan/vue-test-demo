<template>
  <div class="home">
    <my-cell v-model="isShowContent">
      <div>
        <p>展开内容1</p>
        <p>展开内容2</p>
        <p>展开内容3</p>
      </div>
    </my-cell>
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
}
</style>
