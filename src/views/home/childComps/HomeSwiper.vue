<template>
  <swiper class="swiper-container" v-if="dataReady">
    <!-- 插入内容 -->
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
    <!-- end -->
  </swiper>
</template>
<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data: function () {
      return {
        dataReady: false,
      }
    },
    components: {

      Swiper, SwiperItem
    },
    watch: {
      banners: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal.length > 0) {
            this.dataReady = true;
          }
          console.log(55, newVal)
        }
      }
    }
  }
</script>
<style scoped>

</style>