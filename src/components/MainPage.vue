<template>
    <div class="main">
        <post-place  v-for="article in articlesList" :key="article._id" :article="article"/>
    </div>
</template>

<script>
    import postPlace from './Post'
    import articleService from './../services/articleService'

    export default {
        name: 'MainPage',
        components: {
            postPlace,
        },
        props: {},
        data() {
            return {
                articlesList: [],
            }
        },
        methods: {
            async getArticles() {
                this.articlesList = await articleService.getArticles()
            }
        },
        async beforeMount(){
            this.articlesList = await articleService.getArticles()
        },
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
