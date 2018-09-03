<template>
  <div>
    <h1>blog post</h1>
    <nuxt-link to="/blog">back to blog</nuxt-link>
    
    {{ model.foo }}
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>

