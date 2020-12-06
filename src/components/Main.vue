<template>
 <div>
        
     <h2>{{msg}}</h2>
     <div>
         <AddPost />
         <span class="posts_count">{{postsCount}}</span>
         <div v-for="(post) in allPosts" :key="post.id">
             <h4>{{post.title}}</h4>
             <span>{{post.body}}</span>
         </div>
     </div>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AddPost from './AddPost'

export default {
  name: 'Main',
    props: {
   },
   components:{
       AddPost,
   },
    data(){
        return{
            msg: 'main component for VUEX test',
            // limit: 7,
        }
    },
    // computed has a reaction to any getters change
    // computed:{
    //     allPosts(){
    //         return this.$store.getters.allPosts
    //     }
    // },
    computed: mapGetters(['allPosts', 'postsCount']),
    mounted: async function(){
        // in method dispatch send action
     // this.$store.dispatch('fetchPosts', this.limit)
    }
}
</script>

<style scoped>
    h2{
        text-align: center;
    }
    .posts_count{
        display: block;
        font-weight: 900;
        font-size: 3rem;
        text-align: center;
    }
</style>
