export function getUserToken() {
    return uni.getStorageSync('token')
}

export function saveUserToken(data: string) {
    return uni.setStorageSync('token', data)
}

export function removeUserToken() {
    return uni.removeStorageSync('token')
}