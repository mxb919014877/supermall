<template>
  <div class="wrapper" ref="aaaa">

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import { backTopMixin } from 'common/mixin'

  export default {
    name: "Category",
    mixins: [backTopMixin],
    data() {
      return {
        scroll: null
      }
    },
    components: {

    },
    //  组件创建完后调用
    created() {
      // console.log(this.$refs.aaaa);
      // this.scroll = new BScroll(this.$refs.aaaa, {

      // })
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.aaaa, {
        // probeType: 3,
        // pullUpLoad: true,

      })
      this.scroll.on('scroll', (position) => {
        // console.log(position);
      })

      this.scroll.on('pullingUp', () => {
        console.log("上拉加载更多");

      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>