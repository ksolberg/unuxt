<template>
  <div>
    <h1>blog post</h1>

    <nuxt-link to="/blog">back to blog</nuxt-link>
    
    {{ content.foo }}
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="scss" scoped>

div {
  color: blue;
}
</style>
