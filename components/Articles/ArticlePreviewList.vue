<template>
  <div class="grid-list" :class="'layout' + data.data.item_id">
    <h2 class="title">
      {{ data.data.custom_item_name }}
    </h2>
    <app-article-preview v-for="(dataItem,index) in data.element_item.list_items" :key="index" :dataItem="dataItem" :imageSize='imageSize[index]' />
    <article v-if="readIt" class="mini-articles">
      <h5>
        <span>Recommended</span>
        Articles
      </h5>
      <div class="mini-article__preview">
        <img src="https://picsum.photos/50/50?image=0" alt="related">
      </div>
      <div class="mini-article__preview">
        <img src="https://picsum.photos/50/50?image=10" alt="related">
      </div>
      <div class="mini-article__preview">
        <img src="https://picsum.photos/50/50?image=20" alt="related">
      </div>
      <div class="mini-article__preview">
        <img src="https://picsum.photos/50/50?image=30" alt="related">
      </div>
    </article>
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
  },
  data() {
    return {
      readIt: this.$store.state.scrolled
    };
  },
  computed: {
    imageSize() {
      var size;
      switch (this.data.data.item_id) {
        case "1":
          size = [
            "http://192.168.0.158:8888/unsafe/200x264/smart/",
            "http://192.168.0.158:8888/unsafe/344x456/smart/",
            "http://192.168.0.158:8888/unsafe/492x400/smart/",
            "http://192.168.0.158:8888/unsafe/272x224/smart/"
          ];
          break;
        case "2":
          size = [
            "http://192.168.0.158:8888/unsafe/652x436/smart/",
            "http://192.168.0.158:8888/unsafe/273x227/smart/",
            "http://192.168.0.158:8888/unsafe/273x227/smart/",
            "http://192.168.0.158:8888/unsafe/273x227/smart/"
          ];
          break;
        case "3":
          size = [
            "http://192.168.0.158:8888/unsafe/272x360/smart/",
            "http://192.168.0.158:8888/unsafe/272x224/smart/",
            "http://192.168.0.158:8888/unsafe/492x400/smart/",
            "http://192.168.0.158:8888/unsafe/272x224/smart/",
            "http://192.168.0.158:8888/unsafe/272x360/smart/"
          ];
          break;
        case "4":
          size = [
            "http://192.168.0.158:8888/unsafe/416x352/smart/",
            "http://192.168.0.158:8888/unsafe/416x352/smart/",
            "http://192.168.0.158:8888/unsafe/416x352/smart/",
            "http://192.168.0.158:8888/unsafe/416x352/smart/",
            "http://192.168.0.158:8888/unsafe/416x352/smart/",
            "http://192.168.0.158:8888/unsafe/416x352/smart/"
          ];
          break;
        case "5":
          size = [
            "http://192.168.0.158:8888/unsafe/272x224/smart/",
            "http://192.168.0.158:8888/unsafe/272x360/smart/",
            "http://192.168.0.158:8888/unsafe/272x360/smart/",
            "http://192.168.0.158:8888/unsafe/188x264/smart/",
            "http://192.168.0.158:8888/unsafe/272x224/smart/",
            "http://192.168.0.158:8888/unsafe/272x224/smart/"
          ];
          break;
        case "7":
          size = [
            "http://192.168.0.158:8888/unsafe/428x424/smart/",
            "http://192.168.0.158:8888/unsafe/428x424/smart/",
            "http://192.168.0.158:8888/unsafe/428x424/smart/",
            "http://192.168.0.158:8888/unsafe/428x424/smart/",
            "http://192.168.0.158:8888/unsafe/428x424/smart/"
          ];
          break;
        default:
          size = "I have never heard of that fruit...";
      }
      return size;
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/settings";

.mini-articles {
  grid-column: 1/-1;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4fr);
  grid-template-rows: 2;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  @include breakpoint(desktop) {
    display: none;
  }
  h5 {
    grid-row: 1;
    grid-column: 2/4;
    margin-bottom: 2rem;
    span {
      font-family: "Lato-Black";
    }
  }
  .mini-article__preview {
    grid-row: 2;
    img {
      width: 100%;
    }
  }
}
</style>
