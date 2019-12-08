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

/**
 * 获取周报列表数据
 *
 * @param {页码} page
 * @param {每页条数} pageSize
 * @param {用户id} userId
 */
export function fetchMyReports({ page, pageSize }) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/reports/${page}/${pageSize}/userId

  return request(`/api/users/reports/${page}/${pageSize}/${localStorage.userId}`);
}

/**
 * 根据周报id获取要编辑周报
 * @param {周报id} id
 * @param {写周报的用户id} userId
 */
export function fetchInfo(id) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/report_detail/userId/id
  return request(`/api/users/report_detail/${localStorage.userId}/${id}`);
}

/**
 * 修改周报
 * @param {周报id} params.id
 * @param {周报标题} params.title
 * @param {周报内容} params.content
 * @param {接收人} params.receiverName
 */
export function update(params) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/edit_report/userId/params.id
  return request(`/api/users/edit_report/${localStorage.userId}/${params.id}`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

/**
 * 删除周报
 * @param {周报id} id
 * @param {写周报的id} userId
 */
export function remove(id) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/delete_report/userId/id
  return request(`/api/users/delete_report/${localStorage.userId}/${id}`, {
    method: 'DELETE',
  });
}
