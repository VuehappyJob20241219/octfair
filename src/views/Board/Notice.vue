<template>
    <!-- <NoticeSearch /> -->
    <NoticeSearchCopy />
    <ContextBox>공지사항</ContextBox>
    <!-- <ImageNoticeMain /> -->
    <!-- <NoticeMain /> -->
    <NoticeMainCopy />
</template>

<script setup>
const providedSearchValue = ref({});

provide('providedSearchValue', providedSearchValue);
</script>
