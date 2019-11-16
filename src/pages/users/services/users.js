import request from '@/utils/request';

export function fetch({ page, pageSize }) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/get_users/1/3
  // console.log(page, pageSize);
  return request(`/api/users/get_users/${page}/${pageSize}`);
}
