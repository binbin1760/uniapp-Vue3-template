<template>
    <view>
        <input type="nickname" placeholder="请输入微信昵称">
        <button open-type="chooseAvatar" @chooseavatar="getAvatar">获取用户信息</button>
    </view>
</template>

<script setup lang="ts">
function getAvatar(e: any) {
    console.log(e.detail);
}
</script>
