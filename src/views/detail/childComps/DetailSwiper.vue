<template>
  <swiper class="detail-swiper" v-if="dataReady">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'
  export default {
    name: 'DetailSwiper',
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper, SwiperItem
    },
    data: function () {
      return {
        dataReady: false,
      }
    },
    watch: {
      topImages: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal.length > 0) {
            this.dataReady = true;
          }
        }
      }
    }
  };
</script>
<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>