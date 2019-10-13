<template>
   <p>{{comment.user}}</p>
    <p>{{comment.text}}</p>
     <p>{{comment.date}}</p>
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
  
</style>
