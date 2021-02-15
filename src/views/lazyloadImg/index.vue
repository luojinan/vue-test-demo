<template>
    <div class="lazyload">
        <div class="lazy-wrapper">
            <div v-for="item in 15" :key="item" class="lazy-item">
                <img :src="`${randomImg}${item}`" alt="" v-lazy="lazyImg">
            </div>
        </div>
    </div>
</template>

<script>
import {lazyLoadDirective} from './util.js'
export default {
    directives: lazyLoadDirective,
    data(){
        return {
            lazyImg:require('./loading.svg'),
            randomImg:'https://picsum.photos/360/400?random='
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.lazy-wrapper{
    height: 600px;      
    width: 60%;
    margin-left: 20%;
    margin-top: 40px;
    background-color: #eee;
    overflow: auto;
}
.lazy-item{
    height: 410px; /*必须要让图片上一层的div占位有高度才能撑开图片的可视区域 */
    text-align: center;
    line-height: 410px;
}
.lazy-item img{
    width: 100%;
    height: 100%;
}
</style>