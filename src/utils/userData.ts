export function getUserInfo() {
    return uni.getStorageSync('token')
}

export function saveUserInfo(data: string) {
    return uni.setStorageSync('token', data)
}

export function removeUserInfo() {
    return uni.removeStorageSync('token')
}