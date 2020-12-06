<template>
    <form  @submit.prevent="submit()">
        <input type="text" name="" id="" v-model="title">
        <input type="text" name="" id="" v-model="postBody">
        <button type="submit">create post</button>
        <hr>
    </form>
</template>

<script>
import{mapMutations} from 'vuex'

export default {
    name: 'AddPost',
    data(){
        return{
            title:'',
            postBody:'',
        }
    },
    methods:{
        ...mapMutations(['createPost']), //getting method from mutations 

        submit: function(){
            this.createPost({
                title:this.title,
                body: this.postBody,
                id: Date.now(),
            })
            this.title = this.postBody = ''
        },
    },
}
</script>

<style scoped>

</style>