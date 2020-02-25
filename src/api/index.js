/**
 * 接口请求模块
 */
import ajax from './ajax'
//登录
export const reqLogin = (user) => ajax('/api/user/login', user, 'POST')
// //验证是否登录
// export const reqIsLogin = () => ajax(BASE_URL + '/isLogin')
// //退出登录
// export const reqLoginOut = () => ajax(BASE_URL + '/loginout')
//电影信息
export const movieInfo = () => ajax('/api/movie/findAllMovie', 'GET')
