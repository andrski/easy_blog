<template>
    <div>
      <div class="wrapper">             
        <div class="post" @click="openUser(post)" v-for="(post, index) in getPosts" :key="index">
            <img src="../assets/ninja-cartoon.jpg" alt="">
            <span>{{post.username}}</span>
            <span>{{post.title}}</span> 
        </div>
      </div>

    </div>
</template>

<script>
import{mapMutations} from 'vuex'


export default {
  name: 'Posts',
   props: {
   },
  data(){
    return{
      postLimit: 40
    }
  },
  // computed has a reaction to any getters change
  computed:{
        getPosts(){
            return this.$store.getters.getPosts
        }, 
    },
  mounted: function(){
        //in method dispatch send action
     this.$store.dispatch('fetchPosts', this.postLimit)
    },
    methods:{
      ...mapMutations(['createComentForUser']),
      openUser: function(user){
            this.createComentForUser(user)
            this.$router.push(`/user`) //recieve here user.id from obj user(in _id.vue)
        }
    },
}
</script>

<style scoped>
.wrapper{
  position: relative;
  margin: 0 auto;
  width: 25rem;
}
  .post{
    display: flex;
    flex-direction: column;
    text-align: center;
    display: block;
    position: relative;
    margin-top: 1rem;
    border: 0.2rem solid grey;
    border-radius: 8px;
  }
  .post img{
    position: relative;
    width: 2rem;
    height: 2rem;
    float: left;
    margin-left: 1rem;
    border-radius: 50%;
  }
  .post span:nth-of-type(1){
    display: block;
    text-align: left;
  }
  .post span:nth-of-type(2){
    display: block;
    width: 80%;
    margin: 0 auto;
    border-top: 0.1rem solid grey;
  }
</style>