import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://10.23.2.134:5000/',
    method: 'get',
    params
  })
}
