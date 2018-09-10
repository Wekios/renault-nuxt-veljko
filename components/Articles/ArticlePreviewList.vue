<template>
  <div class="grid-list" :class="'layout' + data.data.item_id">
    <h2 class="title">
      {{ data.data.custom_item_name }}
    </h2>
    <app-article-preview v-for="(dataItem,index) in data.element_item.list_items" :key="index" :dataItem="dataItem" />
  </div>
</template>

<script>
import AppArticlePreview from "~/components/Articles/ArticlePreview";

export default {
  name: "node_list",
  props: {
    data: Object,
    required: true
  },
  components: {
    AppArticlePreview
  }
};
</script>

<style lang="scss">
// @import "~assets/scss/settings";
</style>
