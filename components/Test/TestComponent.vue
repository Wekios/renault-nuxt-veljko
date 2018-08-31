<template>
  <section class="slider">
    <div class="slider__img" :style="slider">
      <img :src="currentImage" alt="current image">
      <div class="actions">
        <span @click="prevImage" class="prev">
          <i class="fas fa-chevron-left"> &lt; </i>
        </span>
        <span @click="nextImage" class="next">
          <i class="fas fa-chevron-right"> &gt; </i>
        </span>
      </div>
    </div>
    <!-- {{ images }} -->
  </section>
</template>

<script>
export default {
  name: "node",
  props: {
    data: Object,
    required: true
  },
  data() {
    return {
      // Images gets Props
      images: this.data.element_item.elements,

      // Index of the active image on the images array
      activeImage: 0,

      // Slider Classes
      slider: {
        homepage: true,
        myBusiness: false,
        tag: false,
      }
    };
  },
  computed: {
    // currentImage() {
    //   // First image in the array
    //   let currentImage = this.images[this.activeImage].element_item
    //     .featured_image[0].data.file.url;
    //   if (!currentImage) {
    //     return "https://group.renault.com/wp-content/uploads/2018/07/digital-report-renault.jpg";
    //   } else {
    //     return currentImage;
    //   }
    // }
    imagesArr() {
      // Filter the INVALID images or if there is none featured image
      return this.images.filter(image => image.element_item.featured_image[0]);
    },
    currentImage() {
      //Show Current Image
      return this.imagesArr[this.activeImage].element_item.featured_image[0]
        .data.file.url;
    }
  },
  methods: {
    // Go forward on the images array
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= this.imagesArr.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = this.imagesArr.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    }
  },
  mounted() {
    console.log(this.imagesArr);
  }
};
</script>

<style scoped lang="scss">
h1 {
  padding-top: 15rem;
}
</style>