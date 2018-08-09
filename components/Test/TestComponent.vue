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
  background-color: pink;
  color: orange;
}
</style>