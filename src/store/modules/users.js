import axios from 'axios'

export default {
    state:{
        coments:[],
        userForPage:[],
        comentsForUser:[],
        emailForUser:'',
    },
    actions:{
       //  first param in action IS CONTEXT
       // second param is {} object
        fetchComents: async function(ctx, limit = 100){
            const response = await axios.get('http://jsonplaceholder.typicode.com/comments?_limit=' + limit)
            const comentS = response.data
      
            ctx.commit('updateComents', comentS)
        }
    },
    mutations:{
        updateComents: function(state, comentS){
            state.coments = comentS
        },
        createComentForUser: function(state, dataFromPosts){
            // dataFromPosts recieve from Post.vue after click
            state.userForPage = dataFromPosts
            
            let arrComentsbyPostId = []
            for(let i = 0; i< state.coments.length; i++){ 
    // check userId  in recieved dataFromPosts and postId in coments from axios(state)
                if(state.coments[i].postId === dataFromPosts.userId){ 

                    arrComentsbyPostId.push(state.coments[i].body) //create arr with coments for postId
                    state.emailForUser = state.coments[i].email
                }

            }
           state.comentsForUser = arrComentsbyPostId //create coments for user by postId
        }
    },
    getters:{
        getUserPageData(state){
            return state.userForPage
        },
        getComentsForUser(state){
            return state.comentsForUser
        },
        getEmailForUser(state){
            return state.emailForUser
        }
    }
}