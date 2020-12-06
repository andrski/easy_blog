import axios from 'axios'

export default {
    state:{
        posts:[],
    },
    actions:{
         // first param in action IS CONTEXT
        // second param is {} object
        fetchPosts: async function(context, limit = 50){
            const response = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const postS = response.data

            const res = await axios.get('http://jsonplaceholder.typicode.com/users')
                const userS = res.data
                
               // create arr usersNames
                    const arr = []
                    const arrRandomNames = []
                  
                for(let i = 0; i < userS.length; i++){
                     arr.push(userS[i].name)
                }
                
                for(let i = 0; i < 100; i++){
                    let randomIndex = Math.floor(Math.random() * 10)
                    arrRandomNames.push(arr[randomIndex])
                }
                // add user name for post
                for(let i = 0; i < postS.length; i++){
                   postS[i].username = arrRandomNames[i]
                }
             
            //context have method commit!!!
            context.commit('updatePosts', postS)
        },
    },
    mutations:{
        updatePosts: function(state, postS){
            state.posts = postS
        },
    },
    getters:{
        getPosts: function(state){
            return state.posts
        },
    }
}