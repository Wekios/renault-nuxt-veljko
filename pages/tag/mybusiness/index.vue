<template>
  <main id="my-business">

    <!-- Header -->
    <header>

      <component v-if="component.type == 'image'" v-for="(component,index) in page" :is="'div'" :key="index" class="header-image" :style="{backgroundImage: 'url(' + component.data.file.url +')'}">

        <div class="header__text">

          <a href="#" class="c-btn c-btn--yellow header__text-category">
            my business
          </a>

          <component v-if="component.type == 'heading'" v-for="(component,index) in page" :is="'h1'" :key="index" class="header__text-title">
            {{ component.data.text }}
          </component>

        </div>

      </component>

      <h2 class="header__text-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, animi omnis voluptate magni possimus amet vero perferendis eaque quisquam eius ex saepe unde quaerat quod nemo. Mollitia facere debitis, sit quod tempora assumenda molestias officiis dolorum laboriosam natus, odio, molestiae laborum? Blanditiis temporibus in mollitia saepe, nam cupiditate sapiente nisi velit, excepturi fugiat sed consequuntur. Nemo eaque asperiores eveniet, odio, iusto temporibus recusandae explicabo vel dolore nostrum cumque incidunt in quae facilis ipsam numquam, ratione reiciendis delectus totam? Accusantium, soluta?
      </h2>
    </header>

    <!-- Rest of the page! -->

    <app-breadcrumbs/>

    <component 
      v-if="component.type == 'node_list'" 
      v-for="(component,index) in page" 
      :data="component" 
      :is="'node_list'" 
      :key="index"/>

  </main>
</template>

<script>
import axios from "axios";
import node_list from "~/components/Articles/ArticlePreviewList";
import breadcrumbs from "~/components/Navigation/Breadcrumbs";

export default {
  data() {},
  asyncData(context) {
    return axios
      .get(
        "http://test-cms.diwanee.net/graphql/node?query=%7B%0A%20%20nodes(title%3A%20%22My%20Business%20Page%22)%20%7B%0A%20%20%20%20elements%20%7B%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20data%0A%20%20%20%20%20%20element_item%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20Nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20elements%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20element_item%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20Nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20created_at%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20category%3A%20tags(taxonomy%3A%20%22Category%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20featured_image%3A%20elements(type%3A%20%22featured_image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20images%3A%20elements(type%3A%20%22image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20TypeArticle%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20intro%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20element_item%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20NodeLists%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20list_items%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20category%3A%20tags(taxonomy%3A%20%22Category%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20featured_image%3A%20elements(type%3A%20%22featured_image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20images%3A%20elements(type%3A%20%22image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20TypeArticle%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20intro%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
      )
      .then(res => {
        return {
          page: res.data.data.nodes[0].elements
        };
      });
  },
  components: {
    node_list,
    AppBreadcrumbs: breadcrumbs
  }
};
</script>

<style scoped lang='scss'>
@import "~assets/scss/settings";

header {
  position: relative;
  @include breakpoint(desktop) {
    padding-bottom: 8rem;
    margin-bottom: 4rem;
  }
}

.header {
  &-image {
    position: relative;
    background: center no-repeat
      linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
    background-size: cover;
    height: 20rem;
    @include breakpoint(desktop) {
      width: 80%;
      height: 60.8rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-left: 2rem;
    @include breakpoint(desktop) {
      padding-left: 16.65rem;
    }

    &-category {
      margin-left: 0;
    }

    &-title {
      color: $white;
      font-family: "Lato-Black";
      line-height: 2.6rem;
      text-transform: uppercase;
      margin: 1.1rem 0;
      @include fontSizeRem(24, 71);
      @include breakpoint(desktop) {
        line-height: 6.7rem;
        margin: 2.2rem 0;
      }
    }
    &-subtitle {
      @include fontSizeRem(16, 20);
      width: 100%;
      padding: 2rem 1.9rem 1.6rem;
      background: $sun-yellow;
      margin-bottom: 2.3rem;
      line-height: 1.5;
      @include breakpoint(desktop) {
        line-height: 1.4;
        width: 35.6%;
        padding: 8.1rem 5.35rem;
        z-index: 2;
        position: absolute;
        right: 0;
        top: 12rem;
      }
    }
  }
}
</style>