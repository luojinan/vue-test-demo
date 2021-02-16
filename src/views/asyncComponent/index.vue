<template>
<div>
    <button @click="asyncComponentName='child'">异步加载组件</button>
    <!-- <div v-if="show"> -->
        <!-- <child /> -->
        <!-- 不实用keepalive动态组件切换会重载 -->
        <component :is="asyncComponentName"/>
    <!-- </div> -->
</div>
</template>
<script>
export default {
    components:{
        'child':()=>import(/* webpackChunkName: "child" */'./child.vue')
    },
    data(){
        return {
            show:false,
            asyncComponentName:''
        }
    }
}
</script>