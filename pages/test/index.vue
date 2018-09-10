<template>
  <main>
    <component v-for="(component,index) in pageData" :is="component.type" :data="component" :key="index" />
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
      count: 1
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
      this.count++;
      this.pageData = this.$store.getters.loadedNodes.slice(0, this.count);
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        // this.pageData = this.$store.getters.loadedNodes.slice(0, this.count);
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

<style scoped>
</style>