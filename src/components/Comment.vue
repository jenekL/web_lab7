<template>
    <div id="comment">
        <p>{{comment.user}}</p>
        <p>{{comment.text}}</p>
        <p>{{comment.date}}</p>
    </div>
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
#comment{
    font-size: 10px;
}
</style>
