<template>
    <!-- <NoticeSearch /> -->
    <NoticeSearchCopy />
    <ContextBox>공지사항</ContextBox>
    <!-- <ImageNoticeMain /> -->
    <!-- <NoticeMain /> -->
    <NoticeMainCopy />
</template>

<script setup>
const providedValue = ref();

provide('providedValue', providedValue);
</script>
