<template>
  <div>
    <Navigation/>
    <nuxt class="main-wrapper" />
    <Footer/>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation";
import Footer from "~/components/Navigation/Footer";
export default {
  components: {
    Navigation,
    Footer
  }
};
</script>
