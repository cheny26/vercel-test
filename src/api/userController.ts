/* eslint-disable */
import request from '@/utils/request'

/** getCurrentUser GET /api/user/current */
export async function getCurrentUserUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUser_>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  })
}

/** deleteUser POST /api/user/deleteUser */
export async function deleteUserUsingPost(body: number, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/deleteUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getUsers GET /api/user/getUsers */
export async function getUsersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListUser_>('/api/user/getUsers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** userLogin POST /api/user/login */
export async function userLoginUsingPost(
  body: API.UserLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUser_>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** userLogout POST /api/user/logout */
export async function userLogoutUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  })
}

/** userRegister POST /api/user/register */
export async function userRegisterUsingPost(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
