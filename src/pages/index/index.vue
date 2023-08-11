<template>
  <view class="content">
    <view class="text-area">
      <text class="title" @click="test()">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { test } from '@/api/index'
const title = ref('我的uniapp-vue3模板');
</script>

<style></style>
