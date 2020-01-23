<template>
    <div class="main">
        <post-place v-for="article in articlesList" :key="article._id" :article="article"/>
        <div class="addPost">
            <v-card class="mx-auto" color="#b98ab7" dark max-width="1000">
                <v-card-title>
                    <span class="title font-weight-light">Добавить статью</span>
                </v-card-title>
                <v-card-text class="headline">
                    <label>
                        <textarea v-model="name" placeholder="Введите название" style="width: 950px"> </textarea>
                        <br>
                        <br>
                            <textarea v-model="text" placeholder="Введите текст" style="width: 950px"> </textarea>
                        <br>
                        <br>
                        <button v-on:click="addArticle">Добавить</button>
                    </label>
                </v-card-text>
            </v-card>
        </div>
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
                name: "",
                text: ""
            }
        },
        methods: {
            async getArticles() {
                this.articlesList = await articleService.getArticles()
            },
            async addArticle() {
                this.articlesList.push(await articleService.addArticle(this.name, "AuthorYa", this.text))
            }
        },
        async beforeMount() {
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

    .addPost{
        padding-top: 1em;
    }
</style>
