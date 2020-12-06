
import { createStore } from 'vuex'
// import post from './modules/post'
import posts from './modules/posts'
import users from './modules/users'

export default createStore({
   
    modules:{
        // post,
        posts,
        users,
    }
  })