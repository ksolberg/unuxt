<template>
    <div>
        <div :is="component" :model="model"></div>
    </div>
</template>

<script>

import home from '../components/home.vue'
import blog from '../components/blog.vue'
import blogPost from '../components/blogPost.vue'

export default {

    components: {
        home,
        blog,
        blogPost
    },

    computed: {
        component () {
            return this.$store.getters.component(this.$router.currentRoute.path)
        },
        model () {
            return this.$store.getters.model(this.$router.currentRoute.path)
        }
    }
}
</script>

