<template>
    <div v-if="content.contentTypeAlias" 
         :is="content.contentTypeAlias" 
         :content="content"></div>
</template>

<script>

import axios from 'axios'

import home from '../components/home.vue'
import blog from '../components/blog.vue'
import blogPost from '../components/blogPost.vue'

export default {

    components: {
        home,
        blog,
        blogPost
    },

    asyncData ({ app, route, payload }) {

        if (payload) {
            return { 
                content: payload 
            }
        }

        return axios.get('http://localhost:10702' + route.path).then(response => {           
            return {
                content: response.data
            }
        })
    }
}
</script>

