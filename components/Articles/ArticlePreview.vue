<template>
  <nuxt-link tag='div' v-if="dataItem.featured_image.length" :to="{path: '/article/' + dataItem.id}" :class="'item' + ++this.$vnode.key" class="item">
    <!-- <img :src="dataItem.featured_image[0].data.file.url" :alt="dataItem.featured_image[0].data.seoalt"> -->
    <img :src="featuredImage" :alt="dataItem.featured_image[0].data.seoalt">
    <div class="text-content">
      <h4> {{ dataItem.title }} </h4>
      <p> {{ dataItem.featured_image[0].data.caption }} </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "AppArticlePreview",
  props: {
    dataItem: Object,
    required: true,
    imageSize: String,
    required: true
  },
  computed: {
    featuredImage() {
      var image =
        this.imageSize + this.dataItem.featured_image[0].data.file.url;
      return image;
    }
  },
  mounted() {
    // console.log(this.dataItem);
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>