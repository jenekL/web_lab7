<template>
    <div>
        <div>
    <v-card
            class="mx-auto"
            color="#26c6da"
            dark
            max-width="400"
    >
        <v-card-title>
            <span class="title font-weight-light">{{article.name}}</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
            {{article.text}}
        </v-card-text>

        <v-card-actions>
            <v-list-item class="grow">
                <v-list-item-content>
                    <v-list-item-title>Автор: {{article.author}}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar color="grey darken-3">
                    <v-img
                            class="elevation-6"
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-list-item-avatar>



            </v-list-item>
        </v-card-actions>
    </v-card>
    </div>
    <div>
        <v-card
                class="mx-auto"
                color="#D5C4C0"
                dark
                max-width="400"
        >
            <v-card-title>
                <span class="title font-weight-light">Комментарии</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
                <comment  v-for="comment in article.comments" :key="comment._id" :comment="comment"/>
            </v-card-text>
        </v-card>
    </div>
    </div>
</template>

<script>
    import Comment from './Comment';

    export default {
        name: 'Post',
        components:{
            Comment,
        },
        props: [
            'article',
        ]
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
