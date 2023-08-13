<template>
  <view class="content">
    <view>
      <open-data type="userNickName"></open-data>
      <open-data type="userAvatarUrl"></open-data>
    </view>
    <GetUserinfo></GetUserinfo>
  </view>
</template>

<script setup lang="ts">
import GetUserinfo from '@/components/GetUserinfo/GetUserinfo.vue'
const title = ref('我的uniapp-vue3模板');
</script>

<style></style>
