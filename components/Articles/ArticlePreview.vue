<template>
  <nuxt-link tag='div' 
    :to="{path: '/articles/' + dataItem.id}" 
    v-if="dataItem.featured_image.length" 
    :class="'item' + ++this.$vnode.key">
      <img :src="dataItem.featured_image[0].data.file.url" :alt="dataItem.featured_image[0].data.seoalt">
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
    required: true
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
h4 {
  display: inline;
  font-size: 18px;
}
</style>