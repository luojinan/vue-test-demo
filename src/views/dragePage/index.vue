<template>
  <div class="drage-page">
    <div
      class="item"
      draggable
      @dragstart.stop="onDragstart"
      @dragend.stop="onDragend"
    >
      我可以拖拽哦
    </div>
    <div class="box" ref="wrap" @dragover.prevent @drop.stop="drop">
      <div
        class="list"
        v-for="item in [1,2,3,4]"
        :key="item"
        :ref="`dom${item}`" draggable @dragstart.stop="onDragstartList($event,item)" @dragend.stop="onDragentList" @dragenter.stop="onDragenter($event,item)"
      >
        <div class="list-item">
          可拖拽列表项目{{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fromDom:'',
      toDom:''
    }
  },
  methods: {
    drop (event) {
      let data = event.dataTransfer.getData('item')
      console.log('data: ', data)
    },
    onDragstartList(event,item){
      event.dataTransfer.setData('item', `可拖拽列表项${item}`)
      this.fromDom = this.$refs[`dom${item}`]
    },
    onDragentList(event){
      event.dataTransfer.clearData()
    },
    onDragstart(event) {
      console.log('onDragstart');
      event.dataTransfer.setData('item', '数据1')
    },
    onDragenter(event,item) {
      console.log('onDragenter');
      this.toDom = this.$refs[`dom${item}`]
      console.log(this.fromDom, this.toDom);
      this.$refs["wrap"].insertBefore(this.fromDom[0], this.toDom[0]); 
    },
    onDragend(event) {
      console.log('onDragend');
      event.dataTransfer.clearData()
    }
  }
}
</script>

<style lang="scss" scoped>
.drage-page{
  padding: 5px;
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  .item{
    border-radius: 10px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    background-color: #ccc;
    text-align: center;
  }
  .box{
    margin-left: 10px;
    flex: 1;
    border: 1px solid #ccc;
    text-align: center;
    .list{
      .list-item{
        background-color: #ccc;
        height: 40px;
        line-height: 40px;
        margin-bottom: 2px;
        border-radius: 8px;
      }
    }
  }
}
</style>