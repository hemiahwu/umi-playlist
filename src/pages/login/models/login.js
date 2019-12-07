import * as loginServices from '../services/login';

export default {
  namespace: 'login',
  state: {
    info: {},
  },
  effects: {
    *login({ payload }, { call }) {
      return yield call(loginServices.login, payload);
    },
  },
};
