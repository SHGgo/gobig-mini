import request from '../utils/request'

/**
 * 
 * @param {JSON} data 
 */

export function getVideo(data){
  return request({
    url:'https://www.gobigtonight.top/index/getRandomVideo',
    method:'post',
    data:data
  })
}