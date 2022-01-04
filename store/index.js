export const state = () => ({
    email: null,
    ls: {}
  });
  
  export const mutations = {
    setEmail: (state, payload) => {
      state.email = payload;
    },
    setLs: (state, payload) => {
        state.ls = payload
    }
  };
  
  export const getters = {
    getEmail(state) {
      return state.email;
    },
  };
  
  export const actions = {
    actionSetEmail(context, payload) {
      context.commit('setEmail', payload);
    },
    actionSetLs(context, payload) {
        context.commit('setLs', payload)
    }
  };