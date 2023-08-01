import Request from './request'

const http = new Request()

http.interceptor.request = (options) => {
    console.log('请求前拦截: ', options)
    // 可以对options进行修改，例如添加全局的header等
    // 必须返回options
    return options
}

http.interceptor.response = (response) => {
    console.log('请求后拦截: ', response)
    // 可以对response进行修改，例如处理错误信息等
    // 必须返回response
    return response
}

const $kmir = {
    http,
}

// 在组件中使用
// this.$http.request({
//     url: '/api/v1/users',
//     method: 'GET',
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
uni.$kmir = $kmir;