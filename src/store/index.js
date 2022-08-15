import { createStore } from 'vuex';
import user from './modules/user';

const store = createStore({
  modules: { user },
  getters: {
    userName(state) {
      return state.user.name;
    },
  },
});

export const setupStore = (app) => app.use(store);

export default store;
