import request from '../utils/request'

export function getCommendVideo(data){
  request({
    url:'https://www.gobigtonight.top/video',
    method:'post',
    data:data
  })
}