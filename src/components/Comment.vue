<template>
    <p><b>{{comment.user}}:</b> {{comment.text}}</p>
</template>

<script>
    export default {
        name: 'Comment',
        props: [
            'comment',
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

    p {
      padding-top: 0.4em;
    }
</style>
