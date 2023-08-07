// 获取歌曲地址
export const songUrl = (params) => uni.$kmir.http.request({
    url: `song/url/v1?id=${params.id}&level=exhigh`
});
// banner图
export const banner = () => uni.$kmir.http.request({
    url: `banner?type=2`
});
// cloudsearch搜索
export const cloudsearch = (data) => uni.$kmir.http.request({
    url: `cloudsearch`,
    data
});
// banner图
export const newMusic = () => uni.$kmir.http.request({
    url: `personalized/newsong`
});
// songPlaylist图
export const songPlaylist = (data) => uni.$kmir.http.request({
    url: `top/playlist`,
    data
});
// 游客登陆
export const anonimous = (data) => uni.$kmir.http.request({
    url: `register/anonimous`,
    data
});
/**
 * 
 * @param {*} 可选参数 :
                countrycode: 国家码，用于国外手机号登录，例如美国传入：1
                md5_password: md5 加密后的密码,传入后 password 参数将失效
                captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效 
 * @description 手机登录
 */
export const cellphone = (data) => uni.$kmir.http.request({
    url: `login/cellphone`,
    data
});
/**
 * 
 * @param {*} 必选参数 : phone: 手机号码
              可选参数 : ctcode: 国家区号,默认 86 即中国 
 * @returns 
 * @description   
 */
export const captcha = (data) => uni.$kmir.http.request({
    url: `captcha/sent`,
    data
});
/**
 * 
 * @param {*} 必选参数 : phone: 手机号码
              captcha: 验证码 
 * @description 验证验证码
 */
export const verify = (data) => uni.$kmir.http.request({
    url: `captcha/verify`,
    data
});
// 退出登录
export const logout = () => uni.$kmir.http.request({
    url: `logout`,
});
// 歌单详情
export const playListDetail = (data) => uni.$kmir.http.request({
    url: `playlist/detail`,
    data
});

