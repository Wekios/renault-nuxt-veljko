<template>
  <div>
    <h1> {{ data.element_item.title }} </h1>
  </div>
</template>

<script>
export default {
  name: "node",
  props: {
    data: Object,
    required: true
  }
};
</script>

<style scoped lang="scss">
* {
  background-color: beige;
  color: orange;
  height: 33rem;
  text-align: center;
  margin-bottom: 5rem;
}

h1 {
  padding-top: 15rem;
}
</style>