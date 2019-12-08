import * as reportsServices from '../services/reports';

export default {
  namespace: 'reports',
  state: {
    allUsersList: [],
    list: [],
    total: 0,
    page: 1,
    pageSize: 10,
    info: {
      content: '<p><br></p>',
    },
  },
  reducers: {
    setData(state, { payload }) {
      return { ...state, allUsersList: payload };
    },
    setReports(state, { payload: { list, total, page } }) {
      return { ...state, list, total, page };
    },
    setInfo(state, { payload }) {
      return { ...state, info: payload };
    },
  },
  effects: {
    *getAllUsers({ _ }, { call, put }) {
      const res = yield call(reportsServices.fetchAllUsers);
      // console.log(res);
      if (res && res.state === 'success') {
        yield put({ type: 'setData', payload: res.data });
      } else {
        yield put({
          type: 'setData',
          payload: { allUsersList: [] },
        });
      }
    },
    *add({ payload }, { call }) {
      return yield call(reportsServices.add, payload);
    },
    *fetch({ payload: { page } }, { call, put, select }) {
      const pageSize = yield select(state => state.reports.pageSize);
      const res = yield call(reportsServices.fetchMyReports, { page, pageSize });

      if (res && res.state === 'success') {
        yield put({ type: 'setReports', payload: { ...res.data, page } });
      } else {
        yield put({
          type: 'setReports',
          payload: { list: { list: [], total: 0, page: 1 } },
        });
      }
    },
    *fetchInfo({ payload }, { call, put }) {
      const res = yield call(reportsServices.fetchInfo, payload);
      console.log(res);
      if (res && res.state === 'success') {
        yield put({
          type: 'setInfo',
          payload: res.data,
        });
      } else {
        yield put({
          type: 'setInfo',
          payload: {},
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // 首先要判断当前的路径
      return history.listen(({ pathname }) => {
        if (pathname === '/reports') {
          dispatch({ type: 'fetch', payload: { page: 1 } });
        }
      });
    },
  },
};
