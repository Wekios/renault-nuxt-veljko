<template>

  <main>

    <div class="inner-wrapper">
      <component v-for="(component,index) in homepage" :is="component.type" :data="component" :key="index" />
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
  width: 37.5rem;
  margin-left: -1.875rem;
  @include breakpoint(desktop) {
    margin-bottom: 8rem;
    width: 144rem;
    margin-left: -17rem;
  }
}
</style>
