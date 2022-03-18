<template>
  <div>
    <carousel class="carousel" :items="1" :dots="false">
      <img src="https://placeimg.com/200/200/any?1" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  options: {
    items: 1,
  },

  props: {},
};
</script>

<style scoped lang="scss"></style>
