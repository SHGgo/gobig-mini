import request from '../utils/request'

/**
 * 
 * @param {JSON} data videoNum
 */
export function getCommendVideoList(data){
  return request({
    url:'https://www.gobigtonight.top/index/getRandomVideo',
    method:'post',
    data:data
  })
}

/**
 * 
 * @param {JSON} data videoNum
 */
export function getLeaderVideoList(data){
  return request({
    url:'https://www.gobigtonight.top/video/getScoreVideoList',
    method:'post',
    data:data
  })
}


/**
 * 
 * @param {JSON} data vid
 */
export function getOneVideo(data){
  return request({
    url:'https://www.gobigtonight.top/video/getOneVideo',
    method:'post',
    data:data
  })
}