<template>
  <view class="content">
    <view class="text-area">
      <text class="title" @click="test()">{{ title }}</text>
      <u-button type="success" text="测试"></u-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { test } from '@/api/index';
const title = ref('我的uniapp-vue3模板');
</script>

<style lang="scss" scoped>
.text-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
