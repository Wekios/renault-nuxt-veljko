<template>

  <section class="slider">
    <div :class="{ 
      homepage__slider: homepage, 
      diaporama__slider: diporama,
      slider__thumbs: thumbs
      }">
      <img :src="currentImage" alt="current image">
      <div class="homepage__slider__text">
        <a href="#" class="c-btn c-btn--yellow category">
          {{ category }}
        </a>
        <h2 class="title">
          {{ title }}
        </h2>
        <p class="caption">
          {{imageCaption}}
        </p>
        <span class="counter">
          <span>0{{activeImage + 1}}</span>/0{{imagesArr.length}}
        </span>
      </div>
      <div class="actions">
        <a>
          <span @click="prevImage" class="prev">
          </span>
        </a>
        <a>
          <span @click="nextImage" class="next">
          </span>
        </a>
      </div>
    </div>
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

      // Slider classes
      homepage: true,
      diporama: false,
      thumbs: false
    };
  },
  computed: {
    imagesArr() {
      // Filter the INVALID images or if there is none featured image
      return this.images.filter(image => image.element_item.featured_image[0]);
    },
    currentImage() {
      //Show Current Image
      return this.imagesArr[this.activeImage].element_item.featured_image[0]
        .data.file.url;
    },
    category() {
      return this.imagesArr[this.activeImage].element_item.category[0].name;
    },
    title() {
      return this.imagesArr[this.activeImage].element_item.title;
    },
    imageCaption() {
      //Show Current Image
      return this.imagesArr[this.activeImage].element_item.featured_image[0]
        .data.caption;
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
@import "~assets/scss/settings";
h1 {
  padding-top: 15rem;
}

.homepage__slider {
  position: relative;
  img {
    height: 20rem;
    min-width: 100%;
    -webkit-filter: grayscale(30%); /* Safari 6.0 - 9.0 */
    filter: grayscale(30%);
    @include breakpoint(desktop) {
      height: 70rem;
    }
  }
  .actions {
    display: flex;
    position: absolute;
    z-index: 2;
    margin: 0 auto;
    width: 96%;
    left: 2%;
    top: 50%;
    justify-content: space-between;
    a {
      display: none;
      @include breakpoint(desktop) {
        display: inline-block;
        vertical-align: middle;
        border-radius: 50%;
        cursor: pointer;
        .prev {
          display: inline-block;
          width: 4em;
          height: 4em;
          background-color: $sun-yellow;
          border: 0.5rem solid $sun-yellow;
          border-radius: 50%;
          margin-right: 1.5em;
          &:after {
            content: "";
            display: inline-block;
            margin-top: 0.9em;
            margin-left: 1em;
            width: 1.4em;
            height: 1.4em;
            border-top: 0.5em solid #333;
            border-right: 0.5em solid #333;
            -moz-transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg);
            transform: rotate(-135deg);
          }
        }
        .next {
          display: inline-block;
          width: 4em;
          height: 4em;
          right: 2%;
          background-color: $sun-yellow;
          border: 0.5rem solid $sun-yellow;
          border-radius: 50%;
          margin-right: 1.5em;
          &:after {
            content: "";
            display: inline-block;
            margin-top: 0.9em;
            margin-left: 0.5em;
            width: 1.4em;
            height: 1.4em;
            border-top: 0.5em solid #333;
            border-right: 0.5em solid #333;
            -moz-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  &__text {
    position: absolute;
    top: 3rem;
    left: 2rem;
    bottom: 0;
    color: $white;
    @include breakpoint(desktop) {
      top: 19.2rem;
      left: 20.8rem;
    }

    .category {
      display: inline-block;
      margin-bottom: 1.1rem;
      color: $black;
      @include breakpoint(desktop) {
        margin-bottom: 2.8rem;
      }
    }
    .title {
      @include fontSizeRem(24, 70);
      line-height: 1.08;
      font-family: "Lato-Black";
    }
    .caption {
      display: none;
      @include breakpoint(desktop) {
        font-size: 3.5rem;
        line-height: 3.7rem;
        font-family: "Lato-Bold";
        display: block;
      }
    }
    .counter {
      @include fontSizeRem(12, 40);
      font-size: 5rem;
      position: absolute;
      bottom: 3.7rem;
      span {
        color: $sun-yellow;
      }
    }
  }
}
</style>