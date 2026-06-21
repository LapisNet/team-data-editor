var _it = null

// 必须符合 (hunshcn/)gh-proxy API，并且设置有CORS
if((_it = localStorage.getItem('GITHUB_AGENT'))) {
    // 如果在这里面export编译不了
} else {
    _it = 'https://ghproxy.net/'
    localStorage.setItem('GITHUB_AGENT', _it)
}
export const GITHUB_AGENT = _it

// Github Classic Token
export const GITHUB_TOKEN = localStorage.getItem('GITHUB_TOKEN') || ''