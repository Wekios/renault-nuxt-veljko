<template>

  <main>

    <div class="inner-wrapper">
      <component v-for="(component,index) in pageData" :is="component.type" :data="component" :key="index" />
    </div>

  </main>
</template>

<script>
import node from "~/components/Test/TestComponent";
import node_list from "~/components/Articles/ArticlePreviewList";

export default {
  name: "home",
  components: {
    node,
    node_list
  },
  data() {
    return {
      bottom: false,
      pageData: [],
      count: 0
    };
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addNodes() {
      this.count += 2;
      this.pageData = this.$store.getters.loadedNodes.slice(0, this.count);
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addNodes();
        console.log("works" + this.count);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addNodes();
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.slider {
  margin-bottom: 3.6rem;
  width: 37.5rem;
  margin-left: -1.875rem;
  @include breakpoint(desktop) {
    margin-bottom: 8rem;
    width: 144rem;
    margin-left: -17rem;
  }
}
</style>
