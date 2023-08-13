export function getUserInfo() {
    return uni.getStorageSync('userinfo')
}

export function saveUserInfo(data: string) {
    return uni.setStorageSync('userinfo', data)
}

export function removeUserInfo() {
    return uni.removeStorageSync('userinfo')
}