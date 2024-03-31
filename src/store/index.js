// Utilities
import { createPinia } from 'pinia'

export default createPinia({
  state:{
    user:null
  },
  mutations:{
    Set_User(state,user){
      state.user= user;
    },
    Clear_User(state){
      state.user= null;
    },
  },

})
