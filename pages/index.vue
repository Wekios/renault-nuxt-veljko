<template>

  <main>

    <component v-for="(component,index) in homepage" :is="component.type" :data="component" :key="index" />

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
  computed: {
    homepage() {
      return this.$store.getters.loadedNodes;
    }
  },
  mounted() {
    // console.log(this);
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.slider {
  margin-bottom: 3.6rem;
  @include breakpoint(desktop) {
    margin-bottom: 21.6rem;
  }
}
</style>
