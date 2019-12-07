import request from '@/utils/request';

export function fetchAllUsers() {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/all_users

  return request(`/api/users/all_users`);
}

/**
 * 写周报
 * @param {写周报人id} params.createUserId
 * @param {周报标题} params.title
 * @param {周报内容} params.content
 * @param {接收人} params.username
 */
export function add(params) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/add_report/userId

  return request(`/api/users/add_report/${localStorage.userId}`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
