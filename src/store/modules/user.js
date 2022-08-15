const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export default {
  namespaced: true,
  state: () => ({ name: 'long', password: '123456' }),
  getters: {
    userName(state) {
      return state.name;
    },
  },
  mutations: {
    [CHANGE_USER_NAME](state, data) {
      state.name = data;
    },
  },
  actions: {
    changeUserName(context, data) {
      context.commit(CHANGE_USER_NAME, data);
    },
  },
};
