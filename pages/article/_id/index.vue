<template>
    <div class="article-page">
        <!-- DETERMINE THE PAGE HEADER -->
        <div class="article-page__header">
            <!-- HEADER GOES HERE! -->
        </div>
        <!-- THE REST OF THE PAGE CONTENT -->
        <div class="inner-wrapper">
            <a href="#" class="c-btn c-btn--yellow article-page__category">
                {{ article.category[0].name }}
            </a>
            <h1 class="article-page__title">
                {{ article.title }}
            </h1>
            <app-social/>
            <!-- Page Content -->
            <div class="article-page__content">
                <p class="article-page__content__date">
                    {{ article.created_at }}
                </p>
                <div v-for="(element, index) in article.elements" :key="index">
                    <h2 v-if="element.data.heading_type === 'h2'">{{ element.data.text }}</h2>
                    <h3 v-if="element.data.heading_type === 'h3'">{{ element.data.text }}</h3>
                    <div v-if="element.type === 'text'" v-html="element.data.text" class="article-page__content__text"></div>
                    <ul v-if="element.type === 'list'" class="article-page__content__list">
                        <li v-for="(item, index) in element.data.listItems" :key="index">{{ item.content }}</li>
                    </ul>
                    <figure v-if="element.type === 'image'" class="article-page__content__img">
                        <img :src="element.data.file.url" :alt="element.data.seoalt">
                    </figure>
                    <!-- if article type is landscape, set this class to true -->
                    <!-- <app-article-slider v-if="element.type === 'slider'" :sliderArray="element.data.items" :class='{ "article-page__content__slider": false }'></app-article-slider> -->
                    <!-- check this -->
                    <div v-if="element.type === 'video'" class="article-page__content__video">
                        <div class="article-page__content__video" :class="{ 'is-active': videoVisible, 'not-active': !videoVisible }">
                            <youtube :video-id="element.data.remote_id" ref="youtube" @playing="playing" :width="playerWidth" :height="playerHeight"></youtube>
                        </div>
                        <div class="article-page__content__video-thumb" :class="{ 'is-active': thumbVisible, 'not-active': !thumbVisible }">
                            <hide-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                                <img :src="$thumbor(336, 194) + 'http://img.youtube.com/vi/' + element.data.remote_id + '/hqdefault.jpg'" alt="">
                            </hide-at>
                            <show-at :breakpoints="{ medium: 768 }" breakpoint="mediumAndAbove">
                                <img :src="$thumbor(752, 432) + 'http://img.youtube.com/vi/' + element.data.remote_id + '/hqdefault.jpg'" alt="">
                            </show-at>
                        </div>
                        <button class="article-page__content__video-play" :class="{ 'is-active': buttonVisible, 'not-active': !buttonVisible}" @click="playVideo">
                            <svg id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                                <g id="play-arrow">
                                    <polygon points="38.25,0 38.25,357 318.75,178.5" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>

                <p class="article-page__content__tags">
                    Tags:
                    <!-- I will convert toLowerCase and removing whitespace to filter later -->
                    <nuxt-link tag="a" :to="{path:'/tag/' + article.category[0].name.replace(/\s/g,'').toLowerCase()}">{{ article.category[0].name }}</nuxt-link>
                </p>

            </div>

        </div>

    </div>
</template>

<script>
import axios from "axios";
import AppSocial from "~/components/Social";

export default {
  components: {
    AppSocial
  },
  asyncData(context) {
    return axios
      .get(
        "http://test-cms.diwanee.net/graphql/node?query=query%7B%0A%20%20nodes%20(id%3A%20" +
          context.params.id +
          ')%20%7B%0A%09id%0A%09title%0A%09created_at%0A%09additional_fields%20%7B%0A%20%20%09%20%20...%20on%20TypeArticle%20%7B%0A%20%20%20%20%09%20%20%20%20intro%0A%20%20%20%20%09%20%20%20%20meta_title%0A%20%20%20%20%09%20%20%20%20meta_description%0A%20%20%09%20%20%7D%0A%09%7D%0A%09category%3A%20tags(taxonomy%3A%20"Category")%20%7B%0A%20%20%09%20%20id%0A%20%20%09%20%20name%0A%09%7D%0A%20%20article_type%3A%20tags(taxonomy%3A%20"Article%20Type")%20%7B%0A%20%20%09%20%20id%0A%20%20%09%20%20name%0A%09%7D%0A%09elements%20%7B%0A%20%20%09%20%20type%0A%20%20%09%20%20data%20%09%20%0A%09%7D%0A%20%20%20%7D%0A%7D%0A%0A'
      )
      .then(res => {
        console.log(res);
        return {
          article: res.data.data.nodes[0]
        };
      });
  },
  data() {
    return {};
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const halfOfPage = document.documentElement.scrollHeight / 3;
      const readIt = scrollY >= halfOfPage;
      this.$store.state.scrolled = readIt;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="scss">
@import "~assets/scss/settings";

.article-page {
  &__header {
    height: 20rem;
    width: 100%;
    background-color: navajowhite;
    margin-bottom: 3.2rem;
  }

  &__category {
    margin-bottom: 0.8rem;
  }

  &__title {
    font-family: "Lato-Black";
    margin-bottom: 2rem;
  }

  & .c-social {
    margin-bottom: 3.5rem;
  }

  &__content {
    h3 {
      font-family: "Lato-Black";
      text-transform: uppercase;
      margin: 2rem 0;
    }
    &__text {
      color: $warm-grey;
      font-size: 1.4rem;
      line-height: 2.1rem;
    }

    &__tags {
      color: $sun-yellow;
      margin: 2rem 0 6rem;
    }
  }
}
</style>