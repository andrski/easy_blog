// import axios from 'axios'

export default{
    actions:{
        
            //first param in action IS CONTEXT
            //second param is {} object
        fetchPosts: async function(ctx, limit = 4){
        const response =  await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=' + limit)
        const postS = response.data
            // context have method commit!!!
        ctx.commit('updatePosts', postS)
        }

    },
    // for change store
    mutations:{
        updatePosts: function(state, postS){
            state.posts1 = postS
        },
        createPost(state, newPost){
            state.posts.unshift(newPost)
        }
    },

    state: {
        posts1: []
    },
    // for transformation data and get from store
    getters:{
        allPosts(state){
            return state.posts1
        },
        postsCount: function(state){
            return state.posts1.length
        },
    },
}