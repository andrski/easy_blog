<template>
 <v-app>
   <div class="wrap">
     <span class="user_name">{{getUserPageData.username}}</span>
     <span>{{getUserPageData.body}}</span>
  
     <span>{{getEmail}}</span>
      <span>Coments</span>
     <div v-for="coment in getComentsForUser" v-bind:key="coment.id">
       <span>{{coment}}</span>
     </div>
     <button v-on:click="backToPosts()">posts</button>

   </div>
 </v-app>
</template>

<script>

export default {
  name: 'User',
    props: {
   },
   data(){
     return{
      comentLimit: 40
     }
   },
  computed:{
        getComentsForUser(){
            return this.$store.getters.getComentsForUser
        }, 
        getUserPageData: function(){
          return this.$store.getters.getUserPageData
        },
        getEmail(){
          return this.$store.getters.getEmailForUser
        }
    },
  mounted: function(){
    this.$store.dispatch('fetchComents', this.comentLimit)
   },
   methods:{
     backToPosts: function(){
       this.$router.push(`/`)
     }
   },
}
</script>

<style scoped>
  .wrap{
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
  .wrap span{
    display: block;
  }
  .user_name{
    line-height: 2.5rem;
    font-size: 2rem;
    font-weight: 800;
  }
  .wrap span:nth-child(2){
    width: 80%;
    margin: 0 auto;
    border: 0.1rem dotted grey;
  }
  .wrap span:nth-child(3){
    width: 80%;
    margin: 0 auto;
    text-align: left;
    font-weight: 500;
  }
  .wrap span:nth-child(4){
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .wrap div{
    margin: 0.5rem;
    padding: 0.5rem;
    border: 0.2rem dashed grey;
  }
  button{
    width: 15%;
    border: 0.15rem outset darkolivegreen;
    margin-top:1rem;
    margin-left: 5rem;
    padding: 0.3rem 1rem;

  }
</style>
