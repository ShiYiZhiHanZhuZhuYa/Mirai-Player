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