import request from '@/utils/request';

export function login(params) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/login
  return request('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
