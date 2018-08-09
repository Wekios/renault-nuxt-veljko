<template>
  <div>
    <h2>
      {{ data.data.custom_item_name }}
    </h2>
    <div class="grid-list" :class="'layout' + data.data.item_id">
      <app-article-preview v-for="(dataItem,index) in data.element_item.list_items" :key="index" :dataItem="dataItem" />
    </div>
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
.grid-list {
  display: grid;
  text-align: left;
  > div {
    position: relative;
    top: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      top: -10px;
    }
  }
}

.layout1 {
  grid-template-columns: 15.6rem 16rem;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  @include breakpoint(desktop) {
    grid-template-columns: 20rem 34.4rem 49.2rem;
    grid-template-rows: 13.6rem 45.6rem;
    grid-column-gap: 3.2rem;
    grid-row-gap: 0;
  }
  align-items: baseline;
  &__title {
    grid-column: 1;
  }
  .item1 {
    grid-row-start: 2;
    grid-column-start: 1;
    img {
      height: 264px;
    }
  }

  .item2 {
    grid-row-start: 2;
    grid-column-start: 2;
    img {
      height: 456px;
    }
  }

  .item3 {
    grid-row-start: 1;
    grid-column-start: 3;
    img {
      height: 400px;
    }
  }

  .item4 {
    grid-row-start: 3;
    grid-column-start: 3;
    display: flex;
    img {
      height: 224px;
      width: 272px;
      margin-right: 15px;
    }
  }
}

.layout2::before {
  content: "";
  background: lightgray;
  height: 80%;
  width: 110%;
  position: absolute;
  top: -5%;
  left: -5%;
}

.layout2 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 463px 227px;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  position: relative;

  .item1 {
    grid-row-start: 1;
    grid-column: 1/-1;
    display: flex;
    flex-direction: row-reverse;

    .text-content {
      background: pink;
      padding: 23px 30px 64px 32px;
      h4 {
        font-size: 28px;
        line-height: 30px;
      }
    }
    img {
      width: 66%;
    }
  }

  .item2 {
    grid-row-start: 2;
    grid-column: 1;
  }

  .item3 {
    grid-row-start: 2;
    grid-column-start: 2;
  }

  .item4 {
    grid-row-start: 2;
    grid-column-start: 3;
  }
}
</style>
