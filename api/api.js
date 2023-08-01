export const songUrl = (params) => uni.$kmir.http.request({
    url: `song/url/v1?id=${params.id}&level=exhigh`
});